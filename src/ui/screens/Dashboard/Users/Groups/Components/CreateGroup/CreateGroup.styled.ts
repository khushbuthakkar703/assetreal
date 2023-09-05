import styled from "styled-components";

export const MainBody = styled.div`
    margin-left: 50px;
    max-height: 90vh;
    overflow: auto;
`;

export const MainTitle = styled.div`
  display: flex;
  align-items: center;
  padding-top: 40px ;
  margin-bottom: 46px;
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
    color: ${({ theme }) => theme.color.greyscale[3]};
  }
    button{
      margin-left: 5px;
    }
`;

export const GroupEmail = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 50px;
  
`;
export const GroupInput = styled.div`
    label{
      display:block;
      font-size: 12px;
      font-weight: 700;
      color: #8082A4;
      margin-bottom: 5px;
    }
    .d-flex {
      display: flex;
      align-items: center;
      background: #FFFFFF;
      border-radius: 5px;
      border: 1px solid #F2F2FF;
      padding: 0 0 0 10px;
  }
    input{
      width:100%;
      min-width:450px;
      min-height:40px;
      margin-left: 10px;
      border: none;
      border-radius: 5px;
      box-sizing: border-box;
      background: #FBFBFF;
      color: #000000;
    }
    input::placeholder {
      padding-left:10px;
    }
`;
export const GroupBtn = styled.div`
button {
 margin-left:10px;
  height: 40px;
  min-width: 139px;
  background: #3476FF;
  border: none;
  border-radius: 5px;
  font-weight: 100;
  font-size: 12px;
  color: #fff;
  font-family: "PublicSans-medium";
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: all 0.3s;
} 
`;
export const GroupTableTitle = styled.div`
  h1{
    font-size: 22px;
    font-weight: 600;
    color:#3A3335;
    span{
      color:#3E7EFF;
    }
  }
`;


export const TabHead = styled.div`
    display: flex;
    align-items: center;    
    margin-bottom : 31px;   
`

export const HeadColums1 = styled.div`
    text-align : start;
    width : 40%;
    font-size: 12px;
    line-height: 24px;
    color: ${({ theme }) => theme.color.greyscale[21]};
    font-family: 'PublicSans-medium';
    font-weight: 200;    
`

export const HeadColums2 = styled.div`
    text-align : center;
    width : 32%;
    font-size: 12px;
    line-height: 24px;
    color: ${({ theme }) => theme.color.greyscale[21]};
    font-family: 'PublicSans-medium';
    font-weight: 200; 
`

export const HeadColums3 = styled.div`
    width : 10%;   
`

export const TabBody = styled.div`
    display: flex;
    align-items: center;
    margin-bottom : 31px;  
`

export const BodyColums1 = styled.div`
    width : 42%;
    overflow: hidden;
    display: flex;
    align-items: center;
    div{
        h5{
            font-family: 'PublicSans-bold';
            font-size: 14px;
            font-weight: 400;
            margin: 0;
            color: ${({ theme }) => theme.color.greyscale[24]};
        }
        span{                                
            font-weight: 100;
            font-size: 14px;
            font-family: 'PublicSans-medium';
            color: ${({ theme }) => theme.color.greyscale[4]};
        }
    }
`

export const BodyColums2 = styled.div`
    width : 30%;
    text-align: center;
    span{
        font-size: 14px;
        line-height: 21px;
        color: ${({ theme }) => theme.color.greyscale[3]};        
        font-family: 'PublicSans-bold'; 
        font-weight: 400;
    }
    .blue{
        background-color:#F0F0FA;
        color : #397AFF;
        border-radius : 5px;
        padding : 0.3rem 0.8rem;    
        font-size: 12px;    
    }
`
export const TablesBody = styled.div`
    margin-top : 1.6rem;
`

export const BodyColums3 = styled.div`
    width : 10%;
    position: relative;
    margin-left:70px;
    margin-right: 0;
    display: flex;
    button {
  
        width: 47px;
        height: 42px;
        border: 1px solid #F2F2FF;
        border-radius: 5px;
    }
`
export const Modalfooter = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  padding: 2rem;
  box-sizing: border-box;
  bottom: 0;

  button {
    padding: 0.6rem 1rem;
    height: 42px;
    width: 100%;
    max-width: 788px;
    background: #3E7EFF;
    border-radius: 5px;
    color: #FFFFFF;
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
