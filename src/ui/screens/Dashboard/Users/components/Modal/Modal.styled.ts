import styled from "styled-components";
import { Nullable } from "../../../../../../utils/@types";

export const RelativeWrapper = styled.div`
  position: relative;
  visibility: hidden;

  &[data-visible="true"] {
    visibility: visible;
  }
`;

export const BodyWrapper = styled.div<{
  position?: "left" | "right" | "center";
}>`
  top: 0;
  right: 0;
  position: fixed;
  display: flex;
  opacity: 0;
  align-items: center;
  justify-content: ${({ position }) =>
    position === "right" ? "right" : position === "left" ? "left" : "center"};
  z-index: 9999;
  margin-bottom: 0px !important;

  &[data-visible="true"] {
    opacity: 1;
  }

  &[data-pin="false"] {
    left: 0;
    bottom: 0;
    background: rgba(56, 61, 61, 0.8);

    /* backdrop-filter: blur(3px); */
  }

  &[data-pin="true"] {
    top: calc(100% + 10px);
    position: absolute;
  }
  &[data-pos="right"] {
    right: -120px;
  }
  &[data-pos="left"] {
    right: 0;
  }
`;

export const DialogWrapper = styled.div<{
  height?: Nullable<number | string>;
  width?: Nullable<number | string>;
}>`
  ${({ height }) =>
    !height
      ? ""
      : typeof height === "number"
      ? `height: ${height}px`
      : `height: ${height}`};
  ${({ width }) =>
    !width
      ? ""
      : typeof width === "number"
      ? `width: ${width}px`
      : `width: ${width}`};

  background: ${({ theme }) => theme.color.background[1]};
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 512px;
  max-height: 100%;
  width: 100%;
  overflow-y: hidden;
  overflow-x: hidden;
  box-shadow: 0px 0px 7px #ffffff;

  border-radius: 15px;
  // transform     : scale(0.97);

  // &[data-visible=true] {
  // 	transform: scale(1);
  // }

  @media (max-width: 950px) {
    width: 90%;
    padding: 1.79rem 1.03rem 1.28rem 1.31rem !important;
  }

  @media (max-width: 450px) {
    width: 90%;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    max-width: 35px;
    font-style: normal;
    font-weight: bold;
    marging: 1rem;
  }
`;

export const CustomHeader = styled.div`
  display: flex;
  position: relative;
  padding: 1rem;
  button {
    max-width: 35px;
    font-style: normal;
    font-weight: bold;
    background: none;
    position: absolute;
    right: 20px;
    top: 20px;
  }
`;

export const CustomCloseButton = styled.div`
  button {
    max-width: 35px;
    font-style: normal;
    font-weight: bold;
    background: none;
    position: absolute;
    right: 20px;
    top: 20px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: auto;
  height: 100%;
`;

export const Footer = styled.div`
  display: flex;
  min-height: 76px;
  margin-top: auto;
  justify-content: flex-end;
  padding: 20px 30px;
  width: 100%;

  &[data-hide-splitter="false"] {
    border-top: 1px solid ${({ theme }) => theme.color.border[1]};
  }

  & > *:not(:last-child) {
    margin-right: 30px;
  }
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.color.greyscale[3]};
`;

export const SecondaryButton = styled.button`
  color: ${({ theme }) => theme.color.greyscale[3]};
  :active {
    opacity: 0.5;
  }
`;
