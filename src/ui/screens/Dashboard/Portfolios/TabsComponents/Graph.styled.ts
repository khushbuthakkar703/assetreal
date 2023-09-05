import styled from "styled-components";

export const GraphMain = styled.div`
  & * {
    font-family: "PublicSans-medium";
  }
  svg {
    max-height: 400px;
  }
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 3rem;
  flex-wrap: wrap;

  .graphLeft {
    border: 1px solid rgb(228, 230, 232, 0.6);
    border-radius: 10px;
    width: 74%;
    max-height: 450px;
    @media only screen and (max-width: 1299px) {
      width: 100%;
      margin-bottom: 1rem;
    }
    .graphHeader {
      padding: 1.2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-bottom: 2rem;
      .graphTitle {
        @media only screen and (max-width: 950px) {
          flex-direction: row-reverse;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }
        .Titles {
          h5 {
            font-size: 22px;
            line-height: 32px;
            font-family: "PublicSans-medium";
            color: ${({ theme }) => theme.color.greyscale[4]};
            @media only screen and (max-width: 950px) {
              display: none;
            }
          }
          h4 {
            font-family: "PublicSans-medium";
            font-size: 14px;
            line-height: 21px;
            color: #5fdcb3;
            display: none;
            @media only screen and (max-width: 950px) {
              display: block;
            }
          }
        }
        h6 {
          font-family: "PublicSans-medium";
          font-size: 18px;
          line-height: 32px;
          font-weight: 600;
          color: ${({ theme }) => theme.color.greyscale[3]};
        }
      }

      .graphTabs {
        @media only screen and (max-width: 950px) {
          display: none;
        }
        ul {
          background: ${({ theme }) => theme.color.background[2]};
          border-radius: 10px;
          li {
            list-style: none;
            display: inline-block;
            button {
              background: none;
              border: none;
              padding: 0.9rem;
              font-weight: bold;
              font-size: 12px;
              color: ${({ theme }) => theme.color.greyscale[21]};
              cursor: pointer;
            }
            .activeTab {
              color: #3e7eff;
            }
          }
        }
      }
    }
  }

  .graphRight {
    border: 1px solid rgb(228, 230, 232, 0.6);
    border-radius: 10px;
    width: 24%;
    min-height: 200px;
    position: relative;
    @media only screen and (max-width: 1299px) {
      width: 100%;
    }
    .rightHeader {
      padding: 1rem;
      border-bottom: 1px solid rgb(228, 230, 232, 0.6);
      h5 {
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;
        color: ${({ theme }) => theme.color.greyscale[23]};
      }
    }

    .rightBody {
      padding: 0 1rem 2.5rem;
      .graphList {
        border-bottom: 1px solid rgb(228, 230, 232, 0.6);
        padding: 1rem 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        &:last-child {
          border-bottom: none;
        }
        span {
          font-size: 14px;
          line-height: 21px;
          color: ${({ theme }) => theme.color.greyscale[21]};
        }
        h5 {
          font-weight: 400;
          font-size: 14px;
          line-height: 21px;
          color: ${({ theme }) => theme.color.greyscale[23]};
          text-align: end;
        }
      }
    }

    .rightFooter {
      background: ${({ theme }) => theme.color.background[2]};
      border-radius: 10px;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      button {
        padding: 1rem;
        width: 100%;
        background: none;
        border: none;
        font-weight: bold;
        font-size: 12px;
        line-height: 21px;
        color: ${({ theme }) => theme.color.greyscale[21]};
        letter-spacing: 0.5px;
        cursor: pointer;
      }
    }
  }
`;
