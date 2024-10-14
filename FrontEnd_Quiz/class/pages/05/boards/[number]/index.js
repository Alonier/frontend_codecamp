import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_PRODUCT = gql`
  query fetchProduct($productId: ID) {
    fetchProduct(productId: $productId) {
      seller
      name
      detail
      price
    }
  }
`;

export default function BoardDetailedPage() {
  //JS Section
  const router = useRouter();

  const { data } = useQuery(FETCH_PRODUCT, {
    variables: {
      productId: router.query.number,
    },
  });

  //HTML Section

  return (
    <div>
      판매자: {data?.fetchProduct?.seller}
      이름: {data?.fetchProduct?.name}
      세부내용: {data?.fetchProduct?.detail}
      가격: {data?.fetchProduct?.price}
    </div>
  );
}
