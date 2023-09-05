import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as styled from "./ClientDetail.styled";
import SmOperation from "../../Operations/SmOperation/SmOperation";
import { CopyIcon, SearchIcon18 } from "../../../../../assets/icons";
import { getOperationsByOrg } from "../../../../redux/actions/operationActions";
import { clearLoadedPortfolios } from "../../../../redux/actions/portfolioActions";
import EmptyOP from "../../../../../assets/images/EmptyOp.png";
import ClientInformation from "../components/ClientInformation/ClientInformation";
import ClientTable from "../components/ClientTable/ClientTable";
import OperationDetail from "../components/OperationDetails/OperationDetail";
import ClientApprovals from "../components/ClientApprovals/ClientApprovals";

export const ClientDetail: React.VFC = () => {
  const dispatch = useDispatch();

  const operations = useSelector((state: any) => state.operations.operations);
  const sidebardata = useSelector((state: any) => state.activity.client_data);
  const SelectedOrg = useSelector((state: any) => state.orgs.selectedOrg);
  console.log("SelectedOrg", SelectedOrg);

  const [inspect, setinspect] = useState(false);
  const handeleinsepct = () => {
    setinspect(!inspect);
  };

  React.useEffect(() => {
    dispatch(getOperationsByOrg(SelectedOrg));
    dispatch(clearLoadedPortfolios());
  }, [dispatch, SelectedOrg]);

  return (
    <styled.MainBody>
      {/* <styled.ClientBody>
        <styled.clientDetails>
          <styled.clientBox>
            <div>
              <h3>Client 1</h3>
              <h5>
                +44959259925
                <button>
                  <CopyIcon />
                </button>
              </h5>
              <h5>
                federal@polite.io
                <button>
                  <CopyIcon />
                </button>
              </h5>
            </div>
          </styled.clientBox>

          <ul>
            <li>
              <button
                className={Tabs === "1" ? "activTabs" : ""}
                onClick={() => {
                  setTabs("1");
                  setinspect(false);
                }}
              >
                <span>Operations </span>
                <p>Explore assets and portfolios.</p>
              </button>
            </li>

            <li>
              <button
                className={Tabs === "2" ? "activTabs" : ""}
                onClick={() => setTabs("2")}
              >
                <span>Information </span>
                <p>Explore your clients details</p>
              </button>
            </li>

            <li>
              <button
                className={Tabs === "3" ? "activTabs" : ""}
                onClick={() => setTabs("3")}
              >
                <span>Approvals</span>
                <p>Approve / Decline requests </p>
              </button>
            </li>
          </ul>
        </styled.clientDetails>
      </styled.ClientBody> */}
      <styled.MainContainer>
        {sidebardata === "1" && (
          <>
            <div className="OperationHeader">
              <div className="searchBar">
                <h4>Operation</h4>
                {operations.length !== 0 && (
                  <div className="searchSelect">
                    <div className="inputBox">
                      <span>
                        <SearchIcon18 />
                      </span>
                      <input
                        type="text"
                        placeholder="Search by operation name "
                      />
                    </div>

                    <div className="selectBox">
                      <select>
                        <option value="">Sort by</option>
                        <option value="0">A to Z</option>
                        <option value="1">Z to A</option>
                      </select>
                    </div>
                  </div>
                )}
              </div>
            </div>
            {operations.length !== 0 ? (
              // <OperationTab />
              <>
                <styled.LgContaint>
                  {inspect ? (
                    <OperationDetail />
                  ) : (
                    <ClientTable handeleinsepct={handeleinsepct} />
                  )}
                </styled.LgContaint>
                <styled.SmContaint>
                  {inspect ? (
                    <OperationDetail />
                  ) : (
                    <SmOperation handeleinsepct={handeleinsepct} />
                  )}
                </styled.SmContaint>
              </>
            ) : (
              <styled.EmptyOpContainer>
                <img src={EmptyOP} alt="" />
              </styled.EmptyOpContainer>
            )}
          </>
        )}
        {sidebardata === "2" && (
          <>
            <ClientInformation />
          </>
        )}
        {sidebardata === "3" && (
          <>
            <h1>
              <ClientApprovals />
            </h1>
          </>
        )}
      </styled.MainContainer>
    </styled.MainBody>
  );
};
