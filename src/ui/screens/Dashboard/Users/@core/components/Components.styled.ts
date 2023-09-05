import styled from "styled-components";

export const BodyWrapper = styled.div`
  background: ${({ theme }) => theme.color.background[1]};

  display       : flex;
  flex-direction: column;
  align-items   : center;
  justify-content: center;
  padding-bottom : 50px;
  width          100%;
  overflow-y: auto;

  @media only screen and (max-width: 500px) {
    padding-bottom : 0px;
  }

  a {
    ${({ theme }) => theme.font.h[12]};
    color: ${({ theme }) => theme.color.greyscale[4]};

    display    : flex;
    flex-wrap  : nowrap;
    width      : auto;
    align-items: center;

    svg {
      height      : 16px;
      width       : 16px;
      margin-right: 3px;
    }
  }
`;

export const MainBlock = styled.div<{ width: number, height: number }>`
  
  display        : flex;
  flex-direction : column;
  align-items    : center;
  justify-content: center;
  width          : ${({ width }) => width}px;
  height         : ${({ height }) => height}px;
  border-radius  : 10px;
  padding        : 60px 0;

  & > *:not(:last-child) {
    margin-bottom: 20px;
  }

  & > * {
    width: 100%;
  }

  @media only screen and (max-width: 500px) {
    width          : 100%;

    & > * {
      width: 90%;
    }
  }
`;

export const Name = styled.p`
  ${({ theme }) => theme.font.h[6]};

  text-align: center;
  color: ${({ theme }) => theme.color.greyscale[20]};

  @media only screen and (max-width: 500px) {
    ${({ theme }) => theme.font.h[8]};
  }
`;

export const Description = styled.p`
  ${({ theme }) => theme.font.p[5]};

  text-align: center;
  margin-top: -16px !important;
  margin-bottom: 50px !important;
  color: ${({ theme }) => theme.color.greyscale[4]};
`;

export const Logo = styled.img`
  width        : 64px;
  margin-bottom: 5vh;
`;

export const AdditionText = styled.div`
  margin-top: 30px;

  p {
    ${({ theme }) => theme.font.c_regular[4]};
    color: ${({ theme }) => theme.color.main[8]};

    margin-left: 5px;
  }
`;
