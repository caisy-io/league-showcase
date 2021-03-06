import React, { useState } from "react";
import { TextArea, TranslationMenu, ITranslationMenuState } from "@caisy/league";

export default function MenuPage() {
  const [state, setState] = useState<ITranslationMenuState>({
    expanded: true,
    locales: [
      { id: "en", name: "English", default: true, active: true },
      { id: "de", name: "Deutsch", active: true },
      { id: "es", name: "Spanisch", active: true },
      { id: "fr", name: "French", active: false },
      { id: "ru", name: "Russisch", active: true },
    ],
  });

  return (
    <div
      style={{
        width: 300,
        margin: 80,
        padding: 80,
      }}
    >
      <TranslationMenu initialState={state} onChange={setState} />
      <div
        style={{
          width: 300,
          margin: "80px 0",
        }}
      >
        <TextArea
          minRows={3}
          maxRows={10}
          value={JSON.stringify(state)}
          onChange={(e: any) => {
            try {
              const x = JSON.parse(e.target.value);
              setState(x);
            } catch {}
          }}
        ></TextArea>
        <pre>{JSON.stringify(state, null, 4)}</pre>
      </div>
    </div>
  );
}
