import styled from "styled-components";

export const leftSection = styled.div`
  display: flex;
  align-items: center;
  width: 75%;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 250px;
  justify-content: center;
`;

export const menuList = styled.div`
  display: flex;
  align-items: center;
  a {
    display: block;
    color: ${({ theme }) => theme.color.greyscale[23]};
    font-size: 14px;
    text-decoration: none;
    font-weight: 700;
    margin: 0 35px;
    &:last-child {
      margin-right: 0;
    }
  }

  @media only screen and (max-width: 1140px) {
    a {
      margin: 0 10px;
    }
  }
`;

export const rightSection = styled.div`
  width: 30%;
  text-align: end;
  display: flex;
  padding-right: 3rem;
  align-items: center;
  justify-content: end;
  .userDp {
    display: flex;
    align-items: center;
    justify-content: end;
    margin-right: 2rem;
    img {
      height: 26px;
      width: 26px;
      border-radius: 100px;
      margin-right: 5px;
    }
    h3 {
      margin: 0;
      font-weight: 700;
      font-size: 14px;
      line-height: 32px;
      color: #171721;
      white-space: nowrap;
    }
  }
  button {
    min-width: 143px;
    min-height: 44px;
    font-size: 12px;
    color: ${({ theme }) => theme.color.greyscale[24]};
    border: 1px solid ${({ theme }) => theme.color.border[2]};
    border-radius: 5px;
    font-weight: 700;
  }
`;

export const smHeader = styled.div`
  display: none;
  @media (max-width: 950px) {
    background: ${({ theme }) => theme.color.background[1]};
    border-bottom: 1px solid ${({ theme }) => theme.color.border[1]};
    padding: 0.7rem;
    display: flex;
    justify-content: space-between;
  }

  .menu-button-wrapper {
    position: relative;
    display: inline-block;

    .item-list {
      position: fixed;
      top: 0;
      transform: translateX(-110%);
      transition: transform 350ms ease-in-out;
      background: #fff;
      color: ${({ theme }) => theme.color.greyscale[1]};
      height: 100%;
      left: 0;
      width: 75%;
      text-align: left;
      border-radius: 0;
      font-weight: 300;
      user-select: none;
      z-index: 9;
      .userDp {
        display: flex;
        align-items: center;
        justify-content: start;
        padding: 10px 20px;
        background: #3e7eff;
        margin-bottom: 27px;
        img {
          height: 26px;
          width: 26px;
          border-radius: 100px;
          margin-right: 6px;
        }
        h3 {
          margin: 0;
          font-weight: 700;
          font-size: 14px;
          line-height: 32px;
          color: #fff;
          white-space: nowrap;
        }
      }
      a {
        display: block;
        color: ${({ theme }) => theme.color.greyscale[23]};
        font-size: 14px;
        line-height: 32px;
        text-decoration: none;
        font-weight: 700;
        padding: 0 1.25rem 1.25rem;
        &:hover {
          opacity: 0.5;
        }
      }
      button {
        min-width: 143px;
        height: 34px;
        border-radius: 5px;
        border: 1px solid ${({ theme }) => theme.color.border[1]};
        background: ${({ theme }) => theme.color.background[1]};
        color: ${({ theme }) => theme.color.greyscale[3]};
        font-size: 14px;
        font-weight: 700;
        cursor: pointer;
        transition: all 0.3s;
      }
    }

    .menu-button {
      position: absolute;
      width: 40px;
      height: 40px;
      left: 0;
      z-index: 2;
      opacity: 0;
      cursor: pointer;

      &:checked ~ .item-list {
        // transform: translateX(0%) scale(1);
        // opacity: 1;
        // left: 0;
        // box-shadow: 1rem 0 3rem rgb(0 0 0 / 50%);
        // user-select: auto;
        transform: translateX(0);
        box-shadow: 0 .5rem 2rem rgba(0,0,0,.55)!important;
      }

      &:checked ~ .icon-wrapper .hamburger-line.second {
        transform: rotate(-45deg);
      }

      &:checked ~ .icon-wrapper .hamburger-line.first {
        transform: translate(-1px, 12px) rotate(-135deg);
      }

      &:checked ~ .icon-wrapper .hamburger-line.third {
        transform: translate(23px, 1px) rotate(-135deg);
      }

      &:checked ~ .icon-wrapper .hamburger:before {
        transform: rotate(45deg);
      }
    }

    .hamburger {
      position: relative;
      width: 40px;
      height: 40px;
      display: inline-flex;
      flex-direction: column;
      justify-content: space-evenly;
      cursor: pointer;

      &:before {
        content: "";
        position: absolute;
        top: 0;
        height: 40px;
        width: 40px;
        right: 0;
        bottom: 0;
        border-radius: 10px;
        // background: linear-gradient(0deg, #3e7eff 0%, #72b5ff 100%);
        transform: rotate(0deg);
        transition: all 0.4s cubic-bezier(0.54, -0.1, 0.57, 0.57);
      }

      .hamburger-input {
        position: absolute;
        opacity: 0;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        cursor: pointer;
      }

      .hamburger-line {
        width: 70%;
        background: #171721;
        height: 2px;
        display: block;
        border-radius: 6px;
        transition: transform 0.4s cubic-bezier(0.54, -0.81, 0.57, 0.57);
        position: relative;
        left: 10px;

        &.first,
        &.third {
          width: 70%;
          left: 10px;
        }

        &.third {
          transform-origin: left;
        }
      }
    }
  }

  .logOut {
    display: flex;
    align-items: center;
    button {
      margin: 10px 10px 0 0;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  min-height: 70px;
  background: ${({ theme }) => theme.color.background[1]};
  border-bottom: 1px solid ${({ theme }) => theme.color.border[1]};
  width: 100%;
  @media (max-width: 950px) {
    display: none;
  }
`;

