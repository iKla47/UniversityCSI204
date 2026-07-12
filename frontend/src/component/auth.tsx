import styled from "styled-components";
import { keyframes } from "styled-components";

const content = function ()
{
  return <>
    <content.SignIn/>
  </>;
}
content.SignInLegacy = function AuthSignInLegacy ()
{
  return <>
  <Box>
   <h1>Welcome To Our Website!</h1>
    <LoginBox>
        <InsertDisplay>
          Username
          <InsertBox type="text" placeholder="Username"/>
        </InsertDisplay>
        <InsertDisplay>
          Password
          <InsertBox type="text" placeholder="Password"/>
        </InsertDisplay>
    <div style={{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      width:'100%',
    }}>
      <p style={{color:'blue',fontSize:'0.9rem'}}>Forgot Password?</p> 
      <p style={{color:'blue',fontSize:'0.9rem'}}>Create account</p>
    </div>
    </LoginBox>
    <a href="/" style={{width:'100%'}}><LoginButton>LOGIN</LoginButton></a>
  </Box>
  </>;
}
content.SignIn = function AuthSignIn ()
{
  return <SignInView>
  <SignInBox>
    <SignInTitle>ร้านขายแผ่นและตลับเกม</SignInTitle>
    <SignInDesc>
      ยินดีต้อนรับ โปรดป้อนรหัสบัญชีของคุณเพื่อลงชื่อเข้าใช้
    </SignInDesc>
    <SignInMain>
      <label htmlFor="auth-signin-id">รหัสประจำตัว</label>
      <input id="auth-signin-id" 
        type="text" autoComplete="username webauthn"/>

      <label htmlFor="auth-signin-pwd">รหัสผ่าน</label>
      <input id="auth-signin-pwd" 
        type="password" autoComplete="current-password webauthn"/>

      <SignInAlert>รหัสประจำตัวต้องยาวไม่เกิน 32 ตัวอักษร</SignInAlert>
      <button>ดำเนินการต่อ</button>
      <div>
        <SignInOption>ลืมรหัสผ่าน</SignInOption>
        <SignInOption>สร้างบัญชีใหม่</SignInOption>
      </div>

    </SignInMain>
    <SignInDescPrviacy> 
      หากนี้ไม่ใช่อุปกรณ์ของคุณ 
      <span>ให้ใช้งานโหมดไม่ระบุตัวตนของเบราว์เซอร์</span>
      <span>เพื่อเลี่ยงความเสี่ยงการรั่วไหลของข้อมูลของคุณ</span>
    </SignInDescPrviacy>
  </SignInBox>
  </SignInView>;
}
content.SignUp = function AuthSignUp ()
{
  return <></>;
}
export default content;

const SignInOpening = keyframes`
  from { scale: 1.25;}
  to { scale: 1.0; }
`;
const SignInView = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
`;
const SignInBox = styled.div`
  width: 512px;
  height: 572px;
  background-color: var(--bg-primary);
  border-radius: 8px;
  transition: all 250ms cubic-bezier(0.16, 1, 0.3, 1);
  animation-name: ${SignInOpening};
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  animation-duration: 500ms;

  @media (max-width: 512px)
  {
    width: 100%;
    height: 100%;
    background-color: transparent;
    border-radius: 0px;
  }

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 16px;
`;
const SignInTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin: 16px 16px 0px 16px;
`;
const SignInDesc = styled.p`
  font-size: 1rem;
  margin: 0px 16px 0px 16px;
`;
const SignInDescPrviacy = styled.p`
  font-size: 1rem;
  margin: 0px 16px 16px 16px;

  @media (max-width: 512px)
  {
    background-color: var(--bg-primary);
    border-radius: 4px;
    padding: 8px;
  }
`;
const SignInMain = styled.form`
  margin: 0px 16px 0px 16px;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
`;
const SignInAlert = styled.p`
  font-size: 1rem;
  font-weight: normal;
  height: 32px;
  color: var(--text-warning);
`;
const SignInOption = styled.button`
  background-color: transparent;
  border: transparent;
  outline: transparent;
  width: 100%;
  text-align: start;
`;

const Box = styled.div `
  display: flex; 
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  /* border: 1px solid white; */
  width: 30%;
  height: 40%;
  gap: 1rem;
`

const LoginBox = styled.div `

  background-color:white;
  border: 1px solid white;
  border-radius: 0.5rem;
  padding:1rem;
  font-size: 1.5rem;
  width: 100%;
  height: 100%;
  color: black;
`

const LoginButton = styled.button `
  background-color:blue;
  color:white;
  border: 0px solid white;
  border-radius: 0.3rem;
  padding:0.5rem;
  width: 100%;
  font-size: 1.5rem;
`

const InsertDisplay = styled.div `
  color: black;
`

const InsertBox = styled.input `
  background-color:white;
  border-radius: 0.3rem;
  padding:0.7rem;
  width: 100%;
  margin-bottom: 1rem;
  margin-top: 0.2rem;
  border: 1px solid black;  
  color: black;
  font-size: 0.9rem;
`

// const RegisterButton = styled.button `
//   background-color:green;
//   color:white;
//   border: 1px solid white;
//   border-radius: 0.3rem;
//   padding:0.5rem;
//   margin-top: 1rem;
// `