import React, { useEffect, useRef, useState } from "react";
import {
  ArrowLeftIcon16,
  ArrowLeftIcon17,
  MenuIcon,
  PlusIcon21,
} from "../../../../../assets/icons";
import * as styled from "./Portfolios.styled";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleDrawer,
  toggleDrawerSecond,
  toggleQR,
} from "../../../../redux/actions/appActions";
import Drawer from "react-modern-drawer";
import { AddAsset } from "../components/AddAsset";
import { ViewQR } from "../components/ViewQR";
import { AppRoutes, DashboardRoutes } from "../../../../app/routes";
import { useHistory } from "react-router-dom";
import { getPortfoliosByOperation } from "../../../../redux/actions/portfolioActions";
import { AssetBalances } from "../TabsComponents/AssetBalances";
import { AddPortfolio } from "../components/AddPortfolio";
import GraphSection from "../TabsComponents/GraphSection";
import ManageAccess from "../../Portfolios/components/ManageAccess/ManageAccess";
import Modal from "../../Layout/components/Modal/Modal";
import { getCustodians } from "../../../../redux/actions/custodianActions";

export const Portfolio: React.VFC = () => {
  const [addPortfolio, setaddPortfolio] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const ref: any = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [Tabs, setTabs] = useState(0);

  const op = useSelector((state: any) => state.operations.selectedOp);
  const auth = useSelector((state: any) => state.auth);

  const portfolios = useSelector((state: any) => state.operations.portfolios);
  const price = useSelector((state: any) => state.pricing);
  const loading = useSelector((state: any) => state.operations.loading);
  const DrawerState = useSelector((state: any) => state.app.drawer);
  const DrawerStateSec = useSelector((state: any) => state.app.drawersecond);
  const QRState = useSelector((state: any) => state.app.QR);
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [drwawer_open, setdrwawer_open] = useState("");
  const onClick = () => {
    setIsActive(!isActive);
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleOperation = () => {
    dispatch(toggleDrawer(!DrawerState));
    dispatch(toggleDrawerSecond(!DrawerStateSec));
  };

  const dropModel = () => {
    setdrwawer_open("Add New Portfolio");
    dispatch(toggleDrawerSecond(!DrawerStateSec));
    dispatch(toggleDrawer(!DrawerState));
    setIsActive(!isActive);
  };
  const dropModelsec = () => {
    setdrwawer_open("Manage access");
    dispatch(toggleDrawerSecond(!DrawerStateSec));
    dispatch(toggleDrawer(!DrawerState));
    setIsActive(!isActive);
  };
  const dropModelthird = () => {
    setdrwawer_open("Add Assest");
    dispatch(toggleDrawerSecond(!DrawerStateSec));
    dispatch(toggleDrawer(!DrawerState));
    setIsActive(!isActive);
  };

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
        setIsMenuOpen(false);
        setIsActive(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isMenuOpen]);

  React.useEffect(() => {
    dispatch(getPortfoliosByOperation(op.operation_id));
    dispatch(getCustodians(auth.org));

    dispatch(toggleDrawerSecond(false));
  }, [dispatch, op.operation_id]);

  React.useEffect(() => {
    if (!loading && portfolios.length === 0) {
      dispatch(toggleDrawer(true));
    } else {
      dispatch(toggleDrawer(false));
    }
  }, [dispatch, loading, portfolios]);

  const togglePortfolio = () => {
    if (portfolios.length === 0) {
      dispatch(toggleDrawer(false));
      history.push(AppRoutes.Dashboard.Index);
    } else {
      dispatch(toggleDrawer(!DrawerState));
      dispatch(toggleDrawerSecond(!DrawerStateSec));
    }
  };
  if (loading) {
    return <div></div>;
  } else {
    return (
      <styled.MainBody>
        <styled.MainContainer>
          <div className="headerTab">
            <h4>
              Case \ <span>{op.operation_name}</span>
              <span>
                <div className="menu-container" ref={ref}>
                  <button onClick={onClick} className="menu-trigger">
                    <MenuIcon />
                  </button>
                  <nav
                    ref={dropdownRef}
                    className={`menu ${isActive ? "active" : "inactive"}`}
                  >
                    {isMenuOpen && (
                      <ul>
                        <li>
                          <button className="btncolor" onClick={dropModel}>
                            Add New Portfolio
                          </button>
                        </li>
                        <li>
                          <button className="btncolor" onClick={dropModelsec}>
                            Manage access
                          </button>
                        </li>
                      </ul>
                    )}
                  </nav>
                </div>
              </span>
            </h4>
          </div>

          {portfolios.length !== 0 && (
            <div className="KlondikeTabs">
              <div className="TabHeader">
                <ul>
                  {/* <li>
                    <button
                      onClick={() => setTabs(5)}
                      style={{ color: Tabs === 5 ? "#3E7EFF" : "" }}
                    >
                      demo
                    </button>
                  </li> */}
                  {portfolios.map((data: any, i: any) => {
                    return (
                      <>
                        <li>
                          <button
                            onClick={() => setTabs(i)}
                            style={{ color: Tabs === i ? "#3E7EFF" : "" }}
                          >
                            {data.name}
                          </button>
                        </li>
                      </>
                    );
                  })}
                </ul>

                <select>
                  {portfolios.map((data: any, i: any) => {
                    return (
                      <>
                        <option
                          value={i}
                          onChange={() => setTabs(i.toString())}
                        >
                          {data.name}
                        </option>
                      </>
                    );
                  })}
                </select>
              </div>
              {portfolios.length !== 0 && (
                <div className="TabBody">
                  {<GraphSection />}
                  <AssetBalances />
                </div>
              )}
            </div>
          )}
        </styled.MainContainer>
        <styled.AssetsHeader>
          <div>
            <h5>Assets</h5>
            <button onClick={dropModelthird}>
              <PlusIcon21 color="" />
            </button>
          </div>
          <span>Balances</span>
        </styled.AssetsHeader>
        <Drawer
          open={DrawerState}
          onClose={togglePortfolio}
          direction="right"
          // size={350}
          style={{
            maxWidth: "900px",
            width: "100%",
          }}
        >
          {drwawer_open === "Add New Portfolio" || drwawer_open === "" ? (
            <>
              <styled.MainTitle>
                <span onClick={toggleOperation}>
                  <ArrowLeftIcon17 />
                </span>
                <h2>Add Portfolio</h2>
              </styled.MainTitle>
              <AddPortfolio />
            </>
          ) : drwawer_open === "Manage access" ? (
            <ManageAccess />
          ) : (
            <>
              <styled.MainTitle>
                <span onClick={toggleOperation}>
                  <ArrowLeftIcon17 />
                </span>
                <h2>Add Asset</h2>
              </styled.MainTitle>
              <AddAsset />
            </>
          )}
        </Drawer>
      </styled.MainBody>
    );
  }
};
