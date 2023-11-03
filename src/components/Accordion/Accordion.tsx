import React, { FC } from 'react';
import PlusImg from 'assets/SVG/Footer/Plus';
import MinusImg from 'assets/SVG/Footer/Minus';
import styles from './Accordion.module.scss';

interface AccordionProps {
  title: string;
  listVisible?: boolean[];
  openList?: (listNumber: number) => void;
  listNumber: number;
}


const Accordion: FC<AccordionProps> =
  ({ title, listVisible, openList, listNumber }) => (
    <button
      className={styles.box}
      onClick={() => openList ? openList(listNumber) : ''}>
      <h3 className={styles.title}>{title}</h3>
      {(listVisible && !listVisible[listNumber]) ? <PlusImg className=
        {styles.img} /> : null}
      
      {(listVisible && listVisible[listNumber]) ? <MinusImg className=
        {styles.img} /> :null}
    </button>
  );


export default Accordion;