import React, { FC, MouseEvent } from 'react';
import { Image } from 'types/types';
import styles from './index.module.scss';

export interface PaymentMethodButtonProps {
  title: string;
  name: string;
  paymentChoice: (e: MouseEvent<HTMLButtonElement>) => void;
  images: Image[];
}

const PaymentMethodButton: FC<PaymentMethodButtonProps> = ({
  title,
  paymentChoice,
  images,
  name,
}) => (
  <button className={styles.paymentMethod} name={name} onClick={paymentChoice}>
    <span className={styles.title}>{title}</span>
    <span className={styles.cardImageWrapper}>
      {images.map(({ link, alt }) => (
        <img key={link} src={link} alt={alt} />
      ))}
    </span>
  </button>
);

export default PaymentMethodButton;
