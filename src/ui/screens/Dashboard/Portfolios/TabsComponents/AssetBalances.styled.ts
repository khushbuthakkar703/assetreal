import styled from "styled-components";

export const TotalAssets = styled.div`
  & * {
    font-family: "PublicSans-medium";
  }
  margin-bottom: 3rem;
  // padding-top: 1rem;
`;

export const AssetsHeader = styled.div`
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

export const DrawerBody = styled.div`
  background: ${({ theme }) => theme.color.background[1]};
  height: 100%;
  padding: 1rem;
`;
export const MainTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 35px;
  padding: 20px 0;
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
    color: ${({ theme }) => theme.color.greyscale[3]};
  }
`;

export const AssetsBody = styled.div`
  overflow: auto;
  & * {
    font-family: "PublicSans-medium";
  }
  table {
    width: 100%;
    border-spacing: 0 1.5rem;
    border-collapse: unset;
    min-width: 950px;
    thead {
      tr {
        .headColums-1 {
          .serachBar {
            display: flex;
            align-items: center;
            border: 1px solid #f2f2ff;
            max-width: 500px;
            max-height: 40px;
            background: ${({ theme }) => theme.color.background[3]};
            border-radius: 5px;
            svg {
              margin: 1rem 0 1rem 1rem;
            }
            input {
              padding: 1rem;
              font-weight: 500;
              font-size: 12px;
              line-height: 14px;
              color: ${({ theme }) => theme.color.greyscale[3]};
              letter-spacing: 0.5px;
              background: none;
              border: none;
              width: 100%;
            }
          }
        }

        .headColums-2 {
          text-align: end;
          font-size: 14px;
          line-height: 24px;
          color: ${({ theme }) => theme.color.greyscale[4]};
          font-family: "PublicSans-medium";
          font-weight: 200;
        }
        .hr {
          width: 100%;
        }
      }
    }

    tbody {
      tr {
        .bodyColums-1 {
          .coins {
            display: flex;
            align-items: center;
            img {
              height: 30px;
              width: 30px;
              margin-right: 10px;
              border-radius: 100%;
            }
            div {
              h5 {
                font-family: "PublicSans-medium";
                font-size: 12px;
                color: ${({ theme }) => theme.color.greyscale[3]};
              }
              span {
                font-weight: 100;
                font-size: 11px;
                font-family: "PublicSans-medium";
                color: ${({ theme }) => theme.color.greyscale[4]};
              }
            }
          }
        }

        .bodyColums-2 {
          text-align: end;
          span {
            font-size: 14px;
            line-height: 21px;
            color: ${({ theme }) => theme.color.greyscale[3]};
          }
          .img {
          }
          .green {
            color: #5fdcb3;
          }
        }
      }
    }
  }
  .viewMore {
    text-align: center;
    padding: 0 0 1rem 0;
    margin: 0 2rem;
    button {
      font-weight: 100;
      font-size: 14px;
      color: #6b71b5;
      cursor: pointer;
      background: none;
      border: none;
    }
  }
`;

export const MainModal = styled.div``;

export const Maintitle = styled.div`
  display: flex;
  align-items: center;
  padding: 1.4rem;
  .backArrow {
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 46px;
      width: 46px;
      background: ${({ theme }) => theme.color.background[3]};
      border-radius: 10px;
      margin-right: 15px;
    }
  }
  img {
    margin-right: 0.8rem;
    height: 46px;
    width: 46px;
    border-radius: 100%;
  }
  h2 {
    font-family: "PublicSans-bold";
    font-size: 22px;
    color: ${({ theme }) => theme.color.greyscale[20]};
    line-height: 20px;
    span {
      font-family: "PublicSans-bold";
      display: block;
      font-size: 18px;
      color: ${({ theme }) => theme.color.greyscale[4]};
    }
  }
`;

