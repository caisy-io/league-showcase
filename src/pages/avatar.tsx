import React from "react";
import { Avatar, AvatarGroup, Tooltip } from "@caisy/league";

export default function AvatarDemo() {
  return (
    <div
      style={{
        margin: 32,
        display: "flex",
        flexDirection: "column",
        gap: 20,
        alignItems: "center",
      }}
    >
      <Avatar>DL</Avatar>
      <Avatar>VL</Avatar>
      <Avatar
        imageUrl={
          "https://images.unsplash.com/photo-1509460913899-515f1df34fea?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=32&q=80"
        }
      >
        MG
      </Avatar>
      <AvatarGroup>
        <Avatar>DL</Avatar>
        <Avatar>VL</Avatar>
        <Avatar
          imageUrl={
            "https://images.unsplash.com/photo-1509460913899-515f1df34fea?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=32&q=80"
          }
        >
          MG
        </Avatar>
      </AvatarGroup>
      With tooltip:
      <AvatarGroup>
        <Tooltip
          content={<div style={{ padding: "2px 10px" }}>d.loenicker@cyclus.digital</div>}
          placement="top"
          supressArrow
        >
          <Avatar>DL</Avatar>
        </Tooltip>
        <Tooltip
          content={<div style={{ padding: "2px 10px" }}>v.loenicker@cyclus.digital</div>}
          placement="top"
          supressArrow
        >
          <Avatar>VL</Avatar>
        </Tooltip>
        <Tooltip content={<div style={{ padding: "2px 10px" }}>Alfred Schrödinger</div>} placement="top" supressArrow>
          <Avatar
            imageUrl={
              "https://images.unsplash.com/photo-1509460913899-515f1df34fea?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=32&q=80"
            }
          >
            MG
          </Avatar>
        </Tooltip>
      </AvatarGroup>
      <AvatarGroup>
        <Tooltip
          content={<div style={{ padding: "2px 10px" }}>d.loenicker@cyclus.digital</div>}
          placement="top"
          supressArrow
        >
          <Avatar>DL</Avatar>
        </Tooltip>
      </AvatarGroup>
    </div>
  );
}
