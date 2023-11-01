import React from 'react';
import PlusImg from 'assets/SVG/Footer/Plus';
import MinusImg from 'assets/SVG/Footer/Minus';
import styles from './Footer.module.scss';

const Accordion = ({ title, listVisible, openList, number }:
  {
    title: string, listVisible?: boolean[],
    openList?: (number: number) => void, number: number
  }): JSX.Element => {
  return (
    <div className={styles.titleBox}>
      <h3 className={styles.title}>{title}</h3>

      {(listVisible && !listVisible[number]) ? (<button
        className={styles.listButton}
        onClick={() => openList ? openList(number) : ''}>
        <PlusImg className={styles.listImg} />
      </button>) :
        null}
      
      {(listVisible && listVisible[number]) ? (<button
        className={styles.listButton}
        onClick={() => openList ? openList(number) : ''}>
        <MinusImg className={styles.listImg} />
      </button>) :
        null}
      
    </div>
  );
};

export default Accordion;