import styled from "styled-components";

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

export const documents = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin: 50px 0;
`;

export const DocumentBox = styled.div`
    width: 100%;
    height: 210px;
    border-radius: 12px;
    border: 1px solid #DDDDDD;
    max-width: 243px;
    margin-right: 28px;
    margin-bottom:20px;
    padding: 36px 24px;
    position: relative;
    &:last-child{
        margin-right:0;
    }

    input{
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        cursor: pointer;
        width: 100%;
        opacity: 0;
    }

    img{
        width: 32px;
    }
    span{
        display: block;
        font-size: 14px;
        color: #8082A4;
        line-height: 1.2;
        margin-top: 50px;
        font-weight: 400;
    }
`;
