import React from 'react';
import {useRecoilValue} from 'recoil';
import {PageContentState} from '../state';
import FocusController from './FocusController';
import {Header} from './UI/Header';

type CanvasProps = {
  componentMap: Record<string, React.ComponentType>;
};

const Canvas: React.FC<CanvasProps> = ({componentMap}) => {
  let pageContent = useRecoilValue(PageContentState);

  return (
    <main style={{ position: 'relative' }}>
      <FocusController />
      <Header headerContent={pageContent.header} componentMap={componentMap} />
    </main>
  )
}

export default Canvas;