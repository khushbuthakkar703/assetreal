import styled from "styled-components";

export const OperationHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

export const searchBar = styled.div``;

export const MainTitle = styled.div`
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
    font-weight: 700;
    font-family: "PublicSans-bold";
    font-size: 21px;
    line-height: 32px;
    margin: 0;
    color: #000;
  }
  h6 {
    font-weight: 400;
    font-size: 15px;
    line-height: 24px;
    color: #8083A3;
    margin-bottom: 1.16rem;
  }
`;

export const memberTitle = styled.div`
  font-weight: 700;
  font-size: 22px;
  color: ${({ theme }) => theme.color.greyscale[23]};
  span {
    color: #3e7eff;
    font-size: 22px;
  }
  @media only screen and (max-width: 414px) {
    font-size: 21px;
  }
`;

export const memberDesc = styled.div`
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  color: ${({ theme }) => theme.color.greyscale[21]};
  @media only screen and (max-width: 400px) {
    font-size: 14px;
  }
`;

export const inviteContain = styled.div`
  position: relative;
  height: 100%;
  background: ${({ theme }) => theme.color.background[1]};
  padding: 1rem;
`;

export const inviteButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  background: #F5F5FA;
  border-radius: 5px;
  font-weight: 100;
  font-size: 12px;
  color: #484c74;
  font-family: "PublicSans-medium";
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: all 0.3s;

  a {
    color: ${({ theme }) => theme.color.greyscale[1]};
    display: block;
    text-decoration: none;
  }
`;

export const inputBox = styled.div`
  display: flex;
  align-items: center;
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
    padding: 0.5rem 0 0.5rem 0.5rem;
    display: flex;
  }
  input {
    padding: 0.9rem 0.5rem;
    border: none;
    font-weight: 700;
    font-size: 12px;
    color: ${({ theme }) => theme.color.greyscale[10]};
    width: 100%;
    background: none;
    &::placeholder {
      color: ${({ theme }) => theme.color.greyscale[21]};
    }
  }
`;
export const searchIcon = styled.div`
  margin-right: 5px;
  padding: 0.5rem 0 0.5rem 0.5rem;
  display: flex;
`;

export const MainBody = styled.div`
  display: flex;
  margin: 0 auto;
  width: 100%;
  padding: 1.84rem 0.87rem;
  .MainInviteModal {
    @media only screen and (min-width: 950px) {
      display: inline-block;
    }
  }
`;

export const MainContainer = styled.div`
  padding: 2rem 2.5rem;
  // max-width: 1299px;
  width: 100%;
  @media only screen and (max-width: 950px) {
    padding: 3px 4px 3px 3px;
  }
`;

export const MainHeader = styled.div`
  @media only screen and (max-width: 950px) {
    display: none;
  }
`;
export const PageTitle = styled.div`
  color: ${({ theme }) => theme.color.greyscale[23]};
  font-size: 22px;
  font-family: "PublicSans-bold";
`;

export const TitileDesc = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.color.greyscale[21]};
`;

export const inviteRowEmail = styled.div`
  border: 1px solid #f2f2ff;
  border-radius: 5px;
  padding: 20px 13px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  min-height: 56px;
`;

export const inviteRow = styled.div`
  border: 1px solid #f2f2ff;
  border-radius: 5px;
  padding: 20px 13px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  min-height: 58px;
`;

export const inviteTitle = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.color.greyscale[26]};
`;

export const inviteEmailTitle = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.color.greyscale[24]};
`;

export const EmailIcon = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 100%;
  margin-right: 7px;
  svg {
    width: 100%;
    height: 100%;
    display: block;
    path {
      stroke: #fff;
    }
  }
`;

export const CheackIcon = styled.div`
  background: #3e7eff;
  height: 13px;
  width: 13px;
  border-radius: 100%;
  svg {
    width: 100%;
    height: 100%;
    display: block;
    path {
      stroke: #fff;
    }
  }
