import React from "react";
import { SelectSingle, SelectSingleSearch, SelectMultiple, SelectMultipleSearch } from "@caisy/league";

const SelectShowcase: React.FC = () => {
  const [categories, setCategories] = React.useState([
    {
      label: "Searching:",
      key: "Searching",
      active: false,
      selected: false,
      visible: true,
      items: [
        {
          key: "Badges",
          label: "Badges",
          visible: true,
          data: { customLabel: "Custom Render 1" },
        },
        {
          key: "Button external link",
          label: "Button external link",
          visible: true,
          data: { customLabel: "Custom Render 2" },
        },
        {
          key: "Button internal pages",
          label: "Button internal pages",
          visible: true,
          data: { customLabel: "Custom Render 3" },
        },
      ],
    },
  ]);

  const dataSource = [
    {
      key: "badges",
      label: "Badges",
    },
    {
      key: "button_external_link",
      label: "Button external link",
    },
    {
      key: "button_internal_pages",
      label: "Button internal pages",
    },
  ];

  const [selectValue, setSelectValue] = React.useState(null);

  const customDataSource = [
    {
      key: "badges",
      label: "Badges",
      data: { name: "Test " },
    },
    {
      key: "button_external_link",
      label: "Button external link",
      data: { name: "Test 1" },
    },
    {
      key: "button_internal_pages",
      label: "Button internal pages",
      data: { name: "Test 2" },
    },
  ];

  const [customSelectValue, setCustomSelectValue] = React.useState(null);

  const renderItem = (option) => (
    <div style={{ padding: 16, backgroundColor: "black", color: "white" }}>
      {option.label} {option.data.name}
    </div>
  );

  const [multipleSelectValue, setMultipleSelectValue] = React.useState([]);

  return (
    <div style={{ display: "flex", flexDirection: "row", gap: 16, flexWrap: "wrap" }}>
      <SelectSingleSearch
        placeholder={"Select a release..."}
        dataSource={categories}
        setDataSource={setCategories}
        onChange={(e) => console.log(e)}
        renderItem={(option) => (
          <div>
            {option.data.customLabel} {option.label}
          </div>
        )}
      />
      <SelectMultipleSearch
        placeholder={"Select a release..."}
        dataSource={categories}
        setDataSource={setCategories}
        onChange={(e) => console.log(e)}
      />
      <SelectSingle
        dataSource={dataSource}
        defaultValue="badges"
        value={selectValue}
        onChange={(e) => setSelectValue(e)}
      />
      <SelectSingle
        renderItem={renderItem}
        dataSource={customDataSource}
        value={customSelectValue}
        placeholder="Select with custom options."
        onChange={(e) => setCustomSelectValue(e)}
      />
      <SelectMultiple
        dataSource={dataSource}
        value={multipleSelectValue}
        placeholder="Select multiple options!"
        onChange={(e) => setMultipleSelectValue(e)}
      />
    </div>
  );
};

export default SelectShowcase;
