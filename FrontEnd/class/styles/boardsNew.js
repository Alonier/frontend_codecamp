import styled from "@emotion/styled";

export const Wrapper = styled.div`
  padding: 60px 100px;
  width: 1200px;

  display: flex;
  flex-direction: column;

  border: 1px solid #cacaca;
  box-shadow: 0px 0px 10px gray;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 36px;
  text-align: center;
`;

export const Container_wp = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  //양 쪽 두 요소 간의 거리
  gap: 25px;
`;

export const Container_wp_element = styled.div`
  width: calc(50% - 25px);
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Wp_element_subtitle = styled.div`
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 16px;
`;

export const Input = styled.input`
  width: 100%;
  height: 52px;

  border: 1px solid #bdbdbd;
  border-radius: 2px;

  font-size: 24px;
  padding: 16px;

  &::placeholder {
    color: #cacaca;
    font-size: 16px;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 480px;

  border: 1px solid #bdbdbd;
  border-radius: 2px;

  padding: 16px;
  font-size: 24px;

  &::placeholder {
    color: #cacaca;
    font-size: 16px;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 52px;

  border-radius: 2px;

  font-size: 16px;
  text-align: center;
`;

export const UploadBtn = styled.div`
  width: 78px;
  height: 78px;
  background-color: #bdbdbd;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  div:first-child {
    font-size: 28px;
  }

  div:last-child {
    font-size: 12px;
  }
`;

export const RadioBtn = styled.input`
  &:checked {
    background-color: yellow;
  }
`;
