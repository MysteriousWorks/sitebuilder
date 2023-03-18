import React, {FC, MouseEvent, PropsWithChildren} from "react";
import {useRecoilState} from "recoil";
import {focusedEl, HoveredElement, SelectedElement} from "../../state";

type ComponentProps = {
  id: string;
  type: string;
  props?: Record<string, any>;
  children?: any;
}

const Component: FC<ComponentProps> = ({ id, type, props, children }) => {
  const [hoveredEl, setHoveredEl] = useRecoilState(HoveredElement);
  const [selectedEl, setSelectedEl] = useRecoilState(SelectedElement);

  let el = children;

  const onMouseEnter = (e: MouseEvent<HTMLElement>) => {
    const DOMRect = e.currentTarget?.getBoundingClientRect();
    setHoveredEl((prev) => [...prev, { id, type, DOMRect }]);
  }

  const onMouseLeave = (e: MouseEvent) => {
    setHoveredEl((prev) => {
      if (prev.length === 1) {
        return []
      } else {
        return prev.filter((focusedEl: focusedEl) => focusedEl.id === id);
      }
    });
  }

  const onClick = (e: MouseEvent) => {
    const DOMRect = e.currentTarget?.getBoundingClientRect();
    setSelectedEl({ id, type, DOMRect, props, children });
    e.stopPropagation();
  }

  if (children && typeof children !== 'string') {
    el = React.cloneElement(children as any, {
      onMouseEnter,
      onMouseLeave,
      onClick
    });
  }

  return (
    <>
      {el}
    </>
  )
}

export default Component;