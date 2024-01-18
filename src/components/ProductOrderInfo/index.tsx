import React, { FC, useCallback, useState } from 'react';
import SizeSelector from 'components/SizeSelector';
import ColorSelection from 'components/ColorSelection';
import AddToBagButton from 'components/AddToBagButton';
import Accordion from 'components/Accordion';
import { Size, Color } from 'types';
import black from '../../assets/images/chooseColor/black.png';
import white from '../../assets/images/chooseColor/white.png';
import styles from './index.module.scss';
import { useTranslation } from 'react-i18next';

export interface ItemPageProps {
  id: string;
  title: string;
  price: number;
  sizes: Size[];
  description: string;
  composition: string;
}

const clothesColors = [
  {
    label: Color.Black,
    content: black,
  },
  {
    label: Color.White,
    content: white,
  },
];

const defaultSizes: Size[] = Object.values(Size);

const ProductOrderInfo: FC<ItemPageProps> = ({
  title,
  price,
  sizes,
  description,
  composition,
  id,
}) => {
  const [selectedSize, setSelectedSize] = useState<Size | undefined>();
  const [selectedColor, setSelectedColor] = useState<Color>(Color.Black);
  const [isError, setIsError] = useState(true);

  const { t } = useTranslation();

  const handleChangeSize = useCallback((parameter: string, size: Size) => {
    setSelectedSize(size);
    setIsError(false);
  }, []);

  const handleChangeColor = useCallback((color: Color) => {
    setSelectedColor(color);
  }, []);

  const addToShoppingCart = useCallback(() => {
    // TODO: add the function of adding an item to the shopping bag
    console.log(id, selectedColor, selectedSize);
  }, [id, selectedColor, selectedSize]);

  const addToFavorite = useCallback(() => {
    // TODO: add the function of adding an item to the favorite
    console.log(id, selectedColor, selectedSize);
  }, [id, selectedColor, selectedSize]);

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>{title}</p>
      <p className={styles.ref}>
        {t('productOrder.ref')}. {id}
      </p>
      <p className={styles.price}>
        {price} <span className={styles.currency}>{t('currency')}</span>
      </p>
      <div className={styles.colorBox}>
        <p className={styles.submenu}>{t('productOrder.selectColour')}</p>
        <ColorSelection
          colors={clothesColors}
          chosenColor={selectedColor}
          changeColor={handleChangeColor}
        />
      </div>
      <p className={styles.submenu}>{t('productOrder.selectSize')}</p>
      <div className={styles.sizeBox}>
        <SizeSelector
          parameters={defaultSizes}
          sizes={sizes}
          active={selectedSize}
          handleClick={handleChangeSize}
          isProductOrder={true}
        />
      </div>
      <AddToBagButton
        addToBag={addToShoppingCart}
        addToFavorite={addToFavorite}
        isError={isError}
      />
      <div className={styles.accordionBox}>
        <Accordion
          title={t('productOrder.description')}
          titleStyles={styles.submenu}
          listStyle={styles.listStyle}
          list={description}
        />
      </div>
      <div className={styles.accordionBox}>
        <Accordion
          title={t('productOrder.composition')}
          titleStyles={styles.submenu}
          list={composition}
        />
      </div>
    </div>
  );
};

export default ProductOrderInfo;
