import styled from "styled-components";
import ctx from "#context/common.ts";
import ctxUI from "#context/common.ui.ts";
import ctxCustomer from "#context/customer.ts";
import apiAccount from "#util/api.account.ts";
import apiStorage from "#util/api.storage.ts";

import { useEffect, useRef, useState, type ChangeEvent } from "react";
import { XIcon, MinusIcon, PlusIcon, Trash2Icon, TagIcon, TicketIcon, ArrowRightIcon } from "lucide-react";
import { type MouseEvent } from "react";

/**
 * ส่วนประกอบการแสดงผลรายการในตะกร้าและการสั่งซื้อสินค้า
 */
const content = function CustomerCart(prop: PropRoot) {
  return content.Root(prop);
};

/**
 * ส่วนประกอบรวมทุกส่วนประกอบย่อยเข้าด้วยกัน 
 */
content.Root = function CartRoot(prop: PropRoot) {
  const onClickClose = (event: MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();

    if (prop.onClose) {
      prop.onClose();
    }
  };

  return (
    <StyleView $visible={prop.visible ?? true}>
      <StyleViewInner $visible={prop.visible ?? true}>
        <StyleViewPanel>
          <StyleHeader>
            <StyleHeaderText>ตะกร้าสินค้าของคุณ</StyleHeaderText>
            <StyleHeaderClose onClick={onClickClose} aria-label="ปิดตะกร้าสินค้า">
              <XIcon />
            </StyleHeaderClose>
          </StyleHeader>

          <StyleMain>
            {/* ฝั่งซ้าย: รายการเกมในตะกร้า */}
            <StyleMainContent>
              <content.List />
            </StyleMainContent>

            {/* ฝั่งขวา: รายการสินค้าแบบยืดยาว + สรุปคำสั่งซื้อ และส่วนลด */}
            <StyleMainSidebar>
              <content.Receipt />
              <content.PromoCode />
              <content.Summary />
              <StyleCheckoutBtn>
                <span>สั่งซื้อสินค้า</span>
                <ArrowRightIcon size={18} />
              </StyleCheckoutBtn>
            </StyleMainSidebar>
          </StyleMain>
        </StyleViewPanel>
      </StyleViewInner>
    </StyleView>
  );
};

content.List = function CartList() {
  const queryList = ctxCustomer.useCartQuery();
  const queryData = queryList.data;

  if (!queryData || queryData.length === 0) {
    return (
      <StyleEmptyState>
        <p>ไม่มีสินค้าในตะกร้าของคุณ</p>
      </StyleEmptyState>
    );
  }

  return (
    <StyleItemContainer>
      {queryData.map((x) => (
        <content.ListItem key={x.itemId} uid={x.itemId} pid={x.productId} />
      ))}
    </StyleItemContainer>
  );
};

