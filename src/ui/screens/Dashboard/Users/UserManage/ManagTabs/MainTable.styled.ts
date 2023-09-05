import styled from "styled-components";

export const TabHead = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 31px;
  @media only screen and (max-width: 668px) {
    display: none;
  }
`;

export const HeadColums1 = styled.div`
  text-align: start;
  width: 30%;
  font-size: 14px;
  line-height: 24px;
  color: ${({ theme }) => theme.color.greyscale[21]};
  font-family: "PublicSans-medium";
  font-weight: 200;
`;

export const HeadColums2 = styled.div`
  text-align: center;
  width: 20%;
  font-size: 14px;
  line-height: 24px;
  color: ${({ theme }) => theme.color.greyscale[21]};
  font-family: "PublicSans-medium";
  font-weight: 200;
`;

export const HeadColums3 = styled.div`
  width: 10%;
`;

export const TabBody = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 31px;
  @media only screen and (max-width: 668px) {
    display: none;
  }
`;

export const BodyColums1 = styled.div`
  width: 30%;
  overflow: hidden;
  display: flex;
  align-items: center;
  img {
    height: 54px;
    width: 54px;
    margin-right: 12px;
    border-radius: 100%;
  }
  div {
    h5 {
      font-family: "PublicSans-bold";
      font-size: 14px;
      font-weight: 600;
      margin: 0;
      color: ${({ theme }) => theme.color.greyscale[24]};
    }
    span {
      font-weight: 100;
      font-size: 14px;
      font-family: "PublicSans-medium";
      color: ${({ theme }) => theme.color.greyscale[4]};
    }
  }
`;

export const BodyColums2 = styled.div`
  width: 20%;
  text-align: center;
  span {
    font-size: 14px;
    line-height: 21px;
    color: ${({ theme }) => theme.color.greyscale[3]};
    font-family: "PublicSans-bold";
    font-weight: 600;
  }
  .blue {
    background-color: #f0f0fa;
    color: #397aff;
    border-radius: 5px;
    padding: 0.3rem 0.8rem;
    font-size: 12px;
  }
`;

export const BodyColums3 = styled.div`
  width: 10%;
  position: relative;
  text-align: end;
  button {
    width: 47px;
    height: 42px;
    border: 1px solid #f2f2ff;
    border-radius: 5px;
  }
`;

export const RoleModal = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: ${({ theme }) => theme.color.background[1]};
  border: 1px solid #ededed;
  border-radius: 10px;
  width: 243px;
  z-index: 999;
  text-align: start;
`;

export const FullModal = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  background: #000000ba;
  top: 0;
  left: 0;
  z-index: 999;
`;

export const RoleModal2 = styled.div`
  box-shadow: 0px 0px 7px #ffffff;
  position: absolute;
  text-align: start;
  top: 50%;
  left: 50%;
  background: ${({ theme }) => theme.color.background[1]};
  border: 1px solid #ededed;
  border-radius: 10px;
  width: 320.49px;
  z-index: 999;
  transform: translate(-50%, -50%);
`;

export const AccessRole = styled.div`
  padding: 0.3rem 1.1rem;
  margin: 0.5rem 0.5rem 0.56rem;
  cursor: pointer;
  border-radius: 10px;
  span {
    color: ${({ theme }) => theme.color.greyscale[27]} !important;
    font-size: 16px !important;
    line-height: 24px !important;
    display: block;
    padding-bottom: 0.29rem;
  }

  h5 {
    color: ${({ theme }) => theme.color.greyscale[4]};
    font-size: 13px;
    line-height: 17px;
    font-weight: 600;
  }

  h4 {
    color: #8083A4;
    font-size: 16px !important;
    line-height: 24px;
    font-weight: 600;
    display: block;
    padding: 0;
    margin: 0;
  }

  h6 {
    color: #000;
    font-size: 14px;
    line-height: 24px;
    font-weight: 600;
    display: block;
    padding: 0;
    margin: 0;
  }

  &:hover {
    background: ${({ theme }) => theme.color.background[6]};
  }
  &:last-child {
    border-radius: 0;
    border-top: 1px solid #ededed;
    color: #cd3333;
    padding: 1.42rem 1.67rem 1.32rem;
    font-size: 15px;
    line-height: 24px;
    margin: 0;
    &:hover {
      background: none;
    }
  }
`;

