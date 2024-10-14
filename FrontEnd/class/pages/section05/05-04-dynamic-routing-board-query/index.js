import { useRouter } from "next/router";

export default function DynamicRoutingBoardQueryPage() {
  //JS Section
  const router = useRouter();

  const onClickMove1 = () => {
    router.push("/section05/05-04-dynamic-routing-board-query-moved/652");
  };
  const onClickMove2 = () => {
    router.push("/section05/05-04-dynamic-routing-board-query-moved/653");
  };
  const onClickMove3 = () => {
    router.push("/section05/05-04-dynamic-routing-board-query-moved/654");
  };

  //HTML Section
  return (
    <>
      <button onClick={onClickMove1}>1번 게시글로</button>
      <button onClick={onClickMove1}>2번 게시글로</button>
      <button onClick={onClickMove1}>3번 게시글로</button>
    </>
  );
}
