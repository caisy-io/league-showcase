import React from "react";
import { DatePicker } from "@caisy/league";

export default function DatepickerPage() {
  // @TODO initalValue
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);
  // @TODO onSave callback
  const onSave = (dateToSave) => console.log(dateToSave);
  // @TODO onCancel callback, this run when we press the `Cancel` button
  const onCancel = () => {
    console.log("canceled");
  };
  // onMonthChange callback
  const onMonthChange = (newDate) => console.log(newDate);

  // return <div>TODO fix imports to build</div>;
  return (
    <DatePicker
      initialDate={yesterday}
      onCancel={onCancel}
      onMonthChange={(newDate) => onMonthChange(newDate.toISOString())}
      onSave={(dateToSave) => onSave(dateToSave.toISOString())}
      onChange={(date) => console.log(date.toISOString())}
      onDayCreate={(dayElem) => {
        if (Math.random() > 0.2) return;
        dayElem.classList.add("has-badge");
        dayElem.dataset.badgeContent = (Math.random() * 100).toFixed(0);
      }}
      config={{
        withDefaultActive: true,
        withSelectedDisplay: true,
        withTime: true,
        withCloseButton: true,
        withSaveButton: true,
        withBottomButtons: true,
        withQuickSelectionButtons: true,
      }}
    />
  );
}
