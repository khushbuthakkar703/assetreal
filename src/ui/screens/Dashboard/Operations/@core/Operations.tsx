import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as styled from "./Operations.styled";
import OperationTab from "../OperationTab";
import AddOperation from "../Components/AddOperation";
import SmOperation from "../SmOperation/SmOperation";
import { ArrowLeftIcon17, SearchIcon18 } from "../../../../../assets/icons";
import { MainButton } from "../../../../@core/modules/Button";
import { useLocale } from "../../../../../assets/locale";
import { ArrowLeftIcon16 } from "../../../../../assets/icons";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { getOperationsByOrg } from "../../../../redux/actions/operationActions";
import { toggleDrawer } from "../../../../redux/actions/appActions";
import { clearLoadedPortfolios } from "../../../../redux/actions/portfolioActions";
import EmptyOP from "../../../../../assets/images/EmptyOp.png";
import user from "../../../../../assets/images/Oval.png";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export const Operations: React.VFC = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state: any) => state.auth);

  const DrawerState = useSelector((state: any) => state.app.drawer);
  const operations = useSelector((state: any) => state.operations.operations);
  console.log("operations", operations);

  const loading = useSelector((state: any) => state.operations.loading);

  React.useEffect(() => {
    dispatch(getOperationsByOrg(auth.org));
    dispatch(clearLoadedPortfolios());
  }, [auth.org, dispatch]);

  const toggleOperation = () => {
    dispatch(toggleDrawer(!DrawerState));
  };

  const { word } = useLocale();

  return (
    <styled.MainBody>
      <styled.MainContainer>
        <styled.LgContaint>
          <div className="OperationHeader">
            <div className="searchBar">
              <h4>Case</h4>
              {operations.length !== 0 && (
                <div className="inputBox">
                  <span>
                    <SearchIcon18 />
                  </span>
                  <input type="text" placeholder="Search by Case name " />
                </div>
              )}
            </div>
            <button onClick={toggleOperation}>Add Case</button>
          </div>

          {loading ? (
            <>
              <styled.EmptyOpContainer>
                <Spin indicator={antIcon} />{" "}
              </styled.EmptyOpContainer>
            </>
          ) : (
            <>
              {" "}
              {operations.length !== 0 ? (
                <OperationTab />
              ) : (
                <styled.EmptyOpContainer>
                  <img src={EmptyOP} alt="" />
                </styled.EmptyOpContainer>
              )}
            </>
          )}
        </styled.LgContaint>

        <Drawer
          open={DrawerState}
          onClose={toggleOperation}
          direction="right"
          style={{
            maxWidth: "900px",
            width: "100%",
          }}
        >
          <styled.DrawerBody>
            <styled.MainTitle>
              <span onClick={toggleOperation}>
                <ArrowLeftIcon17 />
              </span>
              <h2>Add Operation</h2>
              <>
                <img src={user} alt="user" style={{ margin: "0" }} />
              </>
            </styled.MainTitle>
            <AddOperation />
          </styled.DrawerBody>
        </Drawer>

        <styled.SmContaint>
          <SmOperation />
        </styled.SmContaint>
      </styled.MainContainer>
    </styled.MainBody>
  );
};
