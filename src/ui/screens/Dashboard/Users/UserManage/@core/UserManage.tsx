import React, { useState } from "react";
import {
  ArrowLeftIcon17,
  CheckIcon16,
  EmailIcon22,
  PlusIcon21,
  TrashIcon18,
} from "../../../../../../assets/icons";
import check from "../../../../../../assets/images/Check.png";
import * as styled from "./UserManage.styled";
import Managtabs from "../ManagTabs/Managtabs";
import Drawer from "react-modern-drawer";
import { OrgDetail } from "../components/OrgDetail";
import { useDispatch, useSelector } from "react-redux";
import {
  setRoleFilter,
  toggleDrawer,
} from "../../../../../redux/actions/appActions";
import { createUser } from "../../../../../redux/actions/usersActions";
import validateEmail from "../../../../../@core/utils/validation/validateEmail";
import { GET_ERRORS } from "../../../../../redux/types";
import { type } from "os";

export const UserManage: React.VFC = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Tabs, setTabs] = useState("1");
  const [newUsers, setNewUsers] = useState<any[]>([]);
  const [adminStatus, setAdminStatus] = useState("admin");

  const filterRole = useSelector((state: any) => state.perms.filterRole);
  const DrawerState = useSelector((state: any) => state.app.drawer);
  const users = useSelector((state: any) => state.perms.users);
  const org = useSelector((state: any) => state.auth.org);

  const [addOparation, setaddOparation] = React.useState(false);
  const toggleOparation = () => {
    setaddOparation((prevState) => !prevState);
  };

  const setFilter = (value: string) => {
    dispatch(setRoleFilter(value));
  };

  const handleDone = () => {
    dispatch(createUser({ payload: newUsers }));
    dispatch(toggleDrawer(!DrawerState));
  };

  const OpenDrawer = () => {
    dispatch(toggleDrawer(!DrawerState));
  };

  const removeButton = (data: any) => {
    const temp = newUsers.filter((obj) => obj !== data);
    setNewUsers(temp);
  };

  const addButton = (e: any) => {
    e.preventDefault();
    if (email.length === 0) {
      return;
    }
    if (!validateEmail(email)) {
      dispatch({
        type: GET_ERRORS,
        payload: {
          message: "Please enter a valid email address",
        },
      });
      return;
    }

    if (email && name !== "") {
      const password =
        Math.random().toString(36).slice(2) +
        Math.random().toString(36).slice(2);
      newUsers.push({
        name: name,
        email: email,
        password: password,
        role: adminStatus,
        organization: {
          id: org,
        },
      });
    }

    setEmail("");
    setName("");
    setAdminStatus("admin");
  };

  const handleKeypress = (e: any) => {
    if (e.keyCode === 13) {
      addButton(e);
    }
  };

  const toggleOperation = () => {
    dispatch(toggleDrawer(!DrawerState));
  };

  return (
    <styled.MainBody>
      <styled.MainContainer>
        <styled.MainHeader>
          <styled.PageTitle>Organization</styled.PageTitle>
        </styled.MainHeader>
        <OrgDetail />
        <styled.MainHeader>
          <styled.PageTitle>User Management</styled.PageTitle>
          <styled.TitileDesc>Manage users</styled.TitileDesc>
        </styled.MainHeader>

        <styled.TabsHeaders>
          <styled.OperationHeader>
            <styled.searchBar>
              <styled.memberTitle>
                <span>{users.length}</span> Membersss
              </styled.memberTitle>
              <styled.memberDesc>
                Admins can have full access to portfolios
              </styled.memberDesc>
            </styled.searchBar>
            <styled.inviteButton onClick={OpenDrawer}>
              <PlusIcon21 />
            </styled.inviteButton>
          </styled.OperationHeader>
        </styled.TabsHeaders>

        <styled.TabHeader>
          <button
            className={filterRole === "admin" ? "activTabs" : ""}
            onClick={() => setFilter("admin")}
          >
            Admins
          </button>
          <button
            className={filterRole === "user" ? "activTabs" : ""}
            onClick={() => setFilter("user")}
          >
            Users
          </button>
          <button
            className={filterRole === "viewer" ? "activTabs" : ""}
            onClick={() => setFilter("viewer")}
          >
            Viewers
          </button>
        </styled.TabHeader>

        <Managtabs />
      </styled.MainContainer>

      <div className="MainInviteModal">
        {/* <Drawer
          open={addOparation}
          onClose={toggleOparation}
          direction="right"
          style={{
            maxWidth: "700px",
            width: "100%",
          }}
        > */}
        <Drawer
          open={DrawerState}
          onClose={OpenDrawer}
          direction="right"
          style={{
            maxWidth: "900px",
            width: "100%",
          }}
        >
          <form>
            <styled.DrawerBody>
              <styled.MainTitle>
                <h2>Invite Members</h2>
                <h6>Add new memebers to the project </h6>
              </styled.MainTitle>
              <styled.InputEmail>
                <div>
                  <h4>Email</h4>
                  <div className="inputBox">
                    <span>
                      <EmailIcon22 />
                    </span>
                    <input
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);  
                      }}
                      type="email"
                      onKeyPress={handleKeypress}
                    />
                    <span>
                      <img src={check} alt="" />
                    </span>
                  </div>
                </div>
                <div>
                  <a href="javascript:" defaultValue="admin">Add as Admin 
                  {/* <img src={check} alt="" /> */}
                  </a>
                </div>
                <div>
                  <a href="javascript:" defaultValue="user">Add as User</a>
                </div>
                <div>
                  <a href="javascript:" defaultValue="viewer">Add as Viewer</a>
                </div>
              </styled.InputEmail>

              <styled.AssignedTable>
                {newUsers === [] && (
                  <styled.TableHeader>
                    <styled.colums_1>Name / Email</styled.colums_1>
                    <styled.colums_2>Correct Data</styled.colums_2>
                    <styled.colums_3></styled.colums_3>
                  </styled.TableHeader>
                )}

                {newUsers.map((data, i) => {
                  return (
                    <>
                      <styled.TableBody key={i}>
                        <styled.Bodycolums_1>
                          <div>
                            <h5>{data.name}</h5>
                            <p>{data.email}</p>
                          </div>
                        </styled.Bodycolums_1>

                        <styled.Bodycolums_2>
                          <select>
                            <option value={data.role}>{data.role}</option>
                            <option value="admin">Add as Admin</option>
                            <option value="user">Add as User</option>
                            <option value="viewer">Add as Viewer</option>{" "}
                          </select>
                        </styled.Bodycolums_2>

                        <styled.Bodycolums_3>
                          <button onClick={() => removeButton(data)}>
                            <TrashIcon18 />
                          </button>
                        </styled.Bodycolums_3>
                      </styled.TableBody>
                    </>
                  );
                })}
              </styled.AssignedTable>

              <styled.TableFooter>
                <button onClick={() => handleDone()}>Add Member</button>
                <button onClick={() => OpenDrawer()}>Cancel</button>
              </styled.TableFooter>
            </styled.DrawerBody>
          </form>
        </Drawer>
      </div>
    </styled.MainBody>
  );
};
