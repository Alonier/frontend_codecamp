import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  padding: 80px 102px;

  display: flex;
  flex-direction: column;

  border: 1px solid #cacaca;
  box-shadow: 5px 5px 5px 0px #cacaca;
`;

export const Header = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-bottom: 20px;
`;

export const HeaderLeft = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
`;

export const HeaderLeftNDCon = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 12px;
  max-height: 56px;
`;

export const HeaderLeftName = styled.div`
  font-size: 24px;
  font-weight: 500;
`;

export const HeaderLeftDate = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #828282;
`;

export const HeaderRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  gap: 20px;
`;

export const LineGray = styled.div`
  width: 100%;
  height: 1px;

  border-top: 1px solid #bdbdbd;
`;

export const Section = styled.div`
  width: 100%;

  margin-top: 80px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SectionTitle = styled.div`
  width: 100%;

  font-size: 36px;
  font-weight: 700;
`;

export const SectionImg = styled.img`
  margin-top: 40px;
`;

export const SectionContents = styled.div`
  width: 100%;
  margin-top: 40px;

  font-size: 16px;
  font-weight: 400;
`;

export const SectionYoutube = styled.div`
  margin-top: 150px;

  width: 486px;
  height: 240px;

  background-image: url("/비디오 예시.png");
`;

//160px
export const SectionLikeContainer = styled.div`
  margin-top: 160px;
  display: flex;
  flex-direction: row;

  gap: 40px;
`;

export const SectionLikeElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SectionLikeCount = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: #ffd600;
`;

export const SectionDislikeCount = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: #828282;
`;
