import styled from "styled-components";

export const MainBody = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  & * {
    font-family: "PublicSans-medium";
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export const MainContainer = styled.div`
  width: 100%;
  padding: 20px 20px;
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
  @media only screen and (max-width: 950px) {
    ul {
      display: none;
    }
    select {
      display: block;
    }
  }
`;

export const ActivityBody = styled.div`
  padding: 0 3rem;
  @media only screen and (max-width: 950px) {
    padding: 0 15px;
  }
`;

export const ActivityHead = styled.div``;

export const ActivityTitle = styled.div`
  font-size: 22px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.greyscale[23]};
`;

export const ActivityDesc = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.color.greyscale[21]};
`;

export const AgentTableHead = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const ViewAll = styled.div`
  font-size: 12px;
  width: 60px;
  height: 33px;
  text-align: center;
  padding: 7px 0px 20px;

  color: #686990;
  white-space: nowrap;
  border: 1px solid rgb(228, 230, 232, 0.4);
  border-radius: 3px;
`;

export const AgentMainTable = styled.div`
  display: flex;
  align-items: flex-start;
  // flex-wrap: wrap;
  @media only screen and (max-width: 950px) {
    flex-direction: column-reverse;
  }
`;

export const LeftContainer = styled.div`
  width: 75%;
  @media only screen and (max-width: 950px) {
    width: 100%;
  }
`;

export const RightContainer = styled.div`
  width: 25%;
  justify-content: space-between;
  padding: 1rem;
  @media only screen and (max-width: 950px) {
    width: 100%;
  }
`;

export const FiltersBox = styled.div`
  border: 1px solid #f4f4f4;
  border-radius: 10px;
  padding: 20px;
  margin: 25px 0 10px;

  .container {
    display: block;
    position: relative;
    margin-bottom: 30px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    color: ${({ theme }) => theme.color.greyscale[24]};
    &:last-child {
      margin-bottom: 0;
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
    top: 0;
    right: 0;
    height: 25px;
    width: 25px;
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  .container input:checked ~ .checkmark:after {
    display: block;
  }

  .container .checkmark:after {
    left: 9px;
    top: 5px;
    width: 10px;
    height: 16px;
    border: solid #397aff;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

export const inputBox = styled.div`
  display: flex;
  align-items: center;
  max-width: 600px;
  max-height: 42px;
  width: 100%;
  border: 1px solid #f2f2ff;
  border-radius: 5px;
  background: ${({ theme }) => theme.color.background[3]};
  margin-right: 10px;
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
`;

export const ActivityRow = styled.div`
  border: 1px solid #f4f4f4;
  border-radius: 5px;
  margin: 13px 0;
  padding: 15px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const AgentName = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.greyscale[24]};
`;

export const AgentDesc = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #8081a5;
`;
export const AgentRole = styled.div`
  text-align: center;
  width: 61px;
  background-color: #f0f0fa;
  border-radius: 5px;
  font-size: 14px;
  line-height: 21px;
  color: ${({ theme }) => theme.color.greyscale[3]};
  font-family: "PublicSans-bold";
  font-weight: 600;
  .blue {
    color: #397aff;
    font-size: 12px;
  }
`;

export const AgentTime = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.color.greyscale[24]};
  white-space: nowrap;
`;

export const filterBtn = styled.div`
  button {
    background: ${({ theme }) => theme.color.background[11]};
    color: #8083a3;
    font-size: 12px;
    font-weight: 400;
    display: block;
    padding: 10px 0px;
    width: 100%;
    border-radius: 10px;
    margin: 10px 0;
  }
`;

export const MainCalender = styled.div`
  width: auto;
  margin-left: 25px;
  div {
    max-height: 25vh;
    min-height: 20vh;
    font-size: 12px;

    font-weight: 600;

    @media only screen and (max-width: 950px) {
      max-height: 150px;
      min-height: 150px;
    }
  }
`;

export const noActivity = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  div {
    text-align: center;
    width: 100%;
  }
`;

export const noActivityTitle = styled.div`
  font-size: 24px;
  line-height: 28px;
  font-weight: 700;
  color: #111;
`;

export const noActivityDesc = styled.div`
  font-size: 18px;
  line-height: 21px;
  font-weight: 500;
  padding-top: 20px;
  color: ${({ theme }) => theme.color.greyscale[21]};
`;
