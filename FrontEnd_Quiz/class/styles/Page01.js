import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 640px;

  padding: 20px 0px 0px 0px;
  display: flex;
  flex-direction: column;
  border: 1px solid grey;
  border-radius: 3px;
`;

export const Header__search = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0px 20px;
`;

export const Header__search__img = styled.img`
  width: 23px;
  height: 23px;
`;

export const Header__mp = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 20px;
`;

export const Header__menu = styled.div`
  margin-top: 40px;
  padding: 0px 20px;

  display: flex;
  justify-content: space-around;
`;

export const Menu__element = styled.div`
  font-size: 30px;
  font-weight: 700;
  color: #cacaca;
`;
