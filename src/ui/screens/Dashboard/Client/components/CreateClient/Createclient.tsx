import React, { useState } from "react";
import * as styled from "./Createclient.styled";
import { useDispatch, useSelector } from "react-redux";
import { ArrowLeftIcon17, SearchIcon18 } from "../../../../../../assets/icons";
import { toggleDrawer } from "../../../../../redux/actions/appActions";
import Drawer from "react-modern-drawer";
import { Link } from "react-router-dom";
import {
  createNewClient,
  getAllOrgs,
  selectOrg,
} from "../../../../../redux/actions/usersActions";
import moment from "moment";

export default function Createclient() {
  const [ValueName, SetValueName] = useState<any>("");
  const [ValueEmail, SetValueEmail] = useState<any>("");
  const [ValueNumber, SetValueNumber] = useState<any>("");
  const [ValueSecret, SetValueSecret] = useState<any>("");
  const [ValueOrganization, SetValueOrganization] = useState<any>("");

  const dispatch = useDispatch();

  const DrawerState = useSelector((state: any) => state.app.drawer);
  const orgs = useSelector((state: any) => state.orgs.orgs);
  console.log("orgs", orgs);

  const toggleOperation = () => {
    dispatch(toggleDrawer(!DrawerState));
  };

  React.useEffect(() => {
    dispatch(getAllOrgs());
  }, [dispatch]);

  const handleCreate = () => {
    dispatch(
      createNewClient({
        name: ValueName,
        email: ValueEmail,
        phone: ValueNumber,
        password: "test",
        organization: { name: ValueOrganization },
      })
    );
    dispatch(toggleDrawer(!DrawerState));
  };

  const date = new Date().toLocaleString("en-CA", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  // const selectOrg = (id: any) => {
  //   props.history.push({
  //     pathname: `/client/${data.name}`,
  //     state: { detail: response.data }
  //   })
  // };

  const orglen = Object.keys(orgs).length;
  return (
    <styled.MainBody>
      <styled.MainContainer>
        <styled.HeadTitile>
          <div>
            <h3>Clients</h3>
            <span>{date}</span>
          </div>
          <button onClick={toggleOperation}>Create Client</button>
        </styled.HeadTitile>

        <styled.TotalClient>
          <h3>Total Clients: {orglen} Clients</h3>
        </styled.TotalClient>

        <styled.ClientOperationsHead>
          <styled.searchbar>
            <SearchIcon18 />
            <input type="search" placeholder="Search by operation name " />
          </styled.searchbar>
          {/* <styled.Createbtn> */}
          <button onClick={toggleOperation}>Create Client</button>
          {/* </styled.Createbtn> */}
        </styled.ClientOperationsHead>

        <styled.OperationTable>
          <div className="customTable">
            {orgs.map((data: any, i: any) => {
              return (
                <Link
                  to={`/client/${data.name}`}
                  onClick={() => selectOrg(data.id)}
                >
                  <styled.TableRow key={i}>
                    <styled.TableBox1>
                      <h3>{data.name}</h3>
                      <span>+447857927649239</span>
                      <h5>Org Owner Name</h5>
                    </styled.TableBox1>

                    <styled.TableBox2>
                      <h3>{moment(new Date(data.created_at)).fromNow()}</h3>
                    </styled.TableBox2>
                  </styled.TableRow>
                </Link>
              );
            })}
          </div>
        </styled.OperationTable>

        <Drawer
          open={DrawerState}
          onClose={toggleOperation}
          // direction="bottom"
          direction="right"
          className="drawerr"
          style={{
            overflow: "auto",
            maxWidth: "900px",
            width: "100%",
          }}
        >
          <styled.DrawerBody>
            <styled.MainTitle>
              <span onClick={toggleOperation}>
                <ArrowLeftIcon17 />
              </span>
              <h2>Create Client</h2>
            </styled.MainTitle>
            <styled.SideBody>
              <h3>Client Name</h3>
              <input
                type="text"
                placeholder="Client Contact Person"
                value={ValueName}
                onChange={(e) => {
                  SetValueName(e.target.value);
                }}
              />
            </styled.SideBody>
            <styled.SideBody>
              <h3>Organisation</h3>
              <input
                type="text"
                placeholder="Client Organization Name"
                value={ValueOrganization}
                onChange={(e) => {
                  SetValueOrganization(e.target.value);
                }}
              />
            </styled.SideBody>

            <styled.SideBody>
              <h3>Phone number</h3>
              <input
                type="number"
                placeholder="Client Phone Number"
                value={ValueNumber}
                onChange={(e) => {
                  SetValueNumber(e.target.value);
                }}
              />
            </styled.SideBody>
            <styled.SideBody>
              <h3>Email</h3>
              <input
                type="email"
                placeholder="Enter Client Email"
                value={ValueEmail}
                onChange={(e) => {
                  SetValueEmail(e.target.value);
                }}
              />
            </styled.SideBody>
            <styled.SideBody>
              <h3>Admin Secret</h3>
              <input
                type="text"
                placeholder="Enter Secret"
                value={ValueSecret}
                onChange={(e) => {
                  SetValueSecret(e.target.value);
                }}
              />
            </styled.SideBody>
          </styled.DrawerBody>
          <styled.Modalfooter>
            <button type="submit" onClick={handleCreate}>
              Create
            </button>
          </styled.Modalfooter>
        </Drawer>
      </styled.MainContainer>
    </styled.MainBody>
  );
}
