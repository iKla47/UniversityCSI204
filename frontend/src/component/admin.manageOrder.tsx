import React, { useEffect, useState } from 'react';
import {
  ShoppingCart,
  Search,
  Filter,
  Truck,
  XCircle,
  CheckCircle2,
  Clock,
  Eye,
  X,
  Package,
  CreditCard,
  User,
  MapPin,
} from 'lucide-react';
import orderApi from '../util/api.order';
import productApi from '../util/api.product';
import { useAuth } from '#context/common.ts';
import type { BasicFetch as RawOrder } from '../util/api.order';
import type { BasicFetch as ProductFetch } from '../util/api.product';

interface OrderProduct {
  productId: number;
  name: string;
  price: number;
  quantity: number;
}

interface OrderItem {
  id: string;
  rawOrderId: number;
  customerName: string;
  address: string;
  items: OrderProduct[];
  totalAmount: number;
  paymentStatus: 'PAID' | 'UNPAID';
  fulfillmentStatus: 'PENDING' | 'SHIPPED' | 'CANCELLED';
  createdAt: string;
  trackingNumber?: string;
}

const toUiStatus = (status: number): 'PENDING' | 'SHIPPED' | 'CANCELLED' => {
  if (status === 0) return 'CANCELLED';
  if (status === 2) return 'SHIPPED';
  return 'PENDING';
};

const formatDate = (value: Date | string | null) => {
  if (!value) return '-';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '-';
  return date.toISOString().split('T')[0];
};

