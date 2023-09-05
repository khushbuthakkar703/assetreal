import styled from "styled-components";

export const MainBody = styled.div`
  display: flex;
  margin: 0 auto;
  width: 100%;
  & * {
    font-family: "PublicSans-medium";

    box-sizing: border-box;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const EmptyOpContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh-20%;
  img {
    padding: 1rem;
    margin-top: 20vh;
    max-width: 290px;
    max-height: 100%;
  }
`;

export const DrawerBody = styled.div`
  background: ${({ theme }) => theme.color.background[1]};
  height: 100%;
  padding: 2rem;
`;

export const MainContainer = styled.div`
  padding: 40px 38px;
  @media only screen and (max-width: 668px) {
    padding: 0px 22px 0px 22px;
  }
  width: 100%;
  .OperationHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .searchBar {
      width: 100%;
      @media only screen and (max-width: 668px) {
        width: 100%;
        margin-bottom: 1rem;
      }
      h4 {
        font-weight: bold;
        font-size: 20px;
        color: ${({ theme }) => theme.color.greyscale[23]};
        margin-bottom: 15px;
      }
      .searchSelect {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .selectBox {
          select {
            min-width: 70px;
            font-size: 12px;
            min-height: 35px;
            background: none;
            color: #686990;
            border: 1px solid #eff0f1;
            border-radius: 5px;
          }
        }
      }
      .inputBox {
        display: flex;
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
          font-weight: 600;
          font-size: 12px;
          color: ${({ theme }) => theme.color.greyscale[21]};
          width: 100%;
          background: none;
          &::placeholder {
            color: ${({ theme }) => theme.color.greyscale[21]};
          }
          img {
            width: 50%;
          }
        }
      }
    }
  }
  button {
    width: 100%;
    height: 34px;
    background: #3e7eff;
    border: none;
    border-radius: 5px;
    font-weight: 100;
    font-size: 12px;
    color: #fff;
    font-family: "PublicSans-medium";
    letter-spacing: 0.5px;
    cursor: pointer;
    transition: all 0.3s;

    a {
      color: ${({ theme }) => theme.color.greyscale[1]};
      display: block;
      text-decoration: none;
    }
  }
`;

export const MainTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  img {
    margin-right: 0.8rem;
  }
  span {
    margin-right: 1rem;
    margin-top: 0.4em;
  }
  h2 {
    font-weight: 600;
    font-size: 22px;
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

export const LgContaint = styled.div`
  @media only screen and (max-width: 950px) {
    display: none;
  }
`;

export const SmContaint = styled.div`
  display: none;
  @media only screen and (max-width: 950px) {
    display: block;
  }
`;

// sidebar

export const rightContainer = styled.div``;

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
        border: 1px solid #d8d8d8;
        padding: 15px 30px;
        font-size: 12px;
        font-weight: 700;
        margin: 13px 0px;
        text-align: start;

        span {
          color: ${({ theme }) => theme.color.greyscale[23]};
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

  @media only screen and (max-width: 768px) {
    width: 100%;
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
    color: #171721;
    font-size: 22px;
    font-weight: 700;
    margin: 0 0 5px 0;
    line-height: 26px;
  }

  h5 {
    font-size: 14px;
    color: #153cc0;
    margin: 0;
    display: flex;
    align-items: center;
    button {
      margin-left: 5px;
    }
  }
`;
