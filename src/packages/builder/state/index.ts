import { atom, atomFamily } from "recoil";
import { createHash, randomUUID } from "crypto";

export type BuilderPage = {
  /** @var {string} id Unique Page Id, ideally MD5 of page path */
  id: string;
  /** @var {string} name Page name that appears in Menu */
  name: string;
  /** @var {string} seo Page Seo data like page title, metas, etc  */
  seo: SEO;
  /** @var {string} path Page path ex: `/page/subpage` */
  path: string;
  /** @var {Root} content Page content nodes as json */
  content: Root;
  /** @var {boolean} isDynamic To determine if the page is a dynamic page with a dynamic path component & content */
  isDynamic: boolean;
  /** @var {PageAccessType} access To restrict page access to specfic audience type */
  access: PageAccessType;
  /** @var {PageStatus} pageStatus Determines whether pages is published or a draft */
  pageStatus: PageStatus;
};

/** @type {PageMetaData} Partial Page data  */
export type PageMetaData = Pick<BuilderPage, "id" | "name" | "path">;

export type Root = {
  header: null | domElement;
  sections: Map<string, domElement>;
  footer: null | domElement;
};

/**
 * @enum {PageAccessType} To restrict page access to specfic audience type
 * Public should grant full access to all users
 * Users should grant access only to registered customers
 * members should only grant access to registered members
 * */
export enum PageAccessType {
  public = "public",
  customers = "customers",
  members = "members",
}

export enum PageStatus {
  draft = "draft",
  review = "review",
  published = "published",
}

export type SEO = {
  pageTitle: string;
  metas?: Meta[];
};

export type Meta = Record<string, string>;

export type domElement = {
  id: string;
  parentId?: string;
  type: string;
  props?: Record<string, any>;
  children?: null | string | domElement[];
};

export type focusedEl = domElement & {
  DOMRect: DOMRect;
  children?: any;
};

export const PageIdState = atom<string>({
  key: "pageId",
  default: "",
});

export const PageMetaDataState = atom<PageMetaData>({
  key: "PageMetaData",
  default: {
    id: "",
    name: "",
    path: "",
  },
});

export const PageContentState = atom<BuilderPage["content"]>({
  key: "PageContent",
  default: {
    header: null,
    sections: new Map<string, domElement>(),
    footer: null,
  },
});

export const SelectedElement = atom<null | focusedEl>({
  key: "SelectedElement",
  default: null,
});

export const HoveredElement = atom<focusedEl[]>({
  key: "HoveredElement",
  default: [],
});

// Todo: to clean up
export const ChildrenState = atomFamily<null | string | domElement[], string>({
  key: "childrenState",
  default: null,
});
