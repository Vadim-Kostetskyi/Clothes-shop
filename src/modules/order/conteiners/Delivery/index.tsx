import React from 'react';
import { useTranslation } from 'react-i18next';
import DeliveryInfo, {
  DeliveryInfoProps,
} from 'modules/order/components/DeliveryInfo';
import Gift from 'assets/svgs/Gift.svg';
import Truck from 'assets/svgs/Truck.svg';
import Box from 'assets/svgs/Box.svg';
import styles from './index.module.scss';

const Delivery = () => {
  const { t } = useTranslation();

  const deliverySelectionButtons: DeliveryInfoProps[] = [
    {
      icon: Box,
      iconAlt: t('box'),
      title: t('order.homeDelivery'),
      workDays: t('order.workDays'),
      price: t('free'),
      isHome: true,
    },
    {
      icon: Truck,
      iconAlt: t('truck'),
      title: t('order.postServices'),
      workDays: t('order.workDays'),
      price: 'From 9.99 €',
    },
    {
      icon: Gift,
      iconAlt: t('gift'),
      title: t('order.sendOrderAsGift'),
      workDays: t('order.workDays'),
      price: t('free'),
    },
  ];

  return (
    <div className={styles.wrapper}>
      {deliverySelectionButtons.map((prop: DeliveryInfoProps) => (
        <DeliveryInfo {...prop} key={prop.title} />
      ))}
    </div>
  );
};

export default Delivery;
