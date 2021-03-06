import React, { useState } from "react";
import { Button, TabPanel, Tabs } from "@caisy/league";

export default function TabsShowcase() {
  const [currentTab, setCurrentTab] = useState(0);

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
        <Tabs
          initialValue={currentTab}
          onChange={(newValue) => {
            if (newValue != currentTab) {
              setCurrentTab(newValue);
            }
          }}
        >
          <TabPanel title={<div>💖 Tab 1</div>}>
            This is the first panelThis is the first panelThis is the first panelThis is the first panelThis is the
            first panel
          </TabPanel>
          <TabPanel title="Tab 2">This is the second panel</TabPanel>
          <TabPanel title="Tab 3">This is the third panel</TabPanel>
        </Tabs>
        <br />
        <p>Current tab: {currentTab}</p>
        <br />
        <Button size="small" onClick={() => setCurrentTab((currentTab + 1) % 3)}>
          Change to next tab
        </Button>
      </div>
    </div>
  );
}
