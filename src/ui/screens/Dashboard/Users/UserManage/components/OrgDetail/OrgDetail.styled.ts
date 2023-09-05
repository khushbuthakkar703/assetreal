import styled from "styled-components";

export const MainBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0px 60px;
  margin: 0 auto;
  width: 100%;
  & * {
    font-family: "PublicSans-medium";
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  @media only screen and (max-width: 414px) {
    display: none;
  }
`;

export const MainContainer = styled.div`
  padding: 40px 38px;
  max-width: 1299px;
  width: 100%;
  @media only screen and (max-width: 950px) {
    padding: 10px;
  }
`;

export const Title = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.color.greyscale[21]};
  margin-bottom: 5px;
  letter-spacing: 0.5px;
`;

export const OrgHeader = styled.span`
  font-weight: 600;
  font-size: 12px;
`;

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 0px 20px;
  margin-bottom: 10px;
  border-bottom: 1px solid rgb(228, 230, 232, 0.4);
`;

export const Box = styled.div`
  width: 50px;
  height: 50px;
  margin-top: 5px;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  border: 1px solid rgb(228, 230, 232, 0.4);
  border-style: solid;
  border-radius: 10px;
`;

export const Box2 = styled.div`
  margin-left: 15px;
`;
