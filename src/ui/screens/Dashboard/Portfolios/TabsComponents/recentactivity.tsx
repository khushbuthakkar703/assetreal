import React from "react";
import * as styled from "./recentactivity.styled";

export default function Recentactivity() {
  const RecentActivity = [
    {
      id: "1",
      WithdrawTitle: "Withdrawl",
      WithdrawImg: "/images/Withdrawl.svg",
      WithdrawlTime: "9:40 AM",
      FromImg: "/images/from.svg",
      FromlValue: "0xd123…2299119231123",
      ToValue: "0xd123…2299119231123",
      Amount: "+22.54BTC",
      AmmountImg: "/images/amount.svg",
      GasFee: "0.0523 BNB",
      GasFeeImg: "/images/gas.svg",
      SmartChain: "0.0523 BNB",
      SmartChainImg: "/images/binance.svg",
      EyeImg: "/images/eye.svg",
    },
    {
      id: "2",
      WithdrawTitle: "Receive",
      WithdrawImg: "/images/receive.svg",
      WithdrawlTime: "9:40 AM",
      FromImg: "/images/from.svg",
      FromlValue: "0xd123…2299119231123",
      ToValue: "0xd123…2299119231123",
      Amount: "22.54BTC",
      AmmountImg: "/images/amount.svg",
      GasFee: "0.0523 BNB",
      GasFeeImg: "/images/gas.svg",
      SmartChain: "0.0523 BNB",
      SmartChainImg: "/images/binance.svg",
      EyeImg: "/images/eye.svg",
    },
    {
      id: "3",
      WithdrawTitle: "Receive",
      WithdrawImg: "/images/receive.svg",
      WithdrawlTime: "9:40 AM",
      FromImg: "/images/from.svg",
      FromlValue: "0xd123…2299119231123",
      ToValue: "0xd123…2299119231123",
      Amount: "22.54BTC",
      AmmountImg: "/images/amount.svg",
      GasFee: "0.0523 BNB",
      GasFeeImg: "/images/gas.svg",
      SmartChain: "0.0523 BNB",
      SmartChainImg: "/images/binance.svg",
      EyeImg: "/images/eye.svg",
    },
    {
      id: "4",
      WithdrawTitle: "Receive",
      WithdrawImg: "/images/receive.svg",
      WithdrawlTime: "9:40 AM",
      FromImg: "/images/from.svg",
      FromlValue: "0xd123…2299119231123",
      ToValue: "0xd123…2299119231123",
      Amount: "22.54BTC",
      AmmountImg: "/images/amount.svg",
      GasFee: "0.0523 BNB",
      GasFeeImg: "/images/gas.svg",
      SmartChain: "0.0523 BNB",
      SmartChainImg: "/images/binance.svg",
      EyeImg: "/images/eye.svg",
    },
    {
      id: "5",
      WithdrawTitle: "Receive",
      WithdrawImg: "/images/receive.svg",
      WithdrawlTime: "9:40 AM",
      FromImg: "/images/from.svg",
      FromlValue: "0xd123…2299119231123",
      ToValue: "0xd123…2299119231123",
      Amount: "22.54BTC",
      AmmountImg: "/images/amount.svg",
      GasFee: "0.0523 BNB",
      GasFeeImg: "/images/gas.svg",
      SmartChain: "0.0523 BNB",
      SmartChainImg: "/images/binance.svg",
      EyeImg: "/images/eye.svg",
    },
    {
      id: "6",
      WithdrawTitle: "Receive",
      WithdrawImg: "/images/receive.svg",
      WithdrawlTime: "9:40 AM",
      FromImg: "/images/from.svg",
      FromlValue: "0xd123…2299119231123",
      ToValue: "0xd123…2299119231123",
      Amount: "22.54BTC",
      AmmountImg: "/images/amount.svg",
      GasFee: "0.0523 BNB",
      GasFeeImg: "/images/gas.svg",
      SmartChain: "0.0523 BNB",
      SmartChainImg: "/images/binance.svg",
      EyeImg: "/images/eye.svg",
    },
    {
      id: "7",
      WithdrawTitle: "Receive",
      WithdrawImg: "/images/receive.svg",
      WithdrawlTime: "9:40 AM",
      FromImg: "/images/from.svg",
      FromlValue: "0xd123…2299119231123",
      ToValue: "0xd123…2299119231123",
      Amount: "22.54BTC",
      AmmountImg: "/images/amount.svg",
      GasFee: "0.0523 BNB",
      GasFeeImg: "/images/gas.svg",
      SmartChain: "0.0523 BNB",
      SmartChainImg: "/images/binance.svg",
      EyeImg: "/images/eye.svg",
    },
    {
      id: "8",
      WithdrawTitle: "Receive",
      WithdrawImg: "/images/receive.svg",
      WithdrawlTime: "9:40 AM",
      FromImg: "/images/from.svg",
      FromlValue: "0xd123…2299119231123",
      ToValue: "0xd123…2299119231123",
      Amount: "22.54BTC",
      AmmountImg: "/images/amount.svg",
      GasFee: "0.0523 BNB",
      GasFeeImg: "/images/gas.svg",
      SmartChain: "0.0523 BNB",
      SmartChainImg: "/images/binance.svg",
      EyeImg: "/images/eye.svg",
    },
  ];

  return (
    <>
      <styled.RecentHeader>
        <h5>Recent activity </h5>
        <span>In total</span>
      </styled.RecentHeader>
      <styled.RecentActivity>
        <styled.LgTable>
          <table>
            <tbody>
              {RecentActivity.map((data, i) => {
                return (
                  <tr key={i}>
                    <td className="bodyColums-1">
                      <div className="coins">
                        <img src={data.WithdrawImg} alt="" />
                        <div>
                          <h5>{data.WithdrawTitle}</h5>
                          <span>{data.WithdrawlTime}</span>
                        </div>
                      </div>
                    </td>
                    <td className="bodyColums-1">
                      <div className="coins">
                        <img src={data.FromImg} alt="" />
                        <div>
                          <h5>From</h5>
                          <span>{data.FromlValue}</span>
                        </div>
                      </div>
                    </td>
                    <td className="bodyColums-1">
                      <div className="coins">
                        <img src={data.FromImg} alt="" />
                        <div>
                          <h5>To</h5>
                          <span>{data.ToValue}</span>
                        </div>
                      </div>
                    </td>
                    <td className="bodyColums-1">
                      <div className="coins">
                        <img src={data.AmmountImg} alt="" />
                        <div>
                          <h5>Amount</h5>
                          <span>{data.Amount}</span>
                        </div>
                      </div>
                    </td>
                    <td className="bodyColums-1">
                      <div className="coins">
                        <img src={data.GasFeeImg} alt="" />
                        <div>
                          <h5>Gas fee </h5>
                          <span>{data.GasFee}</span>
                        </div>
                      </div>
                    </td>
                    <td className="bodyColums-1">
                      <div className="coins">
                        <img src={data.SmartChainImg} alt="" />
                        <div>
                          <h5>Binance Smart Chain</h5>
                          <span>{data.SmartChain}</span>
                        </div>
                      </div>
                    </td>
                    <td className="bodyColums-1">
                      <div className="coins">
                        <img src={data.EyeImg} alt="" />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </styled.LgTable>

        <styled.SmTable>
          <div className="coinColums">
            {RecentActivity.map((data, i) => {
              return (
                <div className="MainColums" key={i}>
                  <div className="MainCoins">
                    <div className="coins">
                      <img src={data.WithdrawImg} alt="" />
                      <div>
                        <h5>{data.WithdrawTitle}</h5>
                        <span>{data.WithdrawlTime}</span>
                      </div>
                    </div>

                    <div className="coins">
                      <img src={data.FromImg} alt="" />
                      <div>
                        <h5>From</h5>
                        <span>{data.FromlValue}</span>
                      </div>
                    </div>

                    <div className="coins">
                      <img src={data.FromImg} alt="" />
                      <div>
                        <h5>To</h5>
                        <span>{data.ToValue}</span>
                      </div>
                    </div>
                  </div>

                  <div className="MainCoins">
                    <div className="coins">
                      <img src={data.AmmountImg} alt="" />
                      <div>
                        <h5>Amount</h5>
                        <span>{data.Amount}</span>
                      </div>
                    </div>

                    <div className="coins">
                      <img src={data.GasFeeImg} alt="" />
                      <div>
                        <h5>Gas fee </h5>
                        <span>{data.GasFee}</span>
                      </div>
                    </div>

                    <div className="coins">
                      <img src={data.SmartChainImg} alt="" />
                      <div>
                        <h5>Binance Smart Chain</h5>
                        <span>{data.SmartChain}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </styled.SmTable>
      </styled.RecentActivity>
    </>
  );
}
