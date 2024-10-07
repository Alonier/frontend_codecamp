import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 640px;

  padding: 224px 50px 0px 50px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  background-image: url("img-bg@3x 1.png");
`;

export const Rectangle1 = styled.div`
  width: 72px;
  height: 24px;
  border-radius: 10px;

  background-color: rgba(217, 217, 217, 0.8);
  transform: translateY(-18px);
`;

export const Title = styled.div`
  margin-top: 20px;

  font-size: 60px;
  font-weight: 700;

  color: white;
`;

export const Input = styled.input`
  width: 540px;
  height: 40px;

  border: none;
  border-bottom: 1px solid #7d7d7d;
  background-color: transparent;
  outline: none;

  font-size: 24px;
  color: white;
`;

export const Errmsg = styled.div`
  width: 540px;
  height: 20px;
  margin-top: 5px;

  font-size: 16px;
  font-weight: 400;
  color: #ff1b6d;
`;

export const Mg100 = styled.div`
  margin-top: 100px;
`;

export const Mg50 = styled.div`
  margin-top: 50px;
`;

export const Mg10 = styled.div`
  margin-top: 10px;
`;

export const LoginButton = styled.div`
  width: 540px;
  height: 76px;

  background-color: rgba(255, 27, 109, 0.8);
  border: none;
  border-radius: 38px;

  font-size: 26px;
  color: white;
  text-align: center;
  line-height: 76px;

  cursor: pointer;
`;

export const AccountContainer = styled.div`
  width: 540px;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const AccElement = styled.div`
  color: white;
  font-size: 20px;
`;

export const KakaoLoginBtn = styled.div`
  width: 540px;
  height: 76px;

  background-color: transparent;
  border: 2px solid #fae100;
  border-radius: 38px;

  font-size: 26px;
  font-weight: 700;
  color: #ffe100;
  text-align: center;
  line-height: 76px;
`;
