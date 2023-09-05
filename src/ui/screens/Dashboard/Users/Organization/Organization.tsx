import React, { useState } from "react";
import {
  EditIcon20,
  EyeIcon18,
  NotificationsIcon18,
} from "../../../../../assets/icons";
import Modal from "../components/Modal/Modal";
import * as styled from "./Organization.styled";
import Drawer from "react-modern-drawer";

export default function Organization() {
  const [addOparation, setaddOparation] = React.useState(false);
  const toggleOparation = () => {
    setaddOparation((prevState) => !prevState);
  };

  const Notify = [
    {
      id: 1,
      name: "Notify me on new added users",
    },
    {
      id: 2,
      name: "Notify me on new operations",
    },
    {
      id: 3,
      name: "Notify me on deposits and withdrwals",
    },
    {
      id: 4,
      name: "Notify me on added portfolio",
    },
    {
      id: 5,
      name: "Notify me on user latest activity",
    },
  ];

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

              <button type="button">
                <EditIcon20 />
              </button>
            </styled.formRow>

            <styled.formRow>
              <styled.formInput>
                <label htmlFor="password">Password </label>
                <input type="password" placeholder="User Password " />
              </styled.formInput>
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

                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider"></span>
                  </label>
                </styled.toggleRow>
              );
            })}
          </styled.notification>
        </styled.MainUserBody>
      </styled.MainContainer>

      <Drawer
        open={addOparation}
        onClose={toggleOparation}
        direction="right"
        style={{
          maxWidth: "900px",
          width: "100%",
        }}
      >
        {" "}
        <styled.formBody>
          <styled.formTitle> Change your email address</styled.formTitle>

          <form>
            <styled.inputDiv>
              <label htmlFor="email">Email</label>
              <input type="text" />
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
          <button>Cancel</button>
          <button>Change Address</button>
        </styled.formFooter>
      </Drawer>
    </styled.MainBody>
  );
}
