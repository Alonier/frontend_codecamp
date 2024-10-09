import axios from "axios";
import { useState } from "react";
import MyPage from "../../section01/01-01-example";

export default function RestGetPage() {
  //JS Section
  const [data, setData] = useState("");

  const getData = () => {
    const res = axios.get("https://koreanjson.com/posts/1");
    setData(JSON.stringify(res)); //promise 객체
  };

  //async await >> 비동기함수를 동기적으로 변환
  const getAsyncData = async () => {
    //axios.get... 함수가 완료될 때 까지 기다린 후 data 에 저장
    const res = await axios.get("https://koreanjson.com/posts/1");
    setData(JSON.stringify(res)); //제대로 된 결과
  };

  //HTML Section
  return (
    <>
      <div>{data}</div>
      <button onClick={getData}>Rest-API 비동기 요청하기</button>
      <button onClick={getAsyncData}>Rest-API 동기 요청하기</button>
      <MyPage></MyPage>
    </>
  );
}