content.ListItem = function CartListItem({ uid, pid }: 
  { uid: number; pid: number }) 
{
  const auth = ctx.useAuth();
  const toast = ctxUI.useToast();
  const queryList = ctxCustomer.useCartQuery();
  const queryItem = ctxCustomer.useProduct(pid);
  
  const list = queryList.data;
  const item = queryItem.data;
  
  const cover = item ? apiStorage.getUrlStream(item.cover) : undefined;
  const name = item ? item.name : "กำลังโหลด...";
  const developer = "";
  const tags = ["Action", "RPG"];

  const quantityFind = list ? list.find((x) => x.itemId === uid) : undefined;
  const quantity = quantityFind ? quantityFind.quantity : 1;
  const pending = queryList.isLoading;

  const onDecrement = (event: MouseEvent) => 
  {
    event.preventDefault ();
    event.stopPropagation(); // ป้องกันการกดโดนการ์ด

    if (quantity === 1)
    {
      void apiAccount
        .deleteCart(auth.session, uid)
        .then(() => queryList.refetch())
        .then(() => {
          toast.setText(`ลบ ${name} ออกจากตะกร้าเรียบร้อย`);
          toast.setDuration(4000);
          toast.setVisible(true);
        });
    }
    else
    {
      void apiAccount
        .updateCart(auth.session, {
          itemId: uid,
          quantity: quantity - 1,
        })
        .then(() => queryList.refetch());
    }
  };
  const onIncrement = (event: MouseEvent) => 
  {
    event.preventDefault ();
    event.stopPropagation(); // ป้องกันการกดโดนการ์ด

    void apiAccount
        .updateCart(auth.session, {
          itemId: uid,
          quantity: quantity + 1,
        })
        .then(() => queryList.refetch());
  }

  const handleCardClick = () => {
    // ใส่ Logic นำทางไปยังหน้ารายละเอียดสินค้าเมื่อคลิกการ์ด (ถ้ามี)
  };

  return (
    <StyleItemCard onClick={handleCardClick}>
      <StyleItemImgWrapper>
        <StyleItemImg src={cover} alt={name} />
      </StyleItemImgWrapper>

      <StyleItemDetails>
        <StyleItemHeaderBlock>
          <StyleItemTitle>{name}</StyleItemTitle>
          <StyleItemDeveloper>ผู้พัฒนา: {developer}</StyleItemDeveloper>
        </StyleItemHeaderBlock>

        <StyleTagContainer>
          {tags.map((tag: string, index: number) => (
            <StyleTagBadge key={index}>
              <TagIcon size={10} />
              <span>{tag}</span>
            </StyleTagBadge>
          ))}
        </StyleTagContainer>

        <StyleItemActionsRow>
          <StyleQuantityControl>
            <StyleQtyBtn
              onClick={onDecrement}
              disabled={pending}
              aria-label="ลดจำนวน"
            >
              <MinusIcon size={14} />
            </StyleQtyBtn>
            <StyleQtyDisplay>{quantity}</StyleQtyDisplay>
            <StyleQtyBtn
              onClick={onIncrement}
              disabled={pending}
              aria-label="เพิ่มจำนวน"
            >
              <PlusIcon size={14} />
            </StyleQtyBtn>
          </StyleQuantityControl>

          <StyleRemoveBtn onClick={onDecrement} disabled={pending}>
            <Trash2Icon size={15} />
            <span>นำออก</span>
          </StyleRemoveBtn>
        </StyleItemActionsRow>
      </StyleItemDetails>
    </StyleItemCard>
  );
};

content.Receipt = function CartReceipt() {
  const queryList = ctxCustomer.useCartQuery();
  const queryData = queryList.data;

  return (
    <StyleReceipt>
      <StyleReceiptLabel>รายการสินค้า</StyleReceiptLabel>
      <StyleReceiptBody>
        {queryData && queryData.length > 0 ? (
          queryData.map((x) => <content.ReceiptItem key={x.itemId} uid={x.itemId} pid={x.productId} />)
        ) : (
          <StyleReceiptEmpty>ไม่มีรายการ</StyleReceiptEmpty>
        )}
      </StyleReceiptBody>
    </StyleReceipt>
  );
};

content.ReceiptItem = function CartReceiptItem({ uid, pid }: { uid: number; pid: number }) {
  const queryList = ctxCustomer.useCartQuery();
  const queryItem = ctxCustomer.useProduct(pid);
  const list = queryList.data;
  const item = queryItem.data;
  
  const name = item ? item.name : "กำลังโหลด...";
  const price = item ? item.price : 0;
  const quantityFind = list ? list.find((x) => x.itemId === uid) : undefined;
  const quantity = quantityFind ? quantityFind.quantity : 0;

  return (
    <StyleReceiptRow>
      <StyleReceiptItemInfo>
        <StyleReceiptItemName>{name}</StyleReceiptItemName>
        <StyleReceiptItemQty>x{quantity}</StyleReceiptItemQty>
      </StyleReceiptItemInfo>
      <StyleReceiptItemPrice>฿{(price * quantity).toLocaleString()}</StyleReceiptItemPrice>
    </StyleReceiptRow>
  );
};

content.PromoCode = function CartPromoCode() 
{
  const [code, setCode] = useState("");
  
  const onClick = (event: ChangeEvent<HTMLInputElement>) =>
  {
    setCode (event.target.value);
  }

  return (
    <StylePromoBox>
      <StylePromoLabel>
        <TicketIcon size={16} />
        <span>โค้ดส่วนลด</span>
      </StylePromoLabel>
      <StylePromoInputGroup>
        <StylePromoInput
          type="text"
          placeholder="ใส่โค้ดส่วนลดที่นี่"
          value={code}
          onChange={onClick}
        />
        <StylePromoApplyBtn>ใช้งาน</StylePromoApplyBtn>
      </StylePromoInputGroup>
    </StylePromoBox>
  );
};

