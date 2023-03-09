import React, {ReactNode, Ref} from "react";
import globalStyles from '@/styles/styles.module.scss';

export type SectionProps = {
  name: string;
  getOptions?: () => JSX.Element[];
  onSelect?: (ref: Ref<Element>) => void;
  children?: ReactNode;
}

const Section: React.FunctionComponent<SectionProps> = ({ name, getOptions, children }) => {
  return (
    <div className={[globalStyles.component].join(' ')}>
      <span className={globalStyles.name}>{name}</span>
      {children}
    </div>
  )
}

export default Section;