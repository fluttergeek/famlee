import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export interface SideLink {
  title: string;
  icon?: JSX.Element;
  cName: string;
  path?: string;
  choices?: {
    icon: JSX.Element;
    title: string;
    path: string;
    cName: String;
  }[];
}

export const SidebarData: SideLink[] = [
  {
    title: "Rooms",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-label",
    choices: [
      {
        icon: <AiIcons.AiOutlineGroup />,
        title: "Rooms",
        path: "/",
        cName: "nav-text",
      },
      {
        icon: <AiIcons.AiOutlineTeam />,
        title: "Guests",
        path: "/guests",
        cName: "nav-text",
      },
      {
        icon: <AiIcons.AiOutlineUserAdd />,
        title: "CheckIn",
        path: "/checkin",
        cName: "nav-text",
      },
    ],
  },
  {
    title: "Merchandise",
    icon: <AiIcons.AiOutlineShop />,
    cName: "nav-label",
    choices: [
      {
        icon: <AiIcons.AiOutlineShoppingCart />,
        title: "Sell",
        path: "/sell",
        cName: "nav-text",
      },
      {
        icon: <AiIcons.AiOutlineMobile />,
        title: "Load",
        path: "/loader",
        cName: "nav-text",
      },
      {
        icon: <AiIcons.AiOutlineRise />,
        title: "Sales",
        path: "/sales",
        cName: "nav-text",
      },
      {
        icon: <AiIcons.AiOutlinePlus />,
        title: "Add Product",
        path: "/addproduct",
        cName: "nav-text",
      },
      {
        icon: <AiIcons.AiOutlineFileDone />,
        title: "In House Purchase",
        path: "/dontsell",
        cName: "nav-text",
      },
      {
        icon: <AiIcons.AiOutlineFileExcel />,
        title: "In House Purchases",
        path: "/dontsales",
        cName: "nav-text",
      },
    ],
  },
  {
    title: "Others",
    icon: <AiIcons.AiOutlineShop />,
    cName: "nav-label",
    choices: [
      {
        icon: <AiIcons.AiOutlineFall />,
        title: "Expenses",
        path: "/expenses",
        cName: "nav-text",
      },
      {
        icon: <AiIcons.AiOutlineBank />,
        title: "Encash",
        path: "/encash",
        cName: "nav-text",
      },
      {
        icon: <AiIcons.AiOutlineAudit />,
        title: "DOT",
        path: "/dot",
        cName: "nav-text",
      },
      {
        icon: <AiIcons.AiOutlineSetting />,
        title: "Settings",
        path: "/settings",
        cName: "nav-text",
      },
      {
        icon: <AiIcons.AiOutlineLogout />,
        title: "Sign Out",
        path: "/signout",
        cName: "nav-text",
      },
    ],
  },
];
