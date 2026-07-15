import { useState } from "react"; // 1. เพิ่ม useState สำหรับจำหน้าปัจจุบัน
import styled from "styled-components";
import Stock from "./staff.stock";
import Order from "./staff.order";

// for test
// const Reports = () => <div style={{ padding: "1rem", color: "white" }}>Reports Content</div>;

const Sidebar = function () {
  const [activeTab, setActiveTab] = useState("Stock");

  const renderPage = () => {
    switch (activeTab) {
      case "Stock":
        return <Stock/>;
      case "Orders":
        return <Order/>;
      // case "Reports":
      //   return <Reports/>;
      default:
        return <Stock/>;
    }
  };

  return (
    <Container>
      <SidebarMenu>
        <SidebarItem onClick={() => setActiveTab("Stock")}>Stock</SidebarItem>
        <SidebarItem onClick={() => setActiveTab("Orders")}>Orders</SidebarItem>
        {/* <SidebarItem onClick={() => setActiveTab("Reports")}>Reports</SidebarItem> */}
      </SidebarMenu>

      <ContentArea>
        {renderPage()}
      </ContentArea>
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const SidebarMenu = styled.div`
  background-color: darkblue;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  color: black;
  font-size: 1.5rem;
  margin: 1rem;
  width: 20%;
`;

const SidebarItem = styled.button`
  font-size: 1.5rem;
  width: 100%;
  height: 100%;
  background-color: blue;
  border: 0px solid white;
  color: white; 
  cursor: pointer;
  padding: 0.5rem 1rem; 
  transition: background-color 0.2s ease-in-out;
  
  &:hover {
    background-color: darkblue;
  }
`;

const ContentArea = styled.div`
  margin: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  width: 100%;
`;