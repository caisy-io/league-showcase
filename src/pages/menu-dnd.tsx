import React, { useState } from "react";
import { MenuDnd, SMenuItemDnd } from "@caisy/league";

export default function Home() {
  const [items, setItems] = useState([
    <SMenuItemDnd key={1}>
      <p>Item 1</p>
    </SMenuItemDnd>,
    <SMenuItemDnd key={2}>
      <h3>Item 2</h3>
    </SMenuItemDnd>,
    <SMenuItemDnd key={3}>
      <h2>Item 3</h2>
    </SMenuItemDnd>,
    <SMenuItemDnd key={4}>
      <h1>Item 4</h1>
    </SMenuItemDnd>,
  ]);

  const onDrop = (fromIndex, toIndex) => {
    const newItems = items.slice();
    newItems.splice(toIndex, 0, newItems.splice(fromIndex, 1)[0]);
    setItems(newItems);
  };

  return <MenuDnd onDrop={onDrop}>{items}</MenuDnd>;
}
