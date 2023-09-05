import React, { useState } from "react";
import { DownArrowIconBorder } from "../../../../../assets/icons";
import * as styled from "./index";

export default function Whitelist() {
  const [selectedBox, setselectedBox] = useState(false);
  const [selectedBoxx, setselectedBoxx] = useState(false);

  return (
    <styled.MainBody>
      <div className="MainBody">
        <styled.MainBox>
          <styled.LgAssets>
            <span className="boxTitle">Asset #1 </span>
            <h5 className="desctitle">You can edit it anytime </h5>
            <div className="Cryptocurrency">
              <label htmlFor="select">Cryptocurrency</label>
              <div className="coinNames">
                <div>
                  <span>Coin name</span>
                  <div className="allCoins">
                    <img src="/images/miniBitcoin.svg" alt="" />
                    <h4>BTC</h4>
                  </div>
                </div>
                <DownArrowIconBorder />
              </div>
            </div>

            <div className="assetSectionBox">
              <span className="boxTitle">Add asset</span>
              <h5 className="desctitle">Please make your selection</h5>

              <div className="assetBox">
                <div
                  className={selectedBox ? "addedBox" : "boxSection"}
                  onClick={() => setselectedBox(!selectedBox)}
                >
                  <div>
                    <h4>Cryptocurrency</h4>
                    <span>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </span>
                  </div>
                  <img src="/images/bitcoin.png" alt="" />
                </div>

                <div
                  className={selectedBoxx ? "addedBox" : "boxSection"}
                  onClick={() => setselectedBoxx(!selectedBoxx)}
                >
                  <div>
                    <h4>Other</h4>
                    <span>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </span>
                  </div>
                  <img src="/images/bitcoin.png" alt="" />
                </div>
              </div>
            </div>
          </styled.LgAssets>

          <styled.SmAssets>
            <div className="assetSectionBox">
              <span className="boxTitle">Add asset</span>
              <h5 className="desctitle">Please make your selection</h5>

              <div className="assetBox">
                <div
                  className={selectedBox ? "addedBox" : "boxSection"}
                  onClick={() => setselectedBox(!selectedBox)}
                >
                  <div>
                    <h4>Cryptocurrency</h4>
                    <span>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </span>
                  </div>
                  <img src="/images/bitcoin.png" alt="" />
                </div>

                <div
                  className={selectedBoxx ? "addedBox" : "boxSection"}
                  onClick={() => setselectedBoxx(!selectedBoxx)}
                >
                  <div>
                    <h4>Other</h4>
                    <span>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </span>
                  </div>
                  <img src="/images/bitcoin.png" alt="" />
                </div>
              </div>
            </div>
            <div className="Cryptocurrency">
              <label htmlFor="select">Cryptocurrency</label>
              <div className="coinNames">
                <div>
                  <span>Coin name</span>
                  <div className="allCoins">
                    <img src="/images/miniBitcoin.svg" alt="" />
                    <h4>BTC</h4>
                  </div>
                </div>

                <DownArrowIconBorder />
              </div>
            </div>
          </styled.SmAssets>
        </styled.MainBox>
      </div>
    </styled.MainBody>
  );
}