export const ManageOrdersPage: React.FC = () => {
  const auth = useAuth();
  const [orders, setOrders] = useState<OrderItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [selectedOrder, setSelectedOrder] = useState<OrderItem | null>(null);
  const [trackingInput, setTrackingInput] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);

  // 🔄 1. ดึงข้อมูลรายการคำสั่งซื้อ และรายละเอียดสินค้าจาก Backend
  const loadOrders = async () => {
    try {
      setLoading(true);
      setErrorMsg(null);

      const session = auth.session;
      // 📡 API 1: ดึงคำสั่งซื้อทั้งหมด
      const rawOrders: RawOrder[] = await orderApi.getBasicList(session);

      const extendedOrders: OrderItem[] = await Promise.all(
        rawOrders.map(async (rawOrder) => {
          // 📡 API 2: ดึงรายละเอียดของสินค้าแต่ละตัวตาม productId
          const items = await Promise.all(
            rawOrder.item.map(async (item) => {
              try {
                const product: ProductFetch = await productApi.getBasic(session, item.productId);
                return {
                  productId: item.productId,
                  name: product.name,
                  price: product.price,
                  quantity: item.quantity,
                };
              } catch {
                return {
                  productId: item.productId,
                  name: `สินค้า ID: ${item.productId}`,
                  price: 0,
                  quantity: item.quantity,
                };
              }
            })
          );

          const totalAmount = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

          return {
            id: `ORD-${String(rawOrder.orderId).padStart(4, '0')}`,
            rawOrderId: rawOrder.orderId,
            customerName: rawOrder.shipName,
            address: rawOrder.shipAddress,
            items,
            totalAmount,
            // เช็กสถานะการชำระเงิน (รองรับ promptpay=1, credit=2)
            paymentStatus: rawOrder.paymentType > 0 ? 'PAID' : 'UNPAID',
            fulfillmentStatus: toUiStatus(rawOrder.status),
            createdAt: formatDate(rawOrder.created),
            // ดึง trackingNumber จริงจาก Backend (ถ้าไม่มี ค่อย fallback ไปแสดง tracking ตามที่เก็บไว้)
            trackingNumber: (rawOrder as unknown as { trackingNumber?: string }).trackingNumber ?? undefined,
          };
        })
      );

      setOrders(extendedOrders);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'เกิดข้อผิดพลาดในการดึงข้อมูลคำสั่งซื้อ';
      console.error('Failed to load orders:', err);
      setErrorMsg(message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (auth.session) {
      void loadOrders();
    }
  }, [auth.session]);

  const handleOpenDetail = (order: OrderItem) => {
    setSelectedOrder(order);
    setTrackingInput(order.trackingNumber ?? '');
  };

  // 🚀 2. ยิง API อัปเดตสถานะและเลข พัสดุ ไปยัง Backend
  const handleUpdateStatus = async (newStatus: 'SHIPPED' | 'CANCELLED') => {
    if (!selectedOrder) return;

    if (newStatus === 'SHIPPED' && !trackingInput.trim()) {
      alert('กรุณากรอกเลขพัสดุ (Tracking Number) ก่อนเปลี่ยนสถานะเป็นจัดส่งแล้ว');
      return;
    }

    try {
      setIsUpdating(true);
      const session = auth.session;
      const status = newStatus === 'SHIPPED' ? 2 : 0;
      const delivered = newStatus === 'SHIPPED' ? new Date() : null;

      // 📡 API 3: ยิงอัปเดตข้อมูลขึ้น Backend
      await orderApi.updateBasic(session, {
        orderId: selectedOrder.rawOrderId,
        status,
        delivered,
        // แนบ trackingNumber ส่งไปยัง backend ด้วย ( casting type ป้องกัน type mismatch )
        ...(newStatus === 'SHIPPED' && { trackingNumber: trackingInput.trim() }),
      } as unknown as Parameters<typeof orderApi.updateBasic>[1]);

      // ดึงข้อมูลใหม่จาก Backend อีกครั้งเพื่อความแม่นยำ
      await loadOrders();

      setSelectedOrder(null);
      setTrackingInput('');
      alert('อัปเดตสถานะคำสั่งซื้อเรียบร้อยแล้ว');
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'เกิดข้อผิดพลาดในการอัปเดตสถานะ';
      console.error('Failed to update status:', err);
      alert(message);
    } finally {
      setIsUpdating(false);
    }
  };

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customerName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'ALL' || order.fulfillmentStatus === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      <div className="pb-4 border-b border-slate-800">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-100 tracking-wide flex items-center gap-3">
          <div className="p-2 bg-indigo-500/20 border border-indigo-500/30 rounded-xl text-indigo-400">
            <ShoppingCart size={24} />
          </div>
          จัดการคำสั่งซื้อ (Manage Orders)
        </h1>
        <p className="text-sm text-slate-400 mt-1">
          ตรวจสอบสถานะชำระเงินของลูกค้า และจัดการอัปเดตการจัดส่งหรือยกเลิกออเดอร์
        </p>
      </div>

      {errorMsg && (
        <div className="rounded-xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-200">
          {errorMsg}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="sm:col-span-2 relative">
          <Search className="absolute left-3 top-2.5 text-slate-500" size={18} />
          <input
            type="text"
            placeholder="ค้นหาด้วยรหัสคำสั่งซื้อ (ORD-...) หรือชื่อลูกค้า..."
            value={searchQuery}
            onChange={(e) => { setSearchQuery(e.target.value); }}
            className="w-full bg-[#16223f]/40 border border-slate-800/80 rounded-xl pl-10 pr-4 py-2 text-sm text-slate-200 focus:outline-none focus:border-indigo-500 placeholder-slate-500"
          />
        </div>
        <div className="relative">
          <Filter className="absolute left-3 top-2.5 text-slate-500" size={16} />
          <select
            value={statusFilter}
            onChange={(e) => { setStatusFilter(e.target.value); }}
            className="w-full bg-[#16223f]/40 border border-slate-800/80 rounded-xl pl-9 pr-4 py-2 text-sm text-slate-300 focus:outline-none focus:border-indigo-500 appearance-none cursor-pointer"
          >
            <option value="ALL">ทุกสถานะการจัดส่ง</option>
            <option value="PENDING">🟡 รอดำเนินการจัดส่ง (Pending)</option>
            <option value="SHIPPED">🟢 จัดส่งแล้ว (Shipped)</option>
            <option value="CANCELLED">🔴 ยกเลิกออเดอร์ (Cancelled)</option>
          </select>
        </div>
      </div>

      <div className="bg-[#16223f]/20 border border-slate-800/60 rounded-2xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-[#111a36]/50 border-b border-slate-800 text-slate-400 text-xs font-semibold uppercase tracking-wider">
                <th className="py-3.5 px-4">คำสั่งซื้อ / เวลา</th>
                <th className="py-3.5 px-4">ลูกค้า</th>
                <th className="py-3.5 px-4 text-right">ยอดรวม</th>
                <th className="py-3.5 px-4 text-center">การชำระเงิน (ลูกค้า)</th>
                <th className="py-3.5 px-4 text-center">สถานะการจัดส่ง</th>
                <th className="py-3.5 px-4 text-center">การจัดการ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/40 text-slate-300">
              {loading ? (
                <tr>
                  <td colSpan={6} className="py-8 text-center text-slate-500">
                    กำลังโหลดข้อมูลคำสั่งซื้อ...
                  </td>
                </tr>
              ) : filteredOrders.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-8 text-center text-slate-500">
                    ไม่พบรายการคำสั่งซื้อ
                  </td>
                </tr>
              ) : (
                filteredOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-slate-800/10 transition-colors">
                    <td className="py-3.5 px-4">
                      <div className="font-mono font-bold text-indigo-400">{order.id}</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">{order.createdAt}</div>
                    </td>

                    <td className="py-3.5 px-4">
                      <div className="font-bold text-slate-100">{order.customerName}</div>
                      <div className="text-xs text-slate-400 line-clamp-1">{order.address}</div>
                    </td>

                    <td className="py-3.5 px-4 text-right font-bold font-mono text-emerald-400">
                      ฿{order.totalAmount.toLocaleString()}
                    </td>

                    <td className="py-3.5 px-4 text-center">
                      {order.paymentStatus === 'PAID' ? (
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                          <CheckCircle2 size={12} /> ชำระเงินแล้ว
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-full">
                          <Clock size={12} /> รอการชำระเงิน
                        </span>
                      )}
                    </td>

                    <td className="py-3.5 px-4 text-center">
                      {order.fulfillmentStatus === 'PENDING' && (
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 rounded-full">
                          <Clock size={12} /> รอดำเนินการ
                        </span>
                      )}
                      {order.fulfillmentStatus === 'SHIPPED' && (
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-1 rounded-full">
                          <Truck size={12} /> จัดส่งแล้ว
                        </span>
                      )}
                      {order.fulfillmentStatus === 'CANCELLED' && (
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-rose-400 bg-rose-500/10 border border-rose-500/20 px-2.5 py-1 rounded-full">
                          <XCircle size={12} /> ยกเลิกออเดอร์
                        </span>
                      )}
                    </td>

                    <td className="py-3.5 px-4 text-center">
                      <button
                        onClick={() => { handleOpenDetail(order); }}
                        className="px-3 py-1.5 bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/30 text-indigo-300 hover:text-white rounded-lg text-xs font-semibold transition-all inline-flex items-center gap-1.5"
                      >
                        <Eye size={14} /> ดู/จัดการ
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {selectedOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-[#0f162c] border border-slate-800 rounded-2xl w-full max-w-lg p-6 shadow-2xl space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <span className="text-xs font-mono text-indigo-400 font-bold">{selectedOrder.id}</span>
                <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2 mt-0.5">
                  <Package size={20} className="text-indigo-400" />
                  รายละเอียดคำสั่งซื้อ
                </h2>
              </div>
              <button
                onClick={() => { setSelectedOrder(null); }}
                disabled={isUpdating}
                className="text-slate-500 hover:text-slate-300 p-1 rounded-lg"
              >
                <X size={18} />
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3 bg-[#16223f]/40 p-3 rounded-xl border border-slate-800">
                <div>
                  <span className="text-slate-500 block flex items-center gap-1"><User size={12} /> ข้อมูลลูกค้า:</span>
                  <span className="font-bold text-slate-200 block mt-0.5">{selectedOrder.customerName}</span>
                  <span className="text-slate-400 block text-[11px] mt-1 flex items-start gap-1">
                    <MapPin size={12} className="shrink-0 mt-0.5" /> {selectedOrder.address}
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 block flex items-center gap-1"><CreditCard size={12} /> สถานะชำระเงิน:</span>
                  <div className="mt-1">
                    {selectedOrder.paymentStatus === 'PAID' ? (
                      <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-md">
                        ✓ ชำระเงินเรียบร้อยแล้ว
                      </span>
                    ) : (
                      <span className="text-xs font-bold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-md">
                        ⏳ รอการชำระเงินจากลูกค้า
                      </span>
                    )}
                  </div>
                  <span className="text-slate-400 block text-[11px] mt-2">ยอดรวมทั้งสิ้น: <strong className="text-emerald-400 font-mono text-sm">฿{selectedOrder.totalAmount.toLocaleString()}</strong></span>
                </div>
              </div>

              <div>
                <span className="text-slate-400 font-bold block mb-1">รายการสินค้าที่สั่งซื้อ:</span>
                <div className="bg-[#16223f]/60 border border-slate-800 rounded-xl divide-y divide-slate-800/60 overflow-hidden">
                  {selectedOrder.items.map((item, idx) => (
                    <div key={`${item.productId}-${idx}`} className="p-2.5 flex justify-between items-center text-slate-200">
                      <div>
                        <div className="font-medium">{item.name}</div>
                        <div className="text-[11px] text-slate-400">จำนวน: x{item.quantity}</div>
                      </div>
                      <div className="font-mono font-semibold text-slate-300">
                        ฿{(item.price * item.quantity).toLocaleString()}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800">
                <label className="block text-slate-300 font-bold mb-1">เลขพัสดุ / Tracking Number</label>
                <input
                  type="text"
                  placeholder="เช่น TH1234567890 (จำเป็นต้องใส่เมื่อกด 'จัดส่งแล้ว')"
                  value={trackingInput}
                  disabled={isUpdating}
                  onChange={(e) => { setTrackingInput(e.target.value); }}
                  className="w-full bg-[#16223f] border border-slate-700/80 rounded-xl px-3 py-2 text-slate-100 focus:outline-none focus:border-indigo-500 placeholder-slate-500 font-mono disabled:opacity-50"
                />
              </div>

              <div className="pt-2 space-y-2">
                <span className="text-slate-400 font-bold block text-center text-[11px]">เลือกเปลี่ยนสถานะการจัดส่งคำสั่งซื้อ</span>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    disabled={isUpdating}
                    onClick={() => { void handleUpdateStatus('SHIPPED'); }}
                    className="py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold shadow-md shadow-indigo-600/20 flex items-center justify-center gap-1.5 transition-all disabled:opacity-50"
                  >
                    <Truck size={16} /> {isUpdating ? 'กำลังบันทึก...' : 'ยืนยันจัดส่งแล้ว'}
                  </button>

                  <button
                    type="button"
                    disabled={isUpdating}
                    onClick={() => { void handleUpdateStatus('CANCELLED'); }}
                    className="py-2.5 bg-rose-600/20 hover:bg-rose-600/30 border border-rose-500/40 text-rose-300 rounded-xl font-bold flex items-center justify-center gap-1.5 transition-all disabled:opacity-50"
                  >
                    <XCircle size={16} /> {isUpdating ? 'กำลังบันทึก...' : 'ยกเลิกออเดอร์'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};