import React from "react";
import { Popconfirm, Button, IconError } from "@caisy/league";

export default function Home() {
  const onConfirm = () => {
    console.log("Confirm");
  };

  const onCancel = () => {
    console.log("Canceled");
  };

  const title = "Are you sure to delete this item?";

  return (
    <div
      style={{
        margin: 32,
        display: "flex",
        flexDirection: "column",
        gap: 32,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Popconfirm icon={IconError} placement="right" onCancel={onCancel} onConfirm={onConfirm} title={title}>
        <Button>Right</Button>
      </Popconfirm>
      <Popconfirm icon={IconError} placement="left" onCancel={onCancel} onConfirm={onConfirm} title={title}>
        <Button>Left</Button>
      </Popconfirm>
      <Popconfirm icon={IconError} placement="top" onCancel={onCancel} onConfirm={onConfirm} title={title}>
        <Button>Top</Button>
      </Popconfirm>
      <Popconfirm icon={IconError} placement="bottom" onCancel={onCancel} onConfirm={onConfirm} title={title}>
        <Button>Bottom</Button>
      </Popconfirm>
    </div>
  );
}
