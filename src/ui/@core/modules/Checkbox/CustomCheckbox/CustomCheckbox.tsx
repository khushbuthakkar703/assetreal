import { useCallback } from 'react';

import CheckboxAntd from 'antd/lib/checkbox/Checkbox';

import { ChangeEventHandler } from '../../../hooks/useInputState';

import * as styled from './CustomCheckbox.styled';

type CheckboxAntdProps = React.ComponentProps<typeof CheckboxAntd>;
type Props = Omit<CheckboxAntdProps, 'onChange'> & {
  label?: string;
  value?: string;
  bold?: boolean;
  onChange?: (value: boolean) => void;
  name?: string;
  handleChangeEvent?: ChangeEventHandler;
};

export const CustomCheckbox: React.FC<Props> = ({ label, value, bold, onChange, handleChangeEvent, name, ...props }) => {
  const toggle = useCallback(
    () =>
      (onChange && onChange(!props.checked)) ||
      (handleChangeEvent &&
        handleChangeEvent({
          target: {
            name,
            value: !props.checked,
          },
        })),
    [props.checked, onChange, handleChangeEvent, name]
  );

  return (
    <styled.BodyWrapper onClick={toggle}>
      <styled.Checkbox checked={props.checked} />
      {label && <styled.Title data-bold={bold}>{label}</styled.Title>}
    </styled.BodyWrapper>
  );
};