content.Summary = function CartSummary() {
  const queryList = ctxCustomer.useCartQuery();
  const queryBasics = ctxCustomer.useProducts(
    !queryList.data ? [] : queryList.data.map((x) => x.productId)
  );

  const list = queryList.data;
  const basic = queryBasics;

  const totalItems = list ? list.reduce((x, y) => (x += y.quantity), 0) : 0;

  const subtotal = list
    ? list
        .map((x) => {
          const prod = basic.find((y) => x.productId == y.data?.id);
          const price = prod ? prod.data?.price ?? 0 : 0;
          return price * x.quantity;
        })
        .reduce((x, y) => x + y, 0)
    : 0;

  const discount = 0;
  const taxRate = 0.07;
  const tax = Math.round(subtotal * taxRate);
  const total = subtotal - discount + tax;

  return (
    <StyleSummaryBox>
      <StyleSummaryRow>
        <span>ราคารวม ({totalItems} ชิ้น)</span>
        <span>฿{subtotal.toLocaleString()}</span>
      </StyleSummaryRow>
      <StyleSummaryRow>
        <span>ส่วนลด</span>
        <StyleDiscountText>-฿{discount.toLocaleString()}</StyleDiscountText>
      </StyleSummaryRow>
      <StyleSummaryRow>
        <span>ภาษีมูลค่าเพิ่ม (7%)</span>
        <span>฿{tax.toLocaleString()}</span>
      </StyleSummaryRow>
      <StyleDivider />
      <StyleTotalRow>
        <span>ยอดชำระสุทธิ</span>
        <StyleTotalAmount>฿{total.toLocaleString()}</StyleTotalAmount>
      </StyleTotalRow>
    </StyleSummaryBox>
  );
};

content.Provider = function CartProvider() {
  const context = ctxCustomer.useCart();
  const close = useRef(() => {
    return;
  });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    context.setVisible = (value) => {
      setVisible(value);
    };
    context.setClose = (value) => {
      close.current = value;
    };

    return () => {
      context.setVisible = () => {
        return;
      };
      context.setClose = () => {
        return;
      };
    };
  });

  return <content.Root visible={visible} onClose={close.current} />;
};

/* ==========================================================================
   STYLED COMPONENTS
   ========================================================================== */

const StyleView = styled.div<{ $visible: boolean }>`
  display: ${(prop) => (prop.$visible ? "block" : "none")};
  pointer-events: ${(prop) => (prop.$visible ? "all" : "none")};
  position: fixed;
  overflow: hidden;
  overscroll-behavior: none;
  inset: 0px;
  z-index: 1000;
`;

const StyleViewInner = styled.div<{ $visible: boolean }>`
  width: 100%;
  height: 100%;
  background-color: ${(prop) => (prop.$visible ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0)")};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
`;

const StyleViewPanel = styled.div`
  max-width: 1268px;
  max-height: 768px;
  width: 100%;
  height: 100%;
  pointer-events: all;
  background-color: var(--bg-primary);
  border: 2px solid var(--bg-primary-border);
  border-radius: 4px;
  padding: 16px;

  position: relative;
  display: flex;
  flex-direction: column;

  @media (max-width: 860px) {
    max-width: 100%;
    max-height: 100%;
  }
`;

