import styled from "styled-components";

export const OperationHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  @media only screen and (max-width: 950px) {
    display: none;
  }
`;

export const searchBar = styled.div`
  width: 50%;
  @media only screen and (max-width: 668px) {
    width: 100%;
    margin-bottom: 1rem;
  }
`;

export const memberTitle = styled.div`
  font-weight: 100;
  font-size: 22px;
  font-family: "PublicSans-bold";
  color: ${({ theme }) => theme.color.greyscale[23]};
  span {
    color: #3e7eff;
    font-size: 22px;
    font-family: "PublicSans-bold";
  }
`;

export const memberDesc = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: ${({ theme }) => theme.color.greyscale[21]};
`;

export const inviteButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  max-width: 120px;
  background: #fbfbff;
  border: 1px solid #f2f2ff;
  border-radius: 5px;
  font-weight: 100;
  font-size: 12px;
  color: #484c74;
  font-family: "PublicSans-medium";
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    opacity: 0.8;
    color: ${({ theme }) => theme.color.main[1]};
  }
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
  // border : 1px solid #F2F2FF;            
  border-radius: 5px;
  background: ${({ theme }) => theme.color.background[3]};
  @media only screen and (max-width: 668px) {
    max-width : 100%;
  }
  span{
      margin-right: 5px;
      padding: 0.5rem 0 0.5rem 0.5rem;
      display: flex;
  }
  input{
      padding :0.9rem 0.5rem;
      border : none;
      font-weight: 700;
      font-size: 12px;
      color: ${({ theme }) => theme.color.greyscale[10]};
      width: 100%;
      background : none;   
      &::placeholder{
        color: ${({ theme }) => theme.color.greyscale[21]};
      }   
  }                                
}
`;

export const searchIcon = styled.div`
  margin-right: 5px;
  padding: 0.5rem 0 0.5rem 0.5rem;
  display: flex;
`;

export const AdminsBody = styled.div`
  margin: 2rem 0;
`;

export const DrawerBody = styled.div`
  background: ${({ theme }) => theme.color.background[1]};
  height: 100%;
  padding: 1rem;
`;

export const InviteHeader = styled.div`
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
  margin: 0px 2rem;
  padding-bottom: 35px;
  border-bottom: 1px solid #ededed;
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
  margin: 0px 2rem;
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
      margin-bottom:10px;
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
  display: flex;
  align-items: center;
  margin: 50px 0;
  justify-content: flex-end;
  button {
    margin-left: 1rem;
    font-size: 14px;
    font-weight: 600;
    padding: 0.5rem 1rem;
    border-radius: 7px;
    &:first-child {
      color: #cc1e1e;
    }
    &:last-child {
      background: #3476ff;
      color: #fff;
    }
  }
`;
