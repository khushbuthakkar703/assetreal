import styled from "styled-components";

export const OperationTable = styled.div`
  overflow: auto;
  & * {
    font-family: "PublicSans-medium";
  }

  .customTable {
    min-width: 1024px;
    margin-top: 2rem;
  }
`;

export const dropDiv = styled.div`
  margin-top: -1.2rem;
  margin-bottom: 1rem;
  border: 1px solid #ededff;
  border-top: none;
  border-radius: 0 0 5px 5px;
  padding: 1rem 4rem;
  background: ${({ theme }) => theme.color.background[3]};
`;

export const dropBody = styled.div`
  display: flex;
`;

export const dropTitle = styled.div`
  color: ${({ theme }) => theme.color.greyscale[25]};
  font-size: 12px;
`;

export const mainDrop = styled.div`
  display: flex;
  align-items: center;
  display: flex;
  align-items: center;
  min-width: 150px;
  padding-top: 10px;
  margin-right: 2rem;
  .coinTags {
    position: relative;
    img {
      height: 14px;
      width: 14px;
      position: absolute;
      top: -4px;
      right: 10px;
    }
  }
  svg {
    margin-right: 10px;
  }
  span {
    font-weight: 100;
    font-size: 12px;
    line-height: 14px;
    color: ${({ theme }) => theme.color.greyscale[3]};
    display: block;
    &:last-child {
      opacity: 0.46;
    }
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
  a {
    width: 30%;
    text-decoration: none;
    min-width: 150px;
    max-width: 200px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-weight: 700;
    font-size: 16px;
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
    font-size: 16px;
    color: ${({ theme }) => theme.color.greyscale[24]};
  }
  span {
    font-weight: 100;
    font-size: 14px;
    color: ${({ theme }) => theme.color.greyscale[21]};
    display: block;
  }
  button {
    width: 143px;
    a {
      color: #fff;
      font-weight: 600;
    }
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
  text-align: center;
  width: 15%;
  button {
    max-width: 50px;
    &:last-child {
      background: none;
    }
    svg {
      path {
        fill: ${({ theme }) => theme.color.greyscale[3]};
      }
    }
  }
  select {
    text-align: center;
    font-size: 12px;
    line-height: 14px;
    color: #686990;
    border: 1px solid #eff0f1;
    height: 35px;
    width: 80px;
    border-radius: 5px;
  }
`;
