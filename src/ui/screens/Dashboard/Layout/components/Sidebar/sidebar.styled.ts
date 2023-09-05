import styled from "styled-components";

export const totalValue = styled.div`
  margin-bottom: 25px;
  h5 {
    color: ${({ theme }) => theme.color.greyscale[21]};
    font-family: "PublicSans-bold";
    font-size: 12px;
    // margin-bottom: 5px;
  }
  h3 {
    // font-family: "PublicSans-bold";
    font-size: 20px;
    line-height: 1;
    color: #1fa349;
    font-weight: 700;
  }
`;

export const AllTitles = styled.div`
  color: ${({ theme }) => theme.color.greyscale[21]};
  // font-family: "PublicSans-bold";
  font-weight: 500;
  font-size: 12px;
  margin-bottom: 5px;
`;

export const portfolios = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const portValue = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const values = styled.div`
  width: 100%;
  margin-bottom: 25px;
  h4 {
    font-family: "PublicSans-bold";
    font-size: 20px;
    line-height: 23px;
    color: ${({ theme }) => theme.color.greyscale[23]};
  }
`;

export const valuess = styled.div`
  width: 50%;
  margin-bottom: 25px;
  h4 {
    font-family: "PublicSans-bold";
    font-size: 20px;
    line-height: 23px;
    color: ${({ theme }) => theme.color.greyscale[23]};
  }
`;

export const TopOperations = styled.div`
  max-width: 359px;
  width: 100%;
  // height: 64px;
  .topclass {
    padding: 15px 0;
    list-style: none;
    li {
      margin-bottom: 5px;
      display: flex;
      align-items: center;
      span {
        font-weight: 500;
        font-size: 12px;
      }
      svg {
        margin-right: 5px;
      }
    }
  }
  .userManage {
    list-style: none;
    padding: 15px;
    li {
      a {
        display: flex;
        cursor: pointer;
        border-radius: 7px;
        border: 1px solid #f3f3f3;
        align-items: center;
        list-style: none;
        margin-bottom: 13px;
        text-align: start;
        padding: 10px 15px;

        &:hover {
          background: #d2e1ff;
          span {
            color: #3e7eff;
          }
        }
        svg {
          height: 20px;
          width: 20px;
          margin: 0 1rem;
        }
        span {
          // color: ${({ theme }) => theme.color.greyscale[23]};
          color: #3e7eff;
          margin-left: 20px;
        }
        p {
          color: #8083a3;
          display: block;
          margin-left: 20px;
          font-weight: 500;
          font-size: 13px;
        }
      }
      span {
        color: ${({ theme }) => theme.color.greyscale[20]};
      }
      // .activeLink {
      //   background: #d2e1ff;
      //   span {
      //     color: #3e7eff;
      //     display: block;
      //   }
      // }
    }
    .activTabs {
      a {
        background: #d2e1ff;
        span {
          color: #3e7eff;
        }
      }
    }
  }
`;
export const SideBarIcon = styled.div`
  span,
  p {
    font-size: 12px !important;
  }
`;

export const OperationResult = styled.div`
  display: flex;
  align-items: center;
  img {
    margin-right: 10px;
  }
  h5 {
    font-family: "PublicSans-bold";
    font-size: 12px;
    line-height: 18px;
    color: ${({ theme }) => theme.color.greyscale[20]};
  }
  span {
    font-family: "PublicSans-bold";
    font-size: 12px;
    line-height: 18px;
    margin-left: 25px;
    color: ${({ theme }) => theme.color.greyscale[21]};
  }
`;

export const OperationImages = styled.div`
  display: flex;
  align-items: center;
  img {
    border: 2px solid #fff;
    margin-right: -10px;
    border-radius: 100%;
    height: 35px;
    width: 35px;
  }
  button {
    font-family: "PublicSans-medium";
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    color: ${({ theme }) => theme.color.greyscale[21]};
    margin-left: 22px;
    border: none;
    background: none;
    cursor: pointer;
  }
`;

export const SideBar = styled.div`
  min-height: 85vh;
  width: 359px;
  padding: 45px 40px;
  background: ${({ theme }) => theme.color.background[12]};

  @media only screen and (max-width: 950px) {
    padding: 2.18rem 22px;
    width: 100%;
    min-height: auto;
  }
`;
export const SideBarSetting = styled.div`
  min-height: 85vh;
  width: 359px;
  background: ${({ theme }) => theme.color.background[12]};

  @media only screen and (max-width: 950px) {
    padding: 3rem 22px;
    width: 100%;
    min-height: auto;
    margin-bottom: 1rem;
  }
`;

export const TopOperationBox = styled.div`
  padding: 0px;
  @media only screen and (max-width: 950px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const LgSidebar = styled.div`
  @media only screen and (max-width: 950px) {
    display: none;
  }
