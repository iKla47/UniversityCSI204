import react, { useRef, useState } from "react";
import styled from "styled-components";
import apiStorage from "#util/api.storage.ts";
import apiAuth from "#util/api.auth.ts";
import cmmNavi from "#util/common.navigation.ts";

import { CtxIrNavBar, useIrNavBar, type IrNavBar } from "#context/common.ui.ts";
import { 
  CircleUser, 
  Search as SearchIcon, 
  Gamepad2, 
  ShoppingBag, 
  PackageCheck, 
  Settings, 
  LayoutDashboard, 
  LogOut 
} from "lucide-react";
import { useAccountBasic } from "#context/customer.ts";

/* ==========================================================================
   Interfaces / Types
   ========================================================================== */
interface PropContent {
  children?: react.ReactNode;
}

interface PropBranding {
  icon?: string | react.ReactNode;
  text?: string;
  onClick?: () => void;
}

interface PropSearch {
  placeholder?: string;
  onClick?: (value: string) => void;
  onChange?: (value: string) => void;
}

interface PropMenu {
  children?: react.ReactNode;
  hideOnWidth?: number;
}

interface PropMenuItem {
  icon?: string | React.ComponentType<unknown> | React.ReactElement;
  text?: string;
  onClick?: () => void;
  hideOnWidth?: number;
}

interface PropProfile {
  icon?: string | undefined;
  onClick?: () => void;
}

interface PropSpacing {
  level?: number;
}

/* ==========================================================================
   Main Component: NavBar
   ========================================================================== */
const content = function NavBar(prop: PropContent) {
  const resizeEvent = () => {
    setContext({
      width: resizeValue(),
    });
  };

  const resizeValue = () => {
    if (
      reference.current instanceof HTMLDivElement &&
      reference.current !== HTMLDivElement.prototype
    ) {
      return reference.current.clientWidth;
    }
    return 0;
  };

  const reference = react.useRef(HTMLDivElement.prototype);
  const [context, setContext] = react.useState<IrNavBar>({
    width: resizeValue(),
  });

  react.useLayoutEffect(() => {
    resizeEvent();
  }, []);

  react.useEffect(() => {
    window.addEventListener("resize", resizeEvent);
    return () => {
      window.removeEventListener("resize", resizeEvent);
    };
  }, []);

  return (
    <Root ref={reference}>
      <CtxIrNavBar value={context}>{prop.children}</CtxIrNavBar>
    </Root>
  );
};

/* ==========================================================================
   Sub Components
   ========================================================================== */

/** Branding (โลโก้ + ชื่อร้าน) */
content.Branding = function NavBarBranding(prop: PropBranding) {
  const context = useIrNavBar();
  const readable = context.width === 0 || context.width >= 768;

  const onClick = (event: react.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    if (prop.onClick) prop.onClick();
  };

  return (
    <Branding onClick={onClick}>
      <BrandingIconBox>
        {typeof prop.icon === "string" ? (
          <BrandingImg src={prop.icon} alt="Logo" />
        ) : prop.icon ? (
          prop.icon
        ) : (
          <Gamepad2 size={20} color="#ffffff" />
        )}
      </BrandingIconBox>
      <BrandingLabel $show={readable}>
        {prop.text ?? "ร้านขายแผ่นและตลับเกม"}
      </BrandingLabel>
    </Branding>
  );
};

/** Search (ช่องค้นหา) */
content.Search = function NavBarSearch(prop: PropSearch) {
  const ref = useRef<HTMLInputElement>(null);

  const onClick = (event: react.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    if (prop.onClick && ref.current) {
      prop.onClick(ref.current.value);
    }
  };

  const onChange = (event: react.ChangeEvent<HTMLInputElement>) => {
    if (prop.onChange) {
      prop.onChange(event.target.value);
    }
  };

  const handleKeyDown = (event: react.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && prop.onClick && ref.current) {
      prop.onClick(ref.current.value);
    }
  };

  return (
    <SearchWrapper>
      <Search
        ref={ref}
        placeholder={prop.placeholder ?? "ค้นหา เกมสุดที่รัก ..."}
        onChange={onChange}
        onKeyDown={handleKeyDown}
      />
      <SearchBtn onClick={onClick}>
        <SearchIcon size={18} />
      </SearchBtn>
    </SearchWrapper>
  );
};

