import React, { useState } from "react";
import { SFormItemRow, SFormItemTitle, FormItem, SFormItemText, FormItemGroup, Switch } from "@caisy/league";

export default function FormItemShowcase() {
  const [switchValue, setSwitchValue] = useState<any>(false);
  console.log(` switchValue`, switchValue);
  return (
    <div
      style={{
        display: "flex",
        padding: "32px 60px",
        flexWrap: "wrap",
        backgroundColor: "var(--white-1)",
      }}
    >
      <div style={{ width: "450px" }}>
        <div
          style={{
            position: "relative",
            marginBottom: "100px",
          }}
        ></div>
        <FormItemGroup>
          <SFormItemRow>
            <SFormItemTitle>Show this item?</SFormItemTitle>
            <SFormItemText alignRight>This is some demo Text</SFormItemText>
          </SFormItemRow>
          <FormItem>
            <Switch
              value={switchValue}
              onChange={(e) => {
                console.log(` e`, e);
                setSwitchValue(e);
              }}
            />
            <SFormItemRow>
              <SFormItemText></SFormItemText>
              <SFormItemText alignRight>EN</SFormItemText>
            </SFormItemRow>
          </FormItem>
        </FormItemGroup>
      </div>
    </div>
  );
}
