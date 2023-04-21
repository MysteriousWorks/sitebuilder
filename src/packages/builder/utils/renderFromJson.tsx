import React, { ComponentType } from "react";
import { BuilderPage, domElement } from "../state";
import Component from "../components/UI/Component";

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