/** Profile + Dropdown Menu (เมนูป๊อปอัพเมื่อกดรูปโปรไฟล์) */
/** Profile + Dropdown Menu */
content.Profile = function NavBarProfile(prop: PropProfile) {
  const { data } = useAccountBasic();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (event: react.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setIsOpen(!isOpen);
    if (prop.onClick) prop.onClick();
  };

  // ฟังก์ชันย้ายหน้า
  const handleMenuClick = (actionPath: string) => {
    setIsOpen(false);
    window.location.hash = actionPath;
  };

  // ฟังก์ชันลงชื่อออก (Logout) ที่ถูกต้อง
  const handleLogout = () => {
    setIsOpen(false);
    // ล้างข้อมูล Session/Token
    apiAuth.saveSetPrefered(-1);
    apiAuth.saveWrite();

    // เด้งกลับไปหน้าเข้าสู่ระบบ (Auth)
    void cmmNavi.toAuth({ replace: true });
  };

  return (
    <ProfileContainer>
      <Profile onClick={toggleDropdown}>
        {!prop.icon && !data && <CircleUser size={32} />}
        {!prop.icon &&
          data &&
          (data.icon && data.icon.length > 0 ? (
            <img src={apiStorage.getUrlStream(data.icon)} alt="Profile" />
          ) : (
            <CircleUser size={32} />
          ))}
        {prop.icon && <img src={prop.icon} alt="Profile" />}
      </Profile>

      {isOpen && (
        <>
          <Backdrop onClick={() => setIsOpen(false)} />

          <DropdownMenu>
            <DropdownItem onClick={() => handleMenuClick("#settings")}>
              <Settings size={18} />
              <span>การตั้งค่า</span>
            </DropdownItem>

            <DropdownDivider />

            {/*  เปลี่ยน onClick มาเรียก handleLogout */}
            <DropdownItem $danger onClick={handleLogout}>
              <LogOut size={18} />
              <span>ลงชื่อออก</span>
            </DropdownItem>
          </DropdownMenu>
        </>
      )}
    </ProfileContainer>
  );
};

/** Menu */
content.Menu = function NavBarMenu(prop: PropMenu) {
  const context = useIrNavBar();
  const visible = prop.hideOnWidth
    ? prop.hideOnWidth <= context.width
    : true;

  return <Menu $visible={visible}>{prop.children}</Menu>;
};

/** MenuItem */
content.MenuItem = function NavBarMenuItem(prop: PropMenuItem) {
  const context = useIrNavBar();
  const visible = prop.hideOnWidth
    ? prop.hideOnWidth <= context.width
    : true;
  const source = prop.icon;

  const onClick = (event: react.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    if (prop.onClick) prop.onClick();
  };

  const Image = () => {
    if (typeof source === "string") return <img src={source} alt="" />;
    if (react.isValidElement(source)) return source;
    if (typeof source === "function" || typeof source === "object") {
      const Component = source as React.ComponentType;
      return <Component />;
    }
    return null;
  };

  return (
    <MenuItem $visible={visible} onClick={onClick}>
      <Image />
      {context.width === 0 || context.width >= 768 ? prop.text : ""}
    </MenuItem>
  );
};

/** Spacing */
content.Spacing = function NavBarSpacing(prop: PropSpacing) {
  return <Spacing $level={prop.level ?? 1} />;
};

/* ==========================================================================
   Styled Components (Admin Theme + Dropdown Menu Style)
   ========================================================================== */

