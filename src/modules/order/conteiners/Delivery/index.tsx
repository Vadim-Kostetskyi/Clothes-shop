import React, { ChangeEvent, useState } from 'react';
import DeliveryInfo, {
  DeliveryInfoProps,
} from 'modules/order/components/DeliveryInfo';
import PersonalData from 'modules/order/components/PersonalData';
import gift from 'assets/svgs/Gift.svg';
import truck from 'assets/svgs/Truck.svg';
import box from 'assets/svgs/Box.svg';
import styles from './index.module.scss';
import { useTranslation } from 'react-i18next';

/* eslint-disable react/prop-types */

interface DeliveryProps {
  icon: string;
  iconAlt: string;
  title: string;
  workDays: string;
  price: string;
  isHome?: boolean;
  deliverySelection: (typeOfDelivery: string) => () => void;
}

const Delivery = () => {
  const [deliveryType, setDeliveryType] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState<string[]>([]);
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [moreInformation, setMoreInformation] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  const { t } = useTranslation();

  const handleSetInfo = (event: ChangeEvent<HTMLInputElement>) => {
    const infoType = event.target.id.toLowerCase();
    const value = event.target.value;

    switch (true) {
      case infoType.includes('first'):
        setFirstName(value);
        break;
      case infoType.includes('last'):
        setLastName(value);
        break;
      case infoType.includes('prefix'):
        setPhoneNumber([value, phoneNumber[1]]);
        break;
      case infoType.includes('number'):
        setPhoneNumber([phoneNumber[0], value]);
        break;
      case infoType.includes('email'):
        setEmail(value);
        break;
      case infoType.includes('address'):
        setAddress(value);
        break;
      case infoType.includes('more'):
        setMoreInformation(value);
        break;
      case infoType.includes('zip'):
        setZipCode(value);
        break;
      case infoType.includes('city'):
        setCity(value);
        break;
      case infoType.includes('state'):
        setState(value);
        break;

      default:
        break;
    }
  };

  const deliverySelection = (typeOfDelivery: string) => () => {
    setDeliveryType(typeOfDelivery);
  };

  const props: DeliveryProps[] = [
    {
      icon: box,
      iconAlt: t('box'),
      title: t('order.homeDelivery'),
      workDays: t('order.workDays'),
      price: t('free'),
      isHome: true,
      deliverySelection: deliverySelection,
    },
    {
      icon: truck,
      iconAlt: t('truck'),
      title: t('order.postServices'),
      workDays: t('order.workDays'),
      price: 'From 9.99 €',
      deliverySelection: deliverySelection,
    },
    {
      icon: gift,
      iconAlt: t('gift'),
      title: t('order.SendOrderAsGift'),
      workDays: t('order.workDays'),
      price: t('free'),
      deliverySelection: deliverySelection,
    },
  ];

  const sendCustomerInformation = () => {
    //TODO send information to the backend and move to the next step
    console.log(
      deliveryType,
      firstName,
      lastName,
      phoneNumber,
      email,
      address,
      moreInformation,
      zipCode,
      city,
      state,
    );
  };

  const handleReturn = () => {
    setDeliveryType('');
  };

  return (
    <div className={styles.wrapper}>
      {deliveryType ? (
        <PersonalData
          handleSetInfo={handleSetInfo}
          sendInfo={sendCustomerInformation}
          back={handleReturn}
        />
      ) : (
        props.map((prop: DeliveryInfoProps) => (
          <DeliveryInfo {...prop} key={prop.title} />
        ))
      )}
    </div>
  );
};

export default Delivery;
