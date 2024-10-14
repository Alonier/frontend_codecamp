import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      number
      writer
      title
      contents
    }
  }
`;

export default function DynamicRoutingBoardQueryMovedPage() {
  //JS Section
  const router = useRouter();

  //useQuery(gql문 , {variable: }) 로 사용
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      number: Number(router.query.aaa),
    },
  });

  //HTML Section
  return (
    <>
      <div>{router.query.aaa}번 게시글로 페이지 이동이 완료되었습니다.</div>
      {/* 데이터가 존재할 때, data 내부 값 출력 */}
      <div>작성자: {data?.fetchBoard?.writer}</div>
      <div>제목: {data?.fetchBoard?.title}</div>
      <div>내용: {data?.fetchBoard?.contents}</div>
    </>
  );
}
