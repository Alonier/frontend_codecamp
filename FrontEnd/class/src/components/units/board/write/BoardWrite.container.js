import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD } from "./BoardWrite.queries";

import { useState } from "react";
import { useMutation } from "@apollo/client";

export default function BoardWriteContainer() {
  //Logic Section
  const [myFunction] = useMutation(CREATE_BOARD);
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
    <div>
      <div>$$$$$$여기는 컨테이너 입니다.$$$$$$</div>
      <BoardWriteUI
        aaa={onClickSubmit}
        bbb={onChangeWriter}
        ccc={onChangeTitle}
        ddd={onChangeContents}
      />
      <div>$$$$$$여기는 컨테이너 입니다.$$$$$$</div>
    </div>
  );
}
