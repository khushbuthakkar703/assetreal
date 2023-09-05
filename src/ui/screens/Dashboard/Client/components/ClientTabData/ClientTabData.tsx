import React, { useState } from "react";
import * as styled from "./ClientTabData.styled";

export const ClientTabData: React.VFC = () => {
  const Assets = [
    {
      WithdrawImg: "/images/bitcoin.png",
      name: "BTC",
      desc: "Bitcoin",
      Change: "+1.53%",
      USDValue: "£52019.75",
      Balance: "1.42 BTC",
    },
    {
      WithdrawImg: "/images/etha.png",
      name: "ETH",
      desc: "Ethereum ",
      Change: "+1.27%",
      USDValue: "£364440.04",
      Balance: "148 ETH",
    },
    {
      WithdrawImg: "/images/companylogo2.png",
      name: "XRP",
      desc: "Ripple",
      Change: "+10.93%",
      USDValue: "£0.33398",
      Balance: "1290.3 XRP",
    },
    {
      WithdrawImg: "/images/logo2.png",
      name: "LTC",
      desc: "Litecoin",
      Change: "+4.98%",
      USDValue: "£22741.65",
      Balance: "136.9 LTC",
    },
  ];

  return (
    <>
      <styled.TotalAssets>
        <styled.AssetsHeader>
          <h5>Total assets </h5>
          <span>In total</span>
        </styled.AssetsHeader>
        <styled.AssetsBody>
          <table>
            <tbody>
              {Assets.map((data, i) => {
                return (
                  <tr key={i}>
                    <td className="bodyColums-1">
                      <div className="coins">
                        <img src={data.WithdrawImg} alt="" />
                        <div>
                          <h5>{data.name}</h5>
                          <span>{data.desc}</span>
                        </div>
                      </div>
                    </td>
                    <td className="bodyColums-2">
                      <span className="green">{data.Change}</span>
                    </td>
                    <td className="bodyColums-2">
                      <span>{data.USDValue}</span>
                    </td>
                    <td className="bodyColums-2">
                      <span>{data.Balance}</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </styled.AssetsBody>
      </styled.TotalAssets>
    </>
  );
};
