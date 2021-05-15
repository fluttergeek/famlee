import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SidebarData, SideLink } from "./SidebarData";
import { isThrowStatement } from "typescript";

export function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800">
        <div className="fixed flex flex-col top-0 left-0 w-14 hover:w-64 bg-white h-full border-r">
          <div className="overflow-y-auto overflow-x-hidden flex-grow">
            <ul className="flex flex-col py-4 space-y-1 group">
              {SidebarData.map((item, index) => {
                return (
                  <SideLabel
                    cName={item.cName}
                    title={item.title}
                    icon={item.icon}
                    choices={item.choices}
                    key={index}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

function SideLabel(props: SideLink, key: number) {
  const cName = props.cName;
  const title = props.title;
  const icon = props.icon;
  const choices = props.choices;
  const path = props?.path;

  if (cName == "nav-label") {
    return (
      <div>
        <li className="px-5 invisible group-hover:visible">
          <div className="flex flex-row items-center h-8">
            <div className="text-sm font-light tracking-wide text-gray-500">
              {title}
            </div>
          </div>
        </li>
        {choices?.map((item, index) => {
          return (
            <SideButton
              icon={item.icon}
              title={item.title}
              path={item.path}
              cName={cName}
              key={index}
            />
          );
        })}
      </div>
    );
  }
  return (
    <SideButton icon={icon} title={title} path={path} cName={cName} key={key} />
  );
}

function SideButton(
  props: {
    icon?: JSX.Element;
    title: string;
    path?: string;
    cName: String;
  },
  key: number
) {
  return (
    <li key={key}>
      <a
        href={props.path}
        className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
      >
        <span className="inline-flex justify-center items-center ml-4">
          {props.icon}
        </span>
        <span className="invisible ml-2 text-sm tracking-wide truncate group-hover:visible">
          {props.title}
        </span>
      </a>
    </li>
  );
}
