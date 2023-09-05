import styled from "styled-components";

export const MainBody = styled.div`
  padding: 15px 30px;
  width: 100%;
`;

export const HeadTitile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h3 {
    font-size: 22px;
    color: ${({ theme }) => theme.color.greyscale[23]};
    font-weight: 700;
    margin: 0;
  }
  span {
    font-size: 18px;
    color: #8083a3;
  }
  button {
    height: 42px;
    background: #3e7eff;
    border-radius: 5px;
    font-size: 12px;
    font-weight: 800;
    color: #fff;
    letter-spacing: 1px;
    padding: 0 10px;
    display: none;
  }

  @media only screen and (max-width: 768px) {
    button {
      display: block;
    }
  }
`;
export const TotalClient = styled.div`
  h3 {
    font-size: 15px;
    color: #8083a3;
    padding: 20px 0;
  }
`;

export const MainContainer = styled.div`
  width: 100%;
  // padding: 20px 30px;
  .headerTab {
    h4 {
      display: flex;
      align-items: center;
      align-items: center;
      font-family: "PublicSans-bold";
      font-size: 22px;
      line-height: 32px;
      color: ${({ theme }) => theme.color.greyscale[3]};
      span {
        font-family: "PublicSans-bold";
        font-size: 22px;
        line-height: 32px;
        color: ${({ theme }) => theme.color.greyscale[4]};
        margin: 0 5px;
        svg {
          margin-left: 10px;
        }
      }
    }
  }
  @media only screen and (max-width: 950px) {
    ul {
      display: none;
    }
    select {
      display: block;
    }
  }

  @media only screen and (max-width: 768px) {
    .drawerr {
      height: 60% !important;
      bottom: 0px !important;
      top: auto !important;
      max-width: 100% !important;
      transform: translate(0%, 100%) !important;
    }
  }
`;

export const ClientOperationsHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 30px 0;
  text-aling: end;

  input {
    background: #fbfbff;
    border: 1px solid #f2f2ff;
    font-size: 12px;
    color: #8083a3;
    height: 42px;
    width: 100%;
    font-weight: 700;
    border-radius: 5px;
  }
  button {
    width: 210px;
    height: 42px;
    background: #3e7eff;
    border-radius: 5px;
    font-size: 12px;
    font-weight: 800;
    color: #fff;
    letter-spacing: 1px;
  }
  @media only screen and (max-width: 768px) {
    button {
      display: none;
    }
  }
`;
export const searchbar = styled.div`
  display: flex;
  align-items: center;
  background: #fbfbff;
  border: 1px solid #f2f2ff;
  font-size: 12px;
  color: #8083a3;
  height: 42px;
  max-width: 736px;
  width: 100%;
  border-radius: 5px;
  svg {
    margin: 0 11px;
  }
`;
export const OperationTable = styled.div`
  overflow: auto;
  & * {
    font-family: "PublicSans-medium";
  }
`;

export const TableRow = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  border: 1px solid #f4f4f4;
  background: none;
  padding: 16px;
  margin: 11px 0;

  @media only screen and (max-width: 768px) {
    align-items: flex-start;
  }

  @media only screen and (max-width: 450px) {
    padding: 5px;
  }
`;

export const TableBox1 = styled.div`
  width: 75%;
  display: flex;
  align-items: center;

  h3 {
    min-width: 100px;
    margin: 0;
    font-size: 14px;
    color: ${({ theme }) => theme.color.greyscale[24]};
    font-weight: 700;
  }

  span {
    font-size: 12px;
    border-radius: 7px;
    background: #3e7eff;
    color: #fff;
    padding: 5px 13px;
    display: block;
    margin: 0 23px 0 15px;
  }

  h5 {
    margin: 0;
    font-size: 12px;
    color: #8081a5;
    font-weight: 600;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    span {
      margin: 5px 0;
    }
  }

  @media only screen and (max-width: 450px) {
    width: 65%;
    span {
      padding: 5px;
    }
  }
`;

export const TableBox2 = styled.div`
  width: 25%;
  text-align: end;
  h3 {
    margin: 0;
    font-size: 12px;
    font-weight: 700;
    color: ${({ theme }) => theme.color.greyscale[24]};
  }
  @media only screen and (max-width: 450px) {
    width: 35%;
    span {
      padding: 5px;
    }
  }
`;

export const DrawerBody = styled.div`
  height: 100%;
  max-height: 90vh;
  overflow: auto;
  padding: 2rem;
  position: relative;
  background: ${({ theme }) => theme.color.background[1]};
`;

export const MainTitle = styled.div`
   display: flex;
  align-items: center;
  margin-bottom: 30px;
  img {
    margin-right: 0.8rem;
  }
  span {
    margin-right: 1.3rem;
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f3f3f3;
    border-radius: 8px;
    border: 1px solid #eee;
    cursor: pointer;
  }
  h2 {
    font-weight: 600;
    font-family: "PublicSans-bold";
    font-size: 18px;
    margin:0;
    color: ${({ theme }) => theme.color.greyscale[3]};
  }
`;

export const Modalfooter = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  padding: 2rem;
  box-sizing: border-box;
  bottom: 0;

  button {
    padding: 0.6rem 1rem;
    height: 42px;
    width: 100%;
    max-width: 788px;
    background: #3e7eff;
    border-radius: 5px;
    color: #ffffff;
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 0.5px;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      opacity: 0.8;
    }
  }
`;

export const SideBody = styled.div`
  h3 {
    font-size: 14px;
    color: ${({ theme }) => theme.color.greyscale[24]};
    font-weight: 700;
    margin-bottom: 18px;
  }
  input {
    width: 100%;
    height: 52px;
    display: flex;
    align-items: center;
    padding: 20px;
    font-size: 14px;
    font-weight: 700;
    border-radius: 8px;
    border: 1px solid #d8dde1;
    color: ${({ theme }) => theme.color.greyscale[24]};
    margin-bottom: 25px;
  }
  button {
    max-width: 804px;
    height: 42px;
    background-color: #3e7eff;
    color: #ffffff;
  }
`;

export const SideBtn = styled.div`
  max-width: 804px;
  height: 42px;
  background-color: #3e7eff;
  color: #ffffff;
  border-radius: 5px;
  font-size: 15px;
  text-align: center;
  margin: 0 auto;
`;
