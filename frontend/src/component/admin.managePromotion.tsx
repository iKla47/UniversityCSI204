import React, { useState } from 'react';
import { 
  Tag, 
  Plus, 
  Search, 
  Trash2, 
  Edit3, 
  Percent, 
  DollarSign, 
  Calendar, 
  X, 
  Check, 
  Clock 
} from 'lucide-react';

// ==========================================
// 1. Interfaces & Types
// ==========================================

// โครงสร้างของข้อมูล Auth (ปรับให้เป็น Optional ด้วย ?)
export interface AuthState {
  user?: {
    id?: string | number;
    name?: string;
    role?: string;
  };
  token?: string;
}

// แก้ไขจุดนี้: ใส่ ? หลัง auth เพื่อไม่ให้เกิด Error: Property 'auth' is missing
export interface ManagePromotionsProps {
  auth?: AuthState;
}

export interface Promotion {
  id: number;
  code: string;
  description: string;
  type: 'PERCENTAGE' | 'FIXED';
  discountValue: number;
  minSpend: number;
  startDate: string;
  endDate: string;
  isActive: boolean;
}

// Mock Data สิทธิพิเศษ/โปรโมชัน
const INITIAL_PROMOTIONS: Promotion[] = [
  {
    id: 1,
    code: 'WELCOME10',
    description: 'ส่วนลด 10% สำหรับสมาชิกใหม่',
    type: 'PERCENTAGE',
    discountValue: 10,
    minSpend: 500,
    startDate: '2026-01-01',
    endDate: '2026-12-31',
    isActive: true,
  },
  {
    id: 2,
    code: 'GAME100',
    description: 'ส่วนลด 100 บาท เมื่อซื้อแผ่นเกมครบ 1,500 บาท',
    type: 'FIXED',
    discountValue: 100,
    minSpend: 1500,
    startDate: '2026-06-01',
    endDate: '2026-08-31',
    isActive: true,
  },
];