`;

export const SmSiderbar = styled.div`
  display: none;
  @media only screen and (max-width: 950px) {
    display: block;
  }

  .graphRight {
    border: 1px solid #e4e6e8;
    border-radius: 10px;
    width: 100%;
    min-height: 200px;
    margin-bottom: -0.48em;
    .BoxHeader {
      display: flex;
      align-items: center;
      justify-content: space-between;
      h4 {
        font-weight: bold;
        font-size: 16px;
        line-height: 19px;
        color: #191919;
        margin: 0;
      }
      .MainDate {
        display: flex;
        align-items: center;
        h6 {
          font-weight: 100;
          font-size: 11px;
          color: ${({ theme }) => theme.color.greyscale[4]};
          margin-right: 1px;
        }
      }
    }
    .rightHeader {
      padding: 1rem;
      border-bottom: 1px solid #e4e6e8;
      h5 {
        font-weight: bold;
        font-size: 14px;
        line-height: 24px;
        color: ${({ theme }) => theme.color.greyscale[3]};
      }
    }

    .rightBody {
      padding: 0 1.5rem 0.2rem;
      .graphList {
        padding: 16px 0;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #e4e6e8;
        align-items: center;
        &:last-child {
          border-bottom: none;
        }
        span {
          display: flex;
          align-items: center;
          font-weight: 500;
          font-size: 14px;
          line-height: 16px;
          color: ${({ theme }) => theme.color.greyscale[24]};
          svg {
            margin-right: 0.5rem;
          }
        }
        h5 {
          font-weight: bold;
          font-size: 14px;
          line-height: 16px;
          color: ${({ theme }) => theme.color.greyscale[24]};
          text-align: end;
          margin: 0;
        }
      }

      .graphDiv {
        svg {
          min-height: 280px;
        }
        height: 220px;
        .k-chart-donut-center {
          position: absolute;
          border-radius: 50%;
          background: #292c43;
          margin-top: 0px;
          padding: 10px;
          display: flex;
          .centerText {
            display: flex;
            flex-direction: column;
            justify-content: center;
            .centerTitle {
              color: white;
              text-align: center;
              font-size: 28px;
              line-height: 38px;
              font-weight: bold;
            }
            .centerDes {
              color: #707070;
              text-align: center;
              font-size: 12px;
            }
          }
        }
      }
      .graphBottom {
        border-bottom: none;
        justify-content: center;
      }
    }

    .rightFooter {
      border-radius: 10px;
      padding: 0 1rem 1rem 1rem;
      button {
        height: auto;
        padding: 1rem;
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
    }
  }
`;

export const HideSmSidebar = styled.div`
  background: ${({ theme }) => theme.color.background[3]};
  @media only screen and (max-width: 950px) {
    display: none;
  }
`;

export const clientSidebar = styled.div`
  width: 482px;
  border-right: 1px solid ${({ theme }) => theme.color.border[1]};
  display: flex;
  ul {
    width: 90px;
    li {
      position: relative;
      a {
        width: 71px;
        display: flex;
        height: 71px;
        border-radius: 15px;
        margin: 15px auto;
        font-size: 22px;
        font-weight: 700;
        color: ${({ theme }) => theme.color.greyscale[20]};
        align-items: center;
        justify-content: center;
      }

      .activeLink {
        border: 6px solid #72728f;
      }

      span {
        display: none;
        position: absolute;
        left: 94px;
        top: 50%;
        border-radius: 7px;
        background: #3e7eff;
        transform: translate(0, -50%);
        color: #fff;
        font-size: 14px;
        padding: 2px 5px;
        min-width: 100px;
        text-align: center;
        z-index: 999;
        &::after {
          content: "";
          position: absolute;
          width: 0;
          height: 0;
          border-top: 10px solid transparent;
          border-right: 16px solid #3e7eff;
          border-bottom: 10px solid transparent;
          left: -11px;
          top: 50%;
          transform: translate(0, -50%);
        }
      }

      &:hover {
        span {
          display: block;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    ul {
      display: flex;
      align-items: center;
      overflow: auto;
      li {
        list-style: none;
      }
    }
  }
`;

export const ClientBody = styled.div`
  display: flex;
`;

export const clientDetails = styled.div`
  width: 392px;
  padding: 15px;
  @media only screen and (max-width: 1350px) {
    width: 265px;
  }
  ul {
    width: 100%;
    li {
      list-style: none;
      .activeLink {
        background: #edf2ff;
        span {
          color: #3e7eff;
        }
      }
      button {
        width: 100%;
        display: block;
        border-radius: 7px;
        border: 1px solid #f3f3f3;
        padding: 15px 30px;
        font-size: 12px;
        font-weight: 700;
        margin: 13px 0px;
        text-align: start;

        span {
          position: static;
          background: none;
          text-align: start;
          min-width: auto;
          transform: translate(0);
          margin: 0;
          padding: 0;
          display: block;
          color: ${({ theme }) => theme.color.greyscale[23]};
          &::after {
            display: none;
          }
        }
        p {
          color: #8083a3;
        }

        &:hover {
          background: #edf2ff;
          span {
            color: #3e7eff;
          }
        }
      }

      .activTabs {
        background: #edf2ff;
        span {
          color: #3e7eff;
        }
      }
    }
  }

  .innerTabs {
    li {
      a {
        width: 100%;
      }
    }
  }
`;

export const clientBox = styled.div`
  min-height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 12px;
  background: #edf2ff;

  h3 {
    color: #3a3335;
    font-size: 20px;
    font-weight: 700;
    margin: 0;
    line-height: 26px;
  }

  h5 {
    font-size: 14px;
    color: #153cc0;
  }
`;
