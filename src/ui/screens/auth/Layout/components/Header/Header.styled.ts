import styled from 'styled-components';

export const BodyWrapper = styled.div`
  display       : flex;
  flex-direction: row;
  align-items   : center;
  padding       : 0 40px;
  height        : 96px;
  min-height        : 96px;
  background    : ${({ theme }) => theme.color.background[1]};
  border-bottom : 1px solid ${({ theme }) => theme.color.border[1]};

  @media only screen and (max-width: 500px) {
    display: none;
  }
`;

export const Name = styled.p`
    font-family: 'PublicSans-Bold';
    font-size: 24px;
    color: ${({ theme }) => theme.color.greyscale[3]};

    &:hover { 
        cursor: pointer;
    }

    @media only screen and (max-width: 500px) {
        ${({ theme }) => theme.font.h[8]};
    }
`;

export const Logo = styled.img`
    &:hover { 
        cursor: pointer;
    }

    width: 45px;
    height: 44px;
    margin-right: 5px;

    @media only screen and (max-width: 500px) {
        height    : 36px;
    }
`;