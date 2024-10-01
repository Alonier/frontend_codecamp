//모든 페이지의 공통 설정들이 진행
import "../styles/globals.css";

//현재 페이지
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
