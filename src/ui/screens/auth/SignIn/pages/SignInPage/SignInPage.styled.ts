import styled from "styled-components";

export const SignInContainer = styled.div`
  display: flex;
  margin-top: 50px;

  & > *:first-child {
    flex: 1;
    margin-right: 5px;
  }

  & > *:last-child {
    min-width: 20px !important;
  }
  button {
    border-color: transparent;
    color: #fff;
    background: #1e62e9;
    min-height: 52px;
    height: 52px;
    padding: 0 17.333333333333332px;
    min-width: 120px;
    font-family: PublicSans-Bold;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    transition: 250ms;
    display: flex;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
  }
`;
