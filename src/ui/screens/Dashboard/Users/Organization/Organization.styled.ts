import styled from "styled-components";

export const MainBody = styled.div`
  display: flex;
  margin: 0 auto;
  width: 100%;
  & * {
    font-family: "PublicSans-medium";
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export const MainContainer = styled.div`
  padding: 40px 38px;
  max-width: 1299px;
  width: 100%;
  @media only screen and (max-width: 950px) {
    padding: 10px;
  }
`;

export const toggleRow = styled.div`
  width: 45%;
  display: flex;
  align-items: center;
  border: 1px solid RGB(228, 230, 232, 0.6);
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 16px;
  justify-content: space-between;
  @media (max-width: 950px) {
    width: 100%;
  }

  .switch {
    position: relative;
    display: inline-block;
    width: 45px;
    height: 24px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #a9b0b7;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 100px;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 100%;
  }

  input:checked + .slider {
    background-color: #3e7eff;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #3e7eff;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(21px);
    -ms-transform: translateX(21px);
    transform: translateX(21px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;

export const rowTitle = styled.div`
  display: flex;
  align-items: center;
  width: calc(100% - 50px);
  span {
    margin: 0 0.4rem;
    color: ${({ theme }) => theme.color.greyscale[23]};
    font-size: 14px;
  }
`;

export const MainHeader = styled.div`
  h3 {
    color: ${({ theme }) => theme.color.greyscale[23]};
    font-size: 22px;
    font-family: "PublicSans-bold";
  }
  span {
    font-size: 14px;
    color: ${({ theme }) => theme.color.greyscale[21]};
  }
`;

export const formRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-bottom: 27px;
  &:last-child {
    margin-bottom: 0;
  }

  button {
    width: 45px;
    height: 40px;
    border: 1px solid ${({ theme }) => theme.color.border[1]};
    border-radius: 5px;
    @media (max-width: 950px) {
      margin-left: 1rem;
    }
  }
`;

export const formInput = styled.div`
  width: calc(100% - 70px);
  @media (max-width: 950px) {
    width: 100%;
  }
  label {
    display: block;
    font-size: 12px;
    font-weight: 600;
    color: ${({ theme }) => theme.color.greyscale[24]};
    margin-bottom: 10px;
  }
  input {
    border: 1px solid ${({ theme }) => theme.color.border[1]};
    border-radius: 5px;
    padding: 0.5rem;
    min-height: 40px;
    width: 100%;
    font-size: 12px;
    background: ${({ theme }) => theme.color.background[3]};
    color: ${({ theme }) => theme.color.greyscale[21]};
  }
`;

export const MainUserBody = styled.div`
  form {
    width: 45%;
    margin-bottom: 36px;
    h4 {
      color: ${({ theme }) => theme.color.greyscale[23]};
      font-size: 14px;
      margin: 30px 0 27px;
    }
    @media (max-width: 950px) {
      width: 100%;
    }
  }
`;

export const notification = styled.div`
  .email_title {
    font-size: 14px;
    margin-bottom: 22px;
    color: ${({ theme }) => theme.color.greyscale[23]};
    font-family: "PublicSans-bold";
  }
`;

export const formTitle = styled.div`
  font-size: 20px;
  color: ${({ theme }) => theme.color.greyscale[24]};
`;

export const inputDiv = styled.div`
  margin: 1rem 0;
  label {
    color: ${({ theme }) => theme.color.greyscale[4]};
    display: block;
    margin-bottom: 0.5rem;
  }
  input {
    border: 1px solid #f2f2ff;
    background: ${({ theme }) => theme.color.background[1]};
    color: ${({ theme }) => theme.color.greyscale[24]};
    padding: 0.5rem;
    width: 100%;
    border-radius: 5px;
  }
`;

export const formBody = styled.div`
  padding: 1rem 2rem;
  @media (max-width: 676px) {
    padding: 0;
  }
`;

export const passInput = styled.div`
  position: relative;
  button {
    background: none;
    border: none;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    z-index: 999;
  }
`;

export const formFooter = styled.div`
  padding: 1rem 2rem;
  border-top: 1px solid #ededed;
  display: flex;
  align-items: center;
  justify-content: end;
  button {
    border: 1px solid #f2f2ff;
    color: ${({ theme }) => theme.color.greyscale[4]};
    font-size: 14px;
    padding: 0.5rem;
    border-radius: 7px;
    margin-left: 16px;
    &:last-child {
      background: #397aff;
      color: #fff;
    }
    &:hover {
      opacity: 0.7;
    }
  }
  .bg-red {
    background: #e21b1b;
  }
  @media (max-width: 676px) {
    padding: 0.5rem 0 0 0;
  }
`;
