import styled from "styled-components";

export const clientDetails = styled.div`
  width: 392px;
  padding: 15px;

  ul {
    li {
      list-style: none;
      .activeLink {
        background: #edf2ff;
        span {
          color: #3e7eff;
        }
      }
      a {
        display: block;
        border-radius: 7px;
        border: 1px solid #f3f3f3;
        padding: 15px 30px;
        font-size: 12px;
        font-weight: 700;
        margin: 13px 0px;

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
