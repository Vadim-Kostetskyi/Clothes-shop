import React, { useState } from 'react';
import i18next from 'i18next';
import Accordion from '../Accordion/Accordion';
import styles from './Footer.module.scss';

import { MenuItem, MenuContent, MenuList } from './ListTypes';

const FooterList = ({ className}:{className: string }): JSX.Element => {
  const [listVisible, setListVisible] = useState([false, false, false]);

  const content: MenuContent = i18next.t('footer content', {
    returnObjects: true
  });

  const headers: MenuList[] = i18next.t('menuName', {
    returnObjects: true
  });

  const openList = (number: number) => {
    setListVisible((prev) =>
      prev.map((value, index) => (index === number ? !value : value)));
  };
  
  return (
    <>
      {headers.map(({ id, listNumber, contentName, label }) =>
        <div key={id} className={className}>
          <Accordion title={label} listVisible={listVisible}
            openList={openList} number={listNumber} />
          
          <nav className={(listVisible && listVisible[listNumber]) ?
            styles.listOpen : styles.list}>
            {content[contentName].map(({id, href, label}: MenuItem ) => (
              <a href={href} className={styles.link} key={id}>{label}</a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default FooterList;