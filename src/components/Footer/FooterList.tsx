import React from 'react';
import { content, menuName } from './MenuList';
import Accordion from './Accordion';
import styles from './Footer.module.scss';

const FooterList = ({ className, listVisible, openList }:
  {
    className: string, listVisible?: boolean[],
    openList?: (number: number) => void
  }): JSX.Element => {  
  
  return (
    <>
      {menuName.map(({ id, listNumber, contentName, label }) =>
        <div key={id} className={className}>
          <Accordion title={label} listVisible={listVisible}
            openList={openList} number={listNumber} />
          
          <nav className={(listVisible && listVisible[listNumber]) ?
            styles.listOpen : styles.list}>
            {content[contentName].map(({ id, href, label }) => (
              <a href={href} className={styles.link} key={id}>{label}</a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default FooterList;