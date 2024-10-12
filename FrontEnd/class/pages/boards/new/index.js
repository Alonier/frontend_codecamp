import { useState } from "react";

import {
  Wrapper,
  Title,
  Container_wp,
  Container_wp_element,
  Wp_element_subtitle,
  Input,
  Textarea,
  Button,
  UploadBtn,
  RadioBtn,
} from "../../../styles/boardsNew";
import { gql, useMutation } from "@apollo/client";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $CreateBoardInput) {
      _id
      createdAt
    }
  }
`;

export default function BoardsNew() {
  //자바스크립트 섹션
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [addressNum, setAddressNum] = useState("");
  const [address, setAddress] = useState("");
  const [youtube, setYoutube] = useState("");

  //게시판 등록 함수
  const [createBoard] = useMutation(CREATE_BOARD);

  const onChangeWriter = (event) => {
    setWriter(event.target.value.trim());
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value.trim());
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value.trim());
  };

  const onChangeContents = (event) => {
    setContents(event.target.value.trim());
  };

  const onChangeAddressNum = (event) => {
    setAddressNum(event.target.value.trim());
  };

  const onChangeAddress = (event) => {
    setAddress(event.target.value.trim());
  };

  const onChangeYoutube = (event) => {
    setYoutube(event.target.value.trim());
  };

  const onClickPost = async (event) => {
    console.log(
      writer,
      title,
      password,
      contents,
      addressNum,
      address,
      youtube
    );

    // if (
    //   writer === "" ||
    //   title === "" ||
    //   password === "" ||
    //   contents === "" ||
    //   addressNum === "" ||
    //   address === "" ||
    //   youtube === ""
    // ) {
    //   alert("내용을 만족하지 않았습니다!");
    // }

    const result = await createBoard({
      variables: {
        writer: writer,
        title: title,
        contents: contents,
        password: password,
      },
    });
  };

  //html 섹션
  return (
    <Wrapper>
      <Title>게시물 등록</Title>
      {/* 70px */}
      <Container_wp style={{ marginTop: "70px" }}>
        <Container_wp_element>
          <Wp_element_subtitle>작성자</Wp_element_subtitle>
          <Input
            placeholder="이름을 적어주세요."
            onChange={onChangeWriter}
          ></Input>
        </Container_wp_element>
        <Container_wp_element>
          <Wp_element_subtitle>비밀번호</Wp_element_subtitle>
          <Input
            placeholder="비밀번호를 입력해주세요."
            onChange={onChangePassword}
          ></Input>
        </Container_wp_element>
      </Container_wp>
      <Container_wp style={{ marginTop: "35px" }}>
        <Container_wp_element style={{ width: "100%" }}>
          <Wp_element_subtitle>제목</Wp_element_subtitle>
          <Input
            placeholder="제목을 작성해주세요."
            onChange={onChangeTitle}
          ></Input>
        </Container_wp_element>
      </Container_wp>
      <Container_wp style={{ marginTop: "35px", height: "auto" }}>
        <Container_wp_element style={{ width: "100%" }}>
          <Wp_element_subtitle>내용</Wp_element_subtitle>
          <Textarea
            placeholder="내용을 작성해주세요."
            onChange={onChangeContents}
          ></Textarea>
        </Container_wp_element>
      </Container_wp>
      <Wp_element_subtitle style={{ marginTop: "15px" }}>
        주소
      </Wp_element_subtitle>
      <Container_wp style={{ width: "200px", gap: "10px", marginTop: "0px" }}>
        <Input
          style={{ width: "72px", padding: "0px", textAlign: "center" }}
          placeholder="07250"
          onChange={onChangeAddressNum}
        ></Input>
        <Button style={{ backgroundColor: "black", color: "white" }}>
          우편번호 검색
        </Button>
      </Container_wp>
      <Input style={{ marginTop: "10px" }} onChange={onChangeAddress}></Input>
      <Input style={{ marginTop: "20px" }}></Input>
      <Wp_element_subtitle style={{ marginTop: "35px" }}>
        유튜브
      </Wp_element_subtitle>
      <Input
        placeholder="링크를 복사해주세요."
        onChange={onChangeYoutube}
      ></Input>
      <Wp_element_subtitle style={{ marginTop: "35px" }}>
        사진 첨부
      </Wp_element_subtitle>
      <Container_wp style={{ width: "282px" }}>
        <UploadBtn>
          <div>+</div>
          <div>Upload</div>
        </UploadBtn>
        <UploadBtn>
          <div>+</div>
          <div>Upload</div>
        </UploadBtn>
        <UploadBtn>
          <div>+</div>
          <div>Upload</div>
        </UploadBtn>
      </Container_wp>
      <Wp_element_subtitle style={{ marginTop: "35px" }}>
        메인 설정
      </Wp_element_subtitle>
      <Container_wp
        style={{ width: "160px", gap: "5px", justifyContent: "flex-start" }}
      >
        <RadioBtn type="radio"></RadioBtn>
        <div>유튜브</div>
        <RadioBtn style={{ marginLeft: "10px" }} type="radio"></RadioBtn>
        <div>사진</div>
      </Container_wp>
      <Container_wp style={{ marginTop: "80px", justifyContent: "center" }}>
        <Button
          style={{ width: "180px", backgroundColor: "#FFD600", border: "0" }}
          onClick={onClickPost}
        >
          등록하기
        </Button>
      </Container_wp>
    </Wrapper>
  );
}
