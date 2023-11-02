import React from 'react';
import PlusImg from 'assets/SVG/Footer/Plus';
import MinusImg from 'assets/SVG/Footer/Minus';
import styles from './Accordion.module.scss';

const Accordion = ({ title, listVisible, openList, number }:
  {
    title: string, listVisible?: boolean[],
    openList?: (number: number) => void, number: number
  }): JSX.Element => {
  return (
    <button
      className={styles.box}
      onClick={() => openList ? openList(number) : ''}>
      <h3 className={styles.title}>{title}</h3>
      {(listVisible && !listVisible[number]) ? 
        <PlusImg className={styles.img} />
        : null}
      
      {(listVisible && listVisible[number]) ? 
        <MinusImg className={styles.img} />
        :null}
    </button>
  );
};

export default Accordion;