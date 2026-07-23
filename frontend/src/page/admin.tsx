import React, { useState } from 'react';
import { AdminSidebar } from '#component/admin.sidebar.tsx';
import { AdminDashboard } from '#component/admin.dashboard.tsx';
import { ManageItemsPage } from '#component/admin.manageItem.tsx';
import ManageUsersPage from "#component/admin.manageUser.tsx";
import { ManagePromotionsPage } from '#component/admin.managePromotion.tsx';
import { ManageOrdersPage } from '#component/admin.manageOrder.tsx';
import { SystemSettingsPage } from '#component/admin.system.tsx';
import { ManageComplaintsPage } from '#component/admin.manageComplain.tsx';
import { AdminNavbar } from '#component/admin.navbar.tsx'; 


export const AdminLayout: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState('dashboard'); // เริ่มต้นที่หน้าแดชบอร์ด
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    /* 💡 ใช้ h-screen และ flex-col เพื่อควบคุมไม่ให้หน้าจอยืดล้น */
    <div className="h-screen w-screen bg-[#070b19] font-sans antialiased text-slate-200 flex flex-col overflow-hidden">
      
      {/* 1. แถบเมนูด้านบน (Top Navbar) */}
      <div className="w-full z-50 flex-shrink-0">
        <AdminNavbar>
          <AdminNavbar.Branding text="ร้านขายแผ่นและตลับเกม" />
          <AdminNavbar.Spacing level={1} />
          <AdminNavbar.Search onClick={(value) => console.log('Searching:', value)} />
          <AdminNavbar.Spacing level={1} />
          <AdminNavbar.Profile />
        </AdminNavbar>
      </div>

      {/* 2. พื้นที่ด้านล่าง Navbar (รวม Sidebar และ Content Area เข้าด้วยกัน) */}
      <div className="flex flex-1 relative overflow-hidden">
        
        {/* แถบเมนูด้านข้าง (Admin Sidebar) */}
        <AdminSidebar 
          activeMenu={activeMenu} 
          setActiveMenu={setActiveMenu}
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
        />

        {/* 3. พื้นที่แสดงเนื้อหาหลัก (Main Content Area) */}
        <main 
          className={`flex-1 overflow-y-auto transition-all duration-300 bg-[#070b19] ${
            isCollapsed ? 'ml-20' : 'ml-64'
          }`}
        >
          {/* ปรับระยะห่างรอบนอกกล่องสีกรมท่า */}
          <div className="pt-4 pb-6 px-4 md:px-6 max-w-6xl mx-auto">
            
            {/* กล่องเนื้อหาหลักสีกรมท่า */}
            <div className="bg-[#0f162c] rounded-xl border border-slate-800/80 min-h-[500px] shadow-2xl p-5 md:p-6 relative overflow-hidden">
              
              {/* ส่วนควบคุมการเปลี่ยนหน้าเพจ */}
              {activeMenu === 'dashboard' && <AdminDashboard />}

              {activeMenu === 'shipments' && <ManageOrdersPage />}

              {activeMenu === 'items' && <ManageItemsPage />}

              {activeMenu === 'users' && <ManageUsersPage />}

              {activeMenu === 'promotions' && <ManagePromotionsPage />}

              {activeMenu === 'settings' && <SystemSettingsPage />}

              {activeMenu === 'complaints' && <ManageComplaintsPage />}

              {/* ดักจับกรณีหน้าอื่นๆ */}
              {!['dashboard', 'shipments', 'items', 'users', 'promotions', 'settings', 'complaints'].includes(activeMenu) && (
                <div className="animate-in fade-in duration-200 py-16 text-center text-slate-500">
                  <p className="text-base">กำลังพัฒนาหน้าส่วนระบบนี้เพิ่มในโฟลเดอร์ pages/admin/ ...</p>
                </div>
              )}
              
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;