const Root = styled.div`
  position: relative;
  z-index: 50;
  height: 64px;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 12px;
  align-items: center;

  background-color: #16223f;
  border-bottom: 1px solid #1e293b;
  padding: 0px 16px;

  & > *:first-child {
    margin-left: 8px;
  }
  & > *:last-child {
    margin-right: 8px;
  }
`;

const Branding = styled.button`
  background-color: transparent;
  border: transparent;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  gap: 12px;
  margin: 0px;
  padding: 0px;
  cursor: pointer;
`;

const BrandingIconBox = styled.div`
  width: 32px;
  height: 32px;
  background-color: #4f46e5;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BrandingImg = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
`;

const BrandingLabel = styled.label<{ $show: boolean }>`
  font-size: 1.125rem;
  font-weight: 600;
  color: #f8fafc;
  letter-spacing: 0.025em;
  display: ${(prop) => (prop.$show ? "block" : "none")};
  white-space: nowrap;
  cursor: pointer;
`;

const SearchWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 384px;

  @media (max-width: 640px) {
    display: none;
  }
`;

const Search = styled.input`
  width: 100%;
  height: 36px;
  background-color: #2a3c66;
  font-size: 0.875rem;
  color: #e2e8f0;
  padding: 0px 40px 0px 16px;
  border-radius: 9999px;
  border: 1px solid transparent;
  outline: none;
  transition: all 0.2s ease;

  &::placeholder {
    color: #94a3b8;
  }

  &:focus {
    border-color: #6366f1;
    box-shadow: 0 0 0 1px #6366f1;
  }
`;

const SearchBtn = styled.button`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  color: #94a3b8;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #ffffff;
  }
`;

/* Container สำหรับล็อกตำแหน่งของ Dropdown */
const ProfileContainer = styled.div`
  position: relative;
`;

const Profile = styled.button`
  background: transparent;
  border: none;
  padding: 0px;
  width: 36px;
  height: 36px;
  border-radius: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  color: #cbd5e1;
  border: 2px solid #475569;
  transition: all 0.2s;

  &:hover {
    border-color: #818cf8;
  }

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

/* Backdrop ใสดักกดปิดป๊อปอัพ */
const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 90;
`;

/* กล่อง Dropdown Menu */
const DropdownMenu = styled.div`
  position: absolute;
  right: 0;
  top: 48px;
  width: 200px;
  background-color: #1a2647;
  border: 1px solid #2d3d66;
  border-radius: 12px;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5);
  padding: 8px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 4px;
  animation: fadeIn 0.15s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-8px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const DropdownItem = styled.button<{ $danger?: boolean }>`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 10px 12px;
  background: transparent;
  border: none;
  border-radius: 8px;
  font-size: 0.875rem;
  color: ${(props) => (props.$danger ? "#f87171" : "#e2e8f0")};
  cursor: pointer;
  transition: all 0.15s ease;

  &:hover {
    background-color: ${(props) => (props.$danger ? "rgba(239, 68, 68, 0.15)" : "#2a3c66")};
    color: ${(props) => (props.$danger ? "#fca5a5" : "#ffffff")};
  }
`;

const DropdownDivider = styled.div`
  height: 1px;
  background-color: #2d3d66;
  margin: 4px 0;
`;

const Menu = styled.div<{ $visible: boolean }>`
  display: ${(prop) => (prop.$visible ? "flex" : "none")};
  align-items: center;
  gap: 20px;
`;

const MenuItem = styled.button<{ $visible: boolean }>`
  background: transparent;
  border: none;
  color: #cbd5e1;
  font-size: 0.875rem;
  cursor: pointer;
  display: ${(prop) => (prop.$visible ? "flex" : "none")};
  align-items: center;
  gap: 8px;
  transition: color 0.2s;

  &:hover {
    color: #ffffff;
  }
`;

const Spacing = styled.div<{ $level: number }>`
  flex-grow: ${(prop) => prop.$level};
`;

/* ==========================================================================
   Exports
   ========================================================================== */
Object.freeze(content);

export const AdminNavbar = content;
export default content;