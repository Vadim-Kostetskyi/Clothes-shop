import React, { FC, useState, ReactNode } from 'react';
import PlusImg from 'assets/svgs/Plus';
import MinusImg from 'assets/svgs/Minus';
import styles from './index.module.scss';

interface AccordionProps {
  title: string;
  titleStyles?: string;
  defaultOpen?: boolean;
  list?: ReactNode;
  listStyle?: string;
}

const Accordion: FC<AccordionProps> = ({
  title,
  titleStyles,
  defaultOpen = false,
  list,
  listStyle,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.accordion}>
      <button className={styles.box} onClick={toggleAccordion}>
        <h3 className={titleStyles}>{title}</h3>
        {isOpen ? (
          <MinusImg className={styles.img} />
        ) : (
          <PlusImg className={styles.img} />
        )}
      </button>
      <div className={isOpen ? listStyle : styles.hide}>{list}</div>
    </div>
  );
};

export default Accordion;
