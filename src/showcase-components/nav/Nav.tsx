import React from "react";
import { MenuItemNestableAsFunction } from "@caisy/league";
import Link from "next/link";
import { useRouter } from "next/router";

export const Nav: React.FC = () => {
  const router = useRouter();
  return (
    <div>
      <Link href={"/button"}>
        <MenuItemNestableAsFunction as="a" active={router.asPath === "/button"}>
          button
        </MenuItemNestableAsFunction>
      </Link>
      <Link href={"/badge"}>
        <MenuItemNestableAsFunction as="a" active={router.asPath === "/badge"}>
          badge
        </MenuItemNestableAsFunction>
      </Link>
      <Link href={"/document-item"}>
        <MenuItemNestableAsFunction as="a" active={router.asPath === "/document-item"}>
          document-item
        </MenuItemNestableAsFunction>
      </Link>
      <Link href={"/document-status-message"}>
        <MenuItemNestableAsFunction as="a" active={router.asPath === "/document-status-message"}>
          document-status-message
        </MenuItemNestableAsFunction>
      </Link>
      <MenuItemNestableAsFunction collapsed={false}>
        Form
        <Link href={"/form-item"}>
          <MenuItemNestableAsFunction as="a" active={router.asPath === "/form-item"}>
            form-item
          </MenuItemNestableAsFunction>
        </Link>
        <Link href={"/form-switch"}>
          <MenuItemNestableAsFunction as="a" active={router.asPath === "/form-switch"}>
            switch
          </MenuItemNestableAsFunction>
        </Link>
        <Link href={"/select"}>
          <MenuItemNestableAsFunction as="a" active={router.asPath === "/select"}>
            select
          </MenuItemNestableAsFunction>
        </Link>
        <Link href={"/form-textarea"}>
          <MenuItemNestableAsFunction as="a" active={router.asPath === "/form-textarea"}>
            textarea
          </MenuItemNestableAsFunction>
        </Link>
      </MenuItemNestableAsFunction>
      <Link href={"/message"}>
        <MenuItemNestableAsFunction as="a" active={router.asPath === "/message"}>
          message
        </MenuItemNestableAsFunction>
      </Link>
      <Link href={"/status"}>
        <MenuItemNestableAsFunction as="a" active={router.asPath === "/status"}>
          status
        </MenuItemNestableAsFunction>
      </Link>
      <Link href={"/empty"}>
        <MenuItemNestableAsFunction as="a" active={router.asPath === "/empty"}>
          Empty
        </MenuItemNestableAsFunction>
      </Link>
      <Link href={"/tooltip"}>
        <MenuItemNestableAsFunction as="a" active={router.asPath === "/tooltip"}>
          tooltip
        </MenuItemNestableAsFunction>
      </Link>
      <Link href={"/popconfirm"}>
        <MenuItemNestableAsFunction as="a" active={router.asPath === "/popconfirm"}>
          popconfirm
        </MenuItemNestableAsFunction>
      </Link>
      <Link href={"/avatar"}>
        <MenuItemNestableAsFunction as="a" active={router.asPath === "/avatar"}>
          avatar
        </MenuItemNestableAsFunction>
      </Link>
      <Link href={"/modal"}>
        <MenuItemNestableAsFunction as="a" active={router.asPath === "/modal"}>
          modal
        </MenuItemNestableAsFunction>
      </Link>
      <Link href={"/datepicker"}>
        <MenuItemNestableAsFunction as="a" active={router.asPath === "/datepicker"}>
          datepicker
        </MenuItemNestableAsFunction>
      </Link>
      <Link href={"/card"}>
        <MenuItemNestableAsFunction as="a" active={router.asPath === "/card"}>
          card
        </MenuItemNestableAsFunction>
      </Link>
      <Link href={"/collapsible"}>
        <MenuItemNestableAsFunction as="a" active={router.asPath === "/collapsible"}>
          collapsible
        </MenuItemNestableAsFunction>
      </Link>
      <Link href={"/tabs"}>
        <MenuItemNestableAsFunction as="a" active={router.asPath === "/tabs"}>
          tabs
        </MenuItemNestableAsFunction>
      </Link>
      <Link href={"/menu-item-nestable-as-function"}>
        <MenuItemNestableAsFunction as="a" active={router.asPath === "/menu-item-nestable-as-function"}>
          menu-item-nestable-as-function
        </MenuItemNestableAsFunction>
      </Link>
      <MenuItemNestableAsFunction collapsed={false}>
        Drag and Drop
        <Link href={"/menu-dnd"}>
          <MenuItemNestableAsFunction as="a" active={router.asPath === "/menu-dnd"}>
            menu-dnd
          </MenuItemNestableAsFunction>
        </Link>
        <Link href={"/translation-menu"}>
          <MenuItemNestableAsFunction as="a" active={router.asPath === "/translation-menu"}>
            translation-menu
          </MenuItemNestableAsFunction>
        </Link>
      </MenuItemNestableAsFunction>
      <Link href={"/dropdown"}>
        <MenuItemNestableAsFunction as="a" active={router.asPath === "/dropdown"}>
          dropdown
        </MenuItemNestableAsFunction>
      </Link>
      <Link href={"/dropdown-search"}>
        <MenuItemNestableAsFunction as="a" active={router.asPath === "/dropdown-search"}>
          dropdown-search
        </MenuItemNestableAsFunction>
      </Link>
      <Link href={"/select-search"}>
        <MenuItemNestableAsFunction as="a" active={router.asPath === "/select-search"}>
          select-search
        </MenuItemNestableAsFunction>
      </Link>
      <Link href={"/oldsearch"}>
        <MenuItemNestableAsFunction as="a" active={router.asPath === "/oldsearch"}>
          oldsearch
        </MenuItemNestableAsFunction>
      </Link>
      <Link href={"/search"}>
        <MenuItemNestableAsFunction as="a" active={router.asPath === "/search"}>
          search
        </MenuItemNestableAsFunction>
      </Link>
      <Link href={"/list"}>
        <MenuItemNestableAsFunction as="a" active={router.asPath === "/list"}>
          List
        </MenuItemNestableAsFunction>
      </Link>
    </div>
  );
};
