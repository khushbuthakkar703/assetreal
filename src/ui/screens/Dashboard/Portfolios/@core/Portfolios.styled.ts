import styled from "styled-components";

export const MainBody = styled.div`  
  width: 100%;
  margin: 0 auto;
  & * {
    font-family: "PublicSans-medium";
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export const DrawerBody = styled.div`
  background: ${({ theme }) => theme.color.background[1]};
  height: 100%;
  padding: 2rem;
  h2 {
    font-weight: 600;
  }
`;

export const MainTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  padding: 2rem 2.5rem 0;
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

export const MainContainer = styled.div`
  width: 100%;
  padding: 40px 46px;
  .headerTab {
    h4 {
      display: flex;
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

  .KlondikeTabs {
    .TabHeader {
      padding: 1rem 0;
      ul {
        li {
          list-style: none;
          display: inline-block;
          margin-right: 1.5rem;
          button {
            font-weight: bold;
            font-size: 14px;
            line-height: 21px;
            color: ${({ theme }) => theme.color.greyscale[21]};
            border: none;
            background: none;
            cursor: pointer;
            letter-spacing: 0.5px;
          }
        }
      }
      select {
        width: 100%;
        background: #f5f5fa;
        border: none;
        padding: 1rem;
        border-radius: 100px;

        font-weight: 100;
        font-size: 14px;
        line-height: 16px;
        color: #397aff;
        text-align: center;
        cursor: pointer;
        display: none;
      }
      @media only screen and (max-width: 950px) {
        ul {
          display: none;
        }
        select {
          display: block;
        }
      }
    }
    .TabBody {
      margin-top: 20px;
    }
  }

  .menu-container {
    position: relative;
    .menu-trigger{
      display: flex;
    }
  }
  .menu {
    background: #ffffff;
    border-radius: 8px;
    position: absolute;
    top: 30px;
    right: 0;
    left: 20px;
    width: 200px;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
    transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
    font-size: 10px;
  }

  .menu.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  .menu ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .menu li {
    border-bottom: 1px solid #dddddd;
  }

  .menu li button {
    text-decoration: none;
    color: #333333;
    padding: 10px 15px;
    display: block;
    font-size: 13px;
  }

  .menu li button :hover {
    background: black;
    color: white;
  }
`;

export const AssetsHeader = styled.div`
  padding: 2.5rem;
  h5 {
    font-weight: bold;
    font-size: 20px;
    color: ${({ theme }) => theme.color.greyscale[3]};
  }
  span {
    font-size: 14px;
    line-height: 24px;
    color: ${({ theme }) => theme.color.greyscale[21]};
  }
  div {
    display: flex;
  }
  button {
    margin: 0.4rem 1rem;
  }
`;
