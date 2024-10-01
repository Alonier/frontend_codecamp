import { MyEmail, MyInput } from "../../../styles/01-02-emotion";

//과 이름 + Page 로 function 이름 설정
//페이지 앞글자는 통상적으로 대문자
export default function EmotionPage() {
  //자바스크립트 섹션

  //html 섹션
  return (
    <div>
      <MyEmail>이메일: </MyEmail>
      <MyInput type="text"></MyInput>
      <button>Click Me!</button>
      <img src="/favicon.ico"></img>
    </div>
  );
}
