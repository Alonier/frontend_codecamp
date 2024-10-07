import { useState } from "react";
import {
  AccElement,
  AccountContainer,
  Errmsg,
  Input,
  KakaoLoginBtn,
  LoginButton,
  Mg10,
  Mg100,
  Mg50,
  Rectangle1,
  Title,
  Wrapper,
} from "../../styles/style02-4";

export default function itsRoadPage() {
  //JS Section
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const [emailErr, setEmailErr] = useState("");
  const [pwErr, setPwErr] = useState("");

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePw = (event) => {
    setPw(event.target.value);
  };

  const onClickLoginBtn = () => {
    let validation = true;
    setEmailErr("");
    setPwErr("");

    if (email.trim() === "") {
      validation = false;
      setEmailErr("이메일 주소를 다시 확인해주세요.");
    }
    if (pw.trim() === "") {
      validation = false;
      setPwErr("8-16자의 영문, 숫자, 특수 문자만 사용 가능합니다.");
    }
    if (!email.includes("@")) {
      validation = false;
      setEmailErr("이메일 주소를 다시 확인해주세요.");
    }
    if (pw.trim().length < 8) {
      validation = false;
      setPwErr("8-16자의 영문, 숫자, 특수 문자만 사용 가능합니다.");
    }
  };

  //HTML Section
  return (
    <Wrapper>
      <img src="img-100-logo-white 2.png"></img>
      <Rectangle1></Rectangle1>
      <Title>잇츠로드</Title>
      <Mg100></Mg100>
      <Mg50></Mg50>

      <Input onChange={onChangeEmail}></Input>
      <Errmsg>{emailErr}</Errmsg>
      <Mg10></Mg10>
      <Mg10></Mg10>
      <Input type="password" onChange={onChangePw}></Input>
      <Errmsg>{pwErr}</Errmsg>
      <Mg10></Mg10>
      <LoginButton onClick={onClickLoginBtn}>로그인</LoginButton>
      <Mg50></Mg50>
      <AccountContainer>
        <AccElement>이메일 찾기</AccElement>
        <AccElement>비밀번호 찾기</AccElement>
        <AccElement>회원가입</AccElement>
      </AccountContainer>
      <Mg50></Mg50>
      <KakaoLoginBtn>카카오톡으로 로그인</KakaoLoginBtn>
      <Mg100></Mg100>
    </Wrapper>
  );
}
