import styled from "styled-components";

export const TotalAssets = styled.div`
  & * {
    font-family: "PublicSans-medium";
  }
  margin-bottom: 1rem;
`;

export const AssetsHeader = styled.div`
  h5 {
    font-weight: bold;
    font-size: 21px;
    color: ${({ theme }) => theme.color.greyscale[3]};
    margin: 0;
  }
  span {
    font-size: 14px;
    line-height: 24px;
    color: ${({ theme }) => theme.color.greyscale[21]};
    display: block;
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
                margin: 0;
              }
              span {
                font-weight: 100;
                font-size: 11px;
                font-family: "PublicSans-medium";
                color: ${({ theme }) => theme.color.greyscale[4]};
                display: block;
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
`;
