import React from 'react';
import { Context } from './MenuList';
import PlusImg from 'assets/SVG/Footer/Plus';
import MinusImg from 'assets/SVG/Footer/Minus';
import styles from './Footer.module.scss';

const FooterList = ({
  className,
  listVisible,
  openList,
}: {
  className: string;
  listVisible?: boolean[];
  openList?: (value: number) => void;
}): JSX.Element => {
  const { help, terms, we_are_NOVA } = Context;

  return (
    <>
      <div className={className}>
        <div className={styles.titleBox}>
          <h3 className={styles.title}>Help</h3>
          {listVisible && !listVisible[0] ? (
            <button
              className={styles.listButton}
              onClick={() => (openList ? openList(0) : '')}
            >
              <PlusImg className={styles.listImg} />
            </button>
          ) : null}
          {listVisible && listVisible[0] ? (
            <button
              className={styles.listButton}
              onClick={() => (openList ? openList(0) : '')}
            >
              <MinusImg className={styles.listImg} />
            </button>
          ) : null}
        </div>
        <nav
          className={
            listVisible && listVisible[0] ? styles.listOpenHelp : styles.list
          }
        >
          {help.map(({ id, href, label }) => (
            <a href={href} className={styles.link} key={id}>
              {label}
            </a>
          ))}
        </nav>
      </div>
      <div className={className}>
        <div className={styles.titleBox}>
          <h3 className={styles.title}>Terms</h3>
          {listVisible && !listVisible[1] ? (
            <button
              className={styles.listButton}
              onClick={() => (openList ? openList(1) : '')}
            >
              <PlusImg className={styles.listImg} />
            </button>
          ) : null}
          {listVisible && listVisible[1] ? (
            <button
              className={styles.listButton}
              onClick={() => (openList ? openList(1) : '')}
            >
              <MinusImg className={styles.listImg} />
            </button>
          ) : null}
        </div>
        <nav
          className={
            listVisible && listVisible[1] ? styles.listOpen : styles.list
          }
        >
          {terms.map(({ id, href, label }) => (
            <a href={href} className={styles.link} key={id}>
              {label}
            </a>
          ))}
        </nav>
      </div>
      <div className={className}>
        <div className={styles.titleBox}>
          <h3 className={styles.title}>We are NOVA</h3>
          {listVisible && !listVisible[2] ? (
            <button
              className={styles.listButton}
              onClick={() => (openList ? openList(2) : '')}
            >
              <PlusImg className={styles.listImg} />
            </button>
          ) : null}
          {listVisible && listVisible[2] ? (
            <button
              className={styles.listButton}
              onClick={() => (openList ? openList(2) : '')}
            >
              <MinusImg className={styles.listImg} />
            </button>
          ) : null}
        </div>
        <nav
          className={
            listVisible && listVisible[2] ? styles.listOpen : styles.list
          }
        >
          {we_are_NOVA.map(({ id, href, label }) => (
            <a href={href} className={styles.link} key={id}>
              {label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default FooterList;