const StyleHeader = styled.header`
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyleHeaderText = styled.h1`
  font-size: 2rem;
  font-weight: normal;
  margin: 0;
  color: var(--text-primary, #ffffff);
`;

const StyleHeaderClose = styled.button`
  position: absolute;
  inset: 16px 16px auto auto;
  width: 40px;
  height: 40px;
  padding: 0px;
  margin: 0px;
  background: transparent;
  border: none;
  color: var(--text-primary, #ffffff);
  cursor: pointer;

  & > img,
  & > svg {
    width: 24px;
    height: 24px;
    display: inline-block;
    vertical-align: middle;
  }
`;

const StyleMain = styled.main`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 16px;
  width: 100%;
  height: 100%;
  overflow-y: auto;

  @media (max-width: 860px) {
    flex-direction: column;
    flex-wrap: nowrap;
  }
`;

const StyleMainContent = styled.div`
  width: 75%;
  overflow-y: auto;

  @media (max-width: 860px) {
    width: 100%;
  }
`;

const StyleMainSidebar = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 12px;

  @media (max-width: 1268px) {
    width: 324px;
  }
  @media (max-width: 860px) {
    width: 100%;
    height: auto;
  }
`;

/* --- Item List Components --- */

const StyleItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 2px 2px 8px 2px;
`;

const StyleEmptyState = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  color: var(--text-secondary, #a1a1aa);
`;

const StyleItemCard = styled.button`
  display: flex;
  gap: 16px;
  width: 100%;
  text-align: left;
  background-color: var(--bg-card, rgba(255, 255, 255, 0.03));
  border: 1px solid var(--bg-primary-border, rgba(255, 255, 255, 0.06));
  border-radius: 8px;
  padding: 12px;
  cursor: pointer;
  outline: none;
  transition: all 0.2s ease;

  &:hover,
  &:focus {
    border-color: rgba(255, 255, 255, 0.2);
    background-color: rgba(255, 255, 255, 0.06);
  }

  @media (max-width: 512px) {
    flex-direction: column;
  }
`;

const StyleItemImgWrapper = styled.div`
  width: 140px;
  height: 105px;
  flex-shrink: 0;
  border-radius: 6px;
  overflow: hidden;
  background-color: #000;

  @media (max-width: 512px) {
    width: 100%;
    height: 160px;
  }
`;

const StyleItemImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
  user-select: none;
`;

const StyleItemDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
`;

const StyleItemHeaderBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyleItemTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  color: var(--text-primary, #ffffff);
`;

const StyleItemDeveloper = styled.span`
  font-size: 0.8rem;
  color: var(--text-secondary, #808191);
  margin-top: 2px;
`;

const StyleTagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const StyleTagBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 8px;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.06);
  font-size: 0.725rem;
  color: var(--text-secondary, #a1a1aa);
`;

const StyleItemActionsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 4px;
`;

const StyleQuantityControl = styled.div`
  display: inline-flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  padding: 2px;
`;

const StyleQtyBtn = styled.button`
  background: transparent;
  border: none;
  color: #fff;
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  cursor: pointer;

  &:hover:not(:disabled) {
    background-color: rgba(255, 255, 255, 0.1);
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

const StyleQtyDisplay = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  min-width: 28px;
  text-align: center;
  color: #fff;
`;

const StyleRemoveBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: transparent;
  border: none;
  color: #ff4d4f;
  font-size: 0.825rem;
  padding: 4px 8px;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover:not(:disabled) {
    background-color: rgba(255, 77, 79, 0.1);
  }
`;

/* --- Sidebar Components (ส่วนยืดยาวตามแบบเดิม) --- */

const StyleReceipt = styled.div`
  width: 100%;
  height: 100%; /* ยึดเต็มพื้นที่สูงเหมือนต้นฉบับ */
  background-color: var(--bg-secondary);
  border-radius: 4px;
  padding: 8px 16px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const StyleReceiptLabel = styled.label`
  display: block;
  font-size: 1.25rem;
  color: var(--text-primary, #ffffff);
`;

const StyleReceiptBody = styled.div`
  padding: 12px 0px;
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const StyleReceiptEmpty = styled.span`
  font-size: 0.85rem;
  color: var(--text-secondary, #72727a);
`;

const StyleReceiptRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
`;

const StyleReceiptItemInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  overflow: hidden;
`;

const StyleReceiptItemName = styled.span`
  color: var(--text-secondary, #d1d1d6);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 140px;
`;

const StyleReceiptItemQty = styled.span`
  color: #72727a;
`;

const StyleReceiptItemPrice = styled.span`
  color: var(--text-primary, #ffffff);
  font-weight: 500;
`;

const StylePromoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const StylePromoLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.825rem;
  color: var(--text-secondary, #a1a1aa);
`;

const StylePromoInputGroup = styled.div`
  display: flex;
  gap: 8px;
`;

const StylePromoInput = styled.input`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  padding: 8px 12px;
  font-size: 0.85rem;
  color: #fff;
  outline: none;

  &:focus {
    border-color: var(--accent-color, #6366f1);
  }
`;

const StylePromoApplyBtn = styled.button`
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  color: #fff;
  padding: 0 12px;
  font-size: 0.825rem;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
  }
`;

const StyleSummaryBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 12px;
`;

const StyleSummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  color: var(--text-secondary, #a1a1aa);
`;

const StyleDiscountText = styled.span`
  color: #52c41a;
`;

const StyleDivider = styled.hr`
  border: none;
  border-top: 1px dashed rgba(255, 255, 255, 0.1);
  margin: 2px 0;
`;

const StyleTotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-primary, #ffffff);
`;

const StyleTotalAmount = styled.span`
  font-size: 1.2rem;
  color: var(--accent-color, #6366f1);
`;

const StyleCheckoutBtn = styled.button`
  width: 100%;
  height: 44px;
  background: var(--accent-gradient, linear-gradient(135deg, #6366f1 0%, #4f46e5 100%));
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  transition: transform 0.1s ease, filter 0.2s ease;

  &:hover {
    filter: brightness(1.1);
  }

  &:active {
    transform: scale(0.98);
  }
`;

interface PropRoot {
  visible?: boolean;
  onClose?: () => void;
}

export default content;