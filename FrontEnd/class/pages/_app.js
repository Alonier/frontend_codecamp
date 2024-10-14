//모든 페이지의 공통 설정들이 진행
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import "../styles/globals.css";

//현재 페이지
export default function App({ Component, pageProps }) {
  const client = new ApolloClient({
    //연결 할 uri 작성
    //Section 연습용 API 주소
    uri: "http://backend-example.codebootcamp.co.kr/graphql",
    //포트폴리오용 API 주소
    // uri: "http://backend-practice.codebootcamp.co.kr/graphql",

    //컴퓨터의 메모리에 백엔드에서 전송받은 데이터를 임시 저장
    cache: new InMemoryCache(),
  });

  return (
    // 컴포넌트에서 client(graphQL)를 사용할 수 있도록 세팅
    <ApolloProvider client={client}>
      {/* "pages/" 에서 만들어진 페이지들을 출력 */}
      <Component />
    </ApolloProvider>
  );
}
