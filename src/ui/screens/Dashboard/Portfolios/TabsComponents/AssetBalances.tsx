import React, { useState } from "react";
import * as styled from "./AssetBalances.styled";
import {
  ArrowLeftIcon16,
  ArrowLeftIcon17,
  BookmarkIcon16,
  PlusIcon20,
  PlusIcon21,
  SearchIcon16,
} from "../../../../../assets/icons";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleDrawer,
  toggleDrawerSecond,
  toggleQR,
} from "../../../../redux/actions/appActions";
import QR from "../../../../../assets/images/QR.svg";
import { ViewQR } from "../components/ViewQR";
import { AddAsset } from "../components/AddAsset";
import { getAssets } from "../../../../redux/actions/assetActions";

export const AssetBalances: React.VFC = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const DrawerStateSec = useSelector((state: any) => state.app.drawersecond);
  const DrawerState = useSelector((state: any) => state.app.drawer);
  const Assets = useSelector((state: any) => state.operations.assets);
  const selectedPort = useSelector(
    (state: any) => state.operations.selectedPort
  );
  const QRState = useSelector((state: any) => state.app.QR);

  React.useEffect(() => {
    if (selectedPort !== "") {
      console.log(selectedPort);
      dispatch(getAssets(selectedPort));
    }
  }, [Assets, dispatch, selectedPort]);

  const toggleAddAsset = () => {
    console.log("data21321",1231);
    dispatch(toggleDrawer(!DrawerState));
    dispatch(toggleDrawer(false));
    const data: any = [];
    
    dispatch(toggleDrawerSecond(!DrawerStateSec, data));
    dispatch(toggleQR(false));
  };

  const toggleOperation = () => {
    dispatch(toggleDrawer(!DrawerState));
    dispatch(toggleDrawer(false));
    dispatch(toggleDrawerSecond(!DrawerStateSec));
  };

  const toggleViewQR = (id: any) => {
    const res = Assets.filter((data: any) => data.requestId == id);
    dispatch(toggleQR(true));
    dispatch(toggleDrawerSecond(!DrawerStateSec, res[0]));
  };

  return (
    <>
      <styled.TotalAssets>
        {/* <styled.AssetsHeader>
          <div>
            <h5>Assets</h5>
            <button onClick={toggleAddAsset}>
              <PlusIcon21 color="" />
            </button>
          </div>
          <span>Balances</span>
        </styled.AssetsHeader> */}
        {/* <Drawer
          open={DrawerStateSec}
          onClose={toggleAddAsset}
          direction="right"
          style={{
            maxWidth: "900px",
            width: "100%",
          }}
        >
          <styled.DrawerBody>
            <styled.MainTitle>
              {QRState ? (
                <h2> View QR </h2>
              ) : (
                <>
                  <span onClick={toggleOperation}>
                    <ArrowLeftIcon17 />
                  </span>
                  <h2>Add Asset</h2>
                </>
              )}
            </styled.MainTitle>
            <>{QRState ? <ViewQR /> : <AddAsset />}</>
          </styled.DrawerBody>
        </Drawer> */}

        <styled.AssetsBody>
          <styled.LgTable>
            <table>
              {Assets && Assets.length !== 0 && (
                <thead>
                  <tr>
                    <th colSpan={9} className="headColums-1">
                      <div className="serachBar">
                        <SearchIcon16 />
                        <input type="text" placeholder="Search asset" />
                      </div>
                    </th>
                    <th className="headColums-2">24h % Change</th>
                    <th className="headColums-2">USD Value</th>
                    <th className="headColums-2">Balance</th>
                    <th className="headColums-2">QR Code</th>
                  </tr>
                </thead>
              )}

              <tbody>
                {Assets &&
                  Assets.length > 0 &&
                  Assets.map((data: any, i: any) => {
                    return (
                      <tr key={i}>
                        <td colSpan={9} className="bodyColums-1">
                          <div className="coins">
                            {/* <img src={data.img} alt="" /> */}
                            <div
                              style={{ cursor: "pointer" }}
                              onClick={() => toggleViewQR(data.requestId)}
                            >
                              <h5>{data.asset_type}</h5>
                              {/* <span>{data.OrganisationName}</span> */}
                            </div>
                          </div>
                        </td>
                        <td className="bodyColums-2">
                          <span className="green">{data.daily_change}</span>
                        </td>
                        <td className="bodyColums-2">
                          <span>{data.usd_value}</span>
                        </td>
                        <td className="bodyColums-2">
                          <span>{data.value}</span>
                        </td>
                        <td className="bodyColums-2">
                          <button onClick={() => toggleViewQR(data.requestId)}>
                            <img src={QR} alt="" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </styled.LgTable>

          <styled.SmTable>
            <div className="serachBar">
              <SearchIcon16 />
              <input type="text" placeholder="Search asset" />
            </div>

            <div className="coinColums">
              {Assets.map((data: any, i: any) => {
                return (
                  <div key={i}>
                    <div className="MainColums">
                      <div className="coins">
                        <img src={data.img} alt="" />
                        <div
                          style={{ cursor: "pointer" }}
                          onClick={() => setOpen(true)}
                        >
                          <h5>{data.name}</h5>
                          <span>{data.desc}</span>
                        </div>
                      </div>
                      <div className="w-33">
                        <span className="green">{data.Change}</span>
                      </div>
                      <div className="w-33">
                        <span>{data.USDValue}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </styled.SmTable>
          {/* <div className="viewMore">
            <button>View more</button>
          </div> */}
        </styled.AssetsBody>
      </styled.TotalAssets>{" "}
    </>
  );
};
