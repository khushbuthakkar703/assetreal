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
  width: 100%;

  .OperationSmHeader {
    margin: 1rem 0 1.31rem;
    .searchBar {
      display: flex;
      align-items: center;
      h4 {
        font-weight: 700;
        font-size: 22px;
        line-height: 32px;
        color: #171721;
        margin: 0;
      }

      select {
        background: none;
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;
        color: #686990;
        border: none;
        margin: 0 20px;
        border: 1px solid #EFF0F1;
        border-radius: 5px;
        padding: 8px;
      }

      button {
        background: #F5F5FA;
        width: auto;
        margin-left: auto;
        padding: 10px;
        border-radius: 10px;
        height: 37px;
      }
    }
    .inputBox {
      margin-top: 1.3rem;
      display: flex;
      align-items: center;
      max-width: 600px;
      max-height: 42px;
      width: 100%;
      border-radius: 9px;
      background: #F5F5FA;
      @media only screen and (max-width: 668px) {
        max-width: 100%;
      }
      span {
        margin-right: 5px;
        padding: 0.5rem 0 0.5rem 1rem;
        display: flex;
      }
      input {
        padding: 0.9rem 0.93rem;
        border: none;
        font-weight: 600;
        font-size: 12px;
        color: ${({ theme }) => theme.color.greyscale[21]};
        width: 100%;
        background: none;
        &::placeholder {
          font-weight: 700;
          font-size: 12px;
          line-height: 18px;
          color: #8083A3;
        }
        img {
          width: 50%;
        }
      }
    }
  }
`;

export const Main = styled.div`
  & * {
    font-family: "PublicSans-bold";
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .MainTitle {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .Dflex {
      display: flex;
      align-items: center;
      img {
        height: 42px;
        width: 42px;
      }
      h4 {
        font-weight: 100;
        font-size: 22px;
        line-height: 32px;
        color: ${({ theme }) => theme.color.greyscale[20]};
        margin-right: 1rem;
      }
      select {
        border-radius: 5px;

        font-weight: 100;
        font-size: 12px;
        line-height: 14px;
        color: #686990;
        padding: 0.5rem;
        border: 1px solid #eff0f1;
      }
    }

    button {
      background: #f5f5fa;
      height: 35px;
      width: 35px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
  }

  .inputBox {
    display: flex;
    margin: 10px 0px;
    align-items: center;
    max-width: 600px;
    max-height: 42px;
    width: 100%;
    border: 1px solid #f2f2ff;
    border-radius: 5px;
    background: ${({ theme }) => theme.color.background[3]};
    @media only screen and (max-width: 668px) {
      max-width: 100%;
    }
    span {
      margin-right: 5px;
      padding: 0.5rem 0 0.5rem 1rem;
      display: flex;
    }
    input {
      padding: 0.9rem 0.5rem;
      border: none;
      font-weight: 500;
      font-size: 12px;
      color: ${({ theme }) => theme.color.greyscale[21]};
      width: 100%;
      background: none;
      letter-spacing: 0.3px;
      &::placeholder {
        color: ${({ theme }) => theme.color.greyscale[21]};
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .MainTitle {
      .Dflex {
        justify-content: space-between;
        width: 100%;
      }
    }
  }
`;

export const graphRight = styled.div`
  border: 1px solid #e4e6e8;
  border-radius: 10px;
  width: 100%;
  min-height: 200px;
  margin-bottom: 1rem;
`;

export const rightHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.43rem 1.04rem 1.11rem 1.8rem;
  border-bottom: 1px solid #e4e6e8;
  h5 {
    font-weight: bold;
    font-size: 14px;
    line-height: 24px;
    color: ${({ theme }) => theme.color.greyscale[3]};
  }
  .MainImg {
    display: flex;
    align-items: center;
    img {
      height: 42px;
      width: 42px;
    }
    h4 {
      color: #191919;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
    }
    img,
    h4 {
      margin-right: 0.81rem;
    }
    span {
      display: block;
      min-width: 69px;
      background: #f3f3ff;
      border-radius: 20px;
      font-weight: 700;
      font-size: 12px;
      line-height: 14px;
      color: #20c54d;
      text-align: center;
      padding: 0.18rem 0.5rem;
    }
    .terminated{
      color: #CD4B18;
    }
  }
  .Red {
    color: #cd4b18;
  }
  .MainDate {
    display: flex;
    align-items: center;
    h6 {
      font-weight: 500;
      font-size: 13px;
      line-height: 15px;
      color: ${({ theme }) => theme.color.greyscale[4]};
      margin-right: 3px;
    }
  }
`;

export const rightFooter = styled.div`
  border-radius: 10px;
  padding: 0 0.99rem 1rem 1.43rem;
  button {
    height: 37px;
    width: 100%;
    background: #3e7eff;
    border: none;
    font-weight: 100;
    font-size: 12px;
    line-height: 14px;
    color: ${({ theme }) => theme.color.greyscale[1]};
    cursor: pointer;
    max-width: 100%;
  }
`;

export const rightBody = styled.div`
  padding: 0 1.02rem 0 1.43rem;
  .graphList {
    padding: 0.4rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:first-child{
      padding-top: 0.8rem;
    }
    &:last-child {
      border-bottom: none;
      padding: 0.4rem 0 1.15rem;
    }
    span {
      display: flex;
      align-items: center;
      font-family: "PublicSans-Medium";
      font-size: 14px;
      line-height: 16px;
      color: ${({ theme }) => theme.color.greyscale[24]};
      svg {
        margin-right: 0.51rem;
      }
    }
    h5 {
      font-family: "PublicSans-semibold";
      font-size: 14px;
      line-height: 16px;
      color: ${({ theme }) => theme.color.greyscale[24]};
      text-align: end;
    }
    .Green {
      color: #35a400;
    }
  }
`;

export const Maintitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  img {
    margin-right: 0.8rem;
  }
  h2 {
    width: 78%;
    text-align: center;
    font-weight: 100;
    font-size: 22px;
    color: ${({ theme }) => theme.color.greyscale[3]};
  }
  .arrowDown {
    width: 12%;
    height: 42px;
    background: #f5f5fa;
    border-radius: 5px;
    margin-right: 10px;
  }
  img {
    padding: 15px;
    margin-left: 2px;
  }
`;

export const Modalfooter = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  padding: 1.4rem;
  box-sizing: border-box;
  bottom: 0;

  button {
    padding: 0.6rem 1rem;
    height: auto;
    width: 100%;
    max-width: 100%;
    letter-spacing: 0.5px;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      opacity: 0.8;
    }
  }
`;

export const LgButtons = styled.div`
  @media only screen and (max-width: 950px) {
    display: none;
  }
`;
export const SmButtons = styled.div`
  display: none;
  @media only screen and (max-width: 950px) {
    display: block;
  }
  button {
    margin-top: 1rem;
    &:nth-child(2) {
      background: none;
      border: 1px solid #e6e6f8;
      color: ${({ theme }) => theme.color.greyscale[3]};
    }
  }
`;
