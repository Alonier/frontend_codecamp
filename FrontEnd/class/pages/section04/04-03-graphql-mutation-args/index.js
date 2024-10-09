import { gql, useMutation } from "@apollo/client";

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

  const onClickSubmit = async () => {
    const result = await myFunction({
      // $: variables
      variables: {
        writer: "훈이",
        title: "안녕하세요!!",
        contents: "반갑습니다.",
      },
    });
    console.log(result);
  };

  //HTML Section
  return (
    <>
      <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
    </>
  );
}
