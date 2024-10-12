import axios from "axios";

export default function KoreanjsonPage() {
  //JS Section
  const onClickbtn = async () => {
    const data = await axios.get("https://koreanjson.com/users");
    console.log(data);
  };

  //HTML Section
  return (
    <>
      <button onClick={onClickbtn}>Rest-API 요청하기</button>
    </>
  );
}
