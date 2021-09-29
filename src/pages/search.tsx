import { useRouter } from "next/router";
import React, { useCallback, useState } from "react";
import { Search, SearchProvider, ISearchState } from "@caisy/league";

interface IRouteOptions {
  type?: string;
  locale?: string;
  [key: string]: string | undefined;
}

export const useRouterOptions = () => {
  const router = useRouter();
  const { query } = router;

  const getOptions = useCallback((): IRouteOptions => {
    const paramString = query && Array.isArray(query.options) ? query.options.find((str) => str.includes(":")) : "";
    if (paramString && paramString.trim() !== "") {
      return paramString.split(";").reduce((acc: { [key: string]: string }, item: string) => {
        const [key, value] = item.split(":");
        acc[key] = value;
        return acc;
      }, {});
    } else {
      return {};
    }
  }, [query]);

  const options = getOptions();

  const opts = useCallback(
    (proposed = {}): string => {
      const url = Object.entries({ ...options, ...proposed })
        .filter(([, value]) => value && value !== "")
        .map((kv) => kv.join(":"))
        .join(";");
      if (url === "") {
        return "all";
      }
      return url;
    },
    [options],
  );

  return { options, opts };
};

export default function SearchShowcase() {
  const [value, setValue] = useState<ISearchState>({
    categories: [
      {
        label: "Fulltext",
        active: false,
        selected: false,
        items: [
          {
            key: "text",
            value: "text",
            label: "text",
          },
        ],
        evaluate: () => {
          return { active: true, selected: true };
        },
      },
    ],
  });

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
        <SearchProvider value={value}>
          <Search>{"Sample Child"}</Search>
        </SearchProvider>
      </div>
    </div>
  );
}
