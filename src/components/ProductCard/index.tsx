import React from 'react';
import img from 'assets/images/Rectangle 41.png';
import Info from './Info';
import styles from './index.module.scss';

const ProductCard = (): JSX.Element => {
  return (
    <div className={styles.mainBox}>
      <img src={img} alt="" className={styles.img} />
      <Info />
    </div>
  );
};

export default ProductCard;
