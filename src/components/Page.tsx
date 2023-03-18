import React, {PropsWithChildren} from 'react';
import styles from './Page.module.scss';

type PageProps = {} & PropsWithChildren;

const Page: React.FC<PageProps> = ({ children }) => {
  return (
    <div className={styles.Page}>
      {children}
    </div>
  )
}

export default Page;