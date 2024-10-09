import { gql, useMutation } from "@apollo/client";

const myGraphqlSetting = gql`
  mutation {
    createBoard(writer: "철수", title: "안녕하세요", contents: "반갑습니다.") {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  //JS Section
  const [MyFunction] = useMutation(myGraphqlSetting);

  const onClickSubmit = async () => {
    const result = await MyFunction();
    console.log(result);
  };

  //HTML Section
  return (
    <>
      <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
    </>
  );
}
