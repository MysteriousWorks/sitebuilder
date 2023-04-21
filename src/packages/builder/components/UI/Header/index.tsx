import React, { ComponentType, useState } from "react";
import { useRecoilState } from "recoil";
import { BuilderPage, domElement, SelectedElement } from "../../../state";
import styles from "../../Canvas.module.scss";
import Component from "../Component";
import { HeaderDefaultJson } from "./HeaderDefault";

type HeaderProps = {
  headerContent?: BuilderPage["content"]["header"];
  componentMap: Record<string, ComponentType>;
};

const defaultHeader: domElement = HeaderDefaultJson;

export const Header: React.FC<HeaderProps> = ({
  headerContent,
  componentMap,
}) => {
  const [isHovered, setHovered] = useState<null | string>(null);
  const [selectedId, setSelectedId] = useRecoilState(SelectedElement);

  if (!headerContent) {
    headerContent = defaultHeader;
  }

  const renderFromJson = (
    content: BuilderPage["content"]["header"],
    componentMap: Record<string, ComponentType>
  ): React.ReactElement => {
    let type: ComponentType | string =
      componentMap[content?.type as string] || content?.type || "";
    let props = content?.props || {};

    let children =
      (Array.isArray(content?.children) &&
        (content?.children as domElement[])?.map((child) => {
          return renderFromJson(child, componentMap);
        })) ||
      (content?.children as string);

    if (!type && type == "") {
      console.warn(
        `type content.type is undefined or invalid.`,
        ` | type ${type} | `,
        content
      );
      type = "div" as string;
    }

    return (
      <Component
        key={content?.id as string}
        id={content?.id as string}
        type={content?.type || "div"}
        props={props}
      >
        {React.createElement(type, props, children)}
      </Component>
    );
  };

  return <>{renderFromJson(headerContent, componentMap)}</>;
};
