import React, { ChangeEvent, useState } from 'react';
import DeliveryInfo, {
  DeliveryInfoProps,
} from 'modules/order/components/DeliveryInfo';
import PersonalData from 'modules/order/components/PersonalData';
import gift from 'assets/svgs/Gift.svg';
import truck from 'assets/svgs/Truck.svg';
import box from 'assets/svgs/Box.svg';
import styles from './index.module.scss';

/* eslint-disable react/prop-types */

const Delivery = () => {
  const [deliveryType, setDeliveryType] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  // const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [moreInformation, setMoreInformation] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  const handleSetInfo = (event: ChangeEvent<HTMLInputElement>) => {
    const placeholder = event.target.placeholder.toLowerCase();
    const value = event.target.value;

    switch (true) {
      case placeholder.includes('first'):
        setFirstName(value);
        break;
      case placeholder.includes('last'):
        setLastName(value);
        break;
      case placeholder.includes('email'):
        setEmail(value);
        break;
      case placeholder.includes('address'):
        setAddress(value);
        break;
      case placeholder.includes('more'):
        setMoreInformation(value);
        break;
      case placeholder.includes('zip'):
        setZipCode(value);
        break;
      case placeholder.includes('city'):
        setCity(value);
        break;
      case placeholder.includes('state'):
        setState(value);
        break;

      default:
        break;
    }
  };

  const deliverySelection = (typeOfDelivery: string) => () => {
    setDeliveryType(typeOfDelivery);
  };

  const props = [
    {
      icon: box,
      iconAlt: 'box',
      title: 'HOME DELIVERY',
      workDays: 'Monday 30 October - Friday 3 November',
      price: 'Free',
      isHome: true,
      deliverySelection: deliverySelection,
    },
    {
      icon: truck,
      iconAlt: 'truck',
      title: 'POST SERVICES',
      workDays: 'Monday 30 October - Friday 3 November',
      price: 'From 9.99 €',
      deliverySelection: deliverySelection,
    },
    {
      icon: gift,
      iconAlt: 'gift',
      title: 'SEND AN ORDER AS A GIFT',
      workDays: 'Monday 30 October - Friday 3 November',
      price: 'Free',
      deliverySelection: deliverySelection,
    },
  ];

  const sendCustomerInformation = () => {
    console.log(
      firstName,
      lastName,
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