// ==========================================
// 2. Main Component
// ==========================================
export const ManagePromotionsPage: React.FC<ManagePromotionsProps> = ({ auth = {} }) => {
  const [promotions, setPromotions] = useState<Promotion[]>(INITIAL_PROMOTIONS);
  const [searchQuery, setSearchQuery] = useState('');
  
  // State สำหรับ Modal สร้าง/แก้ไข
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);

  // Form State
  const [code, setCode] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState<'PERCENTAGE' | 'FIXED'>('PERCENTAGE');
  const [discountValue, setDiscountValue] = useState<number>(0);
  const [minSpend, setMinSpend] = useState<number>(0);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // เปิด Modal เพิ่มคูปองใหม่
  const handleOpenAddModal = () => {
    setEditingId(null);
    setCode('');
    setDescription('');
    setType('PERCENTAGE');
    setDiscountValue(0);
    setMinSpend(0);
    setStartDate('');
    setEndDate('');
    setIsModalOpen(true);
  };

  // เปิด Modal แก้ไขคูปอง
  const handleOpenEditModal = (promo: Promotion) => {
    setEditingId(promo.id);
    setCode(promo.code);
    setDescription(promo.description);
    setType(promo.type);
    setDiscountValue(promo.discountValue);
    setMinSpend(promo.minSpend);
    setStartDate(promo.startDate);
    setEndDate(promo.endDate);
    setIsModalOpen(true);
  };

  // บันทึกข้อมูล (เพิ่ม / แก้ไข)
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();

    if (!code.trim()) {
      alert('กรุณากรอกโค้ดส่วนลด');
      return;
    }

    if (editingId) {
      // แก้ไข
      setPromotions(prev => prev.map(p => p.id === editingId ? {
        ...p,
        code: code.toUpperCase().trim(),
        description,
        type,
        discountValue: Number(discountValue),
        minSpend: Number(minSpend),
        startDate,
        endDate
      } : p));
      alert('แก้ไขโปรโมชันสำเร็จ!');
    } else {
      // เพิ่มใหม่
      const newPromo: Promotion = {
        id: Date.now(),
        code: code.toUpperCase().trim(),
        description,
        type,
        discountValue: Number(discountValue),
        minSpend: Number(minSpend),
        startDate,
        endDate,
        isActive: true
      };
      setPromotions([newPromo, ...promotions]);
      alert('เพิ่มโปรโมชันใหม่สำเร็จ!');
    }

    setIsModalOpen(false);
  };

  // ลบโปรโมชัน
  const handleDelete = (id: number) => {
    if (confirm('คุณต้องการลบโค้ดโปรโมชันนี้ใช่หรือไม่?')) {
      setPromotions(prev => prev.filter(p => p.id !== id));
    }
  };

  // สลับสถานะ เปิด/ปิด ใช้งาน
  const handleToggleActive = (id: number) => {
    setPromotions(prev => prev.map(p => 
      p.id === id ? { ...p, isActive: !p.isActive } : p
    ));
  };

  // ค้นหา
  const filteredPromotions = promotions.filter(p => 
    p.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-100 tracking-wide flex items-center gap-2">
            <Tag className="text-indigo-400" />
            จัดการโปรโมชัน & โค้ดส่วนลด
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            สร้างและกำหนดเงื่อนไขส่วนลดสำหรับกระตุ้นยอดขาย
            {auth?.user?.name && <span className="text-indigo-300 ml-1">(ผู้ดำเนินการ: {auth.user.name})</span>}
          </p>
        </div>

        <button 
          onClick={handleOpenAddModal}
          className="flex items-center justify-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-bold rounded-xl transition-all shadow-lg shadow-indigo-600/20 active:scale-95 self-start sm:self-auto"
        >
          <Plus size={16} />
          + สร้างโค้ดส่วนลด
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-2.5 text-slate-500" size={18} />
        <input 
          type="text" 
          placeholder="ค้นหาโค้ดส่วนลด หรือรายละเอียด..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-[#16223f]/40 border border-slate-800/80 rounded-xl pl-10 pr-4 py-2 text-sm text-slate-200 focus:outline-none focus:border-indigo-500 placeholder-slate-500 transition-colors"
        />
      </div>

      {/* Promotions Table */}
      <div className="bg-[#111a36]/60 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#16223f]/80 text-slate-400 text-xs font-semibold uppercase tracking-wider border-b border-slate-800">
                <th className="py-3.5 px-4">โค้ดส่วนลด</th>
                <th className="py-3.5 px-4">รายละเอียด</th>
                <th className="py-3.5 px-4">มูลค่าส่วนลด</th>
                <th className="py-3.5 px-4">ขั้นต่ำ</th>
                <th className="py-3.5 px-4">ระยะเวลาใช้งาน</th>
                <th className="py-3.5 px-4 text-center">สถานะ</th>
                <th className="py-3.5 px-4 text-right">จัดการ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-sm">
              {filteredPromotions.length === 0 ? (
                <tr>
                  <td colSpan={7} className="text-center py-8 text-slate-500 text-sm">
                    ไม่พบข้อมูลโปรโมชัน
                  </td>
                </tr>
              ) : (
                filteredPromotions.map((promo) => (
                  <tr key={promo.id} className="hover:bg-slate-800/30 transition-colors">
                    
                    {/* Code */}
                    <td className="py-3.5 px-4 font-mono font-bold text-indigo-400">
                      <span className="bg-indigo-950/60 border border-indigo-500/30 px-2.5 py-1 rounded-lg">
                        {promo.code}
                      </span>
                    </td>

                    {/* Description */}
                    <td className="py-3.5 px-4 text-slate-300">
                      {promo.description || '-'}
                    </td>

                    {/* Discount Value */}
                    <td className="py-3.5 px-4 font-semibold text-slate-200">
                      {promo.type === 'PERCENTAGE' ? (
                        <span className="flex items-center gap-1 text-emerald-400">
                          <Percent size={14} /> {promo.discountValue}%
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-emerald-400">
                          <DollarSign size={14} /> ฿{promo.discountValue.toLocaleString()}
                        </span>
                      )}
                    </td>

                    {/* Min Spend */}
                    <td className="py-3.5 px-4 text-slate-400 text-xs">
                      ฿{promo.minSpend.toLocaleString()}
                    </td>

                    {/* Date Range */}
                    <td className="py-3.5 px-4 text-xs text-slate-400">
                      <div className="flex items-center gap-1">
                        <Calendar size={12} className="text-slate-500" />
                        <span>{promo.startDate || 'ไม่ระบุ'} - {promo.endDate || 'ไม่ระบุ'}</span>
                      </div>
                    </td>

                    {/* Active Status */}
                    <td className="py-3.5 px-4 text-center">
                      <button 
                        onClick={() => handleToggleActive(promo.id)}
                        className={`inline-flex items-center gap-1 text-[11px] px-2.5 py-0.5 rounded-full font-bold transition-all ${
                          promo.isActive 
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20' 
                            : 'bg-slate-800 text-slate-500 border border-slate-700 hover:bg-slate-700'
                        }`}
                      >
                        {promo.isActive ? <Check size={11} /> : <Clock size={11} />}
                        {promo.isActive ? 'เปิดใช้งาน' : 'ปิดใช้งาน'}
                      </button>
                    </td>

                    {/* Actions */}
                    <td className="py-3.5 px-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button 
                          onClick={() => handleOpenEditModal(promo)}
                          className="p-1.5 text-slate-400 hover:text-indigo-400 hover:bg-indigo-500/10 rounded-lg transition-colors"
                          title="แก้ไข"
                        >
                          <Edit3 size={16} />
                        </button>
                        <button 
                          onClick={() => handleDelete(promo.id)}
                          className="p-1.5 text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 rounded-lg transition-colors"
                          title="ลบ"
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

      {/* ==========================================
          MODAL: สร้าง/แก้ไข โค้ดส่วนลด
         ========================================== */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-[#111a36] border border-slate-800 rounded-2xl w-full max-w-md p-6 shadow-2xl space-y-4">
            
            <div className="flex justify-between items-center pb-3 border-b border-slate-800">
              <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                <Tag className="text-indigo-400" size={20} />
                {editingId ? 'แก้ไขโค้ดส่วนลด' : 'สร้างโค้ดส่วนลดใหม่'}
              </h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-3.5 text-sm">
              
              {/* โค้ดส่วนลด */}
              <div>
                <label className="block text-slate-400 text-xs mb-1 font-medium">โค้ดส่วนลด (Code)</label>
                <input 
                  type="text" 
                  required
                  placeholder="เช่น GAME2026, SUMMER50" 
                  value={code}
                  onChange={e => setCode(e.target.value)}
                  className="w-full bg-[#16223f] border border-slate-700 rounded-xl px-3.5 py-2 text-slate-100 uppercase focus:border-indigo-500 focus:outline-none"
                />
              </div>

              {/* รายละเอียด */}
              <div>
                <label className="block text-slate-400 text-xs mb-1 font-medium">รายละเอียดโปรโมชัน</label>
                <input 
                  type="text" 
                  placeholder="เช่น ส่วนลดพิเศษสำหรับต้อนรับฤดูร้อน" 
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                  className="w-full bg-[#16223f] border border-slate-700 rounded-xl px-3.5 py-2 text-slate-100 focus:border-indigo-500 focus:outline-none"
                />
              </div>

              {/* ประเภทและมูลค่า */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-400 text-xs mb-1 font-medium">ประเภทส่วนลด</label>
                  <select 
                    value={type}
                    onChange={e => setType(e.target.value as 'PERCENTAGE' | 'FIXED')}
                    className="w-full bg-[#16223f] border border-slate-700 rounded-xl px-3 py-2 text-slate-100 focus:border-indigo-500 focus:outline-none cursor-pointer"
                  >
                    <option value="PERCENTAGE">เปอร์เซ็นต์ (%)</option>
                    <option value="FIXED">จำนวนเงิน (บาท)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-400 text-xs mb-1 font-medium">
                    {type === 'PERCENTAGE' ? 'ส่วนลด (%)' : 'ส่วนลด (บาท)'}
                  </label>
                  <input 
                    type="number" 
                    min="1"
                    required
                    value={discountValue}
                    onChange={e => setDiscountValue(Number(e.target.value))}
                    className="w-full bg-[#16223f] border border-slate-700 rounded-xl px-3.5 py-2 text-slate-100 focus:border-indigo-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* ยอดขั้นต่ำ */}
              <div>
                <label className="block text-slate-400 text-xs mb-1 font-medium">ยอดสั่งซื้อขั้นต่ำ (บาท)</label>
                <input 
                  type="number" 
                  min="0"
                  value={minSpend}
                  onChange={e => setMinSpend(Number(e.target.value))}
                  className="w-full bg-[#16223f] border border-slate-700 rounded-xl px-3.5 py-2 text-slate-100 focus:border-indigo-500 focus:outline-none"
                />
              </div>

              {/* วันที่ เริ่ม - สิ้นสุด */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-400 text-xs mb-1 font-medium">วันที่เริ่มต้น</label>
                  <input 
                    type="date" 
                    value={startDate}
                    onChange={e => setStartDate(e.target.value)}
                    className="w-full bg-[#16223f] border border-slate-700 rounded-xl px-3 py-2 text-slate-100 focus:border-indigo-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 text-xs mb-1 font-medium">วันที่สิ้นสุด</label>
                  <input 
                    type="date" 
                    value={endDate}
                    onChange={e => setEndDate(e.target.value)}
                    className="w-full bg-[#16223f] border border-slate-700 rounded-xl px-3 py-2 text-slate-100 focus:border-indigo-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-3 border-t border-slate-800">
                <button 
                  type="button" 
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold rounded-xl text-xs transition-colors"
                >
                  ยกเลิก
                </button>
                <button 
                  type="submit" 
                  className="flex-1 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs transition-colors shadow-lg shadow-indigo-600/20 active:scale-95"
                >
                  บันทึกข้อมูล
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

    </div>
  );
};

export default ManagePromotionsPage;