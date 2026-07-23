import React, { useState, useEffect } from 'react';
import { 
  Users, 
  ShieldCheck, 
  UserPlus, 
  Search, 
  Shield, 
  X, 
  Check, 
  Lock, 
  Unlock,
  AlertCircle
} from 'lucide-react';

// ==========================================
// 1. Interfaces & Types
// ==========================================
export interface UserData {
  id: number;
  name: string;
  role: string;
  status: 'ACTIVE' | 'SUSPENDED';
  permissions: string[];
}

export interface PermissionOption {
  id: string;
  label: string;
  description: string;
}

// รายการสิทธิ์ทั้งหมดที่มีในระบบ
const ALL_PERMISSIONS: PermissionOption[] = [
  { id: 'MANAGE_PRODUCTS', label: 'จัดการแผ่น/ตลับเกม', description: 'เพิ่ม แก้ไข ลบ รายการสินค้าและสต็อก' },
  { id: 'MANAGE_ORDERS', label: 'จัดการคำสั่งซื้อ & จัดส่ง', description: 'ดูรายการสั่งซื้อ เปลี่ยนสถานะจัดส่ง' },
  { id: 'MANAGE_USERS', label: 'จัดการผู้ใช้ & สิทธิ์', description: 'กำหนดสิทธิ์ แก้ไขสถานะผู้ใช้งาน' },
  { id: 'MANAGE_PROMOTIONS', label: 'จัดการโปรโมชัน & คูปอง', description: 'สร้างโค้ดส่วนลด และกิจกรรมส่งเสริมการขาย' },
  { id: 'VIEW_DASHBOARD', label: 'ดูภาพรวม Dashboard', description: 'เข้าถึงรายงานยอดขายและสถิติร้านค้า' },
];

// Mock Data เริ่มต้น (กรณีรอเชื่อม API)
const INITIAL_USERS: UserData[] = [
  { id: 1, name: 'Administrator', role: 'ผู้จัดการ (Manager)', status: 'ACTIVE', permissions: ['MANAGE_PRODUCTS', 'MANAGE_ORDERS', 'MANAGE_USERS', 'MANAGE_PROMOTIONS', 'VIEW_DASHBOARD'] },
  { id: 2, name: 'Staff', role: 'ผู้ดูแล (Staff)', status: 'ACTIVE', permissions: ['MANAGE_PRODUCTS', 'MANAGE_ORDERS', 'VIEW_DASHBOARD'] },
  { id: 3, name: 'User', role: 'ผู้ใช้ทั่วไป (User)', status: 'SUSPENDED', permissions: ['VIEW_DASHBOARD'] },
  { id: 4, name: 'ItsJeremie', role: 'ผู้ใช้ทั่วไป (User)', status: 'ACTIVE', permissions: ['VIEW_DASHBOARD'] },
  { id: 5, name: 'Tess Tester', role: 'ผู้พัฒนาระบบ (Developer)', status: 'ACTIVE', permissions: ['MANAGE_PRODUCTS', 'MANAGE_ORDERS', 'MANAGE_USERS', 'MANAGE_PROMOTIONS', 'VIEW_DASHBOARD'] },
];

