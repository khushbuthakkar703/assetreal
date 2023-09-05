import React, { useEffect, useState } from "react";
import { DownArrowIconBorder } from "../../../../../assets/icons";
import { useLocale } from "../../../../../assets/locale";
import { MainButton } from "../../../../@core/modules/Button";
import * as styled from "./index.styled";
import { useDispatch, useSelector } from "react-redux";
import {
  // addAssets,
  pinAsset,
} from "../../../../redux/actions/operationActions";
import {
  toggleDrawer,
  toggleDrawerSecond,
} from "../../../../redux/actions/appActions";
import { btcList } from "./CoinData";
import { CoinList } from "./FilteredData";
import { Select } from "antd";
import Dropdown from "react-dropdown";
import { getCustodians } from "../../../../redux/actions/custodianActions";
import { createAsset } from "../../../../redux/actions/assetActions";

const { Option } = Select;

export const AddAsset: React.VFC = () => {
  const dispatch = useDispatch();
  const [addyValue, SetAddyValue] = useState<any>("");
  const op = useSelector((state: any) => state.operations.selectedOp);
  const portfolio = useSelector((state: any) => state.operations.portfolios);
  const custodians = useSelector((state: any) => state.orgs.custodians);
  const org = useSelector((state: any) => state.auth.org);

  const [crypto, setCryptoState] = useState(false);
  const [other, setOtherState] = useState(false);
  const [generate, setGenerate] = useState(false);
  const [warm, setWarm] = useState(false);

  const [addExisting, setExisting] = useState(false);
  const [selectedCustodian, setSelectCustodian] = useState("");
  const [isAirTable, setAirtable] = useState(false);
  const [Asset, setAsset] = useState("");
  const { word } = useLocale();

  useEffect(() => {
    if (warm && selectedCustodian !== "digiVault") {
      setAirtable(true);
    }
  }, [selectedCustodian]);

  const handleAsset = (e: any) => {
    e.preventDefault();

    const data: any = {
      fields: {
        name: "test",
        organisation_id: org,
        portfolio_id: portfolio[0].id,
        operation_id: op.operation_id,
        asset_type: Asset,
        wallet_type: "Warm",
        existing_address: "",
        custodian: selectedCustodian,
        is_airtable: isAirTable,
        already_exists: addExisting,
      },
    };
    // dispatch(getAssets(data, portfolio[0].id));
    dispatch(createAsset(data.fields));
    dispatch(toggleDrawerSecond(false));
  };
  const setCustodian = (value: string) => {
    setSelectCustodian(value);
  };

  const setSelectedAsset = (value: string) => {
    setAsset(value);
  };
  const handleKeypress = (e: any) => {
    if (e.keyCode === 13) {
      handleAsset(e);
    }
  };
  return (
    <form>
      <styled.MainBody>
        <div className="MainBody">
          <styled.MainBox>
            <styled.LgAssets>
              <span className="boxTitle">Select Asset Type </span>
              <h5 className="desctitle">Pick the asset you want track</h5>
              <div className="assetSectionBox">
                <div className="assetBox">
                  <div className="testBox">
                    <input
                      onKeyPress={handleKeypress}
                      type="checkbox"
                      id="Cryptocurrency"
                    />
                    <label
                      onClick={() => setCryptoState(!crypto)}
                      htmlFor="Cryptocurrency"
                      className="addedBox"
                    >
                      <div>
                        <h4>Cryptocurrency</h4>
                        <span>
                          Generate a warm or cold wallet with out partner
                          custodians
                        </span>
                      </div>
                    </label>
                  </div>

                  <div className={other ? "addedBox" : "boxSection"}>
                    <div>
                      <h4>Other</h4>
                      <span>Add other forms of non-digital assets</span>
                    </div>
                  </div>
                </div>

                {crypto && (
                  <>
                    <span className="boxTitle">Select Address Type </span>
                    <h5 className="desctitle">
                      Pick the address you want to configure
                    </h5>

                    <div className="assetBox">
                      <div className="testBox">
                        <input
                          onKeyPress={handleKeypress}
                          type="checkbox"
                          id="generate"
                        />
                        <label
                          onClick={() => setGenerate(!generate)}
                          htmlFor="generate"
                          className="addedBox"
                        >
                          <div>
                            <h4>Generate</h4>
                            <span>
                              Generate an warm wallet instantly, fast and easy
                              to use
                            </span>
                          </div>
                        </label>
                      </div>
                      <div className={addExisting ? "addedBox" : "boxSection"}>
                        <div>
                          <h4>Add Existing Address</h4>
                          <span>
                            Add an existing address that holds the tokens you
                            are trying to track
                          </span>
                        </div>
                      </div>
                    </div>

                    {generate && (
                      <>
                        <span className="boxTitle">Select Wallet Type </span>
                        <h5 className="desctitle">
                          Pick the wallet type that you need
                        </h5>

                        <div className="assetBox">
                          <div className="testBox">
                            <input
                              onKeyPress={handleKeypress}
                              type="checkbox"
                              id="warm"
                            />
                            <label
                              onClick={() => setWarm(!warm)}
                              htmlFor="warm"
                              className="addedBox"
                            >
                              <div>
                                <h4>Warm</h4>
                                <span>
                                  Generate an warm wallet instantly, fast and
                                  easy to use
                                </span>
                              </div>
                            </label>
                          </div>

                          <div className={other ? "addedBox" : "boxSection"}>
                            <div>
                              <h4>Cold</h4>
                              <span>
                                Generate a cold wallet, more safe but more
                                offline steps
                              </span>
                            </div>
                          </div>
                        </div>

                        <span className="boxTitle">Select Custodian</span>
                        <h5 className="desctitle">
                          Pick Custodian you want to store the asset with
                        </h5>

                        <Select
                          defaultValue="Select"
                          style={{ width: 200 }}
                          onSelect={setCustodian}
                        >
                          <Option key={"digiVault"}>DigiVault</Option>
                          <Option key={"other"}>Other</Option>

                          {/* {custodians !== {} &&
                            custodians.map((item: any, i: number) => (
                              <Option key={i} value={item}>
                                {item.name}
                              </Option>
                            ))} */}
                        </Select>

                        <span className="boxTitle">Select Asset</span>
                        <h5 className="desctitle">
                          Pick asset you want to store
                        </h5>

                        <Select
                          defaultValue="Select"
                          style={{ width: 200 }}
                          onSelect={setSelectedAsset}
                        >
                          {CoinList.map((item, i) => (
                            <Option key={i} value={item}>
                              {item}
                            </Option>
                          ))}
                        </Select>
                      </>
                    )}
                  </>
                )}
              </div>
            </styled.LgAssets>

            <styled.SmAssets>
              <div className="assetSectionBox">
                <span className="boxTitle">Select Asset Type </span>
                <h5 className="desctitle">Pick the asset you want track</h5>

                <div className="assetBox">
                  <div className="testBox">
                    <input
                      onKeyPress={handleKeypress}
                      type="checkbox"
                      id="Cryptocurrency"
                    />
                    <label
                      onClick={() => setCryptoState(!crypto)}
                      htmlFor="Cryptocurrency"
                      className="addedBox"
                    >
                      <div>
                        <h4>Cryptocurrency</h4>
                        <span>
                          Generate a warm or cold wallet with out partner
                          custodians
                        </span>
                      </div>
                    </label>
                  </div>

                  <div className={other ? "addedBox" : "boxSection"}>
                    <div>
                      <h4>Other</h4>
                      <span>Add other forms of non-digital assets</span>
                    </div>
                  </div>
                </div>
                {crypto && (
                  <>
                    <span className="boxTitle">Select Address Type </span>
                    <h5 className="desctitle">
                      Pick the address you want to configure
                    </h5>

                    <div className="assetBox">
                      <div className="testBox">
                        <input
                          onKeyPress={handleKeypress}
                          type="checkbox"
                          id="generate"
                        />
                        <label
                          onClick={() => setGenerate(!generate)}
                          htmlFor="generate"
                          className="addedBox"
                        >
                          <div>
                            <h4>Generate</h4>
                            <span>
                              Generate an warm wallet instantly, fast and easy
                              to use
                            </span>
                          </div>
                        </label>
                      </div>
                      <div className={addExisting ? "addedBox" : "boxSection"}>
                        <div>
                          <h4>Add Existing Address</h4>
                          <span>
                            Add an existing address that holds the tokens you
                            are trying to track
                          </span>
                        </div>
                      </div>
                    </div>

                    {generate && (
                      <>
                        <span className="boxTitle">Select Wallet Type </span>
                        <h5 className="desctitle">
                          Pick the wallet type that you need
                        </h5>

                        <div className="assetBox">
                          <div className="testBox">
                            <input
                              onKeyPress={handleKeypress}
                              type="checkbox"
                              id="warm"
                            />
                            <label
                              onClick={() => setWarm(!warm)}
                              htmlFor="warm"
                              className="addedBox"
                            >
                              <div>
                                <h4>Warm</h4>
                                <span>
                                  Generate an warm wallet instantly, fast and
                                  easy to use
                                </span>
                              </div>
                            </label>
                          </div>

                          <div className={other ? "addedBox" : "boxSection"}>
                            <div>
                              <h4>Cold</h4>
                              <span>
                                Generate a cold wallet, more safe but more
                                offline steps
                              </span>
                            </div>
                          </div>
                        </div>

                        <span className="boxTitle">Select Custodian</span>
                        <h5 className="desctitle">
                          Pick Custodian you want to store the asset with
                        </h5>

                        <Select
                          defaultValue="Select"
                          style={{ width: 200 }}
                          onChange={setCustodian}
                        >
                          <Option key={"digiVault"}>DigiVault</Option>
                          <Option key={"other"}>Other</Option>

                          {/* {custodians !== {} &&
                            custodians.map((item: any, i: number) => (
                              <Option key={i} value={item}>
                                {item.name}
                              </Option>
                            ))} */}
                        </Select>

                        <span className="boxTitle">Select Asset</span>
                        <h5 className="desctitle">
                          Pick asset you want to store
                        </h5>

                        <Select
                          defaultValue="Select"
                          style={{ width: 200 }}
                          onSelect={setSelectedAsset}
                        >
                          {CoinList.map((item, i) => (
                            <Option key={i} value={item}>
                              {item}
                            </Option>
                          ))}
                        </Select>
                      </>
                    )}
                  </>
                )}
              </div>
            </styled.SmAssets>

            <styled.Modalfooter>
              {crypto && generate && warm && Asset !== "" && (
                <button type="submit" onClick={handleAsset}>
                  <MainButton
                    children={"Add Asset"}
                    height={36}
                    style={{ fontWeight: 600 }}
                  />
                </button>
              )}
            </styled.Modalfooter>
          </styled.MainBox>
        </div>
      </styled.MainBody>
    </form>
  );
};
