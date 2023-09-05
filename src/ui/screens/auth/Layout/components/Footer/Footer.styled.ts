import styled from 'styled-components';
import { Nullable } from '../../../../../../utils';

export const BodyWrapper = styled.div`
  display       : flex;
  flex-direction: row;
  align-items   : center;
  justify-content: center;
  padding       : 0 40px;
  height        : 81px;
  min-height        : 81px;
  background    : ${({ theme }) => theme.color.background[2]};

  @media only screen and (max-width: 500px) {
    padding       : 0 20px;
  }
`;

export const Content = styled.div`
    display       : flex;
    flex-direction: row;
    align-items   : center;
    justify-content: center;
`;

export const ThemeContent = styled.div`
    position: absolute;
    right: 40px;
    display: flex;

    @media only screen and (max-width: 500px) {
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
        stroke: ${({ checked }) => checked ? '#575977' : '575977'
    }
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
        stroke: ${({ checked, theme }) => checked ? '#FFFFFF' : '#5759773d'
    }
`;

export const Text = styled.p`
    font-family: 'PublicSans-Regular';
    font-size: 14px;
    color: ${({ theme }) => theme.color.greyscale[4]};
`;

export const Button = styled.p`
    font-family: 'PublicSans-Bold';
    font-size: 13px;
    color: ${({ theme }) => theme.color.greyscale[4]};
    margin-left: 10px;
    cursor: pointer;
`;