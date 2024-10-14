import { useRouter } from "next/router.js";
import {
  Wrapper,
  Header,
  HeaderRight,
  HeaderLeft,
  HeaderLeftNDCon,
  HeaderLeftName,
  HeaderLeftDate,
  LineGray,
  Section,
  SectionTitle,
  SectionImg,
  SectionContents,
  SectionYoutube,
  SectionLikeContainer,
  SectionLikeElement,
  SectionLikeCount,
  SectionDislikeCount,
} from "../../../styles/boardDetailed.js";
import { gql, useQuery } from "@apollo/client";

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      createdAt
      contents
    }
  }
`;

export default function BoardDetailedPage() {
  //JS Section
  const router = useRouter();

  //게시판 데이터 Fetch API
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.number,
    },
  });

  //HTML Section
  return (
    <Wrapper>
      <Header>
        <HeaderLeft>
          <img src="/ic_profile-56px.png"></img>
          <HeaderLeftNDCon>
            <HeaderLeftName>
              {/* 게시글 작성자 출력 */}
              {data?.fetchBoard?.writer}
            </HeaderLeftName>
            <HeaderLeftDate>
              {/* 게시글 작성 시간 출력 */}
              {data?.fetchBoard?.createdAt}
            </HeaderLeftDate>
          </HeaderLeftNDCon>
        </HeaderLeft>
        <HeaderRight>
          <img src="/ic_link-32px.png"></img>
          <img src="/ic_location_on-32px.png"></img>
        </HeaderRight>
      </Header>
      <LineGray></LineGray>
      <Section>
        <SectionTitle>
          {/* 게시글 제목 출력 */}
          {data?.fetchBoard?.title}
        </SectionTitle>
        <SectionImg src="/image.png"></SectionImg>
        <SectionContents>
          {/* 게시글 내용 출력 */}
          {data?.fetchBoard?.contents}
        </SectionContents>
        <SectionYoutube>{/* 유튜브 API 기록 */}</SectionYoutube>
        <SectionLikeContainer>
          <SectionLikeElement>
            <img src="/ic_thumb_up_off_alt-24px.png"></img>
            <SectionLikeCount>1920</SectionLikeCount>
          </SectionLikeElement>
          <SectionLikeElement>
            <img src="/ic_thumb_down-24px.png"></img>
            <SectionDislikeCount>1920</SectionDislikeCount>
          </SectionLikeElement>
        </SectionLikeContainer>
      </Section>
    </Wrapper>
  );
}
