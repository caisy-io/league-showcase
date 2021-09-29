import React from "react";
import styled from "styled-components";
import { Card, SCardHeaderTitle, SCardBody } from "@caisy/league";

const SDemo = styled.div`
  margin: 32px;
  display: flex;
  flex-direction: column;
  gap: 20;
  align-items: center;
`;

const SDemoCardBody = styled.div`
  min-height: 300px;
  min-width: 300px;
`;

export default function CardDemo() {
  return (
    <SDemo>
      <Card header={<SCardHeaderTitle>Supercard</SCardHeaderTitle>}>
        <SCardBody>
          <SDemoCardBody>Some card body</SDemoCardBody>
        </SCardBody>
      </Card>
    </SDemo>
  );
}
