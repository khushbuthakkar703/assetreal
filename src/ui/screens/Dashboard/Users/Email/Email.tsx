import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  EditIcon20,
  EyeIcon18,
  NotificationsIcon18,
} from "../../../../../assets/icons";
import { useLocale } from "../../../../../assets/locale";
import { toggleDrawer } from "../../../../redux/actions/appActions";
import {
  getUser,
  getUserPref,
  setUser,
} from "../../../../redux/actions/authActions";
import Modal from "../components/Modal/Modal";
import * as styled from "./Email.styled";
import validateEmail from "../../../../@core/utils/validation/validateEmail";
import { toast } from "react-toastify";

export default function Email() {
  const [open, setOpen] = useState(false);
  const [openn, setOpenn] = useState(false);
  const [value, setValue] = useState(false);

  const dispatch = useDispatch();
  const auth = useSelector((state: any) => state.auth);
  const DrawerState = useSelector((state: any) => state.app.drawer);
  const uservalue = useSelector((state: any) => state.auth.prefs);
  const userid = useSelector((state: any) => state.auth.userId);
  React.useEffect(() => {
    // dispatch(getUser(userid));
  }, [auth.prefs, dispatch]);
  const OpenDrawer = () => {
    dispatch(toggleDrawer(!DrawerState));
  };

  const { word } = useLocale();
  const [email, setEmail] = useState("");

  const Notify = [
    {
      id: 1,
      name: "Notify me on new added users",
      ref: "notify_on_new_users",
      value: uservalue?.notify_on_new_users,
    },
    {
      id: 2,
      name: "Notify me on new operations",
      ref: "notify_on_new_operations",
      value: uservalue?.notify_on_new_operations,
    },
    {
      id: 3,
      name: "Notify me on deposits and withdrawals",
      ref: "notify_on_transactions",
      value: uservalue?.notify_on_transactions,
    },
    {
      id: 4,
      name: "Notify me on added portfolio",
      ref: "notify_on_new_portfolio",
      value: uservalue?.notify_on_new_portfolio,
    },
    {
      id: 5,
      name: "Notify me on user latest activity",
      ref: "notify_on_latest_activity",
      value: uservalue?.notify_on_latest_activity,
    },
  ];

  const ChangeEmail = (e: any) => {
    if (email.length === 0) {
      return;
    }
    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address");
      return;
    }
  };

  return (
    <styled.MainBody>
      <styled.MainContainer>
        <styled.MainHeader>
          <h3>Email Settings </h3>
          <span>Manage your email settings </span>
        </styled.MainHeader>

        <styled.MainUserBody>
          <form>
            <h4>Personal details </h4>

            <styled.formRow>
              <styled.formInput>
                <label htmlFor="name">Name</label>
                <input type="text" placeholder="User Name" />
              </styled.formInput>

              <button type="button">
                <EditIcon20 />
              </button>
            </styled.formRow>

            <styled.formRow>
              <styled.formInput>
                <label htmlFor="enail">Email</label>
                <input type="text" placeholder="User Email" />
              </styled.formInput>

              <button type="button" onClick={() => setOpen(true)}>
                <EditIcon20 />
              </button>
            </styled.formRow>

            <styled.formRow>
              <styled.formInput>
                <label htmlFor="password">Password </label>
                <input type="password" placeholder="User Password " />
              </styled.formInput>

              <button type="button" onClick={() => setOpenn(true)}>
                <EditIcon20 />
              </button>
            </styled.formRow>
          </form>

          <styled.notification>
            <h4 className="email_title">Email notification settings </h4>

            {Notify.map((data, i) => {
              return (
                <styled.toggleRow>
                  <styled.rowTitle>
                    <NotificationsIcon18 />
                    <span>{data.name}</span>
                  </styled.rowTitle>

                  <label
                    className="switch"
                    onClick={() => {
                      dispatch(setUser(userid, data.ref, data.value));
                    }}
                  >
                    <input type="checkbox" checked={data.value} />
                    <span className="slider"></span>
                  </label>
                </styled.toggleRow>
              );
            })}
          </styled.notification>
        </styled.MainUserBody>
      </styled.MainContainer>

      <Modal position={"center"} visible={open} title={""}>
        <styled.formBody>
          <styled.formTitle>Change your email address</styled.formTitle>

          <form>
            <styled.inputDiv>
              <label htmlFor="email">Email</label>
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></input>
            </styled.inputDiv>

            <styled.inputDiv>
              <label htmlFor="email">Enter your password to confirm</label>
              <styled.passInput>
                <input type="password" />
                <button type="button">
                  <EyeIcon18 />
                </button>
              </styled.passInput>
            </styled.inputDiv>
          </form>
        </styled.formBody>

        <styled.formFooter>
          <button onClick={() => setOpen(false)}>Cancel</button>
          <button onClick={ChangeEmail}>Change Address</button>
        </styled.formFooter>
      </Modal>

      <Modal position={"center"} visible={openn} title={""}>
        <styled.formBody>
          <styled.formTitle>Change new password</styled.formTitle>

          <form>
            <styled.inputDiv>
              <label htmlFor="email">Password</label>
              <styled.passInput>
                <input type="password" />
                <button type="button">
                  <EyeIcon18 />
                </button>
              </styled.passInput>
            </styled.inputDiv>

            <styled.inputDiv>
              <label htmlFor="email">New Password</label>
              <styled.passInput>
                <input type="password" />
                <button type="button">
                  <EyeIcon18 />
                </button>
              </styled.passInput>
            </styled.inputDiv>

            <styled.inputDiv>
              <label htmlFor="email">Confirm New Password</label>
              <styled.passInput>
                <input type="password" />
                <button type="button">
                  <EyeIcon18 />
                </button>
              </styled.passInput>
            </styled.inputDiv>
          </form>
        </styled.formBody>
        <styled.formFooter>
          <button onClick={() => setOpenn(false)}>Cancel</button>
          <button>Change Address</button>
        </styled.formFooter>
      </Modal>
    </styled.MainBody>
  );
}