export const ManageUsersPage: React.FC = () => {
  // State หลัก
  const [users, setUsers] = useState<UserData[]>(INITIAL_USERS);
  const [searchQuery, setSearchQuery] = useState('');
  
  // State สำหรับ Modal จัดการสิทธิ์
  const [selectedUser, setSelectedUser] = useState<UserData | null>(null);
  const [isPermModalOpen, setIsPermModalOpen] = useState(false);
  const [tempPermissions, setTempPermissions] = useState<string[]>([]);

  // State สำหรับ Modal เพิ่มพนักงานใหม่
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);
  const [newUserName, setNewUserName] = useState('');
  const [newUserRole, setNewUserRole] = useState('ผู้ดูแล (Staff)');

  // ==========================================
  // 2. Handlers & Actions
  // ==========================================

  // เปิด Modal จัดการสิทธิ์
  const handleOpenPermissionModal = (user: UserData) => {
    setSelectedUser(user);
    setTempPermissions(user.permissions || []);
    setIsPermModalOpen(true);
  };

  // ติ๊กเลือก/ยกเลิกสิทธิ์
  const handleTogglePermission = (permId: string) => {
    setTempPermissions(prev => 
      prev.includes(permId) 
        ? prev.filter(p => p !== permId) 
        : [...prev, permId]
    );
  };

  // บันทึกสิทธิ์ใหม่
  const handleSavePermissions = () => {
    if (!selectedUser) return;

    setUsers(prev => prev.map(u => 
      u.id === selectedUser.id 
        ? { ...u, permissions: tempPermissions } 
        : u
    ));

    alert(`อัปเดตสิทธิ์ของ "${selectedUser.name}" สำเร็จแล้ว!`);
    setIsPermModalOpen(false);
  };

  // สลับสถานะ (เปิดใช้งาน / ถูกระงับ)
  const handleToggleStatus = (userId: number) => {
    setUsers(prev => prev.map(u => {
      if (u.id === userId) {
        const nextStatus = u.status === 'ACTIVE' ? 'SUSPENDED' : 'ACTIVE';
        return { ...u, status: nextStatus };
      }
      return u;
    }));
  };

  // เพิ่มพนักงานใหม่
  const handleAddUser = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newUserName.trim()) return;

    const newUser: UserData = {
      id: users.length + 1,
      name: newUserName,
      role: newUserRole,
      status: 'ACTIVE',
      permissions: ['VIEW_DASHBOARD']
    };

    setUsers([...users, newUser]);
    setNewUserName('');
    setIsAddUserModalOpen(false);
    alert('เพิ่มพนักงานใหม่เรียบร้อยแล้ว!');
  };

  // ฟิลเตอร์การค้นหา
  const filteredUsers = users.filter(u => 
    u.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    u.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
    u.id.toString().includes(searchQuery)
  );

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-100 tracking-wide flex items-center gap-2">
            <Users className="text-indigo-400" />
            จัดการผู้ใช้ & สิทธิ์การทำงาน
          </h1>
          <p className="text-sm text-slate-400 mt-1">เพิ่มพนักงานใหม่ และกำหนดสิทธิ์การเข้าถึงเมนูต่างๆ ของระบบ</p>
        </div>
        
        <button 
          onClick={() => setIsAddUserModalOpen(true)}
          className="flex items-center justify-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-bold rounded-xl transition-all shadow-lg shadow-indigo-600/20 active:scale-95 self-start sm:self-auto"
        >
          <UserPlus size={16} />
          + เพิ่มพนักงานใหม่
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-2.5 text-slate-500" size={18} />
        <input 
          type="text" 
          placeholder="ค้นหาชื่อผู้ใช้, ID หรือบทบาท..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-[#16223f]/40 border border-slate-800/80 rounded-xl pl-10 pr-4 py-2 text-sm text-slate-200 focus:outline-none focus:border-indigo-500 placeholder-slate-500 transition-colors"
        />
      </div>

      {/* Users Table */}
      <div className="bg-[#111a36]/60 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#16223f]/80 text-slate-400 text-xs font-semibold uppercase tracking-wider border-b border-slate-800">
                <th className="py-3.5 px-4">ผู้ใช้งาน</th>
                <th className="py-3.5 px-4">บทบาท (ROLE)</th>
                <th className="py-3.5 px-4 text-center">สิทธิ์การเข้าถึง</th>
                <th className="py-3.5 px-4 text-center">สถานะ</th>
                <th className="py-3.5 px-4 text-right">จัดการ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-sm">
              {filteredUsers.map((user) => {
                const isSuspended = user.status === 'SUSPENDED';

                return (
                  <tr key={user.id} className="hover:bg-slate-800/30 transition-colors">
                    {/* ผู้ใช้งาน */}
                    <td className="py-3.5 px-4">
                      <div className="font-bold text-slate-200">{user.name}</div>
                      <div className="text-xs text-slate-500">ID: {user.id}</div>
                    </td>

                    {/* บทบาท */}
                    <td className="py-3.5 px-4 text-indigo-400 font-medium">
                      {user.role}
                    </td>

                    {/* จำนวนสิทธิ์ที่มี */}
                    <td className="py-3.5 px-4 text-center">
                      <span className="inline-flex items-center gap-1 text-xs bg-slate-800/80 text-slate-300 px-2.5 py-1 rounded-full border border-slate-700/50">
                        <ShieldCheck size={13} className="text-emerald-400" />
                        {user.permissions?.length || 0} เมนู
                      </span>
                    </td>

                    {/* สถานะ */}
                    <td className="py-3.5 px-4 text-center">
                      <button
                        onClick={() => handleToggleStatus(user.id)}
                        title="คลิกเพื่อเปลี่ยนสถานะ"
                        className={`inline-flex items-center gap-1 text-[11px] px-2.5 py-0.5 rounded-full font-bold transition-all ${
                          isSuspended 
                            ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20 hover:bg-rose-500/20' 
                            : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20'
                        }`}
                      >
                        {isSuspended ? (
                          <><Lock size={11} /> ถูกระงับ</>
                        ) : (
                          <><Unlock size={11} /> ปกติ</>
                        )}
                      </button>
                    </td>

                    {/* ปุ่มจัดการสิทธิ์ */}
                    <td className="py-3.5 px-4 text-right">
                      <button 
                        onClick={() => handleOpenPermissionModal(user)}
                        className="px-3.5 py-1.5 bg-[#1e293b] hover:bg-indigo-600 text-slate-200 hover:text-white text-xs font-semibold rounded-xl border border-slate-700 hover:border-indigo-500 transition-all shadow-sm active:scale-95"
                      >
                        จัดการสิทธิ์
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* ==========================================
          MODAL: จัดการสิทธิ์การใช้งาน (Permissions)
         ========================================== */}
      {isPermModalOpen && selectedUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-[#111a36] border border-slate-800 rounded-2xl w-full max-w-lg p-6 shadow-2xl space-y-4">
            
            {/* Modal Header */}
            <div className="flex justify-between items-center pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Shield className="text-indigo-400" size={20} />
                <h3 className="text-lg font-bold text-slate-100">กำหนดสิทธิ์การใช้งาน</h3>
              </div>
              <button 
                onClick={() => setIsPermModalOpen(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* User Details */}
            <div className="bg-[#16223f]/50 p-3 rounded-xl border border-slate-800 flex justify-between items-center">
              <div>
                <p className="text-xs text-slate-400">กำหนดสิทธิ์ให้ผู้ใช้:</p>
                <p className="text-sm font-bold text-indigo-300">{selectedUser.name}</p>
              </div>
              <span className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-lg">
                {selectedUser.role}
              </span>
            </div>

            {/* Permissions List */}
            <div className="space-y-2 max-h-[300px] overflow-y-auto pr-1">
              <p className="text-xs font-semibold text-slate-300 mb-2">เลือกเมนูที่อนุญาตให้เข้าถึง:</p>
              
              {ALL_PERMISSIONS.map((perm) => {
                const isChecked = tempPermissions.includes(perm.id);
                return (
                  <div 
                    key={perm.id}
                    onClick={() => handleTogglePermission(perm.id)}
                    className={`flex items-start justify-between p-3 rounded-xl border cursor-pointer transition-all ${
                      isChecked 
                        ? 'bg-indigo-950/40 border-indigo-500/50 text-indigo-200' 
                        : 'bg-[#16223f]/20 border-slate-800/80 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className="space-y-0.5 pr-2">
                      <div className="text-xs font-bold text-slate-200">{perm.label}</div>
                      <div className="text-[11px] text-slate-400">{perm.description}</div>
                    </div>

                    <div className={`mt-0.5 w-5 h-5 rounded-md flex items-center justify-center border transition-all ${
                      isChecked 
                        ? 'bg-indigo-600 border-indigo-500 text-white' 
                        : 'border-slate-700 bg-slate-900'
                    }`}>
                      {isChecked && <Check size={12} />}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Modal Actions */}
            <div className="flex gap-3 pt-3 border-t border-slate-800">
              <button 
                onClick={() => setIsPermModalOpen(false)}
                className="flex-1 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold rounded-xl text-xs transition-colors"
              >
                ยกเลิก
              </button>
              <button 
                onClick={handleSavePermissions}
                className="flex-1 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs transition-colors shadow-lg shadow-indigo-600/20"
              >
                บันทึกการเปลี่ยนแปลง
              </button>
            </div>

          </div>
        </div>
      )}

      {/* ==========================================
          MODAL: เพิ่มพนักงานใหม่
         ========================================== */}
      {isAddUserModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-[#111a36] border border-slate-800 rounded-2xl w-full max-w-md p-6 shadow-2xl space-y-4">
            
            <div className="flex justify-between items-center pb-3 border-b border-slate-800">
              <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                <UserPlus className="text-indigo-400" size={20} />
                เพิ่มพนักงานใหม่
              </h3>
              <button 
                onClick={() => setIsAddUserModalOpen(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleAddUser} className="space-y-3.5 text-sm">
              <div>
                <label className="block text-slate-400 text-xs mb-1">ชื่อผู้ใช้งาน/พนักงาน</label>
                <input 
                  type="text" 
                  required
                  placeholder="เช่น Somchai Staff" 
                  value={newUserName}
                  onChange={e => setNewUserName(e.target.value)}
                  className="w-full bg-[#16223f] border border-slate-700 rounded-xl px-3 py-2 text-slate-100 focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-400 text-xs mb-1">บทบาท (Role)</label>
                <select 
                  value={newUserRole}
                  onChange={e => setNewUserRole(e.target.value)}
                  className="w-full bg-[#16223f] border border-slate-700 rounded-xl px-3 py-2 text-slate-100 focus:border-indigo-500 focus:outline-none cursor-pointer"
                >
                  <option value="ผู้ดูแล (Staff)">ผู้ดูแล (Staff)</option>
                  <option value="ผู้จัดการ (Manager)">ผู้จัดการ (Manager)</option>
                  <option value="ผู้พัฒนาระบบ (Developer)">ผู้พัฒนาระบบ (Developer)</option>
                </select>
              </div>

              <div className="flex gap-3 pt-3 border-t border-slate-800">
                <button 
                  type="button" 
                  onClick={() => setIsAddUserModalOpen(false)}
                  className="flex-1 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold rounded-xl text-xs transition-colors"
                >
                  ยกเลิก
                </button>
                <button 
                  type="submit" 
                  className="flex-1 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs transition-colors shadow-lg shadow-indigo-600/20"
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

export default ManageUsersPage;