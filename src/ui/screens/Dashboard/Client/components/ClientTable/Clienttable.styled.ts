import styled from "styled-components";

export const clientTable = styled.div`
  overflow: auto;
  & * {
    font-family: "PublicSans-medium";
  }

  .customTable {
    min-width: 680px;
    margin-top: 2rem;
  }
`;

export const TableRow = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.color.background[3]};
  margin-bottom: 1.5rem;
  border: 1px solid #ededff;
  border-radius: 5px;
  padding: 10px 0px 10px 20px;
`;

export const TableBox1 = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-width: 150px;
  max-width: 300px;
  @media only screen and (max-width: 1200px) {
    max-width: 150px;
  }
  a {
    text-decoration: none;
    min-width: 50px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-weight: bold;
    font-size: 14px;
    color: ${({ theme }) => theme.color.greyscale[23]};
  }
  img {
    margin: 0px 12px;
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
    margin: 0;
    font-family: "PublicSans-bold";
    font-weight: 500;
    font-size: 12px;
    color: ${({ theme }) => theme.color.greyscale[21]};
  }
`;

export const TableBox2 = styled.div`
  width: 29%;
  h3 {
    margin: 0;
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
    margin: 0;
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
  text-align: right;
  width: 20%;
  padding: 0 20px 0 0;
  button {
    width: 143px;
    a {
      color: #fff;
      font-weight: 600;
    }
  }

  @media only screen and (max-width: 1200px) {
    button {
      width: 95px;
    }
  }
`;
