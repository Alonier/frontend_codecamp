import { gql, useQuery } from "@apollo/client";

const FETCH_BOARD = gql`
  query {
    fetchBoard(number: 654) {
      number
      title
      writer
      contents
    }
  }
`;

export default function StaticRoutingBoardMovedPage() {
  //JS Section

  //API 요청, 요청한 데이터를 data 에 저장
  const { data } = useQuery(FETCH_BOARD);

  console.log(data);

  //HTML Section
  return (
    <>
      <div>3번 게시글로 페이지 이동이 완료되었습니다.</div>
      {/* 데이터가 존재할 때, data 내부 값 출력 */}
      <div>작성자: {data?.fetchBoard.writer}</div>
      <div>제목: {data?.fetchBoard.title}</div>
      <div>내용: {data?.fetchBoard.contents}</div>
    </>
  );
}
