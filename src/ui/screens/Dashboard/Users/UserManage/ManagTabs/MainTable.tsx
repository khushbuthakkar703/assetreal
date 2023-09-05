import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MenuIcon } from "../../../../../../assets/icons";
import Modal from "../../components/Modal/Modal";
import * as styled from "./MainTable.styled";
import moment from "moment";
import { modifyUser } from "../../../../../redux/actions/usersActions";
import { HeaderUser } from "../../../../../../assets/images";

export default function MainTable() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [Operation, setOperation] = useState(false);
  const [id, setid] = useState("");
  const [assignId, setassignId] = useState("");

  const [value, setValue] = useState("");

  const users: any = useSelector((state: any) => state.perms.users);

  const filterRole = useSelector((state: any) => state.perms.filterRole);

  const org = useSelector((state: any) => state.auth.org);

  const handleActivity = (idd: string) => {
    if (id == idd) {
      setOperation(!Operation);
    } else {
      setOperation(true);
      setid(idd);
    }
    setid(idd);
  };

  const [user_data, setuser_data] = useState({});

  const handleupdate = (idd?: string, name?: any, email?: any) => {
    // console.log("calleddd")
    // user_data = {
    //   name: name,
    //   email: email,
    //   phone: "",
    //   password: "test",
    //   role: value,
    //   organization: {
    //     id: org,
    //   },
    // };
  };

  const handleUser = () => {
    dispatch(modifyUser(user_data, assignId));
    setOpen(false);
  };

  const handleModal = (name: any, data?: any) => {
    setOpen(true);
    setValue(name);
    setassignId(data.id);

    setuser_data({
      name: data.name,
      email: data.email,
      phone: "",
      password: "test",
      role: name,
      organization: {
        id: org,
      },
    });
  };

  const Adminlist = [
    {
      id: "1",
      name: "Hugo Elliot",
      email: "hugo@assetreality.io",
      status: "Admin",
      assigned: "Nov 12 2022",
      activity: "Dec 12 2022",
    },
    {
      id: "2",
      name: "Hugo Elliot",
      email: "hugo@assetreality.io",
      status: "Admin",
      assigned: "Nov 12 2022",
      activity: "Dec 12 2022",
    },
    {
      id: "3",
      name: "Hugo Elliot",
      email: "hugo@assetreality.io",
      status: "Admin",
      assigned: "Nov 12 2022",
      activity: "Dec 12 2022",
    },
    {
      id: "4",
      name: "Hugo Elliot",
      email: "hugo@assetreality.io",
      status: "Admin",
      assigned: "Nov 12 2022",
      activity: "Dec 12 2022",
    },
  ];

  return (
    <styled.TablesBody>
      <styled.TabHead>
        <styled.HeadColums1>Name / Email</styled.HeadColums1>
        <styled.HeadColums2>Correct Data</styled.HeadColums2>
        <styled.HeadColums2>Date assigned</styled.HeadColums2>
        <styled.HeadColums2>Status</styled.HeadColums2>
        <styled.HeadColums3></styled.HeadColums3>
      </styled.TabHead>
      {users.map((data: any, i: any) => {
        return (
          <>
            <styled.TabBody key={i}>
              <styled.BodyColums1>
                <div>
                  <h5>{data.name}</h5>
                  <span>{data.email}</span>
                </div>
              </styled.BodyColums1>
              <styled.BodyColums2>
                <span className="blue">{data.role}</span>
              </styled.BodyColums2>
              <styled.BodyColums2>
                <span>{moment(new Date(data.created_at)).fromNow()}</span>
              </styled.BodyColums2>
              <styled.BodyColums2>
                <span className="blue">{data.status}</span>
              </styled.BodyColums2>
              <styled.BodyColums3>
                <button
                  onClick={() => {
                    handleActivity(data.id);
                    // handleupdate(data.id, data.name, data.email);
                  }}
                >
                  {/* <button onClick={() => handleActivity(data.id)}> */}
                  <MenuIcon />
                </button>

                {Operation && data.id == id && (
                  <styled.RoleModal>
                    <styled.AccessRole
                      onClick={() => handleModal("Admin", data)}
                    >
                      <h4>Access</h4>
                      <h6>Correct Data</h6>
                    </styled.AccessRole>

                    <styled.AccessRole
                      onClick={() => handleModal("Users", data)}
                    >
                      <span>Assign as User</span>
                      <h5>Manage the Workspace, add or remove custodians</h5>
                    </styled.AccessRole>

                    <styled.AccessRole
                      onClick={() => handleModal("Viewers", data)}
                    >
                      <span>Assign as Viewer</span>
                      <h5>Manage the Workspace, add or remove custodians</h5>
                    </styled.AccessRole>

                    <styled.AccessRole
                      onClick={() => handleModal("Remove", data)}
                    >
                      Remove from Workspace…
                    </styled.AccessRole>
                  </styled.RoleModal>
                )}
              </styled.BodyColums3>
            </styled.TabBody>

            <styled.SmtableBody key={i}>
              <styled.DateHeader>
                <styled.DataHeadTitle>
                  Date assigned <span>{data.assigned}</span>
                </styled.DataHeadTitle>
                <styled.DataHeadTitle>
                  Latest activity <span>{data.activity}</span>
                </styled.DataHeadTitle>
              </styled.DateHeader>

              <styled.DataBody>
                <styled.CoinsDiv>
                  <img src="/images/user5.png" alt="" />
                  <div>
                    <h5>{data.name}</h5>
                    <span>{data.email}</span>
                  </div>
                </styled.CoinsDiv>

                <styled.CoinsMenu>
                  <button
                    className="blue"
                    onClick={() => {
                      handleActivity(data.id);
                      handleupdate(data.id, data.name, data.email);
                    }}
                  >
                    {data.role}
                  </button>

                  {Operation && data.id == id && (
                    <styled.FullModal onClick={() => setOperation(false)}>
                      <styled.RoleModal2>
                        <styled.AccessRole onClick={() => handleModal("Admin")}>
                          <h4>Access</h4>
                          <h6>Role</h6>
                        </styled.AccessRole>

                        <styled.AccessRole onClick={() => handleModal("Users")}>
                          <span>Assign as Usersss</span>
                          <h5>
                            Manage the Workspace, add or remove custodians
                          </h5>
                        </styled.AccessRole>

                        <styled.AccessRole
                          onClick={() => handleModal("Viewers")}
                        >
                          <span>Assign as Viewer</span>
                          <h5>
                            Manage the Workspace, add or remove custodians
                          </h5>
                        </styled.AccessRole>

                        <styled.AccessRole
                          onClick={() => handleModal("Remove")}
                        >
                          Remove from Workspace…
                        </styled.AccessRole>
                      </styled.RoleModal2>
                    </styled.FullModal>
                  )}
                </styled.CoinsMenu>
              </styled.DataBody>
            </styled.SmtableBody>
          </>
        );
      })}

      <Modal position={"center"} visible={open} title={""}>
        <styled.modalBody>
          {value === "Admin" && (
            <>
              <h2>Assign as Admin?</h2>
              <span>
                If you assign Hugo Elliot as an Admin they will be able to add
                and remove Members — and manage the protfolios.
              </span>
            </>
          )}
          {value === "Users" && (
            <>
              <h2>Assign as User?</h2>
              <span>
                If you assign Hugo Elliot as an User they will be able to add
                and remove Members — and manage the protfolios.
              </span>
            </>
          )}
          {value === "Viewers" && (
            <>
              <h2>Assign as Viewer?</h2>
              <span>
                If you assign Hugo Elliot as an Admin they will be able to add
                and remove Members — and manage the protfolios.
              </span>
            </>
          )}
          {value === "Remove" && (
            <>
              <h2>Remove this Memeber?</h2>
              <span>
                After you remove Hugo Elliot they won't be able to view or
                comment on documents in this Workspace anymore.
              </span>
              <span>
                Hugo Elliot may still have private Drafts in this Workspace.
                Make sure they back up their work before you remove them.
              </span>
              {users.map((data: any, i: any) => {
                return (
                  <>
                    <div className="userProfile" key={i}>
                      <img src={HeaderUser} alt="" />
                      <div>
                        <h6>{data.name} </h6>
                        <p>{data.email}</p>
                      </div>
                    </div>
                  </>
                );
              })}
            </>
          )}
        </styled.modalBody>

        <styled.formFooter>
          <button onClick={() => setOpen(false)}>Cancel</button>
          {value === "Remove" ? (
            <button style={{ background: "#E21B1B" }}>Remove Member</button>
          ) : value === "Users" ? (
            <button onClick={() => handleUser()}>Assign as Users</button>
          ) : value === "Viewers" ? (
            <button onClick={() => handleUser()}>Assign as Viewers</button>
          ) : null}
        </styled.formFooter>
      </Modal>
    </styled.TablesBody>
  );
}
