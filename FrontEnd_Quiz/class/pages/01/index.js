import {
  Wrapper,
  Header__search,
  Header__search__img,
  Header__mp,
  Header__menu,
  Menu__element,
} from "../../styles/Page01";
import styled from "@emotion/styled";

export default function Page01() {
  //자바스크립트 섹션
  const Header__my = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: 40px;
  `;

  const Header__profile = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 10px;
  `;

  const Profile__img = styled.img`
    width: 60px;
    height: 60px;
  `;

  const Profile__name = styled.div`
    font-size: 24px;
  `;

  const Main__list = styled.div`
    display: flex;
    flex-direction: column;
  `;

  const Main__list__element = styled.div`
    width: 100%;
    height: 100px;
    border-bottom: 1px solid #cacaca;
  `;

  const Footer = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 10px 0px;
  `;

  const Footer__menu = styled.div`
    display: flex;
    flex-direction: column;
  `;

  const Footer__img = styled.img`
    width: 40px;
    height: 40px;
  `;
  //HTML 섹션
  return (
    <Wrapper>
      <Header__search>
        <Header__search__img src="/search_ic.jpeg" />
      </Header__search>
      <Header__mp>
        <Header__my>마이</Header__my>
        <Header__profile>
          <Profile__img src="profile_ic.png" />
          <Profile__name>임정아</Profile__name>
          <div
            style={{ color: "#CACACA", fontSize: "32px", fontWeight: "100" }}
          >
            &gt;
          </div>
        </Header__profile>
      </Header__mp>
      <Header__menu>
        <Menu__element>공지사항</Menu__element>
        <Menu__element>이벤트</Menu__element>
        <Menu__element
          style={{
            color: "#FF1B6D",
            textDecoration: "underline",
            textUnderlinePosition: "under",
          }}
        >
          FAQ
        </Menu__element>
        <Menu__element>Q&A</Menu__element>
      </Header__menu>
      <div
        style={{
          width: "100%",
          height: "1px",
          border: "1px solid #CACACA",
          marginTop: "60px",
        }}
      ></div>
      <Main__list>
        <Main__list__element>1</Main__list__element>
        <Main__list__element>1</Main__list__element>
        <Main__list__element>1</Main__list__element>
        <Main__list__element>1</Main__list__element>
        <Main__list__element>1</Main__list__element>
        <Main__list__element>1</Main__list__element>
      </Main__list>
      <Footer>
        <Footer__menu>
          <Footer__img src="Vector.png"></Footer__img>
          <div style={{ textAlign: "center" }}>홈</div>
        </Footer__menu>
        <Footer__menu>
          <Footer__img src="Vector.png"></Footer__img>
          <div style={{ textAlign: "center" }}>홈</div>
        </Footer__menu>
        <Footer__menu>
          <Footer__img src="Vector.png"></Footer__img>
          <div style={{ textAlign: "center" }}>홈</div>
        </Footer__menu>
        <Footer__menu>
          <Footer__img src="Vector.png"></Footer__img>
          <div style={{ textAlign: "center" }}>홈</div>
        </Footer__menu>
      </Footer>
    </Wrapper>
  );
}
