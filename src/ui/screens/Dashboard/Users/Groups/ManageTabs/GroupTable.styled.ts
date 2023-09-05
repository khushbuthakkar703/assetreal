import styled from "styled-components";

export const TabHead = styled.div`
    display: flex;
    align-items: center;    
    margin-bottom : 31px;   
`

export const HeadColums1 = styled.div`
    text-align : start;
    width : 30%;
    font-size: 14px;
    line-height: 24px;
    color: ${({ theme }) => theme.color.greyscale[21]};
    font-family: 'PublicSans-medium';
    font-weight: 200;    
`

export const HeadColums2 = styled.div`
    text-align : center;
    width : 20%;
    font-size: 14px;
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
    width : 30%;
    overflow: hidden;
    display: flex;
    align-items: center;
    img{
        height : 54px;
        width : 54px;
        margin-right : 12px;
        border-radius : 100%;
    }
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
    width : 20%;
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
    text-align: end;
    margin-left: auto;
    margin-right: 0;
    display: flex;
    button {
  
        width: 47px;
        height: 42px;
        border: 1px solid #F2F2FF;
        border-radius: 5px;
    }
`
