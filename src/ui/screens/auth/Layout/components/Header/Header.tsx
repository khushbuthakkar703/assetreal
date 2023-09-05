import { AppLogoImage } from '../../../../../../assets/images';
import * as styled from './Header.styled';

type Props = {
};

export const Header: React.VFC<Props> = ({ }) => {
  return (
    <styled.BodyWrapper>
        <styled.Logo src={AppLogoImage} />
        <styled.Name children={"Asset Reality"} />
    </styled.BodyWrapper>
  );
};
