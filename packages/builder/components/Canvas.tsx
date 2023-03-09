import React from 'react';
import {useRecoilValue} from 'recoil';
import {PageContentState} from '../state';
import {Header} from './UI/Header';

type CanvasProps = {
  componentMap: Record<string, React.ComponentType>;
};

const Canvas: React.FC<CanvasProps> = ({componentMap}) => {
  let pageContent = useRecoilValue(PageContentState);

  return (
    <main>
      <Header headerContent={pageContent.header} componentMap={componentMap} />
    </main>
  )
}

export default Canvas;