import { kStringMaxLength } from "buffer";
import React from "react";
import {
  BitcoinImage,
  CardanoImage,
  DigivaultImage,
  EthaImage,
  FidelityImage,
  FireblocksImage,
  Flag3Image,
  FlagImage,
  HelpsettingImage,
  MillonImage,
  RippleImage,
} from "../../../../../assets/images";
import * as styled from "./Custodians.styled";

export const Custodians: React.VFC = () => {
  return (
    <div style={{ width: "100%" }}>
      <styled.container>
        <h2>Choose from our partner custodians </h2>
        <h3>Enable more custodians for your organization </h3>
      </styled.container>

      <styled.offerBox>
        <styled.offers>
          <styled.selectedCard>DEFAULT CUSTODIAN</styled.selectedCard>
          <styled.cardHeader>
            <img src={DigivaultImage} alt="" />
          </styled.cardHeader>
          <styled.cardBody>
            <styled.cardRow>
              <h3>Country: </h3>
              <h2>
                <img src={Flag3Image} alt="" /> United Kingdom{" "}
              </h2>
            </styled.cardRow>
            <styled.cardRow>
              <h3>Country: </h3>
              <h6>
                <img src={BitcoinImage} alt="" /> Bitcoin
              </h6>
              <h6>
                <img src={EthaImage} alt="" /> Ethereum
              </h6>
              <h6>
                <img src={CardanoImage} alt="" /> Cardano
              </h6>
              <h6>
                <img src={RippleImage} alt="" /> Ripple
              </h6>
              <button>and more…</button>
            </styled.cardRow>
            <styled.cardRow>
              <h3>Maximum value: </h3>
              <h6>
                <img src={MillonImage} alt="" /> 15 Millon
              </h6>
            </styled.cardRow>
          </styled.cardBody>

          <styled.cardFooter>
            <button>Contact us</button>
          </styled.cardFooter>
        </styled.offers>

        <styled.offers>
          <styled.cardHeader>
            <img src={FidelityImage} alt="" />
          </styled.cardHeader>
          <styled.cardBody>
            <styled.cardRow>
              <h3>Country: </h3>
              <h2>
                <img src={Flag3Image} alt="" /> United Kingdom
              </h2>
            </styled.cardRow>
            <styled.cardRow>
              <h3>Country: </h3>
              <h6>
                <img src={BitcoinImage} alt="" /> Bitcoin
              </h6>
              <h6>
                <img src={EthaImage} alt="" /> Ethereum
              </h6>
              <h6>
                <img src={CardanoImage} alt="" /> Cardano
              </h6>
              <h6>
                <img src={RippleImage} alt="" /> Ripple
              </h6>
              <button>and more…</button>
            </styled.cardRow>
            <styled.cardRow>
              <h3>Maximum value: </h3>
              <h6>
                <img src={MillonImage} alt="" /> 10 Millon
              </h6>
            </styled.cardRow>
          </styled.cardBody>

          <styled.cardFooter>
            <button>Learn more</button>
          </styled.cardFooter>
        </styled.offers>

        <styled.offers>
          <styled.cardHeader>
            <img src={FireblocksImage} alt="" />
          </styled.cardHeader>
          <styled.cardBody>
            <styled.cardRow>
              <h3>Country: </h3>
              <h2>
                <img src={FlagImage} alt="" /> United States
              </h2>
            </styled.cardRow>
            <styled.cardRow>
              <h3>Country: </h3>
              <h6>
                <img src={BitcoinImage} alt="" /> Bitcoin
              </h6>
              <h6>
                <img src={EthaImage} alt="" /> Ethereum
              </h6>
              <h6>
                <img src={CardanoImage} alt="" /> Cardano
              </h6>
              <h6>
                <img src={RippleImage} alt="" /> Ripple
              </h6>
              <button>and more…</button>
            </styled.cardRow>
            <styled.cardRow>
              <h3>Maximum value: </h3>
              <h6>
                <img src={MillonImage} alt="" /> 10 Millon
              </h6>
            </styled.cardRow>
          </styled.cardBody>

          <styled.cardFooter>
            <button>Learn more</button>
          </styled.cardFooter>
        </styled.offers>
      </styled.offerBox>
      <styled.moreQue>
        <img src={HelpsettingImage} alt="" />
        <div>
          <h2>
            <b>Do you have more question for us?</b> Do you have more question
            for us.
          </h2>
        </div>
      </styled.moreQue>
    </div>
  );
};