`;

export const TabHeader = styled.div`
  margin: 1.64rem 0;
  display: flex;
  align-items: center;
  button {
    min-width: 75px;
    min-height: 26px;
    border-radius: 5px;
    font-size: 14px;
    line-height: 24px;
    font-weight: 700;
    margin-right: 5px;
    color: ${({ theme }) => theme.color.greyscale[24]};
  }
  .activTabs {
    background: ${({ theme }) => theme.color.background[11]};
    color: ${({ theme }) => theme.color.main[8]};
  }
`;
export const TabsHeaders = styled.div`
  display: none;
  @media only screen and (max-width: 950px) {
    display: block;
  }
`;

export const InviteHeader = styled.div`
  padding: 1rem 0;
  h2 {
    font-size: 21px;
    color: ${({ theme }) => theme.color.greyscale[24]};
  }
  h6 {
    font-size: 15px;
    color: ${({ theme }) => theme.color.greyscale[21]};
  }
`;

export const InviteBody = styled.div`
  label {
    font-size: 12px;
    color: ${({ theme }) => theme.color.greyscale[4]};
  }
`;

export const InviteFooter = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  button {
    width: 90%;
    padding: 0.5rem;
    margin: 0.4rem 0;
    border-radius: 7px;
    font-size: 14px;
    &:first-child {
      background: #3476ff;
      color: #fff;
      height: 46px;
    }
    &:last-child {
      color: #cc1e1e;
    }
  }
`;

export const DrawerBody = styled.div`
  background: ${({ theme }) => theme.color.background[1]};
  height: 100%;
  padding: 1rem 1.19rem;
`;

export const InviteHeader2 = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  span {
    height: 46px;
    width: 46px;
    border-radius: 100%;
    display: block;
    background: #ddd;
    margin-right: 0.5rem;
    margin-top: 20px;
  }
  h2 {
    font-size: 22px;
    font-weight: 700;
    color: ${({ theme }) => theme.color.greyscale[23]};
  }
