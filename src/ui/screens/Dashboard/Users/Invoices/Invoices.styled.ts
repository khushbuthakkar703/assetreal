import styled from "styled-components";

export const MainBody = styled.div`
  display: flex;
  margin: 0 auto;
  width: 100%;
  & * {
    font-family: "PublicSans-medium";
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export const MainContainer = styled.div`
  padding: 40px 38px;
  max-width: 1299px;
  width: 100%;
  @media only screen and (max-width: 950px) {
    padding: 0.84rem 1.47rem 0.84rem 1.19rem;
  }
`;

export const MainHeader = styled.div`
  margin-bottom: 0.97rem;
  h3 {
    color: ${({ theme }) => theme.color.greyscale[24]};
    font-size: 21px;
    line-height: 32px;
    font-family: "PublicSans-bold";
  }
  span {
    font-size: 15px;
    line-height: 24px;
    font-weight: 400;
    color: ${({ theme }) => theme.color.greyscale[21]};
  }
`;

export const MainUserBody = styled.div`
  border-top: 1px solid rgba(128, 130, 164, 0.118772);
  padding-top: 1.87rem;
  .History_Row {
    width: 350px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 28px 0;
    span {
      font-size: 12px;
      color: ${({ theme }) => theme.color.greyscale[23]};
    }
    .Status {
      color: #0a7324;
      background-color: RGB(63, 219, 17, 0.2);
      padding: 0.1rem 0.5rem;
      border-radius: 3px;
    }
    @media (max-width: 950px) {
      width: 70%;
    }
    @media (max-width: 500px) {
      width: 100%;
    }
  }
`;

export const History_Row = styled.div`
  width: 350px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 28px;
  span {
    font-size: 14px;
    line-height: 16px;
    color: #171721;
    font-weight: 500;
  }
  .Status {
    color: #0A7324;
    background: rgba(63, 219, 17, 0.22);
    padding: 0.1rem 0.5rem;
    border-radius: 3px;
  }
  .downloadbtn{
    width: 17px;
    height: 17px;
  }
  @media (max-width: 950px) {
    width: 70%;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;
