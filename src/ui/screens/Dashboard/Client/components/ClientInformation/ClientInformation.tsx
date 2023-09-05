import React from 'react'
import * as styled from "./ClientInformation.styled";

export default function ClientInformation() {
    const infoData = [
        {
            numbers: "#1",
            name: "Organisation name",
            desc: "Asset Reality"
        },
        {
            numbers: "#2",
            name: "Email address for alerts and documentation   ",
            desc: "eid@hexmount.io"
        },
        {
            numbers: "#3",
            name: "Email address for deposits and withdrawls ",
            desc: "eid@hexmount.io"
        },
        {
            numbers: "#4",
            name: "Phone number ",
            desc: "+44952923343"
        },
        {
            numbers: "#5",
            name: "Country",
            desc: "United Kingdom"
        }
    ]
    return (
        <styled.MainBody>
            <styled.headerTitle>
                <styled.MainTitle>Information </styled.MainTitle>
                <styled.latestUpdate>Last Update : 20 Dec 2022 </styled.latestUpdate>
            </styled.headerTitle>

            {infoData.map((data, i) => {
                return (
                    <styled.infoRow key={i}>
                        <styled.rowNumber>{data.numbers}</styled.rowNumber>
                        <styled.infoDetails>
                            <h3>{data.name}</h3>
                            <span>{data.desc}</span>
                        </styled.infoDetails>
                    </styled.infoRow>
                );
            })}

        </styled.MainBody>
    )
}
