import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setup2FA,
  Authenticate,
} from "../../../../../redux/actions/authActions";
import { setErrorMessage } from "../../../../../redux/actions/errorActions";
import validateEmail from "../../../../../@core/utils/validation/validateEmail";

import { useLocale } from "../../../../../../assets/locale";

import { Link, Redirect, useHistory } from "react-router-dom";
import { MainButton } from "../../../../../@core/modules/Button";
import { InputCustom, InputPassword } from "../../../../../@core/modules/Input";
import { CustomCheckbox } from "../../../../../@core/modules/Checkbox";

import { EmailIcon16 } from "../../../../../../assets/icons";
import { AppLogoImage } from "../../../../../../assets/images";

import * as globalStyled from "../../../@core/components";
import * as styled from "./SignInPage.styled";
import { AppRoutes } from "../../../../../app/routes";
import { Button } from "../../../Layout/components/Footer/Footer.styled";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export const SignInPage: React.VFC = () => {
  const { word } = useLocale();
  const history = useHistory();
  const dispatch = useDispatch();

  const state: any = useSelector((state) => state);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [checked, setChecked] = useState<boolean>(false);
  const emailInputRef = React.useRef(null);

  useEffect(() => {
    if (state.auth.isAuthenticated) {
      history.push(AppRoutes.Auth.TwoFactor, { from: "signin" });
    }
  }, [state.auth, history]);

  const signIn = async (e: any) => {
    e.preventDefault();

    if (email.length === 0) {
      return;
    }
    if (!validateEmail(email)) {
      dispatch(setErrorMessage("Please enter a valid email address"));
      return;
    }
    if (password.length === 0) {
      dispatch(setErrorMessage("Please enter a password"));
      return;
    }
    e.preventDefault();
    dispatch(Authenticate({ email: email, password: password }));
  };

  const handleKeypress = (e: any) => {
    if (e.keyCode === 13) {
      signIn(e);
    }
  };

  return (
    <globalStyled.BodyWrapper>
      <form>
        <globalStyled.MainBlock width={442} height={635}>
          <globalStyled.Logo src={AppLogoImage} />
          <globalStyled.Name children={word("welcome.to-asset-reality")} />
          <globalStyled.Description children={word("welcome.description")} />
          <InputCustom
            onChange={setEmail}
            value={email}
            height={54}
            icon={<EmailIcon16 />}
            onKeyPress={handleKeypress}
            placeholder={word("global.email")}
          />
          <InputPassword
            onChange={setPassword}
            value={password}
            height={54}
            onKeyPress={handleKeypress}
            placeholder={word("global.password")}
          />
          {/* <CustomCheckbox
          label={word("sign-up.i-have-read") + word("sign-up.terms-conds")}
          checked={checked}
          onChange={() => {
            setChecked(!checked);
          }}
        /> */}
          <styled.SignInContainer>
            {state.auth.loading ? (
              <>
                <Spin indicator={antIcon} />
              </>
            ) : (
              <button autoFocus onClick={signIn}>
                {" "}
                Sign in
                {/* <MainButton
                children={word("sign-in")}
                onClick={signIn}
                height={52}
              /> */}
              </button>
            )}
          </styled.SignInContainer>
          <Link
            to={AppRoutes.Auth.Recover}
            children={word("auth.recover-account")}
          />
        </globalStyled.MainBlock>
      </form>
    </globalStyled.BodyWrapper>
  );
};
