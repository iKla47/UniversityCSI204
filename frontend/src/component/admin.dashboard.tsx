import React, { useEffect, useState } from 'react';
import {
  TrendingUp,
  ShoppingBag,
  DollarSign,
  Package,
  Loader2,
  AlertCircle,
  Database,
  CreditCard,
} from 'lucide-react';
import orderApi from '../util/api.order';
import productApi from '../util/api.product';
import { useAuth } from '#context/common.ts';

// ----------------------------------------------------------------------
// 💡 Types & Interfaces สำหรับ Dashboard
// ----------------------------------------------------------------------
interface TopGame {
  id: number;
  name: string;
  sales: number;
  price: number;
  stock: number;
  platform: any;
}

interface DashboardStats {
  todaySales: number;
  pendingOrdersCount: number;
  monthlyGamesSold: number;
}

// 💡 1. Helper แปลง Date ให้เป็น String YYYY-MM-DD แบบเวลาท้องถิ่น (Local Timezone)
const getLocalDateString = (dateInput: Date | string | number | null | undefined): string => {
  if (!dateInput) return '';
  const d = new Date(dateInput);
  if (isNaN(d.getTime())) return '';

  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

// 💡 2. Helper แปลง Enum Platform จาก DB (1, 2, 3) ให้เป็นป้ายข้อความ
const formatPlatform = (platformInput: any): { name: string; badgeStyle: string } => {
  const p = String(platformInput).trim().toUpperCase();

  // ปรับเปลี่ยนคู่เลข ID กับชื่อ Platform ให้ตรงตามระบบของคุณได้ตรงนี้
  if (p === '1' || p === 'PS5') {
    return {
      name: 'PS5',
      badgeStyle: 'bg-blue-600/20 text-blue-400 border-blue-500/30',
    };
  }
  if (p === '2' || p === 'PS4') {
    return {
      name: 'PS4',
      badgeStyle: 'bg-sky-600/20 text-sky-400 border-sky-500/30',
    };
  }
  if (p === '3' || p === 'SWITCH') {
    return {
      name: 'Switch',
      badgeStyle: 'bg-red-600/20 text-red-400 border-red-500/30',
    };
  }
  if (p === '4' || p === 'XBOX') {
    return {
      name: 'Xbox',
      badgeStyle: 'bg-emerald-600/20 text-emerald-400 border-emerald-500/30',
    };
  }

  return {
    name: p || 'PC',
    badgeStyle: 'bg-slate-700/40 text-slate-300 border-slate-600/30',
  };
};

export const AdminDashboard: React.FC = () => {
  const auth = useAuth();
  const [stats, setStats] = useState<DashboardStats>({
    todaySales: 0,
    pendingOrdersCount: 0,
    monthlyGamesSold: 0,
  });
  const [topGames, setTopGames] = useState<TopGame[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      setErrorMsg(null);
      const session = auth.session;

      // 📡 1. ดึงคำสั่งซื้อทั้งหมด และ รายการสินค้าทั้งหมดจาก API
      const [rawOrders, rawProducts] = await Promise.all([
        orderApi.getBasicList(session),
        productApi.getBasicList(session),
      ]);

      // Map สินค้าเพื่อเพิ่มความเร็วในการค้นหา
      const productMap = new Map<number, any>();
      (rawProducts as any[]).forEach((p) => {
        const pId = p.productId ?? p.id;
        if (pId !== undefined) {
          productMap.set(Number(pId), p);
        }
      });

      // ----------------------------------------------------
      // 📊 2. คำนวณสถิติจาก Database
      // ----------------------------------------------------
      const now = new Date();
      const todayStr = getLocalDateString(now);
      const currentMonth = now.getMonth();
      const currentYear = now.getFullYear();

      let todaySales = 0;
      let pendingOrdersCount = 0;
      let monthlyGamesSold = 0;

      // เก็บยอดขายสะสมรายสินค้า { productId: salesCount }
      const productSalesCount: Record<number, number> = {};

      (rawOrders as any[]).forEach((order) => {
        const rawDate = order.created ?? order.createdAt;
        const orderDateStr = getLocalDateString(rawDate);
        const orderDate = new Date(rawDate);

        // เช็กออเดอร์ที่ไม่ถูกยกเลิก ( status !== 0 )
        const isNotCancelled = order.status !== 0 && order.status !== 'CANCELLED';

        if (isNotCancelled) {
          let orderTotal = 0;

          if (Array.isArray(order.item)) {
            order.item.forEach((item: any) => {
              const pId = Number(item.productId ?? item.id ?? 0);
              const prod = productMap.get(pId);

              // ราคา: ลำดับจาก สินค้าหลัก -> รายการในออเดอร์ -> 0
              const price = Number(prod?.price ?? item.price ?? 0);
              const qty = Number(item.quantity ?? item.amount ?? 1);

              orderTotal += price * qty;

              // สะสมยอดขายรายสินค้า
              if (pId > 0) {
                productSalesCount[pId] = (productSalesCount[pId] || 0) + qty;
              }

              // สะสมแผ่นที่ขายได้ในเดือนปัจจุบัน
              if (
                !isNaN(orderDate.getTime()) &&
                orderDate.getMonth() === currentMonth &&
                orderDate.getFullYear() === currentYear
              ) {
                monthlyGamesSold += qty;
              }
            });
          }

          // 💰 ยอดขายวันนี้ (เทียบ YYYY-MM-DD แบบเวลาท้องถิ่น)
          if (orderDateStr === todayStr) {
            todaySales += orderTotal;
          }
        }

        // 📦 ออเดอร์ที่รอจัดส่ง ( status === 1 หรือ 'PENDING' )
        if (order.status === 1 || order.status === 'PENDING') {
          pendingOrdersCount += 1;
        }
      });

      setStats({
        todaySales,
        pendingOrdersCount,
        monthlyGamesSold,
      });

      // ----------------------------------------------------
      // 🏆 3. จัดอันดับ Top Games ขายดี
      // ----------------------------------------------------
      const topGamesList: TopGame[] = (rawProducts as any[])
        .map((prod) => {
          const pId = Number(prod.productId ?? prod.id ?? 0);
          return {
            id: pId,
            name: prod.name ?? `สินค้า #${pId}`,
            sales: productSalesCount[pId] || 0,
            price: Number(prod.price ?? 0),
            stock: Number(prod.stock ?? prod.quantity ?? 0),
            platform: prod.platform ?? prod.platformId ?? '1',
          };
        })
        .sort((a, b) => b.sales - a.sales) // เรียงลำดับขายดีสุดขึ้นก่อน
        .slice(0, 5); // เลือกเฉพาะ 5 อันดับแรก

      setTopGames(topGamesList);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'เกิดข้อผิดพลาดในการดึงข้อมูลจาก Database';
      console.error('Failed to load dashboard data:', err);
      setErrorMsg(message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (auth.session) {
      void fetchDashboardData();
    }
  }, [auth.session]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] text-slate-400 gap-3">
        <Loader2 className="w-8 h-8 animate-spin text-indigo-400" />
        <p className="text-sm">กำลังคำนวณข้อมูลสถิติจาก Database...</p>
      </div>
    );
  }

  const statsCards = [
    {
      title: 'ยอดขายวันนี้',
      value: `฿${stats.todaySales.toLocaleString()}`,
      icon: DollarSign,
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10',
    },
    {
      title: 'ออเดอร์รอดำเนินการจัดส่ง',
      value: `${stats.pendingOrdersCount} ออเดอร์`,
      icon: Package,
      color: 'text-amber-400',
      bg: 'bg-amber-500/10',
    },
    {
      title: 'แผ่นเกมที่ขายได้เดือนนี้',
      value: `${stats.monthlyGamesSold} แผ่น`,
      icon: ShoppingBag,
      color: 'text-indigo-400',
      bg: 'bg-indigo-500/10',
    },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-100 tracking-wide flex items-center gap-3">
            <div className="p-2 bg-indigo-500/20 border border-indigo-500/30 rounded-xl text-indigo-400">
              <TrendingUp size={24} />
            </div>
            ภาพรวมระบบ (Dashboard)
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            สรุปข้อมูลคำสั่งซื้อ สถิติยอดขาย และรายการสินค้าขายดีจาก Database
          </p>
        </div>
      </div>

      {errorMsg && (
        <div className="p-4 bg-rose-500/10 border border-rose-500/30 rounded-xl flex items-center gap-3 text-rose-300 text-sm">
          <AlertCircle size={18} />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Grid การ์ดสถิติ */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {statsCards.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div
              key={idx}
              className="bg-[#16223f]/30 border border-slate-800/80 p-5 rounded-2xl flex items-center justify-between shadow-lg"
            >
              <div className="space-y-1">
                <span className="text-xs text-slate-400 font-medium">{stat.title}</span>
                <p className="text-2xl font-black text-slate-100 font-mono">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                <Icon size={24} />
              </div>
            </div>
          );
        })}
      </div>

      {/* ตารางสินค้าขายดี & สเตตัสระบบ */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-[#16223f]/20 border border-slate-800/60 rounded-2xl p-5 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-slate-200 text-base">แผ่นเกมขายดี (Top Sales)</h3>
            <span className="text-xs text-slate-500">คำนวณจากยอดสั่งซื้อทั้งหมด</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 text-xs font-semibold uppercase tracking-wider">
                  <th className="py-3 px-2">ชื่อแผ่นเกม</th>
                  <th className="py-3 px-2 text-center">แพลตฟอร์ม</th>
                  <th className="py-3 px-2 text-right">ยอดขายสะสม</th>
                  <th className="py-3 px-2 text-right">ราคา</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/40 text-slate-300">
                {topGames.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="text-center py-6 text-slate-500">
                      ไม่พบข้อมูลสินค้าขายดี
                    </td>
                  </tr>
                ) : (
                  topGames.map((game) => {
                    const platformInfo = formatPlatform(game.platform);
                    return (
                      <tr key={game.id} className="hover:bg-slate-800/10 transition-colors">
                        <td className="py-3 px-2 font-medium text-slate-100">{game.name}</td>
                        <td className="py-3 px-2 text-center">
                          <span
                            className={`text-[11px] px-2.5 py-0.5 font-bold rounded border ${platformInfo.badgeStyle}`}
                          >
                            {platformInfo.name}
                          </span>
                        </td>
                        <td className="py-3 px-2 text-right font-bold font-mono text-indigo-400">
                          {game.sales} แผ่น
                        </td>
                        <td className="py-3 px-2 text-right font-mono text-emerald-400 font-semibold">
                          ฿{game.price.toLocaleString()}
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* สถานะการเชื่อมต่อ Database / API */}
        <div className="bg-[#16223f]/20 border border-slate-800/60 rounded-2xl p-5 shadow-xl space-y-4">
          <h3 className="font-bold text-slate-200 text-base">สถานะการเชื่อมต่อระบบ</h3>
          <div className="space-y-3 text-xs">
            <div className="flex items-center justify-between p-3.5 bg-[#111a36]/50 border border-slate-800/80 rounded-xl">
              <div className="flex items-center gap-2 text-slate-300">
                <Database size={16} className="text-indigo-400" />
                <span>MySQL Database</span>
              </div>
              <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Connected
              </span>
            </div>

            <div className="flex items-center justify-between p-3.5 bg-[#111a36]/50 border border-slate-800/80 rounded-xl">
              <div className="flex items-center gap-2 text-slate-300">
                <CreditCard size={16} className="text-emerald-400" />
                <span>Payment Gateway</span>
              </div>
              <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Active
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};