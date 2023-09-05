import styled from "styled-components";

export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`;

export const ComponentContainer = styled.div`
  width: calc(100% - 295px);
  @media only screen and (max-width: 950px) {
    width: 100%;
  }
`;

export const Component = styled.div`
  display: flex;
  width: 100%;

  & > div > :last-child > div:last-child {
    // margin-bottom: 40px;
  }
`;

export const MainContaint = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 85vh;
  overflow: auto;
  background: ${({ theme }) => theme.color.background[1]};
  @media only screen and (max-width: 950px) {
    padding: 0 0.5rem;
    height: 95vh;
  }
`;
