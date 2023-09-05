import styled from "styled-components";

export const MainBody = styled.div`
  padding: 15px 0;
`;

export const HeadTitile = styled.div`
    font-size: 22px;
    color: ${({ theme }) => theme.color.greyscale[23]};
    font-weight: 700;
`;

export const ClientOperationsHead = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 30px 0;
    text-aling: end;

    input{
      background: #FBFBFF;
      border: 1px solid #F2F2FF;
      font-size: 12px;
      color: #8083A3;
      height: 42px;
      width: 100%;
      font-weight: 700;
      border-radius: 5px; 
    }

    select{
      height: 35px;
      border-radius: 5px;
      max-width: 80px;
      width: 100%;
      font-size: 12px;
      color: #686990;
      font-weight: 700;
      border: 1px solid #EFF0F1;
    }
`;

export const searchbar = styled.div`
    display: flex;
    align-items: center;
    background: #FBFBFF;
    border: 1px solid #F2F2FF;
    font-size: 12px;
    color: #8083A3;
    height: 42px;
    max-width: 736px;
    width: 100%;
    border-radius: 5px; 
    svg{
      margin: 0 11px;
    }
`;

export const OperationTable = styled.div`
  overflow: auto;
  & * {
    font-family: "PublicSans-medium";
  }

  .customTable {
    min-width: 1024px;
  }
`;


export const TableRow = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.color.background[3]};
  margin-bottom: 1rem;
  border: 1px solid #ededff;
  border-radius: 5px;
  padding: 10px 0px 10px 20px;
`;

export const TableBox1 = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 300px;
  h3{
    font-size: 14px;
    font-weight: 600;
    color: ${({ theme }) => theme.color.greyscale[23]};
    margin: 0;
  }

  span {
    span: 23%;
    font-family: "PublicSans-bold";
    font-weight: 400;
    font-size: 12px;
    background: ${({ theme }) => theme.color.background[5]};
    padding: 5px 15px;
    border-radius: 3px;
    margin: 0 15px;
    color: #20c54d;
  }

  h6 {
    font-family: "PublicSans-bold";
    font-weight: 500;
    font-size: 12px;
    color: ${({ theme }) => theme.color.greyscale[21]};
  }
`;

export const TableBox2 = styled.div`
  width: 100%;
  max-width: 240px;
  h3 {
    font-family: "PublicSans-bold";
    font-weight: 700;
    font-size: 14px;
    color: ${({ theme }) => theme.color.greyscale[24]};
  }
  span {
    font-weight: 100;
    font-size: 14px;
    color: ${({ theme }) => theme.color.greyscale[21]};
    display: block;
  }
  h6 {
    font-family: "PublicSans-bold";
    font-weight: 500;
    font-size: 12px;
    color: ${({ theme }) => theme.color.greyscale[21]};
  }
  .up_value {
    color: #20c54d;
  }
`;

export const TableBox3 = styled.div`
  width: 100%;
  max-width: 150px;
  button {
    width: 143px;
    height: 34px;
    background: #3E7EFF;
    border-radius: 5px;
    font-size: 12px;
    font-weight: 800;
    color: #fff;
    letter-spacing: 1px;
  }
`;
