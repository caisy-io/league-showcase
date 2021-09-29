import React, { useState } from "react";
import styled from "styled-components";
import { Card, SCardHeaderTitle, SCardBody, Button, Collapsible } from "@caisy/league";

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

const SButtonContainer = styled.div`
  display: flex;
  gap: 12px;
`;

export default function CollapsibleDemo() {
  const [active, setActive] = useState(true);
  const [active2, setActive2] = useState(true);
  const [active3, setActive3] = useState(true);
  return (
    <>
      <div>
        <SButtonContainer>
          <Button onClick={() => setActive(!active)}>1 Click me</Button>
          <Button onClick={() => setActive2(!active2)}>2 Click me</Button>
          <Button onClick={() => setActive3(!active3)}>3 Click me</Button>
        </SButtonContainer>
        <SDemo>
          <Collapsible expanded={active}>
            <Card header={<SCardHeaderTitle>Supercard 1</SCardHeaderTitle>}>
              <SCardBody>
                <SDemoCardBody>Some card body</SDemoCardBody>
              </SCardBody>
            </Card>
          </Collapsible>
        </SDemo>
        <SDemo>
          <Collapsible expanded={active2}>
            <Card header={<SCardHeaderTitle>Supercard 2</SCardHeaderTitle>}>
              <SCardBody>
                <SDemoCardBody>Some card body</SDemoCardBody>
              </SCardBody>
            </Card>
          </Collapsible>
        </SDemo>
        <SDemo>
          <Collapsible expanded={active3}>
            <Card header={<SCardHeaderTitle>Supercard 3</SCardHeaderTitle>}>
              <SCardBody>
                <SDemoCardBody>Some card body</SDemoCardBody>
              </SCardBody>
            </Card>
          </Collapsible>
        </SDemo>
      </div>
    </>
  );
}
