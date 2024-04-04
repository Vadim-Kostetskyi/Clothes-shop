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
  const [phoneNumber, setPhoneNumber] = useState<string[]>([]);
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [moreInformation, setMoreInformation] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

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
