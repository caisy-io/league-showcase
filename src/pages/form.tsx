/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";
import { Button, DatePicker, Form, Input, useForm, FormField } from "@caisy/league";

export default function FormShowcase() {
  const [selectItems, setSelectItems] = React.useState([
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
          visible: false,
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

  const { control, handleSubmit, validate } = useForm();

  const onSubmit = (formData) => {
    const isValid = validate();
    isValid && console.log(formData);
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: "flex", flexDirection: "column", gap: 32, alignItems: "stretch", width: 400 }}
    >
      <div>
        <FormField
          rules={[
            { name: "required", message: "Please enter something here!", condition: (value) => value && value !== "" },
          ]}
          label="Input"
          initialValue=""
          name="input.test"
          reference="target.value"
          control={control}
        >
          {/*@ts-ignore nextline*/}
          <Input placeholder="Input" />
        </FormField>
      </div>
      <div>
        {/* <FormField
          rules={[
            { name: "required", message: "This field is required.", condition: (value) => value && value !== "" },
          ]}
          label="Select"
          name="select"
          control={control}
        >
          <SelectSearch items={selectItems} setItems={setSelectItems} placeholder="Select" />
        </FormField> */}
      </div>
      <div>
        <FormField label="DatePicker" initialValue={new Date()} name="datepicker" control={control}>
          {/*@ts-ignore nextline*/}
          <DatePicker />
        </FormField>
      </div>
      <div>
        <FormField label="Checkbox" initialValue={false} name="checkbox" reference="target.checked" control={control}>
          <input style={{ alignSelf: "center" }} type="checkbox" />
        </FormField>
      </div>
      <Button htmlType="button" style={{ alignSelf: "flex-start" }}>
        Submit
      </Button>
    </Form>
  );
}
