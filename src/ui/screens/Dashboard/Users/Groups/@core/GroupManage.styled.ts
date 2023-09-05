import styled from "styled-components";

export const OperationHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 30px;
`;

export const searchBar = styled.div`
  
`;

export const memberTitle = styled.div`
  font-weight: 600;
  font-size: 22px;
  color: ${({ theme }) => theme.color.greyscale[23]};
  span {
    color: #3e7eff;
    font-size: 22px;
  }
`;

export const memberDesc = styled.div`
  
`;

export const inviteContain = styled.div`
  position: relative;
  height: 100%;
  background: ${({ theme }) => theme.color.background[1]};
  padding: 1rem;
`;

export const DeleteButton = styled.div`
  display: block;
  margin-left: auto;
  margin-right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 182px;
  height: 42px;
  background: ${({ theme }) => theme.color.background[3]};
  border: 1px solid #FFE8E8;
  border-radius: 5px;
  font-weight: 100;
  font-size: 12px;
  color: #CD3333;
  font-family: "PublicSans-medium";
  cursor: pointer;
`;
export const CreateButton = styled.div`
  display: block;
  margin-left: 20px;
  margin-right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 182px;
  height: 42px;
  background: ${({ theme }) => theme.color.background[3]};
  border: 1px solid #f2f2ff;
  border-radius: 5px;
  font-weight: 100;
  font-size: 12px;
  color: #484c74;
  font-family: "PublicSans-medium";
  cursor: pointer;

`;

export const inputBox = styled.div`
  display: flex;
  align-items: center;
  max-height: 42px;
  width: 100%;                
  border : 1px solid #F2F2FF;            
  border-radius: 5px;
  background: ${({ theme }) => theme.color.background[3]};
  span{
      margin-right: 5px;
      padding: 0.5rem 0 0.5rem 0.5rem;
      display: flex;
  }
  input{
      padding :0.9rem 0.5rem;
      border : none;
      font-weight: 500;
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

export const MainBody = styled.div`
  display: flex;
  margin: 0 auto;
  width: 100%;
`;

export const MainContainer = styled.div`
  padding: 2rem 2.5rem;
  width: 100%;
`;

export const MainHeader = styled.div`
  display:flex;
  align-items: center;
  width:100%;
  justify-content: space-between;
  button {
    width: 210px;
    height: 42px;
    background: #3e7eff;
    border-radius: 5px;
    font-size: 12px;
    font-weight: 800;
    color: #fff;
    letter-spacing: 1px;
  }
  }
`;
export const PageTitle = styled.div`
  color: ${({ theme }) => theme.color.greyscale[23]};
  font-size: 22px;
  font-family: "PublicSans-bold";
  display: block;
`;

export const TitileDesc = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.color.greyscale[21]};
`;
export const CreateGroup = styled.div`
  
`;


export const TabHeader = styled.div`
ul{
  display:flex;
  
  li{
    list-style: none;
    margin-right:10px;
  }
}
  overflow: auto;
  margin: 43px 0 33px;
  display: flex;
  align-items: center;
  button {
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
export const TabsHeaders = styled.div`

  }
`;

export const DrawerBody = styled.div`
  background: ${({ theme }) => theme.color.background[1]};
  height: 100%;
  padding: 2rem;
`;


export const MainTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
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
    margin:0;
    display:block;
    color: ${({ theme }) => theme.color.greyscale[3]};
  }
`;


export const EmptyOpContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh-20%;
  img {
    padding: 1rem;
    margin-top: 20vh;
    max-width: 290px;
    max-height: 100%;
  }
`;