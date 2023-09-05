import React, { useState } from "react";
import { Link, Redirect, useHistory, useLocation } from "react-router-dom";
import * as styled from "./sidebar.styled";
import { Overviewgraph } from "./Overviewgraph";
import { useDispatch, useSelector } from "react-redux";

import {
  ActiveOperationsIcon,
  AssetsIcon,
  EmailIcon21,
  EmailIcon23,
  InvoicesIcon,
  MenuIcon,
  NoteIcon17,
  PortfoliosIcon,
  TerminatedOperationsIcon,
  UserIcon21,
  UserManageIcon,
  UsersManageIcon,
} from "../../../../../../assets/icons";
import { clientdata } from "../../../../../redux/actions/activityAction";

type Props = {};

export const Sidebar: React.VFC<Props> = () => {
  const dispatch = useDispatch();
  const [Tabs, setTabs] = useState("1");
  dispatch(clientdata(Tabs));

  const operations = useSelector((state: any) => state.operations.operations);
  const orgs = useSelector((state: any) => state.orgs.orgs);
  const history = useHistory();
  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      {path === "/users" ||
      path === "/email" ||
      path === "/invoices" ||
      path === "/groups" ||
      path === "/Custodians" ? (
        <styled.HideSmSidebar>
          <styled.SideBarSetting>
            <styled.TopOperationBox>
              <styled.TopOperations>
                <ul className="userManage">
                  <li
                    className={Tabs === "1" ? "activTabs" : ""}
                    onClick={() => setTabs("1")}
                  >
                    <Link to="users">
                      <UserManageIcon />
                      <styled.SideBarIcon>
                        <span>User Management</span>
                        <p>Manage your users</p>
                      </styled.SideBarIcon>
                    </Link>
                  </li>
                  <li
                    className={Tabs === "2" ? "activTabs" : ""}
                    onClick={() => setTabs("2")}
                  >
                    <Link to="email">
                      <EmailIcon23 />
                      <styled.SideBarIcon>
                        <span>Email Settings</span>
                        <p>Manage email settings</p>
                      </styled.SideBarIcon>
                    </Link>
                  </li>
                  <li
                    className={Tabs === "3" ? "activTabs" : ""}
                    onClick={() => setTabs("3")}
                  >
                    <Link to="invoices">
                      <InvoicesIcon />
                      <styled.SideBarIcon>
                        <span>Invoices</span>
                        <p>Manage your invoices </p>
                      </styled.SideBarIcon>
                    </Link>
                  </li>
                  <li
                    className={Tabs === "4" ? "activTabs" : ""}
                    onClick={() => setTabs("4")}
                  >
                    <Link to="groups">
                      <UsersManageIcon />
                      <styled.SideBarIcon>
                        <span>Groups</span>
                        <p>Manage your groups </p>
                      </styled.SideBarIcon>
                    </Link>
                  </li>
                  <li
                    className={Tabs === "5" ? "activTabs" : ""}
                    onClick={() => setTabs("5")}
                  >
                    <Link to="Custodians">
                      <UsersManageIcon />
                      <styled.SideBarIcon>
                        <span>Custodians</span>
                        <p>Manage your Custodian </p>
                      </styled.SideBarIcon>
                    </Link>
                  </li>
                </ul>
              </styled.TopOperations>
            </styled.TopOperationBox>
          </styled.SideBarSetting>
        </styled.HideSmSidebar>
      ) : path.includes("/client") ? (
        <styled.clientSidebar>
          <ul>
            {orgs !== [] &&
              orgs.map((data: any, i: any) => {
                return (
                  <li>
                    <Link
                      // to="/operationdetail"
                      to={`/client/${data.name}`}
                      // className={
                      //   path === `/client/${data.name}` ? "activeLink" : ""
                      // }
                    >
                      {!data.name.match(" ")
                        ? data.name.slice(0, 2)
                        : data.name
                            .split(" ")
                            .reduce(
                              (response: any, word: any) =>
                                (response += word.slice(0, 1)),
                              ""
                            )}
                    </Link>
                    <span>{data.name}</span>
                  </li>
                );
              })}
          </ul>
          <styled.ClientBody>
            <styled.clientDetails>
              <styled.clientBox>
                <div>
                  <h3>Client 1</h3>
                  <h5>+44959259925</h5>
                </div>
              </styled.clientBox>

              <ul className="innerTabs">
                <li>
                  <button
                    className={Tabs === "1" ? "activTabs" : ""}
                    onClick={() => setTabs("1")}
                  >
                    <span>Operations </span>
                    <p>Explore assets and portfolios.</p>
                  </button>
                </li>

                <li>
                  <Link to="/client/clientinformation">
                    <button
                      className={Tabs === "2" ? "activTabs" : ""}
                      onClick={() => setTabs("2")}
                    >
                      <span>Information </span>
                      <p>Explore your clients details</p>
                    </button>
                  </Link>
                </li>

                <li>
                  <Link to="/client/clientapprovals">
                    <button
                      className={Tabs === "3" ? "activTabs" : ""}
                      onClick={() => setTabs("3")}
                    >
                      <span>Approvals </span>
                      <p>Approve / Decline requests </p>
                    </button>
                  </Link>
                </li>
              </ul>
            </styled.clientDetails>
          </styled.ClientBody>
        </styled.clientSidebar>
      ) : (
        <>
          {path === "/dashboard" ? (
            <styled.SideBar>
              <styled.LgSidebar>
                <>
                  <styled.totalValue>
                    <styled.AllTitles>Total Value</styled.AllTitles>
                    <h3>£0</h3>
                  </styled.totalValue>

                  {operations && (
                    <styled.portfolios>
                      <styled.portValue>
                        <styled.valuess>
                          <styled.AllTitles>Portfolios</styled.AllTitles>
                          <h4>0</h4>
                        </styled.valuess>

                        <styled.valuess>
                          <styled.AllTitles>Assets</styled.AllTitles>
                          <h4>0</h4>
                        </styled.valuess>
                      </styled.portValue>
                      <styled.values>
                        <styled.AllTitles>
                          Terminated operations
                        </styled.AllTitles>
                        <h4>0</h4>
                      </styled.values>
                      <styled.values>
                        <styled.AllTitles>Active operations</styled.AllTitles>
                        <h4>{operations.length}</h4>
                      </styled.values>
                    </styled.portfolios>
                  )}

                  {operations && operations.length !== 0 && (
                    <styled.TopOperationBox>
                      <styled.TopOperations>
                        <styled.AllTitles>Top Operations</styled.AllTitles>
                        <ul className="topclass">
                          {operations.slice(0, 5).map((data: any, i: any) => {
                            return (
                              <li>
                                {/* <img src="/images/miniBitcoin.svg" alt="" /> */}
                                <PortfoliosIcon />
                                <span>{data.operation_name} </span>
                              </li>
                            );
                          })}
                        </ul>
                      </styled.TopOperations>
                    </styled.TopOperationBox>
                  )}
                </>
              </styled.LgSidebar>

              <styled.SmSiderbar>
                <div className="graphRight">
                  <div className="rightHeader">
                    <div className="BoxHeader">
                      <h4>Overview</h4>
                      <button>
                        <MenuIcon />
                      </button>
                    </div>
                  </div>

                  <div className="rightBody">
                    <div className="graphList graphDiv graphBottom">
                      <Overviewgraph />
                    </div>
                    <div className="graphList">
                      <span>
                        <ActiveOperationsIcon />
                        Active operations
                      </span>
                      <h5>15</h5>
                    </div>
                    <div className="graphList">
                      <span>
                        <TerminatedOperationsIcon />
                        Terminated operations
                      </span>
                      <h5 className="Green">02</h5>
                    </div>
                    <div className="graphList">
                      <span>
                        <PortfoliosIcon />
                        Portfolios
                      </span>
                      <h5>45</h5>
                    </div>
                    <div className="graphList">
                      <span>
                        <AssetsIcon />
                        Assets
                      </span>
                      <h5>32</h5>
                    </div>
                  </div>
                </div>
              </styled.SmSiderbar>
            </styled.SideBar>
          ) : null}
        </>
      )}
    </>
  );
};
