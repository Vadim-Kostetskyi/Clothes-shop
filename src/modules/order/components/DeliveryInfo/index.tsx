import React, { FC, useMemo } from 'react';
import DashedEdit from 'assets/svgs/DashedEdit';
import styles from './index.module.scss';
import { Link } from 'react-router-dom';

export interface DeliveryInfoProps {
  icon: string;
  iconAlt: string;
  title: string;
  workDays: string;
  price: string;
  isHome?: boolean;
}

const DeliveryInfo: FC<DeliveryInfoProps> = ({
  icon,
  iconAlt,
  title,
  workDays,
  price,
  isHome,
}) => {
  const priceClassName = useMemo(() => {
    return price === 'Free' ? styles.free : styles.price;
  }, [price]);

  return (
    <Link
      className={isHome ? styles.deliveryInfoHome : styles.deliveryInfo}
      to={'/checkout/deliveryDetails'}
      state={{ deliveryType: title }}
    >
      <div>
        <img src={icon} alt={iconAlt} />
        <div>
          <div
            className={isHome ? styles.deliveryDataHome : styles.deliveryData}
          >
            <h1>{title}</h1>
            {!isHome && <span className={priceClassName}>{price}</span>}
          </div>
          <p>{workDays}</p>
          {isHome && <span className={priceClassName}>{price}</span>}
        </div>
      </div>
      <DashedEdit />
    </Link>
  );
};

export default DeliveryInfo;
