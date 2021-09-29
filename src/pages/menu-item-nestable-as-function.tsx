import React from "react";
import { MenuItemNestableAsFunction } from "@caisy/league";
export default function MenuItemNestableAsFunctionPage() {
  return (
    <ul
      style={{
        width: 300,
        margin: 8,
        padding: 8,
      }}
    >
      <MenuItemNestableAsFunction>
        Item 1
        <div>
          <MenuItemNestableAsFunction>
            Item 1-1
            <div>
              <div>
                <MenuItemNestableAsFunction>
                  <h2 style={{ whiteSpace: "nowrap" }}> Item 1-2-1</h2>
                  <img
                    src="https://images.unsplash.com/photo-1606939935599-84e876580874?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"
                    style={{ marginLeft: "50px", width: "80px", height: "80px" }}
                  />
                  <div>
                    <MenuItemNestableAsFunction>
                      <h2 style={{ whiteSpace: "nowrap" }}>Item 1-2-1-1</h2>
                      <img
                        src="https://images.unsplash.com/photo-1617225419138-fa15387123fd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                        style={{ marginLeft: "50px", width: "100px", height: "100px" }}
                      />
                    </MenuItemNestableAsFunction>
                  </div>
                </MenuItemNestableAsFunction>
              </div>
            </div>
          </MenuItemNestableAsFunction>
        </div>
        <div>
          <MenuItemNestableAsFunction>Item 1-2</MenuItemNestableAsFunction>
        </div>
      </MenuItemNestableAsFunction>
    </ul>
  );
}
