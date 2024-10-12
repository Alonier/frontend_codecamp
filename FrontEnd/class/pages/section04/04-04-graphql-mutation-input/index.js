import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

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
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const onClickSubmit = async () => {
    const result = await myFunction({
      // $: variables
      variables: {
        writer: writer,
        title: title,
        contents: contents,
      },
    });
    console.log(result);
  };

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  //HTML Section
  return (
    <>
      작성자: <input type="text" onChange={onChangeWriter}></input>
      <br></br>
      제목: <input type="text" onChange={onChangeTitle}></input>
      <br></br>
      내용: <input type="text" onChange={onChangeContents}></input>
      <br></br>
      <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
    </>
  );
}
