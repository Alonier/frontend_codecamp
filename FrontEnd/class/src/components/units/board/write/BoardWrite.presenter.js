import { BlueButton, RedInput } from "./BoardWrite.styles";

export default function BoardWriteUI(props) {
  //Logic Section

  //HTML Section
  return (
    <div>
      <div>!!!!!!여기는 프리젠터 입니다.!!!!!!</div>
      작성자: <RedInput type="text" onChange={props.bbb}></RedInput>
      <br></br>
      제목: <RedInput type="text" onChange={props.ccc}></RedInput>
      <br></br>
      내용: <RedInput type="text" onChange={props.ddd}></RedInput>
      <br></br>
      <BlueButton onClick={props.aaa}>GRAPHQL-API 요청하기</BlueButton>
      <div>!!!!!!여기는 프리젠터 입니다.!!!!!!</div>
    </div>
  );
}
