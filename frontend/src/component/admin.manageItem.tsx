import React, { useEffect, useState } from 'react';
import productApi from '../util/api.product';
import type { BasicFetch, BasicCreate, BasicUpdate } from '../util/api.product';
import { useAuth } from '#context/common.js';
import { 
  Disc, Plus, Search, Trash2, X, AlertTriangle, Edit3, Loader2 
} from 'lucide-react';

// Interface รวมข้อมูลสินค้า + สต็อก เพื่อใช้งานใน UI
interface GameItem {
  id: number;
  name: string;
  platform: string;
  price: number;
  stock: number;
  description?: string;
}

export const ManageItemsPage: React.FC = () => {
  const auth = useAuth();
  
  // State หลัก
  const [products, setProducts] = useState<GameItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Modal สเตตัส และ ฟอร์มสำหรับ "เพิ่มสินค้าใหม่"
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newGame, setNewGame] = useState({
    name: '',
    platform: 10, // Default เป็น ID Platform เช่น 10
    price: 0,
    stock: 0,
    description: '',
  });

  // Modal สเตตัส และ ฟอร์มสำหรับ "แก้ไขสินค้า"
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingGame, setEditingGame] = useState<GameItem | null>(null);

  // 📡 1. โหลดข้อมูลสินค้า + สต็อก (อ้างอิง Logic แบบเดียวกับหน้า Staff)
  const loadData = async () => {
    try {
      setLoading(true);
      // 1. ดึงรายการสินค้าทั้งหมด
      const productList: BasicFetch[] = await productApi.getBasicList(auth.session);

      // 2. ดึงข้อมูลสต็อกของแต่ละสินค้าขนานกัน (Promise.all)
      const combinedData: GameItem[] = await Promise.all(
        productList.map(async (item) => {
          let stockQty = 0;
          try {
            const stockData = await productApi.getStock(auth.session, item.id);
            stockQty = stockData.quantity;
          } catch {
            stockQty = 0;
          }

          return {
            id: item.id,
            name: item.name,
            platform: String(item.platform ?? 'N/A'),
            price: item.price,
            stock: stockQty,
            description: item.description,
          };
        })
      );

      setProducts(combinedData);
    } catch (err) {
      console.error("Failed to load products or stocks:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void loadData();
  }, []);

  // ➕ 2. เพิ่มสินค้าใหม่ (createBasic + updateStock)
  const handleAddGame = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newGame.name || newGame.price <= 0) {
      alert('กรุณากรอกข้อมูลสินค้าให้ถูกต้อง');
      return;
    }

    try {
      setIsSubmitting(true);
      
      const payload: BasicCreate = {
        name: newGame.name,
        description: newGame.description,
        price: newGame.price,
        priceCode: 1,
        platform: Number(newGame.platform),
        cover: undefined,        // 👈 เติมเพื่อป้องกัน TypeScript แจ้ง Error
        background: undefined,
      };

      // 1. สร้างสินค้า
      const createRes = await productApi.createBasic(auth.session, payload);

      // 2. อัปเดตสต็อกแรกเริ่ม (ถ้ามี ID คืนกลับมา)
      if (createRes && createRes.id) {
        await productApi.updateStock(auth.session, {
          productId: createRes.id,
          quantity: newGame.stock,
        });
      }

      alert('เพิ่มสินค้าเรียบร้อยแล้ว!');
      setIsAddModalOpen(false);
      
      // Reset Form
      setNewGame({
        name: '',
        platform: 10,
        price: 0,
        stock: 0,
        description: '',
      });

      await loadData(); // รีโหลดข้อมูล
    } catch (err) {
      console.error('Failed to add product:', err);
      alert('เกิดข้อผิดพลาดในการเพิ่มสินค้า');
    } finally {
      setIsSubmitting(false);
    }
  };

  // ✏️ 3. แก้ไขข้อมูลสินค้า (updateBasic + updateStock)
  const handleEditGame = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingGame || !editingGame.name || editingGame.price <= 0) {
      alert('กรุณากรอกข้อมูลให้ถูกต้อง');
      return;
    }

    try {
      setIsSubmitting(true);

      const updatePayload: BasicUpdate = {
        id: editingGame.id,
        name: editingGame.name,
        description: editingGame.description ?? '',
        price: editingGame.price,
        priceCode: 1,
        platform: Number(editingGame.platform),
      };

      // 1. อัปเดตข้อมูลพื้นฐาน
      await productApi.updateBasic(auth.session, updatePayload);

      // 2. อัปเดตสต็อกสินค้า
      await productApi.updateStock(auth.session, {
        productId: editingGame.id,
        quantity: editingGame.stock,
      });

      alert('แก้ไขข้อมูลเรียบร้อยแล้ว!');
      setIsEditModalOpen(false);
      setEditingGame(null);

      await loadData(); // รีโหลดข้อมูล
    } catch (err) {
      console.error('Failed to update product:', err);
      alert('เกิดข้อผิดพลาดในการบันทึกข้อมูล');
    } finally {
      setIsSubmitting(false);
    }
  };

  // 🗑️ 4. ลบสินค้า (deleteBasic)
  const handleDeleteGame = async (game: GameItem) => {
    if (!confirm(`คุณต้องการลบรายการ "${game.name}" (ID: ${game.id}) ใช่หรือไม่?`)) return;

    try {
      setIsSubmitting(true);
      await productApi.deleteBasic(auth.session, game.id);
      alert('ลบสินค้าเรียบร้อยแล้ว');
      await loadData(); // รีโหลดข้อมูล
    } catch (err) {
      console.error('Failed to delete product:', err);
      alert('เกิดข้อผิดพลาดในการลบสินค้า');
    } finally {
      setIsSubmitting(false);
    }
  };

  // กรองสินค้าตามคำค้นหา
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    String(product.id).includes(searchQuery)
  );

  return (
    <div className="space-y-6 animate-in fade-in duration-200 p-6 bg-[#0b1220] text-white min-h-screen">
      
      {/* Header และ ปุ่มเพิ่มเกม */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-100 tracking-wide flex items-center gap-2">
            <Disc className="text-indigo-400" />
            จัดการแผ่นและตลับเกม (Staff/Admin)
          </h1>
          <p className="text-sm text-slate-400 mt-1">คลังสินค้าเกม เพิ่ม แก้ไข ลบ รายการสินค้าและปรับจำนวนสต็อก</p>
        </div>

        <button
          onClick={() => setIsAddModalOpen(true)}
          className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-4 py-2.5 rounded-xl text-sm transition-all shadow-lg shadow-indigo-600/20 flex items-center justify-center gap-2 shrink-0 active:scale-95"
        >
          <Plus size={18} />
          เพิ่มเกมใหม่
        </button>
      </div>

      {/* แถบค้นหา */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-2.5 text-slate-500" size={18} />
        <input 
          type="text" 
          placeholder="ค้นหาด้วยชื่อสินค้า หรือ ID..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-[#16223f]/40 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-sm text-slate-200 focus:outline-none focus:border-indigo-500 placeholder-slate-500"
        />
      </div>

      {/* ตารางแสดงรายการสินค้า */}
      <div className="bg-[#111827] border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-[#0f172a] border-b border-slate-800 text-slate-400 text-xs font-semibold uppercase tracking-wider">
                <th className="py-3.5 px-4">ID</th>
                <th className="py-3.5 px-4">ชื่อสินค้า</th>
                <th className="py-3.5 px-4">แพลตฟอร์ม</th>
                <th className="py-3.5 px-4 text-center">คงเหลือ (Stock)</th>
                <th className="py-3.5 px-4 text-right">ราคา</th>
                <th className="py-3.5 px-4 text-center">จัดการ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              {loading ? (
                <tr>
                  <td colSpan={6} className="text-center py-8 text-slate-400">
                    <Loader2 className="w-6 h-6 animate-spin mx-auto text-indigo-400 mb-2" />
                    กำลังโหลดข้อมูลสินค้า...
                  </td>
                </tr>
              ) : filteredProducts.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center py-8 text-slate-500">
                    ไม่พบรายการสินค้า
                  </td>
                </tr>
              ) : (
                filteredProducts.map((product) => (
                  <tr key={product.id} className="hover:bg-slate-800/30 transition-colors">
                    <td className="py-3.5 px-4 font-mono text-indigo-400 font-bold">#{product.id}</td>
                    <td className="py-3.5 px-4 font-semibold text-slate-100">{product.name}</td>
                    <td className="py-3.5 px-4 text-slate-400">{product.platform}</td>
                    <td className="py-3.5 px-4 text-center">
                      {product.stock === 0 ? (
                        <span className="text-rose-400 bg-rose-500/10 border border-rose-500/20 px-2.5 py-1 rounded-md text-xs font-bold inline-flex items-center gap-1">
                          <AlertTriangle size={12} /> Out of Stock
                        </span>
                      ) : product.stock <= 5 ? (
                        <span className="text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-md text-xs font-bold">
                          {product.stock} ชิ้น (ใกล้หมด)
                        </span>
                      ) : (
                        <span className="text-slate-200 font-medium">{product.stock} ชิ้น</span>
                      )}
                    </td>
                    <td className="py-3.5 px-4 text-right font-bold text-slate-100">฿{product.price.toLocaleString()}</td>
                    <td className="py-3.5 px-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => {
                            setEditingGame(product);
                            setIsEditModalOpen(true);
                          }}  
                          className="p-1.5 bg-slate-800 hover:bg-slate-700 text-indigo-300 rounded-lg border border-slate-700 transition-colors"
                          title="แก้ไขสินค้า"
                          disabled={isSubmitting}
                        >
                          <Edit3 size={15} />
                        </button>
                        <button 
                          onClick={() => handleDeleteGame(product)}
                          className="p-1.5 text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 rounded-lg transition-colors"
                          title="ลบสินค้า"
                          disabled={isSubmitting}
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* 🟢 MODAL เพิ่มสินค้าใหม่ */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-[#0f172a] border border-slate-800 rounded-2xl w-full max-w-lg p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                <Plus className="text-indigo-400" size={20} />
                เพิ่มสินค้าใหม่
              </h2>
              <button onClick={() => setIsAddModalOpen(false)} className="text-slate-500 hover:text-slate-300">
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleAddGame} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-400 mb-1 font-medium">ชื่อสินค้า (Name)</label>
                <input 
                  type="text" 
                  required
                  value={newGame.name}
                  onChange={(e) => setNewGame({ ...newGame, name: e.target.value })}
                  className="w-full bg-[#1e293b] border border-slate-700 rounded-xl px-3 py-2 text-slate-100 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-400 mb-1 font-medium">ราคา (Price)</label>
                  <input 
                    type="number" 
                    required
                    min="1"
                    value={newGame.price || ''}
                    onChange={(e) => setNewGame({ ...newGame, price: Number(e.target.value) })}
                    className="w-full bg-[#1e293b] border border-slate-700 rounded-xl px-3 py-2 text-slate-100 focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 mb-1 font-medium">จำนวนสต็อก (Stock)</label>
                  <input 
                    type="number" 
                    required
                    min="0"
                    value={newGame.stock}
                    onChange={(e) => setNewGame({ ...newGame, stock: Number(e.target.value) })}
                    className="w-full bg-[#1e293b] border border-slate-700 rounded-xl px-3 py-2 text-slate-100 focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-400 mb-1 font-medium">รายละเอียด (Description)</label>
                <textarea 
                  rows={3}
                  value={newGame.description}
                  onChange={(e) => setNewGame({ ...newGame, description: e.target.value })}
                  className="w-full bg-[#1e293b] border border-slate-700 rounded-xl px-3 py-2 text-slate-100 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="flex gap-2 pt-2">
                <button 
                  type="button" 
                  onClick={() => setIsAddModalOpen(false)}
                  className="w-1/2 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl font-bold"
                  disabled={isSubmitting}
                >
                  ยกเลิก
                </button>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-1/2 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold flex items-center justify-center gap-2"
                >
                  {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : 'บันทึกสินค้า'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 🔵 MODAL แก้ไขสินค้า */}
      {isEditModalOpen && editingGame && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-[#0f172a] border border-slate-800 rounded-2xl w-full max-w-lg p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                <Edit3 className="text-indigo-400" size={20} />
                แก้ไขสินค้า (ID: #{editingGame.id})
              </h2>
              <button onClick={() => setIsEditModalOpen(false)} className="text-slate-500 hover:text-slate-300">
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleEditGame} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-400 mb-1 font-medium">ชื่อสินค้า (Name)</label>
                <input 
                  type="text" 
                  required
                  value={editingGame.name}
                  onChange={(e) => setEditingGame({ ...editingGame, name: e.target.value })}
                  className="w-full bg-[#1e293b] border border-slate-700 rounded-xl px-3 py-2 text-slate-100 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-400 mb-1 font-medium">ราคา (Price)</label>
                  <input 
                    type="number" 
                    required
                    min="1"
                    value={editingGame.price}
                    onChange={(e) => setEditingGame({ ...editingGame, price: Number(e.target.value) })}
                    className="w-full bg-[#1e293b] border border-slate-700 rounded-xl px-3 py-2 text-slate-100 focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 mb-1 font-medium">จำนวนสต็อก (Stock)</label>
                  <input 
                    type="number" 
                    required
                    min="0"
                    value={editingGame.stock}
                    onChange={(e) => setEditingGame({ ...editingGame, stock: Number(e.target.value) })}
                    className="w-full bg-[#1e293b] border border-slate-700 rounded-xl px-3 py-2 text-slate-100 focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-400 mb-1 font-medium">รายละเอียด (Description)</label>
                <textarea 
                  rows={3}
                  value={editingGame.description || ''}
                  onChange={(e) => setEditingGame({ ...editingGame, description: e.target.value })}
                  className="w-full bg-[#1e293b] border border-slate-700 rounded-xl px-3 py-2 text-slate-100 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="flex gap-2 pt-2">
                <button 
                  type="button" 
                  onClick={() => setIsEditModalOpen(false)}
                  className="w-1/2 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl font-bold"
                  disabled={isSubmitting}
                >
                  ยกเลิก
                </button>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-1/2 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold flex items-center justify-center gap-2"
                >
                  {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : 'บันทึกการแก้ไข'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};