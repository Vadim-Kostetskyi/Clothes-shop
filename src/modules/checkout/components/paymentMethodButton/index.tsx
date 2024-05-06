import React, { FC, MouseEvent } from 'react';
import styles from './index.module.scss';

type image = {
  link: string;
  alt: string;
};

export interface PaymentMethodButtonProps {
  title: string;
  name: string;
  paymentChoice: (e: MouseEvent<HTMLButtonElement>) => void;
  images: image[];
}

const PaymentMethodButton: FC<PaymentMethodButtonProps> = ({
  title,
  paymentChoice,
  images,
  name,
}) => {
  return (
    <button
      className={styles.paymentMethod}
      name={name}
      onClick={paymentChoice}
    >
      {title}
      <div className={styles.cardImageWrapper}>
        {images.map(({ link, alt }) => (
          <img key={link} src={link} alt={alt} />
        ))}
      </div>
    </button>
  );
};

export default PaymentMethodButton;
