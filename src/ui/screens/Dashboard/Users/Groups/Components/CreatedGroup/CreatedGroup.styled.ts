import styled from "styled-components";

export const MainBody = styled.div`
  max-height: 80vh;
  overflow: auto;
  & * {
    font-family: PublicSans-medium;
  }
`;

export const MainBox = styled.div`
  padding-top: 30px;
  .boxTitle {
    font-family: PublicSans-bold;
    font-size: 14px;
    margin: 1rem 0 0 0;
    display: block;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.color.greyscale[24]};
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
    border: 1px solid #e4e6e8;
    border-radius: 10px;
    padding: 13px 20px;
    box-sizing: border-box;
    margin-bottom: 30px;
    background: ${({ theme }) => theme.color.background[3]};
    color: ${({ theme }) => theme.color.greyscale[24]};
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
    background: none;
    color: grey;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 42px;
    max-width: 100%;

    cursor: pointer;
    font-weight: 100;
    font-size: 15px;
    color: ${({ theme }) => theme.color.greyscale[3]};
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
