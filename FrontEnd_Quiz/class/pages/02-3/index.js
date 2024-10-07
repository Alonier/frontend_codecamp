import { useState } from "react";

export default function authPage() {
  //JS Section
  const [authNumber, setAuthNumber] = useState("000000");

  const onClickButton = () => {
    setAuthNumber(String(Math.round(Math.random() * 1000000)).padStart(6, "0"));
  };

  //HTML Section
  return (
    <div>
      {authNumber}
      <button onClick={onClickButton}>인증번호 전송</button>
    </div>
  );
}
