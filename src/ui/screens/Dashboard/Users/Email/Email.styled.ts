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
    padding: 1.46rem 0.95rem 3.55rem 1.19rem;
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
    margin: 0 0.7rem;
    color: #171721;
    font-size: 14px;
    line-height: 21px;
    font-weight: 400;
  }
`;

export const MainHeader = styled.div`
  h3 {
    color: #000;
    font-size: 21px;
    font-family: "PublicSans-bold";
    line-height: 32px;
  }
  span {
    font-weight: 400;
    font-size: 15px;
    line-height: 24px;
    color: ${({ theme }) => theme.color.greyscale[21]};
  }
`;

export const formRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-bottom: 1.32rem;
  &:last-child {
    margin-bottom: 0;
  }

  button {
    width: 45px;
    height: 40px;
    padding: 9px;
    border: 1px solid ${({ theme }) => theme.color.border[1]};
    border-radius: 5px;
    @media (max-width: 950px) {
      margin-left: 8px;
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
    line-height: 14px;
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
    margin-bottom: 1.36rem;
    h4 {
      color: #171721;
      font-weight: 700;
      font-size: 16px;
      line-height: 32px;
      margin: 1.32rem 0 1.07rem;
    }
    @media (max-width: 950px) {
      width: 100%;
    }
  }
`;

export const notification = styled.div`
  .email_title {
    font-size: 16px;
    line-height: 32px;
    margin-bottom: 1.43rem;
    color: #171721;
    font-family: "PublicSans-bold";
  }
`;

export const formTitle = styled.div`
  font-size: 20px;
  line-height: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.greyscale[24]};
`;

export const inputDiv = styled.div`
  margin: 1.04rem 0 1.06rem;
  &:last-child{
    margin: 1.04rem 0 2.32rem;
  }
  label {
    color: ${({ theme }) => theme.color.greyscale[4]};
    display: block;
    margin-bottom: 0.41rem;
    font-size: 12px;
    line-height: 14px;
    font-weight: 600;
  }
  input {
    background-color: ${({ theme }) => theme.color.background[1]} !important;
    color: ${({ theme }) => theme.color.greyscale[24]};
    border: 1px solid #f2f2ff;
    padding: 0.95rem 1.06rem;
    width: 100%;
    border-radius: 5px;
    font-size: 12px;
    line-height: 14px;
    font-weight: 700;
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
    top: 13px;
    right: 10px;
    cursor: pointer;
    z-index: 999;
  }
`;

export const formFooter = styled.div`
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  button {
    border: 1px solid #f2f2ff;
    color: ${({ theme }) => theme.color.greyscale[4]};
    font-size: 14px;
    line-height: 19px;
    font-weight: 500;
    width: 166px;
    height: 40px;
    border-radius: 7px;
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
    padding: 0;
  }
`;