export const MainBox = styled.div`
  .mainBorder {
    margin: 1rem 0;
    opacity: 0.2;
  }
  .boxTitle {
    font-family: PublicSans-bold;
    font-size: 14px;
    margin: 1rem 0 0 0;
    display: block;
    color: #8f8dcc;
  }

  .desctitle {
    font-family: PublicSans-bold;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    color: ${({ theme }) => theme.color.greyscale[3]};
  }

  .boxTitle2 {
    font-family: PublicSans-bold;
    font-size: 14px;
    margin: 1rem 0 0 0;
    display: block;
    color: ${({ theme }) => theme.color.greyscale[3]};
  }

  .desctitle2 {
    font-family: PublicSans-medium;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    color: ${({ theme }) => theme.color.greyscale[4]};
  }
  input,
  textarea {
    width: 100%;
    border: 1px solid #e4e6e8;
    border-radius: 10px;
    padding: 15px 20px;
    box-sizing: border-box;
    margin-bottom: 10px;
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
    max-width: 100%;
    border: 1px solid #8083a3;
    border-style: dashed;
    cursor: pointer;
    font-weight: 100;
    font-size: 15px;
    color: #3e415b;
    svg {
      margin-right: 5px;
      margin-bottom: 1px;
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
        font-weight: bold;
        font-size: 14px;
        line-height: 21px;
        color: ${({ theme }) => theme.color.greyscale[23]};
      }
      span {
        font-weight: 100;
        font-size: 12px;
        line-height: 18px;
        color: ${({ theme }) => theme.color.greyscale[21]};
      }
      img {
        width: 45px;
        height: 45px;
        border-radius: 100%;
      }
    }
  }

  .Cryptocurrency {
    padding: 0.8rem;
    border: 1px solid #f0f0f1;
    border-radius: 10px;
    margin-top: 1rem;
    label {
      font-weight: 100;
      font-size: 14px;
      line-height: 21px;
      color: ${({ theme }) => theme.color.greyscale[24]};
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
          font-weight: 100;
          font-size: 12px;
          line-height: 21px;
          color: ${({ theme }) => theme.color.greyscale[20]};
        }
      }
    }
  }
`;

export const MainBody = styled.div`
  max-height: 80vh;
  overflow: auto;
  padding: 1.4rem;
  & * {
    font-family: PublicSans-medium;
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
    background: #3e7eff;
    color: ${({ theme }) => theme.color.greyscale[1]};
    border-radius: 5px;
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

export const LgTable = styled.div`
  @media only screen and (max-width: 950px) {
    display: none;
  }
`;

export const SmTable = styled.div`
    display : none;
    @media only screen and (max-width: 950px) {
        display : block;
    }

    .serachBar {
        display: flex;
        align-items: center;
        border: 1px solid #F2F2FF;
        max-width : 500px;
        height:42px;
        svg{
            margin: 1rem 0 1rem 1rem;
        }                        
        input{
          padding: 0 1rem;
          font-weight: 500;
          font-size: 12px;
          line-height: 14px;
          color: ${({ theme }) => theme.color.greyscale[21]};
          letter-spacing: 0.5px;
          background : none;
          border : none;
          width : 100%;
      }
    }  
    
    .coinColums{
      .MainColums{
        border: 1px solid #E4E6E8;
        padding: 0.5rem;
        border-radius: 7px;
        margin: 1rem 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .w-33{
          width : 33%;
          text-align : end;
          span{   
            color: ${({ theme }) => theme.color.greyscale[4]};
          }
        }
        .coins{
            display: flex;
            align-items: center;
            width : 33%;
            img{
                height : 30px;
                width : 30px;
                margin-right : 10px;
                border-radius : 100%;
            }
            div{
              h5{
                
                font-family: 'PublicSans-medium';
                font-weight: 100;
                font-size: 12px;
                color: ${({ theme }) => theme.color.greyscale[3]};
              }
              span{                
                font-weight: 100;
                font-size: 11px;
                font-family: 'PublicSans-medium';
                color: ${({ theme }) => theme.color.greyscale[4]};
              }
            }
          }
        }
      }
    }
  }
`;
