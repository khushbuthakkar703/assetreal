import React from "react";
import * as styled from "./OrgDetail.styled";

export const OrgDetail: React.VFC = () => {
  return (
    <styled.MainBody>
      <styled.ItemContainer>
        {/* <styled.Box></styled.Box> */}
        <styled.Box2>
          <styled.Title>Organization</styled.Title>
          <styled.OrgHeader>Asset Reality</styled.OrgHeader>
        </styled.Box2>
      </styled.ItemContainer>
      <styled.ItemContainer>
        {/* <styled.Box></styled.Box> */}
        <styled.Box2>
          <styled.Title>Address</styled.Title>
          <styled.OrgHeader>
            Kemp House, 152-160 City Road, London, United Kingdom, EC1V 2NX
          </styled.OrgHeader>
        </styled.Box2>
      </styled.ItemContainer>
      <styled.ItemContainer>
        {/* <styled.Box></styled.Box> */}
        <styled.Box2>
          <styled.Title>Phone Number</styled.Title>
          <styled.OrgHeader>+44 573635623</styled.OrgHeader>
        </styled.Box2>
      </styled.ItemContainer>
      <styled.ItemContainer>
        {/* <styled.Box></styled.Box> */}
        <styled.Box2>
          <styled.Title>Email Address</styled.Title>
          <styled.OrgHeader>yoko.io</styled.OrgHeader>
        </styled.Box2>
      </styled.ItemContainer>
      <styled.ItemContainer>
        {/* <styled.Box></styled.Box> */}
        <styled.Box2>
          <styled.Title>Country</styled.Title>
          <styled.OrgHeader>United Kingdom</styled.OrgHeader>
        </styled.Box2>
      </styled.ItemContainer>
    </styled.MainBody>
  );
};