`;

export const InputEmail = styled.div`
  display: flex;
  align-items: end;
  flex-wrap: wrap;
  div {
    width: calc(100% - 150px);
    @media only screen and (max-width: 668px) {
      width: 100%;
    }
    h4 {
      display: block;
      font-size: 12px;
      line-height: 14px;
      font-weight: 600;
      margin-bottom: 0.41rem;
      color: ${({ theme }) => theme.color.greyscale[4]};
    }
    .inputBox{
      display: flex;
      align-items: center;
      border: 1px solid #F2F2FF;
      border-radius: 5px;
      width: auto;
      span {
        margin-right: 5px;
        padding: 0.5rem 0 0.5rem 0.5rem;
        display: flex;
      }
      input {
        width: 100%;
        border: 0;
        background: ${({ theme }) => theme.color.background[1]};
        padding: 0.5rem;
        border-radius: 5px;
        display: block;
        color: ${({ theme }) => theme.color.greyscale[24]};
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        min-height: 40px;
      }
    }
  }
  a{
    border: 1px solid #F2F2FF;
    border-radius: 5px;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #4A4C66;
    display: block;
    padding: 1.21rem 1.05rem 1.31rem;
    margin: 4px 0;
    &:first-child {
      margin-top: 8px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &:focus{
      background: #F5F5FA;
    }
  }
  select,
  button {
    width: 121px;
    border: 1px solid #f2f2ff;
    border-radius: 5px;
    padding: 0 0.1rem;
    font-size: 12px;
    font-weight: 600;
    min-height: 40px;
    margin: 0 13px;
  }
  select {
    color: ${({ theme }) => theme.color.greyscale[26]};
    background: ${({ theme }) => theme.color.background[2]};
    margin: 0 13px;
    @media only screen and (max-width: 668px) {
      margin: 0;
    }
  }
  button {
    color: ${({ theme }) => theme.color.greyscale[24]};
    @media only screen and (max-width: 668px) {
      margin: 10px 0;
    }
  }
`;

export const AddToListButton = styled.button`
  width: 121px;
  border: 1px solid #f2f2ff;
  border-radius: 5px;
  padding: 0 0.1rem;
  font-size: 12px;
  font-weight: 600;
  min-height: 40px;
  margin: 0 13px;
  color: ${({ theme }) => theme.color.greyscale[24]};
  &:hover {
    opacity: 0.8;
    color: ${({ theme }) => theme.color.main[1]};
  }
`;
export const InputName = styled.div`
  display: flex;
  align-items: end;
  padding-bottom: 15px;
  flex-wrap: wrap;
  div {
    width: calc(100% - 150px);
    @media only screen and (max-width: 668px) {
      width: 100%;
    }
    h4 {
      display: block;
      color: ${({ theme }) => theme.color.greyscale[4]};
    }
    input {
      width: 100%;
      border: 1px solid #f2f2ff;
      background: ${({ theme }) => theme.color.background[1]};
      padding: 0.5rem;
      border-radius: 5px;
      display: block;
      color: ${({ theme }) => theme.color.greyscale[24]};
      font-size: 12px;
      min-height: 40px;
      margin-bottom: 10px;
    }
  }
  select,
  button {
    width: 121px;
    border: 1px solid #f2f2ff;
    border-radius: 5px;
    padding: 0 0.1rem;
    font-size: 12px;
    font-weight: 600;
    min-height: 40px;
  }
  select {
    color: ${({ theme }) => theme.color.greyscale[26]};
    background: ${({ theme }) => theme.color.background[2]};
    margin: 0 13px;
    @media only screen and (max-width: 668px) {
      margin: 0;
    }
  }
  button {
    color: ${({ theme }) => theme.color.greyscale[24]};
  }
`;

export const AssignedTable = styled.div`
  margin: 30px 2rem;
`;

export const TableHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

export const TableBody = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

export const colums_1 = styled.div`
  width: 75%;
  color: ${({ theme }) => theme.color.greyscale[21]};
  font-size: 12px;
  font-weight: bold;
`;

export const colums_2 = styled.div`
  width: 20%;
  color: ${({ theme }) => theme.color.greyscale[21]};
  font-size: 12px;
  font-weight: bold;
`;

export const colums_3 = styled.div`
  width: 5%;
`;

export const Bodycolums_1 = styled.div`
  width: 75%;
  display: flex;
  align-items: center;
  img {
    display: block;
    width: 55px;
    height: 55px;
    border-radius: 100%;
    background: #8082a4;
    margin-right: 12px;
  }
  div {
    h5 {
      font-size: 14px;
      font-weight: 600;
      color: ${({ theme }) => theme.color.greyscale[24]};
    }
    p {
      font-size: 14px;
      color: ${({ theme }) => theme.color.greyscale[4]};
      display: block;
      line-height: 1;
    }
  }
`;

export const Bodycolums_2 = styled.div`
  width: 20%;
  select {
    width: 75px;
    min-height: 26px;
    border: 1px solid #f2f2ff;
    border-radius: 5px;
    padding: 0.3rem;
    font-size: 12px;
    font-weight: 600;

    color: ${({ theme }) => theme.color.greyscale[22]};
    background: ${({ theme }) => theme.color.background[11]};
  }
`;

export const Bodycolums_3 = styled.div`
  width: 5%;
  button {
    padding: 0.3rem;
    font-size: 12px;
    color: ${({ theme }) => theme.color.greyscale[22]};
    background: none;
  }
`;

export const TableFooter = styled.div`
  display: block;
  position: absolute;
  left: 19px;
  right: 19px;
  bottom: 31px;
  button {
    font-size: 14px;
    font-weight: 600;
    padding: 0.5rem 1rem;
    border: 0.5px solid #E5E5FF;
    border-radius: 7px;
    width: 100%;
    &:first-child {
      background: #3476ff;
      color: #fff;
      margin-bottom: 0.96rem;
    }
    &:last-child {
      color: #cc1e1e;
    }
  }
`;
