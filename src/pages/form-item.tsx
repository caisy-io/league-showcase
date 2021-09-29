import React, { useState } from "react";
import {
  SFormItemRow,
  SFormItemTitle,
  FormItem,
  SFormItemText,
  FormItemGroup,
  Input,
  TextArea,
  Switch,
} from "@caisy/league";

export default function FormItemShowcase() {
  const [inputValue, setInputValue] = useState<any>("");
  const [switchValue, setSwitchValue] = useState<any>("");

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
        >
          <FormItem validateStatus={"error"}>
            <SFormItemRow>
              <SFormItemTitle>Slug</SFormItemTitle>
              <SFormItemText alignRight>This will be shown in the URL of the browser</SFormItemText>
            </SFormItemRow>
            <Input
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />
            <SFormItemRow>
              <SFormItemText> Please make sure the input is safe to use inside a url. </SFormItemText>
              <SFormItemText alignRight>EN</SFormItemText>
            </SFormItemRow>
          </FormItem>
          <FormItem>
            <SFormItemRow>
              <SFormItemTitle>Number Field</SFormItemTitle>
              <SFormItemText alignRight>This will be shown in the URL of the browser</SFormItemText>
            </SFormItemRow>
            <Input
              type="number"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />
            <SFormItemRow>
              <SFormItemText> Please make sure the input is safe to use inside a url. </SFormItemText>
              <SFormItemText alignRight>EN</SFormItemText>
            </SFormItemRow>
          </FormItem>
        </div>
        <FormItemGroup>
          <SFormItemRow>
            <SFormItemTitle>Slug</SFormItemTitle>
            <SFormItemText alignRight>This will be shown in the URL of the browser</SFormItemText>
          </SFormItemRow>
          <FormItem>
            <Input
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />
            <SFormItemRow>
              <SFormItemText></SFormItemText>
              <SFormItemText alignRight>EN</SFormItemText>
            </SFormItemRow>
          </FormItem>
          <FormItem>
            <Input
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />
            <SFormItemRow>
              <SFormItemText alignRight>DE</SFormItemText>
            </SFormItemRow>
          </FormItem>
        </FormItemGroup>
        <FormItemGroup>
          <SFormItemRow>
            <SFormItemTitle>Slug</SFormItemTitle>
            <SFormItemText alignRight>This will be shown in the URL of the browser</SFormItemText>
          </SFormItemRow>
          <FormItem>
            <Switch
              value={switchValue}
              onChange={(e) => {
                setSwitchValue(e);
              }}
            />
            <SFormItemRow>
              <SFormItemText></SFormItemText>
              <SFormItemText alignRight>EN</SFormItemText>
            </SFormItemRow>
          </FormItem>
          <FormItem>
            <Switch
              value={switchValue}
              onChange={(e) => {
                setSwitchValue(e);
              }}
            />
            <SFormItemRow>
              <SFormItemText alignRight>DE</SFormItemText>
            </SFormItemRow>
          </FormItem>
        </FormItemGroup>
        <FormItemGroup validateStatus={"error"}>
          <SFormItemRow>
            <SFormItemTitle>Slug</SFormItemTitle>
            <SFormItemText alignRight>This will be shown in the URL of the browser</SFormItemText>
          </SFormItemRow>
          <FormItem>
            <TextArea
              value={inputValue}
              onChange={(e) => {
                console.log(` e`, e);
                //   setInputValue(e.target.value);
              }}
            />
            <SFormItemRow>
              <SFormItemText alignRight>EN</SFormItemText>
            </SFormItemRow>
          </FormItem>
          <FormItem validateStatus={"error"}>
            <Input
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />
            <SFormItemRow>
              <SFormItemText>Please make sure the input is safe to use inside a url.</SFormItemText>
              <SFormItemText alignRight>DE</SFormItemText>
            </SFormItemRow>
          </FormItem>
        </FormItemGroup>
      </div>
    </div>
  );
}
