import React from 'react';
import { useTranslation } from 'react-i18next';
import Visa from 'assets/images/payment/visa.png';
import Mastercard from 'assets/images/payment/mastercard.png';
import AmericanExpress from 'assets/images/payment/american-express.png';
import Discover from 'assets/images/payment/discover.png';
import GooglePay from 'assets/images/payment/google-pay.png';
import Paypal from 'assets/images/payment/paypal.png';
import ApplePay from 'assets/images/payment/apple-pay.png';
import styles from './index.module.scss';
import PaymentMethodButton from '../PaymentMethodButton';

const Payment = () => {
  const { t } = useTranslation();
  const paymentChoice = (e: React.MouseEvent<HTMLButtonElement>) => {
    //TODO add the function of choosing a payment method
    console.log(e.currentTarget.name);
  };

  const paymentMethodButtons = [
    {
      title: t('order.creditCard'),
      name: 'Visa',
      images: [
        { link: Visa, alt: 'Visa image' },
        { link: Mastercard, alt: 'Mastercard image' },
        { link: AmericanExpress, alt: 'AmericanExpress image' },
        { link: Discover, alt: 'Discover image' },
      ],
    },
    {
      title: t('order.googlePay'),
      name: 'GooglePay',
      images: [{ link: GooglePay, alt: 'GooglePay image' }],
    },
    {
      title: t('order.paypal'),
      name: 'Paypal',
      images: [{ link: Paypal, alt: 'Paypal image' }],
    },
    {
      title: t('order.applePay'),
      name: 'ApplePay',
      images: [{ link: ApplePay, alt: 'ApplePay image' }],
    },
  ];

  return (
    <div className={styles.paymentWrapper}>
      <div className={styles.paymentButtons}>
        {paymentMethodButtons.map((props, index) => (
          <PaymentMethodButton
            key={index}
            {...props}
            paymentChoice={paymentChoice}
          />
        ))}
      </div>
      <p className={styles.policy}>{t('order.policy')}</p>
    </div>
  );
};

export default Payment;
