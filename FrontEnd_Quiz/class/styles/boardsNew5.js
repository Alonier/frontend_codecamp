import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 840px;
  padding: 20px 20px;
  display: flex;
  flex-direction: column;

  border: 1px solid #cacaca;
  border-radius: 5px;
`;

export const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;

  div {
    display: flex;

    width: 100%;
    height: 24px;
    font-size: 24px;
  }
`;

export const Input = styled.input`
  width: 80%;
`;

export const Mg50 = styled.div`
  margin-top: 50px;
`;
