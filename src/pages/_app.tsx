import React from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import { Theme, BodyLayout } from "@caisy/league";
import { Nav } from "../showcase-components/nav/Nav";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=fallback"
            rel="stylesheet"
          />
        </Head>
        <Theme>
          <BodyLayout>
            <Nav></Nav>
            <Component {...pageProps} />
          </BodyLayout>
        </Theme>
      </DndProvider>
    </>
  );
}
