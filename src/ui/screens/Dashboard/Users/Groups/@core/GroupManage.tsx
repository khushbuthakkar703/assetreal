import React, { useState } from "react";
import * as styled from "./GroupManage.styled";
import ManageTabs from "../ManageTabs/GroupTable";
import { ArrowLeftIcon17, SearchIcon16 } from "../../../../../../assets/icons";
import Drawer from "react-modern-drawer";
import { useDispatch, useSelector } from "react-redux";
import { toggleDrawer } from "../../../../../redux/actions/appActions";
import CreateGroup from "../Components/CreateGroup/CreateGroup";
import CreatedGroup from "../Components/CreatedGroup/CreatedGroup";
import EmptyOP from "../../../../../../assets/images/EmptyOp.png";
import { getOrgGroups } from "../../../../../redux/actions/groupActions";
// import 'react-modern-drawer/dist/index.css'

export const GroupManage: React.VFC = () => {
  const [Filter, setFilter] = useState("Group 1");
  const [drawer, setdrawer] = useState("");
  const [Tabs, setTabs] = useState("");
  console.log("Tabs2",Tabs)

  const dispatch = useDispatch();
  const DrawerState = useSelector((state: any) => state.app.drawer);
  const Groupsdata = useSelector((state: any) => state.groups.group_data);
  const auth = useSelector((state: any) => state.auth);

  console.log("Groupsdata", Groupsdata);

  React.useEffect(() => {
    dispatch(getOrgGroups(auth.org));
  }, [auth.org, dispatch]);

  const toggleOperation = () => {
    setdrawer("Create Group");
    dispatch(toggleDrawer(!DrawerState));
  };
  const toggleOperation2 = () => {
    setdrawer("Add in group");
    dispatch(toggleDrawer(!DrawerState));
  };

  return (
    <styled.MainBody>
      <styled.MainContainer>
        <styled.MainHeader>
          <div>
            <styled.PageTitle>Group Management</styled.PageTitle>
            <styled.TitileDesc>Manage users</styled.TitileDesc>
          </div>
          <styled.CreateGroup>
            <button onClick={toggleOperation}>Create Group</button>
          </styled.CreateGroup>
        </styled.MainHeader>

           {Groupsdata.length !== 0 ? (
        <><styled.TabHeader>
            <div className="KlondikeTabs">
              <div className="TabHeader">
                <ul>
                  {Groupsdata.map((data: any) => {
                    return (
                      <>
                        <li>
                          <button
                            // className={}
                            onClick={() => { setTabs(data.name); } }
                            style={{ color: Tabs === data.name ? "#3E7EFF" : "" }}
                          >
                            {data.name}
                          </button>
                        </li>
                      </>
                    );
                  })}
                </ul>
              </div>
            </div>


            {/* <button
      className={Filter === "Group 1" ? "activTabs" : ""}
      onClick={() => setFilter("Group 1")}
    >
      Group 1
    </button>
    <button
      className={Filter === "Group 2" ? "activTabs" : ""}
      onClick={() => setFilter("Group 2")}
    >
      Group 2
    </button>
    <button
      className={Filter === "Group 3" ? "activTabs" : ""}
      onClick={() => setFilter("Group 3")}
    >
      Group 3
    </button>  */}
          </styled.TabHeader><styled.TabsHeaders>
              <styled.OperationHeader>
                <styled.searchBar>
                  <styled.memberTitle>
                    <span>4</span> Members in {Tabs}
                  </styled.memberTitle>
                  <styled.memberDesc>
                    Groups can have full access to the operation
                  </styled.memberDesc>
                </styled.searchBar>
                <styled.DeleteButton>Delete Group</styled.DeleteButton>
                <styled.CreateButton onClick={toggleOperation2}>
                  Add In Group
                </styled.CreateButton>
              </styled.OperationHeader>
            </styled.TabsHeaders><styled.inputBox>
              <styled.searchIcon>
                <SearchIcon16 />
              </styled.searchIcon>
              <input
                type="text"
                placeholder="Search for memebers by name or email " />
            </styled.inputBox><ManageTabs /></>
        ):(
          <styled.EmptyOpContainer>
            <img src={EmptyOP} alt="" />
          </styled.EmptyOpContainer>
        )}
      </styled.MainContainer>
      <Drawer
        open={DrawerState}
        onClose={toggleOperation}
        direction="right"
        style={{
          maxWidth: "900px",
          width: "100%",
        }}
      >
        {drawer === "Create Group" || drawer === "" ? (
          <>
            <styled.DrawerBody>
              <styled.MainTitle>
                <span onClick={toggleOperation}>
                  <ArrowLeftIcon17 />
                </span>
                <h2>Create Group</h2>
              </styled.MainTitle>
              <CreatedGroup />
            </styled.DrawerBody>
          </>
        ) : (
          <CreateGroup />
        )}
      </Drawer>
    </styled.MainBody>
  );
};
