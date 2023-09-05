import { useLocale } from '../../../../../../assets/locale';

import { useHistory } from 'react-router-dom';
import { MainButton } from '../../../../../@core/modules/Button';
import { InputCustom, InputPassword } from '../../../../../@core/modules/Input';
import { CustomCheckbox } from '../../../../../@core/modules/Checkbox';

import { AvatarIcon32, EmailIcon16 } from '../../../../../../assets/icons';
import { AppLogoImage } from '../../../../../../assets/images';

import * as globalStyled from '../../../@core/components';
import * as styled from './SignUpPage.styled';
import * as React from 'react';
import { AppRoutes } from '../../../../../app/routes';

export const SignUpPage: React.VFC = () => {
  const { word } = useLocale();
  const history = useHistory();

  const [username, setUsername] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [checked, setChecked] = React.useState<boolean>(false);

  const signUp = () => {
    history.push(AppRoutes.Auth.TwoFactor, { from: 'signup' })
  };

  const handleEnter = (key: string) => {
    if (key == 'Enter') {
      signUp();
    }
  };
  return (
    <globalStyled.BodyWrapper>
      <globalStyled.MainBlock width={442} height={635}>
        <globalStyled.Logo src={AppLogoImage} />
        <globalStyled.Name children={word('welcome.to-asset-reality')} />
        <globalStyled.Description children={word('welcome.description')} />
        <InputCustom
          onChange={setUsername}
          value={username}
          height={54}
          icon={<AvatarIcon32 />}
          placeholder={word('global.name')}
        />
        <InputCustom
          onChange={setEmail}
          value={email}
          height={54}
          icon={<EmailIcon16 />}
          placeholder={word('global.email')}
        />
        <InputPassword
          onChange={setPassword}
          value={password}
          height={54}
          placeholder={word('global.password')}
        />
        <InputPassword
          onKeyDown={handleEnter} 
          onChange={setPassword}
          value={password}
          height={54}
          placeholder={word('global.confirm-password')}
        />
        <CustomCheckbox label={word('sign-up.i-have-read') + word('sign-up.terms-conds')} checked={checked} onChange={() => { setChecked(!checked) }} />  
        <styled.SignUpContainer>
          <MainButton children={word('sign-up')} onClick={signUp} height={52} />
        </styled.SignUpContainer>
      </globalStyled.MainBlock>
    </globalStyled.BodyWrapper>
  );
};
