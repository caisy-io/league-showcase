import React from "react";
import styled from "styled-components";
import { DocumentReleaseMessage } from "@caisy/league";

const SDemo = styled.div`
  margin: 32px;
  display: flex;
  flex-direction: column;
  gap: 20;
  align-items: center;
`;

export default function DocumentStatusMessageDemo() {
  return (
    <SDemo>
      <DocumentReleaseMessage
        type={"CHANGED" as any}
        message="Changed"
        description="Last published 6 days ago"
      ></DocumentReleaseMessage>
      <DocumentReleaseMessage
        type={"PUBLISHED" as any}
        message="Published"
        description="Published 6 days ago"
      ></DocumentReleaseMessage>
      <DocumentReleaseMessage
        type={"DRAFT" as any}
        message="Draft"
        description="Last published 6 days ago"
      ></DocumentReleaseMessage>
    </SDemo>
  );
}
