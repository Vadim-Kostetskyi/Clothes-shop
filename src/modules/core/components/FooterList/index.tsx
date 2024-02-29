import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Accordion from '../AccordionFooter/Accordion';
import { menuName, listContent } from 'modules/core/containers/Footer';
import styles from 'modules/core/containers/Footer/Footer.module.scss';

const FooterList = ({ className }: { className: string }): JSX.Element => {
  const [listVisible, setListVisible] = useState([false, false, false]);

  const { t } = useTranslation();

  const openList = useCallback((count: number) => {
    setListVisible(prev =>
      prev.map((value, index) => (index === count ? !value : value)),
    );
  }, []);

  return (
    <>
      {menuName.map(({ id, listNumber, contentName, label }) => (
        <div key={id} className={className}>
          <Accordion
            title={t('listItem', { label })}
            listVisible={listVisible}
            openList={openList}
            listNumber={listNumber}
          />
          <nav
            className={
              listVisible && listVisible[listNumber]
                ? styles.listOpen
                : styles.list
            }
          >
            {listContent[contentName].map(({ id, href, label }) => (
              <a href={href} className={styles.link} key={id}>
                {t('listItem', { label })}
              </a>
            ))}
          </nav>
        </div>
      ))}
    </>
  );
};

export default FooterList;
