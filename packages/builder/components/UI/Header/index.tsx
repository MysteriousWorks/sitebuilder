import React, {ComponentType, useState} from 'react';
import {useRecoilState} from 'recoil';
import {BuilderPage, ChildrenState, domElement, SelectedElement} from '../../../state';
import styles from '../../Canvas.module.scss';

type HeaderProps = {
  headerContent?: BuilderPage['content']['header'];
  componentMap: Record<string, ComponentType>
}

const defaultHeader: domElement = {
  id: 'default-header',
  type: 'div',
  props: {},
  children: [
    {
      id: 'default-header-h2',
      type: 'h2',
      props: {
        style: {
          textAlign: 'center'
        }
      },
      children: 'Header'
    }
  ]
}

const injectChildLabel = (parentId: string, parentType: string, children: string | domElement[] = []) => {
  if (typeof children === 'string') {
    children = [children] as any[]
  }

  if (children[0].id !== `span-${parentId}`) {
    children.unshift({
      id: `span-${parentId}`,
      type: 'span',
      parentId: parentId,
      props: { key: `${parentType}-${parentId}-span`, className: styles.componentName, style: { position: 'absolute', top: '0px', left: '0px' } },
      children: (parentType?.toString() || parentType) as string,
    });
  }
}

const removeChildLabel = (parentId: string, children: domElement[] = []) => {
  if (Array.isArray(children) && children[0].id === `span-${parentId}`) {
    children.shift();
  }
}


export const Header: React.FC<HeaderProps> = ({ headerContent, componentMap }) => {
  const [isHovered, setHovered] = useState(null);
  const [selectedId, setSelectedId] = useRecoilState(SelectedElement);

  if (!headerContent) {
    headerContent = defaultHeader;
  }

  const renderFromJson = (
    content: BuilderPage['content']['header'],
    componentMap: Record<string, ComponentType>,
  ): React.ReactElement => {
    let type: ComponentType | string = componentMap[content?.type as string] || content?.type || '';
    let props = content?.props || {};
  
    // add props for builder view
    props.id = content?.id;
    props.key = props.id;
    const isDefault  = content?.id === 'default-header' ? styles.DefaultComponent : '';
    const isSelected = content?.id === selectedId ? styles.selected : '';
    const isInjectedSpan = content?.id === `span-${content?.parentId}` ? styles.injected : '';
    props.className = [styles.BuilderComponentView, isDefault, isSelected, isInjectedSpan].join(' ');
  
    if (!isInjectedSpan) {
      props.onClick = (e: MouseEvent) => {
        if (Array.isArray(content?.children) && content?.children[0].id !== `span-${props.id}`) {
          injectChildLabel(props.id, (type?.toString() || type) as string, content?.children);
        }
        setSelectedId(props.id);
      }
  
      props.onMouseEnter = (e: MouseEvent) => {
        injectChildLabel(props.id, (type?.toString() || type) as string, content?.children);
        setHovered(props.id);
      }
  
      props.onMouseLeave = (e: MouseEvent) => {
        !isSelected && removeChildLabel(props.id, content?.children as any[]);
        setHovered(null);
      }
    }
  
    let children = Array.isArray(content?.children) && (content?.children as domElement[])?.map((child) => {
      return renderFromJson(child,componentMap);
    }) || content?.children as string;
    
    if (!type && type == '') {
      console.warn(`type content.type is undefined or invalid.`, ` | type ${type} | `, content);
      type = 'div' as string;
    }
  
    return React.createElement(type, props, children)
  }


  return (
    <header>
      {renderFromJson(headerContent, componentMap)}
    </header>
  )
}