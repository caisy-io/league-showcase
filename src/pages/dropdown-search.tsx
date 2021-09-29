import React, { useEffect, useRef } from "react";
import { Button, DropdownSearch, DropdownSearchContainer, IconAngleDown } from "@caisy/league";

const DropdownSearchShowcase: React.FC = () => {
  const [active, setActive] = React.useState(false);
  const [categories, setCategories] = React.useState([
    {
      label: "Searching:",
      key: "Searching",
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
      label: "Test",
      key: "test",
      active: false,
      selected: false,
      visible: true,
      items: [
        {
          key: "Badges",
          label: "Badges",
          visible: true,
        },
        {
          key: "Button external link",
          label: "Button external link",
          visible: true,
        },
        {
          key: "Button internal pages",
          label: "Button internal pages",
          visible: true,
        },
      ],
    },
  ]);

  const ref = useRef<HTMLElement | undefined>(undefined);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return (
    <DropdownSearchContainer>
      <Button onClick={() => setActive(!active)}>
        <IconAngleDown />
        Create
      </Button>
      <DropdownSearch
        ref={ref}
        onClose={() => setActive(false)}
        active={active}
        dropdownPosition="right"
        items={categories}
        setItems={setCategories}
        onSelect={(e) => console.log(e)}
      />
    </DropdownSearchContainer>
  );
};

export default DropdownSearchShowcase;
