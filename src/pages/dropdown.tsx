import React, { useState } from "react";
import { Button, Input, Dropdown } from "@caisy/league";
import fuzzysearch from "fuzzysearch";

const categories = [
  {
    label: "Fulltext",
    key: "FulltextCategory",
    active: false,
    selected: false,
    visible: true,
    items: [
      {
        key: "fulltextItem",
        label: "",
        visible: true,
      },
    ],
  },
  {
    label: "Fields",
    key: "Fields",
    active: false,
    visible: true,
    selected: false,
    items: [
      {
        key: "slug",
        label: "slug",
        visible: true,
      },
      {
        key: "title",
        label: "title",
        visible: true,
      },
      {
        key: "image",
        label: "image",
        visible: true,
      },
      {
        key: "author",
        label: "Author",
        visible: true,
      },
    ],
  },
  {
    label: "User",
    key: "user",
    active: false,
    selected: false,
    visible: true,
    items: [
      {
        key: "Hans",
        label: "Hans",
        visible: true,
      },
      {
        key: "Otto",
        label: "Otto",
        visible: true,
      },
      {
        key: "Huber",
        label: "Huber",
        visible: true,
      },
    ],
  },
];

export default function DropdownShowcase() {
  const [active, setActive] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<any>("");
  const [value, setValue] = useState<any>({
    categories: categories,
  });
  const onSelect = (e) => {
    console.log(` e`, e);
    setActive(false);
  };
  return (
    <div
      style={{
        display: "flex",
        padding: "32px 60px",
        flexWrap: "wrap",
        backgroundColor: "var(--white-1)",
        boxShadow: "0 10px 30px 0 rgba(89, 106, 122, 0.11)",
        borderRadius: "5px",
      }}
    >
      <div style={{ width: "100%" }}>
        <div
          style={{
            display: "flex",
            padding: "32px",
            flexWrap: "wrap",
            backgroundColor: "var(--white-1)",
          }}
        >
          <Button onClick={() => setActive(!active)}>ACTIVE</Button>
        </div>
        <div
          style={{
            position: "relative",
          }}
        >
          <Input
            value={inputValue}
            onChange={(e) => {
              const newCategories = categories.map((i) => {
                let visibleCategory = false;
                const items = i.items.map((j) => {
                  const visible = fuzzysearch(e.target.value.toLowerCase(), j.label.toLowerCase());
                  if (visible) {
                    visibleCategory = true;
                  }

                  return {
                    ...j,
                    visible,
                  };
                });

                return {
                  ...i,
                  items,
                  visible: visibleCategory,
                };
              });
              newCategories[0].items[0] = {
                ...newCategories[0].items[0],
                visible: true,
                label: e.target.value,
              };
              newCategories[0].visible = true;
              setValue({ categories: newCategories });
              setInputValue(e.target.value);
              setActive(true);
            }}
          ></Input>
          <Dropdown onClickOutside={() => setActive(false)} {...value} active={active} onSelect={(e) => onSelect(e)} />
        </div>
      </div>
    </div>
  );
}
