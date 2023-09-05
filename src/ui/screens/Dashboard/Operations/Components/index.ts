import styled from "styled-components";

export const MainBody = styled.div`
  max-height: 80vh;
  overflow: auto;
  & * {
    font-family: PublicSans-medium;
  }
`;

export const Modalfooter = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  bottom: 0;

  button {
    padding: 0.6rem 1rem;
    height: 42px;
    width: calc(100% - 64px);
    margin: 0 0 32px 32px;
    max-width: 100% !important;
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

export const MainBox = styled.div`
  .boxTitle {
    font-family: PublicSans-bold;
    font-size: 14px;
    line-height: 21px;
    margin-bottom: 1rem;
    display: block;
    margin-bottom: 0.99rem;
    color: ${({ theme }) => theme.color.greyscale[24]};
  }
  .addportbtn{
    background-color: #fff;
    color: #3E415B;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    border: 1px dashed #8083A3;
    max-width: inherit;
    padding: 0.84rem 0 0.65rem;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .desctitle {
    font-family: PublicSans-medium;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    color: #8f8fca;
  }

  input,
  textarea {
    width: 100%;
    border: 1px solid #E4E6E8;
    border-radius: 10px;
    padding: 0.96rem 0.68rem;
    box-sizing: border-box;
    margin-bottom: 1.61rem;
    background: #fff;
    color: ${({ theme }) => theme.color.greyscale[24]};
    &::placeholder {
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
      color: #43456D;
      opacity: 0.62;
    }
  }
  textarea {
    resize: vertical;
    min-height: 100px;
  }
  .d-flex {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    input {
      width: 49%;
    }
  }

  .BSCtoggle {
    .switch {
      position: relative;
      display: inline-block;
      width: 35px;
      height: 18px;
      margin-right: 15px;
      // @media(max-width: 450px) {
      //   margin :0 0 15px 0;
      // }
    }

    .switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }

    .slider:before {
      position: absolute;
      content: "";
      height: 16px;
      width: 16px;
      left: 2px;
      bottom: 1px;
      background-color: white;
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }

    input:checked + .slider {
      background-color: #2196f3;
    }

    input:focus + .slider {
      box-shadow: 0 0 1px #2196f3;
    }

    input:checked + .slider:before {
      -webkit-transform: translateX(16px);
      -ms-transform: translateX(16px);
      transform: translateX(16px);
    }

    .slider.round {
      border-radius: 34px;
    }

    .slider.round:before {
      border-radius: 50%;
    }

    .d-flex {
      justify-content: flex-start;
      margin-bottom: 23px;
      h5 {
        font-family: PublicSans-medium;
        margin: 0;
        font-size: 14px;
      }
    }

    .borderBox {
      width: 100%;
      border: 1px solid #e4e6e8;
      border-radius: 10px;
      padding: 15px 20px;
      box-sizing: border-box;
      margin-bottom: 10px;
      h5 {
        span {
          color: ${({ theme }) => theme.color.greyscale[21]};
          font-weight: 100;
          display: block;
          margin-top: 3px;
        }
      }
    }
  }

  .uploadFile {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    .addFile {
      border: 1px solid #e4e6e8;
      background: none;
      margin-right: 20px;
      min-width: 189px;
      border-radius: 10px;
      padding: 15px 20px;
      box-sizing: border-box;
      margin-bottom: 10px;
      font-size: 14px;
      font-weight: bold;
      cursor: pointer;
    }
    .uploaded {
      background: #f5f5fa;
      margin-right: 20px;
      min-width: 189px;
      border-radius: 10px;
      padding: 15px 20px;
      box-sizing: border-box;
      margin-bottom: 10px;
      font-size: 14px;
      font-weight: bold;
      position: relative;
      text-align: center;
      input {
        cursor: pointer;
        margin: 0;
        padding: 0;
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        border: none;
        opacity: 0;
      }
      svg {
        margin-right: 10px;
      }
    }
  }

  .memberList {
    h6 {
      width: 100%;
      border: 1px solid #e4e6e8;
      border-radius: 10px;
      padding: 15px 20px;
      box-sizing: border-box;
      margin: 0 0 10px 0;
      font-size: 14px;
      letter-spacing: 0.5px;
      color: #43456d;
    }
    button {
      background: #f5f5fa;
      border: none;
      border-radius: 10px;
      width: 100%;
      text-align: inherit;
      padding: 15px 10px;
      font-size: 12px;
      font-weight: bold;
      color: #8586a3;
      letter-spacing: 0.5px;
      cursor: pointer;
      &:hover {
        background: #eaeafd;
      }
    }
  }

  .addPortfolio {
    background-color: #fff;
    color: #3E415B;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    border: 1px dashed #8083A3;
    width: 100%;
    border-radius: 5px;
    max-width: inherit;
    padding: 0.84rem 0 0.65rem;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      background: #eaeafd;
    }
    svg {
      margin-right: 5px;
      margin-bottom: 1px;
      path {
        fill: ${({ theme }) => theme.color.greyscale[3]};
      }
    }
  }

  .addedBox {
    width: 100%;
    border-radius: 10px;
    padding: 0.9rem;
    margin: 1rem 0;
    background: #3e7eff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & * {
      color: #fff;
    }
    span {
      font-weight: 100;
      font-size: 12px;
      line-height: 18px;
      color: #c2c6ef;
    }

    h5 {
      font-weight: normal;
      font-size: 14px;
      line-height: 16px;
      color: ${({ theme }) => theme.color.greyscale[1]};
    }
  }

  .assetSectionBox {
    margin-top: 2rem;
  }

  .assetBox {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .boxSection {
      cursor: pointer;
      padding: 0.7rem;
      border: 1px solid #ecf2ff;
      border-radius: 10px;
      margin: 0.9rem 0;
      width: 49%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      min-width: 248px;
      h4 {
        font-family: PublicSans-bold;
        font-size: 14px;
        line-height: 21px;
        color: ${({ theme }) => theme.color.greyscale[3]};
      }
      span {
        font-weight: 100;
        font-size: 12px;
        line-height: 18px;
        color: ${({ theme }) => theme.color.greyscale[4]};
      }
      img {
        width: 45px;
        height: 45px;
        border-radius: 100%;
      }

      @media only screen and (max-width: 676px) {
        width: 100%;
      }
    }

    .addedBox {
      background: #3e7eff;
      cursor: pointer;
      padding: 0.7rem;
      border: 1px solid #ecf2ff;
      border-radius: 10px;
      margin: 0.9rem 0;
      width: 49%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      min-width: 248px;
      h4,
      span {
        color: #fff;
      }
      img {
        width: 45px;
        height: 45px;
        border-radius: 100%;
      }
      @media only screen and (max-width: 676px) {
        width: 100%;
      }
    }
  }

  .Cryptocurrency {
    padding: 0.8rem;
    border: 1px solid #f0f0f1;
    border-radius: 10px;
    margin-top: 1rem;
    label {
      font-weight: bold;
      font-size: 14px;
      line-height: 21px;
      color: ${({ theme }) => theme.color.greyscale[3]};
    }

    .coinNames {
      padding: 0.8rem;
      border: 1px solid #e4e6e8;
      border-radius: 10px;
      margin-top: 1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      span {
        font-weight: 100;
        font-size: 12px;
        line-height: 18px;
        color: ${({ theme }) => theme.color.greyscale[21]};
      }
      .allCoins {
        display: flex;
        align-items: center;
        img {
          margin-right: 5px;
        }
        h4 {
          font-weight: bold;
          font-size: 12px;
          line-height: 21px;
          color: ${({ theme }) => theme.color.greyscale[3]};
        }
      }
      svg {
        transform: rotate(90deg);
        path {
          fill: ${({ theme }) => theme.color.greyscale[3]};
        }
      }
    }
  }
`;

export const Box = styled.div`
  width: 100%;
  border: 1px solid #e4e6e8;
  border-radius: 10px;
  padding: 15px 20px;
  box-sizing: border-box;
  margin: 10px 0;
  & * {
    font-family: PublicSans-medium;
    letter-spacing: 0.5px;
  }
  h5 {
    color: ${({ theme }) => theme.color.greyscale[21]};
    font-size: 14px;
    margin: 0 0 10px 0;
  }
  h4 {
    font-size: 14px;
    margin: 0;
  }

  .customCheckbox {
    .container {
      display: block;
      position: relative;
      padding-left: 30px;
      margin-bottom: 12px;
      cursor: pointer;
      font-size: 22px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;

      b {
        font-size: 14px;
        font-weight: bold;
      }
      p {
        color: ${({ theme }) => theme.color.greyscale[21]};
        font-size: 14px;
        font-weight: 400;
        margin: 5px 0 0 0;
      }
    }

    .container input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }

    .checkmark {
      position: absolute;
      top: 19px;
      left: 0;
      height: 13px;
      width: 13px;
      background: ${({ theme }) => theme.color.background[1]};
      border: 1px solid #a1a5b7;
      border-radius: 100px;
    }

    .container:hover input ~ .checkmark {
      background-color: #ccc;
    }

    .container input:checked ~ .checkmark {
      background-color: #007aff;
    }
  }

  .Step2 {
    h4 {
      svg {
        margin-right: 10px;
        width: 11px;
        height: 11px;
      }
    }
    h5 {
      margin: 5px 0 0 20px;
    }
  }

  @media (max-width: 450px) {
    padding: 10px;
  }
`;

export const LgAssets = styled.div`
  @media only screen and (max-width: 950px) {
    display: none;
  }
`;
export const SmAssets = styled.div`
  display: none;
  @media only screen and (max-width: 950px) {
    display: block;
  }
`;
