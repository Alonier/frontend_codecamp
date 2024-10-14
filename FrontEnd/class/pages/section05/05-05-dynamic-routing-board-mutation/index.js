import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";

const myGraphqlSetting = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationArgs() {
  //JS Section
  const [myFunction] = useMutation(myGraphqlSetting);

  const router = useRouter();

  const onClickSubmit = async () => {
    try {
      const result = await myFunction({
        // $: variables
        variables: {
          writer: "훈이",
          title: "안녕하세요!!",
          contents: "반갑습니다.",
        },
      });

      // 입력한 게시글의 number를 받아 해당 게시글로 이동
      // 맨앞에 /를 입력하지 않으면 절대경로로 설정되지 않음을 주의
      router.push(
        `/section05/05-05-dynamic-routing-board-mutation-moved/${result.data.createBoard.number}`
      );
    } catch (error) {
    } finally {
    }
  };

  //HTML Section
  return (
    <>
      <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
    </>
  );
}
