import React from "react";
import * as styled from "./ClientDocument.styled";
import Documents from "../../../../../../assets/images/document.png";
export default function ClientDocument() {
  return (
    <>
      <styled.AssetsHeader>
        <h5>Documents </h5>
        <span>In total</span>
      </styled.AssetsHeader>

      <styled.documents>
        <styled.DocumentBox>
          <input type="file" />
          <img src={Documents} alt="" />
          <span>No documents have been uploaded yet</span>
        </styled.DocumentBox>
      </styled.documents>
    </>
  );
}
