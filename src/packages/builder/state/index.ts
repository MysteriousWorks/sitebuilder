import { atom, atomFamily } from 'recoil';
import { createHash, randomUUID } from 'crypto';

export type Meta = Record<string, string>;

export type PageMetaData = {
  id?: string;
  title?: string;
  metas?: Meta[];
  path: string;
}

export type domElement = {
  id: string;
  parentId?: string;
  type: string;
  props?: Record<string, any>;
  children?: null | string | domElement[];
}

export type focusedEl = domElement & {
  DOMRect: DOMRect;
  children?: any;
};

export type Root = {
  header: null | domElement;
  sections: Map<string, domElement>;
  footer: null | domElement;
}

export type BuilderPage = {
  id: string;
  metaData: PageMetaData;
  content: Root;
}

export const PageIdState = atom<string>({
  key: 'pageId',
  default: '',
});

export const PageMetaDataState = atom<BuilderPage['metaData']>({
  key: 'PageMetaData',
  default: {
    id: '',
    title: '',
    metas: [],
    path: '',
  }
});

export const PageContentState = atom<BuilderPage['content']>({
  key: 'PageContent',
  default: {
    header: null,
    sections: new Map<string, domElement>(),
    footer: null,
  }
});

export const SelectedElement = atom<null|focusedEl>({
  key: 'SelectedElement',
  default: null,
});

export const HoveredElement = atom<focusedEl[]>({
  key: 'HoveredElement',
  default: []
});

export const ChildrenState = atomFamily<null|string|domElement[], string>({
  key: 'childrenState',
  default: null
});