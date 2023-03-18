import { selector, selectorFamily } from 'recoil';
import {domElement, PageContentState} from '../state';

export const pageHeader = selector({
  key: 'pageHeader',
  get: ({get}) => get(PageContentState).header,
  set: ({set, get}, newVal: any) => set(PageContentState, { ...get(PageContentState), header: newVal }),
});

export const pageSections = selector({
  key: 'pageSections',
  get: ({get}) => get(PageContentState).sections,
  set: ({get, set}, newVal) => {
    set(pageSections, newVal)
  }
});

export const pageFooter = selector({
  key: 'pageFooter',
  get: ({get}) => get(PageContentState).footer
})

export const pageSection = selectorFamily({
  key: 'pageSection',
  get: (sectionId: string) => ({get}) => {
    return get(pageSections).get(sectionId);
  },
  set: (sectionId) => ({get, set}, newVal) => {
    let sections = get(pageSections);
    sections.set(sectionId, newVal as domElement);

    set(pageSections, sections)
  }
});