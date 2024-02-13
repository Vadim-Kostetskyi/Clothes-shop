import React, { FC, useCallback, useMemo, useState } from 'react';
import SizeSelector from 'modules/product/components/SizeSelector';
import ColorSelection from 'modules/product/components/ColorSelection';
import AddToCartButton from 'modules/checkout/components/AddToCartButton';
import Accordion from 'modules/core/components/Accordion';
import { Size, Color } from 'types/types';
import BlackColor from 'assets/images/chooseColor/black.png';
import WhiteColor from 'assets/images/chooseColor/white.png';
import styles from './index.module.scss';
import { useTranslation } from 'react-i18next';

export interface ProductDetailsInfoProps {
  title?: string;
  price?: string;
  sizes?: Size[];
  description?: string;
  composition?: string;
  vendorCode?: number;
  addToFavorite: () => void;
  addToShoppingCart: () => void;
}

const clothesColors = [
  {
    label: Color.Black,
    content: BlackColor,
  },
  {
    label: Color.White,
    content: WhiteColor,
  },
];

const defaultSizes: Size[] = Object.values(Size);

const ProductDetailsInfo: FC<ProductDetailsInfoProps> = ({
  title,
  price,
  sizes,
  description,
  composition,
  vendorCode,
  addToFavorite,
  addToShoppingCart,
}) => {
  const [selectedSize, setSelectedSize] = useState<Size | undefined>();
  const [selectedColor, setSelectedColor] = useState<Color>(Color.Black);
  const [isError, setIsError] = useState(true);

  const { t } = useTranslation();

  const handleChangeSize = useCallback((_: string, size: Size) => {
    setSelectedSize(size);
    setIsError(false);
  }, []);

  const handleChangeColor = useCallback(
    (color: Color) => () => {
      setSelectedColor(color);
    },
    [],
  );

  const productDescription = useMemo(
    () => [
      {
        title: t('productDetails.description'),
        titleStyles: styles.submenu,
        listStyle: styles.listStyle,
        list: description,
      },
      {
        title: t('productDetails.composition'),
        titleStyles: styles.submenu,
        list: composition,
      },
    ],
    [],
  );

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>{title}</p>
      <p className={styles.ref}>
        {t('productDetails.ref')}. {vendorCode}
      </p>
      <p className={styles.price}>
        {price && parseFloat(price)}{' '}
        <span className={styles.currency}>{t('currency')}</span>
      </p>
      <div className={styles.colorBox}>
        <p className={styles.submenu}>{t('productDetails.selectColour')}</p>
        <ColorSelection
          colors={clothesColors}
          chosenColor={selectedColor}
          changeColor={handleChangeColor}
        />
      </div>
      <p className={styles.submenu}>{t('productDetails.selectSize')}</p>
      <div className={styles.sizeBox}>
        <SizeSelector
          parameters={defaultSizes}
          sizes={sizes}
          active={selectedSize}
          handleClick={handleChangeSize}
          isProductDetails={true}
        />
      </div>
      <AddToCartButton
        addToBag={addToShoppingCart}
        addToFavorite={addToFavorite}
        isError={isError}
      />
      {productDescription.map(props => (
        <div className={styles.accordionBox} key={props.title}>
          <Accordion {...props} />
        </div>
      ))}
    </div>
  );
};

export default ProductDetailsInfo;