export const TablesBody = styled.div`
  margin-top: 1.40rem;
`;

export const SmtableBody = styled.div`
  display: none;
  border: 1px solid rgba(128, 130, 164, 0.13);
  border-radius: 9px;
  padding: 0.76rem 0.97rem 1.4rem;
  margin-bottom: 0.58rem;
  @media only screen and (max-width: 668px) {
    display: block;
  }
`;

export const DateHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DataHeadTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  line-height: 24px;
  color: ${({ theme }) => theme.color.greyscale[21]};
  span {
    display: block;
    color: #3476ff;
    margin: 0 0.5rem;
  }
  @media only screen and (max-width: 400px) {
    font-size: 8px;
  }
`;

export const DataBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.16rem;
`;

export const CoinsDiv = styled.div`
  display: flex;
  align-items: center;
  img {
    height: 44px;
    width: 44px;
    margin-right: 10px;
    border-radius: 100%;
  }
  div {
    h5 {
      font-family: "PublicSans-bold";
      font-size: 14px;
      line-height: 24px;
      color: ${({ theme }) => theme.color.greyscale[24]};
      margin: 0;
    }
    span {
      font-weight: 100;
      display: block;
      font-size: 14px;
      line-height: 24px;
      font-family: "PublicSans-medium";
      color: ${({ theme }) => theme.color.greyscale[4]};
      max-width: 90%;
      overflow: hidden;
    }
  }
`;

export const CoinsMenu = styled.div`
  text-align: end;
  margin-top: 0.5rem;
  span {
    font-size: 14px;
    line-height: 21px;
    color: ${({ theme }) => theme.color.greyscale[3]};
    cursor: pointer;
    font-weight: 600;
  }
  .blue {
    background-color: #f0f0fa;
    color: #397aff;
    border-radius: 5px;
    width: 112px;
    height: 32px;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    @media only screen and (max-width: 400px) {
      font-size: 11px;
    }
  }
`;

export const formBody = styled.div`
  padding: 1rem 2rem;
  h2 {
    font-size: 20px;
  }
  form {
    .inputDiv {
      margin: 1rem 0;
      label {
        color: ${({ theme }) => theme.color.greyscale[4]};
        display: block;
        margin-bottom: 0.5rem;
      }
      input {
        border: 1px solid #f2f2ff;
        padding: 0.5rem;
        width: 100%;
      }
    }
  }
`;

export const formFooter = styled.div`
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 450px) {
    padding: 0.5rem;
  }
  button {
    border: 0.5px solid #f2f2ff;
    color: #8082A4;
    font-size: 14px;
    line-height: 19px;
    width: 157px;
    height: 40px;
    border-radius: 7px;
    &:last-child {
      background: #397aff;
      color: #fff;
    }
    &:hover {
      opacity: 0.7;
    }
  }
  .bg-red {
    background: #e21b1b;
  }
`;

export const modalBody = styled.div`
  padding: 1rem 2rem;
  @media only screen and (max-width: 450px) {
    padding: 0.5rem;
  }
  h2 {
    font-size: 20px;
    line-height: 24px;
    font-weight: 700;
    margin-bottom: 0.62rem;
    color: ${({ theme }) => theme.color.greyscale[24]};
  }
  span {
    color: #8081a5;
    font-size: 14px;
    display: block;
    margin-bottom: 1.56rem;
    line-height: 19px;
    font-weight: 500;
  }
  .userProfile {
    display: flex;
    align-items: center;
    border: 1px solid #e6e6e6;
    padding: 0.5rem 1rem;
    border-radius: 7px;
    background-color: #FAFAFA;
    img {
      width: 44px;
      height: 44px;
      border-radius: 100%;
      margin-right: 1rem;
    }
    h6,
    p {
      font-size: 12px;
    }
    h6 {
      font-weight: 700;
      font-size: 12px;
      line-height: 24px;
      margin: 0;
      color: ${({ theme }) => theme.color.greyscale[24]};
    }
    p {
      color: ${({ theme }) => theme.color.greyscale[4]};
      display: block;
      font-weight: 400;
      font-size: 12px;
      line-height: 24px;
    }
  }
`;
