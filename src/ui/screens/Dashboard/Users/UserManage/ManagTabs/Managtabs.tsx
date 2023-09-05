import React, { useState } from "react";
import {
  PasswordIcon16,
  PlusIcon16,
  SearchIcon16,
  SearchIcon18,
  TrashIcon18,
} from "../../../../../../assets/icons";
import * as styled from "./Admins/Admins.styled";
import MainTable from "./MainTable";
import Drawer from "react-modern-drawer";
import { useDispatch, useSelector } from "react-redux";
import { toggleDrawer } from "../../../../../redux/actions/appActions";
import validateEmail from "../../../../../@core/utils/validation/validateEmail";
import { setErrorMessage } from "../../../../../redux/actions/errorActions";
import { toast } from "react-toastify";

import {
  createUser,
  getOrgUsers,
} from "../../../../../redux/actions/usersActions";
import { GET_ERRORS } from "../../../../../redux/types";

export default function Managtabs() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [adminStatus, setAdminStatus] = useState("admin");
  const [newUsers, setNewUsers] = useState<any[]>([]);

  const users = useSelector((state: any) => state.perms.users);
  const filterRole = useSelector((state: any) => state.perms.filterRole);

  const org = useSelector((state: any) => state.auth.org);
  const DrawerState = useSelector((state: any) => state.app.drawer);
  React.useEffect(() => {
    dispatch(getOrgUsers(org));
  }, [org]);

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
  // const filteredUsers = users.filter((item: any) => item.role === filterRole);
  // console.log("filteredUsers",filteredUsers)

  return (
    <>
      <styled.AdminsBody>
        <styled.OperationHeader>
          <styled.searchBar>
            <styled.memberTitle>
              <span>{users.length}</span> Members
            </styled.memberTitle>
            {filterRole === "admin" && (
              <styled.memberDesc>
                Admins can have full access to portfolios & organization
              </styled.memberDesc>
            )}
            {filterRole === "user" && (
              <styled.memberDesc>
                Users can have full access to portfolios only
              </styled.memberDesc>
            )}
            {filterRole === "viewer" && (
              <styled.memberDesc>
                Viewers can have view only access on activity
              </styled.memberDesc>
            )}
          </styled.searchBar>

          {users && users.length > 0 && (
            <styled.inviteButton onClick={OpenDrawer}>
              Invite Members
            </styled.inviteButton>
          )}
        </styled.OperationHeader>

        {/* <styled.inputBox>
              <styled.searchIcon>
                <SearchIcon16 />
              </styled.searchIcon>
              <input type="text" placeholder="Search by operation name " />
            </styled.inputBox> */}

        {users && users.length > 0 ? (
          <>
            <styled.inputBox>
              <styled.searchIcon>
                <SearchIcon16 />
              </styled.searchIcon>
              <input type="text" placeholder="Search by operation name " />
            </styled.inputBox>
            <MainTable />
          </>
        ) : (
          <styled.inviteButton onClick={OpenDrawer}>
            Invite Members
          </styled.inviteButton>
        )}
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
              <styled.InviteHeader>
                <h2>Invite Members</h2>
              </styled.InviteHeader>

              <styled.InputName>
                <div>
                  <h4>Name</h4>
                  <input
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    onKeyPress={handleKeypress}
                  ></input>
                </div>
                <select
                  placeholder="Pick Role"
                  defaultValue={"Pick Role"}
                  onChange={(e) => {
                    setAdminStatus(e.target.value);
                  }}
                  value={adminStatus}
                >
                  <option value="admin">Add as Admin</option>
                  <option value="user">Add as User</option>
                  <option value="viewer">Add as Viewer</option>
                </select>
              </styled.InputName>

              <styled.InputEmail>
                <div>
                  <h4>Email</h4>
                  <input
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    onKeyPress={handleKeypress}
                  ></input>
                </div>

                {/* <styled.AddToListButton> */}
                <button type="submit" autoFocus onClick={addButton}>
                  Add To List
                </button>
                {/* </styled.AddToListButton> */}
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
                <button onClick={() => OpenDrawer()}>Cancel</button>
                <button onClick={() => handleDone()}>Add Member</button>
              </styled.TableFooter>
            </styled.DrawerBody>
          </form>
        </Drawer>
      </styled.AdminsBody>
    </>
  );
}
