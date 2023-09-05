import styled from 'styled-components';
import { Nullable } from '../../../../../utils';

export const BodyWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  /* Checked */
  .ant-checkbox-checked .ant-checkbox-inner {
    background: ${({ theme }) => theme.color.main[7]};
    border-color: ${({ theme }) => theme.color.main[7]};
  }

  /* Checked hover */
  .ant-checkbox-checked:after {
    border-color: ${({ theme }) => theme.color.main[7]};
  }

  /* Default */
  .ant-checkbox-inner {
    border-color: ${({ theme }) => theme.color.greyscale[6]};
    background: ${({ theme }) => theme.color.greyscale[1]};
  }

  /* Active */
  .ant-checkbox-input:focus + .ant-checkbox-inner,
  .ant-checkbox-wrapper:hover .ant-checkbox-inner,
  .ant-checkbox:hover .ant-checkbox-inner {
    border-color: ${({ theme }) => theme.color.main[7]};
  }

  /* Disabled */
  .ant-checkbox-disabled .ant-checkbox-inner {
    background-color: ${({ theme }) => theme.color.greyscale[2]};
    border-color: ${({ theme }) => theme.color.greyscale[5]} !important;
  }
`;

export const Title = styled.p`
  ${({ theme }) => theme.font.c_regular[4]};
  color: ${({ theme }) => theme.color.greyscale[4]};
  margin-left: 10px;

  &[data-bold='true'] {
    font-weight: 500;
  }
`;

export const Checkbox = styled.div<{
  checked?: Nullable<boolean>;
}>`
  height: 14px;
  width : 14px;
  border-radius: 7px;
  background: ${({ checked, theme }) => checked ? 'linear-gradient(#72B5FF, #3E7EFF)' : theme.color.background[3]}};
  border: 2px solid #E1EAF4;
`;
