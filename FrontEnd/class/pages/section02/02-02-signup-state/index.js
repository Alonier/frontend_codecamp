import { useState } from "react";

export default function SignupStatePage() {
  //JS Section

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState("");

  //binding 된(onChange, onClick ...) 함수들엔 event 객체가 전달됨
  const onClickSignUp = (event) => {
    //1. 이메일, 비밀번호 validation check
    if (!email.includes("@")) {
      setEmailErr("@가 없습니다.");
    } else {
      //2. 백엔드API 에 전송

      //3. 회원가입 성공 알람 송출
      alert("회원가입을 축하합니다!");
    }
  };

  //binding 된(onChange, onClick ...) 함수들엔 event 객체가 전달됨
  const onChangeEmail = (event) => {
    //event => 나의 행동
    //event.target => 작동된 태그
    //event.target.value => 작동된 태그에 입력된 값
    setEmail(event.target.value);
  };

  //binding 된(onChange, onClick ...) 함수들엔 event 객체가 전달됨
  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  //HTML Section
  return (
    <div>
      {/* onChange => 입력 마다 실행되는 함수 */}
      이메일: <input type="text" onChange={onChangeEmail}></input>
      <div>{emailErr}</div>
      비밀번호: <input type="password" onChange={onChangePassword}></input>
      <button onClick={onClickSignUp}>회원 가입</button>
    </div>
  );
}
