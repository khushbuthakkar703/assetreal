import styled from "styled-components";
import { Nullable } from "../../../../../../utils";

export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  background: ${({ theme }) => theme.color.background[2]};
  @media only screen and (max-width: 950px) {
    display: none;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ThemeContent = styled.div`
  position: absolute;
  right: 40px;
  display: flex;
  @media only screen and (max-width: 600px) {
    bottom: 10px;
    right: 0;
    display: none;
  }
`;

export const IconWrapper = styled.div<{
  checked?: Nullable<boolean>;
}>`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin: 0 5px;

    svg {
        stroke: ${({ checked }) => (checked ? "#575977" : "575977")}
`;

export const DarkIconWrapper = styled.div<{
  checked?: Nullable<boolean>;
}>`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin: 0 5px;

    svg {
        stroke: ${({ checked, theme }) => (checked ? "#FFFFFF" : "#5759773d")}
`;

export const Text = styled.p`
  font-family: "PublicSans-Regular";
  font-size: 14px;
  color: ${({ theme }) => theme.color.greyscale[4]};
`;

export const Button = styled.p`
  font-family: "PublicSans-Bold";
  font-size: 13px;
  color: ${({ theme }) => theme.color.greyscale[4]};
  margin-left: 10px;
  cursor: pointer;
`;

export const ListContainer = styled.div`
  display: block;
  text-align: center;
  width: 100%;
  align-items: center;

  & > *:not(:first-child) {
    margin-left: 20px;
  }

  .footerList {
    span {
      font-family: "PublicSans-Bold";
      color: #171721;
      font-weight: 100;
      font-size: 12px;
      line-height: 18px;
      margin: 0 16px;
    }
  }
  .copyright{
    display: none;
    margin: 0;
    span {
      font-weight: 500;
      font-size: 12px;
      line-height: 18px;
      color: #8083A3;
      padding-top: 20px;
      display: block;
    }
    @media only screen and (max-width: 500px) {
      display: block;
    }
  }

  @media only screen and (max-width: 500px) {
    justify-content: center;
  }
`;
