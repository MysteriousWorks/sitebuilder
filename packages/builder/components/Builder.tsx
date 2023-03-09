import React, {useEffect} from "react";
import { RecoilRoot, useSetRecoilState } from 'recoil';
import {PageContentState, PageMetaData, PageMetaDataState, Root} from "../state";
import { createHash } from 'crypto';

type BuilderProps = {
  initialPageMetaData: Partial<PageMetaData> & Required<{path: string}>;
  initialPageContent?: Root;
} & React.PropsWithChildren;

const BuilderRoot: React.FunctionComponent<BuilderProps> = ({ initialPageMetaData, initialPageContent, children }) => {
  let pageId = initialPageMetaData?.id || createHash('md5').update(initialPageMetaData.path).digest('base64').toString();

  const setPageContent = useSetRecoilState(PageContentState);
  const setPageMetaData = useSetRecoilState(PageMetaDataState);

  useEffect(() => {

    if (!initialPageMetaData.id) {
      initialPageMetaData.id = pageId;
      setPageMetaData(initialPageMetaData);
    }

    if (initialPageContent) {
      setPageContent(initialPageContent);
    }
  }, []);

  return <>{children}</>
}

export const Builder: React.FunctionComponent<BuilderProps> = ({ initialPageMetaData, initialPageContent, children }) => {
  return (
    <RecoilRoot>
      <BuilderRoot initialPageMetaData={initialPageMetaData} initialPageContent={initialPageContent}>
        {children}
      </BuilderRoot>
    </RecoilRoot>
  )
}

export default Builder;