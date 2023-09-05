import styled from "styled-components";

export const ClientBody = styled.div`
  padding-top: 15px;
`;
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

export const headerTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
`;

export const MainTitle = styled.div`
  font-size: 22px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.greyscale[23]};
  margin: 0;
`;

export const subTitle = styled.div`
  font-size: 22px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.greyscale[4]};
  margin: 0;
`;

export const TabHeader = styled.div`
  margin: 43px 0 33px;
  display: flex;
  align-items: center;
  button {
    width: auto;
    background: none;
    min-width: 75px;
    min-height: 26px;
    border-radius: 5px;
    font-size: 12px;
    font-weight: 700;
    margin-right: 5px;
    color: ${({ theme }) => theme.color.greyscale[24]};
  }
  .activTabs {
    background: ${({ theme }) => theme.color.background[11]};
    color: ${({ theme }) => theme.color.main[8]};
  }
`;
