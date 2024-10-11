import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 640px;
  padding: 30px 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  border: 1px solid #cacaca;
  border-radius: 15px;

  box-shadow: 2px 2px grey;
`;

export const Question = styled.div`
  width: 100%;
  padding: 0px 20px;

  border: 1px solid #cacaca;
  border-radius: 3px;

  font-size: 18px;
  font-weight: 700;
`;

export const Answer = styled.div`
  width: 100%;
  padding: 5px 20px 5px 20px;

  border: 1px solid #cacaca;
  border-radius: 3px;

  font-size: 18px;
  font-weight: 700;

  margin-bottom: 10px;

  cursor: pointer;

  :hover {
    text-decoration: underline;
    background-color: #cccacaca;
    transition: background-color 0.3s ease-in-out;
  }
`;

export const Mg50 = styled.div`
  margin-top: 50px;
`;
