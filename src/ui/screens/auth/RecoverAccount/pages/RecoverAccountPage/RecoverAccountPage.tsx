import { useLocale } from '../../../../../../assets/locale';

import { Link, useHistory } from 'react-router-dom';
import { MainButton } from '../../../../../@core/modules/Button';
import { InputCustom, InputPassword } from '../../../../../@core/modules/Input';
import { CustomCheckbox } from '../../../../../@core/modules/Checkbox';

import { EmailIcon16 } from '../../../../../../assets/icons';
import { AppLogoImage, SentEmailImage } from '../../../../../../assets/images';

import * as globalStyled from '../../../@core/components';
import * as styled from './RecoverAccountPage.styled';
import * as React from 'react';
import { AppRoutes } from '../../../../../app/routes';
import { addErrorToast } from '../../../../../toast';

export const RecoverAccountPage: React.VFC = () => {
  const { word } = useLocale();
  const history = useHistory();

  const [sent, setSent] = React.useState<boolean>(false);
  const [username, setUsername] = React.useState<string>('');
  const [checked, setChecked] = React.useState<boolean>(false);

  const sentDesription = React.useMemo(() => word('auth.sent-email').replace("${email}", `"${username}"`), [username, word]);

  const goRecover = () => {
    if (username && checked) {
      setSent(true);
    } else {
      addErrorToast('Please input your email or accept terms & conditions.')
    }
  };

  const handleEnter = (key: string) => {
    if (key == 'Enter') {
      goRecover();
    }
  };
  return (
    <globalStyled.BodyWrapper>
      <globalStyled.MainBlock width={442} height={635}>
        <globalStyled.Logo src={AppLogoImage} style={{ marginTop: -70 }} />
        <globalStyled.Name children={word('auth.recover-account')} />
        <globalStyled.Description children={sent ? sentDesription : word('welcome.description')} />
        {sent ? (
          <styled.Image src={SentEmailImage} />
        ) : (
          <styled.Wrapper>
            <InputCustom
              onKeyDown={handleEnter}
              onChange={setUsername}
              value={username}
              height={54}
              icon={<EmailIcon16 />}
              placeholder={word('global.email')}
            />
            <CustomCheckbox label={word('sign-up.i-have-read') + word('sign-up.terms-conds')} checked={checked} onChange={() => { setChecked(!checked) }} />
          </styled.Wrapper>
        )}
        <styled.Container>
          <MainButton children={word('global.continue')} onClick={goRecover} height={52} />
        </styled.Container>
        {sent && <Link to={''} children={word('auth.need-help')} />}
      </globalStyled.MainBlock>
    </globalStyled.BodyWrapper >
  );
};
