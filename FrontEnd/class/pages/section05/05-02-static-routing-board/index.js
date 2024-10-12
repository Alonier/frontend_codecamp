import { useRouter } from "next/router";

export default function StaticRoutingPage() {
  //JS Section
  //라우터 객체 생성
  const router = useRouter();

  const onClickBtn1 = () => {
    router.push("/section05/05-02-static-routing-board-moved/1");
  };

  const onClickBtn2 = () => {
    router.push("/section05/05-02-static-routing-board-moved/2");
  };

  const onClickBtn3 = () => {
    router.push("/section05/05-02-static-routing-board-moved/3");
  };

  //HTML Section
  //게시글 목록을 구현
  return (
    <>
      <button onClick={onClickBtn1}>1번 게시글로 이동하기</button>
      <button onClick={onClickBtn2}>2번 게시글로 이동하기</button>
      <button onClick={onClickBtn3}>3번 게시글로 이동하기</button>
    </>
  );
}
