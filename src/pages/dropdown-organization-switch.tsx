import React, { useRef } from "react";
import { Button, Popover, IconExchange, DropdownResultsList, IconSearch, Input } from "@caisy/league";
import fuzzysearch from "fuzzysearch";
// import dynamic from 'next/dynamic';
// const Popover: any = dynamic(() => import("@caisy/league").then((d) => d.Popover),   { ssr: false });
import styled from "styled-components";

const SOrganizationSwitchBackground = styled.div`
  background: white;
  width: 310px;
  height: 50px;
  border-radius: 6px;
`;

const DropdownOrganizationSwitchShowcase: React.FC = () => {
  const [active, setActive] = React.useState(false);

  const onClickOutside = () => {
    setActive(false);
  };

  const ref: any = useRef();
  const containerRef: any = useRef();

  const [inputValue, setInputValue] = React.useState<string>("");

  // const onSelect = (e) => {
  //   props.onSelect(e);
  //   props.onClose();
  // };

  const [categories, setCategories] = React.useState([
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

  const onChange = (e) => {
    const newItems = categories.map((i) => {
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

    newItems[0].items[0] = { ...newItems[0].items[0], visible: true, label: e.target.value };
    newItems[0].visible = true;
    setCategories(newItems);
    setInputValue(e.target.value);
  };

  return (
    <div ref={containerRef}>
      <div>
        <Button ref={ref} onClick={() => setActive(!active)}>
          <IconExchange />
        </Button>
      </div>
      {containerRef.current && (
        <Popover container={ref} onClickOutside={onClickOutside} disableTriangle placement="bottom" reference={ref}>
          {active && (
            <SOrganizationSwitchBackground>
              <Input
                // onClose={props.onClose}
                hasCloseButton
                icon={IconSearch}
                value={inputValue}
                onChange={(e) => onChange(e)}
              />
              <DropdownResultsList categories={categories} active onSelect={(e) => console.log(e)} />
            </SOrganizationSwitchBackground>
          )}
        </Popover>
      )}
    </div>
  );
};

export default DropdownOrganizationSwitchShowcase;