export const LogoText = styled.p`
  font-size: 20px;
  color: ${({ theme }) => theme.color.greyscale[24]};
  font-family: PublicSans-Bold;
  line-height: 47px;
  letter-spacing: -1.6px;
  margin-left: 5px;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 0px 60px;

  & > * {
    margin-left: 64px;
    text-decoration: none;
  }

  @media (max-width: 950px) {
    padding: 0px 20px;

    & > * {
      margin-left: 34px;
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  .userProfile {
    display: flex;
    align-items: center;
    margin-right: 30px;
    img {
      height: 26px;
      width: 26px;
      border-radius: 100px;
      margin-right: 5px;
    }
    span {
      font-size: 14px;
      display: block;

      font-weight: 100;
      color: ${({ theme }) => theme.color.greyscale[3]};
    }
  }
  button {
    min-width: 143px;
    min-height: 34px;
    border-radius: 5px;
    font-size: 12px;
    font-weight: 700;
    border: 1px solid ${({ theme }) => theme.color.border[2]};
    background: ${({ theme }) => theme.color.background[1]};
    color: ${({ theme }) => theme.color.greyscale[3]};
  }
`;

export const Logo = styled.img`
  &:hover {
    cursor: pointer;
  }

  width: 45px;
  height: 44px;
  margin-right: 5px;

  @media only screen and (max-width: 500px) {
    height: 36px;
  }
`;

export const Name = styled.p`
  font-family: "PublicSans-Bold";
  font-size: 24px;
  color: ${({ theme }) => theme.color.greyscale[24]};

  &:hover {
    cursor: pointer;
  }

  @media only screen and (max-width: 500px) {
    font-weight: 800;
    font-size: 22px;
    line-height: 26px;
  }
`;

export const MiniHeader = styled.div`
  background: ${({ theme }) => theme.color.background[1]};
  // border-bottom: 1px solid ${({ theme }) => theme.color.border[1]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  // padding: 1rem;
  button {
    img {
      width: 21px;
      height: 20px;
      border-radius: 0px;
    }
  }
  h3 {
    color: ${({ theme }) => theme.color.greyscale[23]};
    font-size: 14px;
    margin: 0;
    align-items: center;
  }
  img {
    width: 39px;
    height: 39px;
    border-radius: 100%;
  }
  @media only screen and (max-width: 950px) {
    display: flex;
    align-items:center;
    img{
      width: 49px;
      height: 37px;
      border-radius: 100%;
    }
  }
`;

export const LogoutModal = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  background: #0000006e;
  z-index: 99;
`;

export const ModalBody = styled.div`
  position: absolute;
  width: calc(100% - 20px);
  max-width: 340px;
  background: #fff;
  border-radius: 6px;
  top: 50%;
  left: 50%;
  transform: translate(-53%, -50%);
  padding: 40px 50px;
  text-align: center;
  margin: 0 10px;

  span {
    display: block;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #171721;
  }

  .LogoutButtons {
    button {
      width: 63px;
      height: 32px;
      background: #3e7eff;
      border-radius: 6px;
      font-weight: 500;
      font-size: 14px;
      line-height: 19px;
      color: #ffffff;
      margin: 20px 10px 0;

      &:last-child {
        border: 1px solid #3e7eff;
        background: none;
        color: #3e7eff;
      }
    }
  }
`;
