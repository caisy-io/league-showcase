import { useRouter } from "next/router";
import React, { useCallback, CSSProperties, useState } from "react";
import { useEffect } from "react";
// import { Search } from '@caisy/league/dist/components/oldsearch/Search';
// import { SearchProvider } from '@caisy/league/dist/components/oldsearch/SearchProvider';
const schemas = [
  {
    __typename: "Schema",
    variant: "Default",
    id: "46310fd5-dbcf-4a6e-a2bc-0d8ff804e6ba",
    name: "Badges",
    title: "Badges",
  },
  {
    __typename: "Schema",
    variant: "Default",
    id: "65cff3dd-574e-4591-bb20-28b43d136860",
    name: "ButtonExternalLink",
    title: "Button external link",
  },
  {
    __typename: "Schema",
    variant: "Default",
    id: "53bea861-9b62-4d5a-84ca-16864181d77d",
    name: "ButtonInternalPages",
    title: "Button internal pages",
  },
  {
    __typename: "Schema",
    variant: "Default",
    id: "5cd8c266-bbda-4f52-aa45-1cec66060c58",
    name: "Colours",
    title: "Colours",
  },
  {
    __typename: "Schema",
    variant: "Default",
    id: "e29daae3-d2d0-4816-83de-d820ff16315b",
    name: "DesignLine",
    title: "Design Line",
  },
  {
    __typename: "Schema",
    variant: "Default",
    id: "ff76fb9f-76cc-4de5-8cbe-fb2118b8882a",
    name: "EmailTemplateAccepted",
    title: "Email Template Accepted",
  },
  {
    __typename: "Schema",
    variant: "Default",
    id: "f83908fb-da93-45a7-b921-b9fe5f1082f9",
    name: "EmailTemplateMagicLink",
    title: "Email Template Magic Link",
  },
  {
    __typename: "Schema",
    variant: "Default",
    id: "d4d40814-cd06-4c06-b2d7-2495cea36b58",
    name: "EmailTemplateSubmitted",
    title: "Email Template Submitted",
  },
  {
    __typename: "Schema",
    variant: "Default",
    id: "569355f5-8984-408e-a9ce-46404ebfb902",
    name: "FAQ",
    title: "FAQ",
  },
  {
    __typename: "Schema",
    variant: "Default",
    id: "5787b87b-2b9b-4f29-bcd4-3e80f078f435",
    name: "FAQItem",
    title: "FAQ Item",
  },
  {
    __typename: "Schema",
    variant: "Default",
    id: "44300dfd-6adc-4897-801a-b91a8c194a9e",
    name: "FileField",
    title: "File field",
  },
  {
    __typename: "Schema",
    variant: "Default",
    id: "16dd139b-7e44-4e88-8e74-b30ac4a5a07a",
    name: "Footer",
    title: "Footer",
  },
  {
    __typename: "Schema",
    variant: "Default",
    id: "91994a80-3903-4f1b-bb18-da2200bf580e",
    name: "Form",
    title: "Form",
  },
  {
    __typename: "Schema",
    variant: "Default",
    id: "61758057-f806-4347-9d6b-b0e2a0afcf64",
    name: "RegistrationProcess",
    title: "Formular",
  },
  {
    __typename: "Schema",
    variant: "Default",
    id: "1cee8aa1-e350-45fb-8c8e-a706e4d48909",
    name: "FormItemOption",
    title: "Formular Field Option",
  },
  {
    __typename: "Schema",
    variant: "Default",
    id: "59f351b9-bc22-42a5-8e58-d5382e092299",
    name: "Handle",
    title: "Handle",
  },
  {
    __typename: "Schema",
    variant: "Default",
    id: "32103a32-1af7-4945-ae00-32ea4ec4e0d5",
    name: "HeroSlider",
    title: "Hero Slider",
  },
  {
    __typename: "Schema",
    variant: "Default",
    id: "71983775-916c-4fb2-b077-d26d88ab90d8",
    name: "ImageWithText",
    title: "Image with Text",
  },
  {
    __typename: "Schema",
    variant: "Default",
    id: "21554619-51d3-46e3-8ee3-4a4faa326bc3",
    name: "StatementField",
    title: "Instruction field",
  },
  {
    __typename: "Schema",
    variant: "Default",
    id: "f72abcb4-0178-4041-85bc-53aa16b4db12",
    name: "LoginForm",
    title: "Login Formular",
  },
  {
    __typename: "Schema",
    variant: "Default",
    id: "ded9f175-fc7e-40b1-a8af-1529f7ec2811",
    name: "MainNavigation",
    title: "Main Navigation",
  },
  {
    __typename: "Schema",
    variant: "Default",
    id: "59595ff6-0bda-455f-82d5-2c350f3ddfdf",
    name: "MultilineTextField",
    title: "Multiline Text Field",
  },
  {
    __typename: "Schema",
    variant: "Default",
    id: "484eee62-a53a-47f6-96e6-7fabe62300ba",
    name: "NomineesList",
    title: "Nominees List",
  },
  {
    __typename: "Schema",
    variant: "Default",
    id: "10d0aade-dae4-4d0d-9acc-d5a59ad20ac9",
    name: "NumberField",
    title: "Number field",
  },
  {
    __typename: "Schema",
    variant: "Default",
    id: "05e5647d-5473-4e95-8eef-5356bd2036c8",
    name: "Page",
    title: "Page",
  },
  {
    __typename: "Schema",
    variant: "Default",
    id: "5f44b0c6-a258-4793-80f7-9a7f2ae8862e",
    name: "Programm",
    title: "Programm",
  },
  {
    __typename: "Schema",
    variant: "Default",
    id: "5bf6b6b3-c0eb-43fc-845a-e32b44609c48",
    name: "SingleSelectFieldMultiple",
    title: " Select Field Multiple",
  },
  {
    __typename: "Schema",
    variant: "Default",
    id: "8f542de8-b965-4328-a96e-d8ede14e8238",
    name: "Show",
    title: "Show",
  },
  {
    __typename: "Schema",
    variant: "Default",
    id: "9cc86d26-3b88-49fb-895f-90268633b136",
    name: "ShowWinners",
    title: "Show Winners",
  },
  {
    __typename: "Schema",
    variant: "Default",
    id: "1f53f0d9-fbef-4a3b-8583-dcb755518b09",
    name: "SingleSelectAutocompleteField",
    title: "Single selection auto complete field",
  },
  {
    __typename: "Schema",
    variant: "Default",
    id: "8c62664c-6ab8-4501-bfee-f6519be77e82",
    name: "SingleSelectField",
    title: "Single selection field",
  },
  {
    __typename: "Schema",
    variant: "Default",
    id: "db8cd8e9-2146-42be-a072-6457be4c221f",
    name: "Style",
    title: "Style",
  },
  {
    __typename: "Schema",
    variant: "Default",
    id: "c36efa08-a416-4ec6-a96b-1cf2ad51175e",
    name: "Submission",
    title: "Submission",
  },
  {
    __typename: "Schema",
    variant: "Default",
    id: "39bd4816-81d6-4780-bb26-1977d3842e21",
    name: "Surface",
    title: "Surface",
  },
  {
    __typename: "Schema",
    variant: "Default",
    id: "03fc6996-2e39-468f-8e6c-fe93957ce2dc",
    name: "TextComponent",
    title: "Text Component",
  },
  {
    __typename: "Schema",
    variant: "Default",
    id: "f32458ad-c361-4c8d-8319-1089b3d85b20",
    name: "TextField",
    title: "Text field",
  },
  {
    __typename: "Schema",
    variant: "Default",
    id: "51ff0618-a4c4-4bcd-90dc-50f86b23b40b",
    name: "UniversalText",
    title: "Universal text",
  },
  {
    __typename: "Schema",
    variant: "Default",
    id: "3143556f-de9d-4e88-b79c-08417f323e02",
    name: "WinnersCard",
    title: "Winners card",
  },
];

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
  const [, forceRerender] = useState<number>(0);
  const router = useRouter();

  const { options, opts } = useRouterOptions();

  useEffect(() => {
    const load = async () => {
      forceRerender(1);
    };
    load();
  }, []);

  const setFulltext = (fulltext: string) => {
    router.push("/oldsearch/[...options]", `/oldsearch/${opts({ fulltext })}`, {
      shallow: true,
    });
    forceRerender(Math.random());
  };

  const resetSearch = () => {
    router.push("/oldsearch/[...options]", `/oldsearch/${opts({ field: "", type: "", fulltext: "" })}`, {
      shallow: true,
    });
    forceRerender(Math.random());
  };

  const setFulltextOnly = (fulltext: string) => {
    router.push("/oldsearch/[...options]", `/oldsearch/${opts({ fulltext, type: "", field: "" })}`, {
      shallow: true,
    });
    forceRerender(Math.random());
  };

  const selectType = (id: string) => {
    router.push("/oldsearch/[...options]", `/oldsearch/${opts({ type: id })}`, {
      shallow: true,
    });
    forceRerender(Math.random());
  };

  const switchType = (id: string) => {
    router.push("/oldsearch/[...options]", `/oldsearch/${opts({ type: id, field: "" })}`, {
      shallow: true,
    });
    forceRerender(Math.random());
  };

  const selectField = (id: string) => {
    router.push("/oldsearch/[...options]", `/oldsearch/${opts({ field: id })}`, {
      shallow: true,
    });
    forceRerender(Math.random());
  };

  const [value, setValue] = useState<any>({
    contentType: null,
    field: options.fulltext,
    fulltext: options.fulltext,
    resetSearch,
    schemas: schemas,
    selectField,
    selectType,
    setFulltext,
    setFulltextOnly,
    switchType,
    selectedOptions: options,
    type: null,
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
        {/* <SearchProvider value={value}>
          <Search>{'Sample Child'}</Search>
        </SearchProvider> */}
      </div>
    </div>
  );
}
