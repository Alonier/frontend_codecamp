import { useRouter } from "next/router";

export default function StaticRoutingPage() {
  //JS Section

  //라우터 객체 생성
  const router = useRouter();

  const onClickbtn = () => {
    router.push("/section05/05-01-static-routing-moved");
  };
  //HTML Section
  return (
    <>
      <button onClick={onClickbtn}>페이지 이동하기</button>
    </>
  );
}
