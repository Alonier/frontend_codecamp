import { useState } from "react";

export default function registerPage() {
  //JS Section
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordR, setPasswordR] = useState("");

  const [emailErr, setEmailErr] = useState("");
  const [pwErr, setPwErr] = useState("");

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onChangePasswordR = (event) => {
    setPasswordR(event.target.value);
  };

  const onClickButton = () => {
    let validation = true;
    setEmailErr("");
    setPwErr("");

    console.log(email, password, passwordR);

    if (!email.includes("@")) {
      validation = false;
      setEmailErr("@가 존재하지 않습니다.");
    }
    if (password !== passwordR) {
      validation = false;
      setPwErr("비밀번호가 일치하지 않습니다.");
    }

    if (validation === true) {
      alert("회원가입이 완료되었습니다.");
    }
  };

  //HTML Section
  return (
    <div>
      이메일:<input onChange={onChangeEmail}></input>
      <div style={{ color: "red" }}>{emailErr}</div>
      비밀번호:<input onChange={onChangePassword}></input>
      비밀번호 확인:<input onChange={onChangePasswordR}></input>
      <div style={{ color: "red" }}>{pwErr}</div>
      <button onClick={onClickButton}>가입하기</button>
    </div>
  );
}
