import React from "react";
import styled from "styled-components";
import { DocumentItem } from "@caisy/league";

const SDemo = styled.div`
  margin: 32px;
  display: flex;
  flex-direction: column;
  gap: 20;
  align-items: center;
`;

export default function DocumentItemDemo() {
  const toggleSelected = (item: any) => {
    console.log(` item`, item);
  };

  return (
    <SDemo>
      <DocumentItem
        key={`document-item${"asf1124"}`}
        id={"asf1124"}
        uid={"asf1124"}
        previewImageUrl={
          "https://assets.caisy.io/assets/feda7dc9-f233-4e91-9a52-c285c02f253b/b82bad4e-0462-4915-86a6-cde16cb9c3fd/70324354-6215-4209-9882-fcd36460a0f6b391440a2ae94dfd813967fac38983546ce7ddc5c1f048249193efb891220f6e2018global3rd003YtterCJacquesDesign2018012403.png"
        }
        status={"PUBLISHED"}
        title={"Asset (System)"}
        type={"Asset (System)"}
      />
      <DocumentItem
        key={`document-item${"asf1123"}`}
        id={"asf1123"}
        uid={"asf1124"}
        previewImageUrl={
          "https://assets.caisy.io/assets/feda7dc9-f233-4e91-9a52-c285c02f253b/b82bad4e-0462-4915-86a6-cde16cb9c3fd/70324354-6215-4209-9882-fcd36460a0f6b391440a2ae94dfd813967fac38983546ce7ddc5c1f048249193efb891220f6e2018global3rd003YtterCJacquesDesign2018012403.png"
        }
        status={"DRAFT"}
        title={"Home"}
        type={"Page - Universal"}
      />
      <DocumentItem
        key={`document-item${"asf1125"}`}
        id={"asf1125"}
        uid={"asf1125"}
        status={"CHANGED"}
        title={"Imprint"}
        type={"Page - Universal"}
      />
    </SDemo>
  );
}
