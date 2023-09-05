import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DownArrowIconBorder } from "../../../../../assets/icons";
import { MainButton } from "../../../../@core/modules/Button";
import { toggleDrawer, toggleDrawerSecond, toggleQR } from "../../../../redux/actions/appActions";
import * as styled from "./index.styled";
import { QRCodeImg } from '@cheprasov/react-qrcode';

export const ViewQR: React.VFC = () => {
  const dispatch = useDispatch();
  const DrawerState = useSelector((state: any) => state.app.drawer);
  const Assets = useSelector((state: any) => state.operations.assets);
  const qrdata = useSelector((state: any) => state.app.data);
  
  React.useEffect(() => {}, [Assets, dispatch]);

  const toggleAddAsset = () => {
    dispatch(toggleDrawerSecond(false));
    dispatch(toggleDrawer(false));
    dispatch(toggleQR(false));
  };

  return (
    <styled.MainBody>
      <div className="MainBody">
        <styled.MainBox>
          <styled.MainTitle>
            <img src="../images/bitcoin.png" alt="" />

            <div>
              <h4>{qrdata.asset_type}</h4>
              <h4>Bitcoin</h4>
            </div>
          </styled.MainTitle>
          <styled.Amount>
            <h4>Current Balance</h4>
            <h5>{qrdata.value}</h5>
          </styled.Amount>
          <styled.QRScan>
            <h4>QR code </h4>
            <h5>Please scan this QR code</h5>
            <div>
              {/* <img src="/images/sampleQRCodHe.svg" alt="" /> */}
            <QRCodeImg
            value="foo"
            bgColor="#000000"
            fgColor="#fff"
            invert={true}
            level="Q"
            padding={2}
            scale={42}
            size={250}
            image={{
                source: '/images/app-logo.png',
                width: '30%',
                height: '30%',
                x: 'center',
                y: 'center',
                
            }}
            />
                <h4>
                {qrdata.wallet_address
                  ? qrdata.wallet_address
                  : "Wait for wallet address"}
              </h4>
            </div>
            <h1>Send only Binance-Peg-BTC (BEP20) to this address.</h1>
            <h1>Sending any other coins may result in permanent loss.</h1>
            <h1>Copy</h1>
          </styled.QRScan>

          <styled.Modalfooter>
            <MainButton
              onClick={toggleAddAsset}
              children={"Done"}
              height={36}
              style={{ fontWeight: 600 }}
            />{" "}
          </styled.Modalfooter>
        </styled.MainBox>
      </div>
    </styled.MainBody>
  );
};
