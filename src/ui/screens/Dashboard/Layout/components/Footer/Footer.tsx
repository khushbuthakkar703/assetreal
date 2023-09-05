import { AppLogoImage } from "../../../../../../assets/images";
import * as styled from "./Footer.styled";
import { useLocale } from "../../../../../../assets/locale";
import { Link, useHistory } from "react-router-dom";
import { AppRoutes } from "../../../../../app/routes";
import { DarkIcon, LightIcon } from "../../../../../../assets/icons";
import { useDispatch, useSelector } from "react-redux";
import { switchTheme } from "../../../../../redux/actions/appActions";
import { useEffect, useState } from "react";
type Props = {};

export const Footer: React.VFC<Props> = ({}) => {
  const { word } = useLocale();
  const history = useHistory();
  const dispatch = useDispatch();
  const [pathname, setPathname] = useState("");

  const isDark = useSelector((state: any) => state.app.isDark);

  useEffect(() => {
    history.listen((location) => {
      setPathname(location.pathname);
    });
  }, []);

  const onChangeTheme = () => {
    dispatch(switchTheme(isDark ? false : true));
  };

  const goNext = () => {
    if (pathname !== "/sign-up") {
      history.push(AppRoutes.Auth.SignUp);
    } else {
      history.push(AppRoutes.Auth.SignIn);
    }
  };

  return (
    <styled.BodyWrapper>
      <styled.ListContainer>
        <div className="footerList">
          <span>Privacy Policy</span>
          <span>Term of Use</span>
        </div>
        <div className="copyright">
          <span>© 2022 All rights reserved</span>
        </div>
      </styled.ListContainer>

      <styled.ThemeContent>
        <styled.DarkIconWrapper onClick={onChangeTheme} checked={isDark}>
          <DarkIcon />
        </styled.DarkIconWrapper>
        <styled.IconWrapper onClick={onChangeTheme} checked={!isDark}>
          <LightIcon />
        </styled.IconWrapper>
      </styled.ThemeContent>
    </styled.BodyWrapper>
  );
};
