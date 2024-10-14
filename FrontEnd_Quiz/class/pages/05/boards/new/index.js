import { useState } from "react";
import { Container, Input, Mg50, Wrapper } from "../../../../styles/boardsNew5";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";

const CREATE_PRODUCT = gql`
  mutation createProduct(
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
    }
  }
`;

export default function BoardNewPage() {
  //JS Section
  const [seller, setSeller] = useState("");
  const [name, setName] = useState("");
  const [contents, setContents] = useState("");
  const [price, setPrice] = useState(0);
  const router = useRouter();

  //create product 함수 생성
  const [createProduct] = useMutation(CREATE_PRODUCT);

  const onChangeSeller = (event) => {
    setSeller(event.target.value);
  };
  const onChangeName = (event) => {
    setName(event.target.value);
  };
  const onChangeContents = (event) => {
    setContents(event.target.value);
  };
  const onChangePrice = (event) => {
    setPrice(Number(event.target.value));
  };

  const onClickSubmit = async () => {
    try {
      const result = await createProduct({
        variables: {
          seller,
          createProductInput: {
            name: name,
            detail: contents,
            price: price,
          },
        },
      });
      console.log(result.data.createProduct._id);
      router.push(`/05/boards/${result.data.createProduct._id}`);
    } catch (error) {
      console.log(error);
    }
  };

  //HTML Section
  return (
    <Wrapper>
      <Container>
        <div>
          판매자: <Input onChange={onChangeSeller}></Input>
        </div>
        <div>
          상품명: <Input onChange={onChangeName}></Input>
        </div>
      </Container>
      <Mg50></Mg50>
      <Container>
        <div>
          내용: <Input onChange={onChangeContents}></Input>
        </div>
        <div>
          가격: <Input onChange={onChangePrice}></Input>
        </div>
      </Container>
      <Mg50></Mg50>
      <button onClick={onClickSubmit}>등록하기</button>
    </Wrapper>
  );
}
