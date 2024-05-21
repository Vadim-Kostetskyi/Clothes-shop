import React, { FC, useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import SizeSelector from 'modules/product/components/SizeSelector';
import ColorSelection from 'modules/product/components/ColorSelection';
import AddToCartButton from 'modules/checkout/components/AddToCartButton';
import Accordion from 'modules/core/components/Accordion';
import PickerAccordion from '../PickerAccordion';
import ProductPrice from '../ProductPrice';
import { Size, Color, clothesColors } from 'types/types';
import { useGetViewportWidth } from 'hooks';
import { ViewportWidth } from 'utils/constants';
import styles from './index.module.scss';

export interface ProductDetailsInfoProps {
  title?: string;
  price?: string;
  sizes: Size[];
  description?: string;
  composition?: string;
  vendorCode?: number;
  addToFavorite: () => void;
  addToShoppingCart: () => void;
}

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
}): JSX.Element => {
  const [selectedSize, setSelectedSize] = useState<Size | undefined>();
  const [selectedColor, setSelectedColor] = useState<Color>(Color.Black);
  const [isError, setIsError] = useState(true);

  const { t } = useTranslation();
  const isMobile = useGetViewportWidth(ViewportWidth.TABLET);

  const handleChangeSize = useCallback((size: Size) => {
    setSelectedSize(size);
    setIsError(false);
  }, []);

  const handleChangeColor = useCallback((color: Color) => {
    setSelectedColor(color);
  }, []);

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

  const colorSelection = (
    <ColorSelection
      colors={clothesColors}
      chosenColor={selectedColor}
      changeColor={handleChangeColor}
    />
  );

  const sizeSelector = (
    <SizeSelector
      parameters={defaultSizes}
      sizes={sizes}
      active={selectedSize}
      handleClick={handleChangeSize}
      isProductDetails={true}
    />
  );

  const parameters = useMemo(
    () => [
      {
        title: t('productDetails.color'),
        list: <div className={styles.colorSelectionBox}>{colorSelection}</div>,
      },
      {
        title: t('productDetails.size'),
        list: (
          <>
            <p className={styles.textSize}>Select size</p>
            {sizeSelector}
          </>
        ),
      },
    ],
    [selectedColor, selectedSize],
  );

  const addToCartButton = (
    <AddToCartButton
      addToBag={addToShoppingCart}
      addToFavorite={addToFavorite}
      isError={isError}
    />
  );

  return (
    <div className={styles.wrapper}>
      {isMobile ? (
        <>
          <p className={styles.title}>
            {title}
            <span className={styles.currency}>
              {price}
              {t('currency')}
            </span>
          </p>
          <div className={styles.functionalBox}>
            {parameters.map((props, index) => (
              <PickerAccordion {...props} key={index} />
            ))}
            {addToCartButton}
          </div>
          <p className={styles.ref}>
            {t('productDetails.ref')}. {vendorCode}
          </p>
        </>
      ) : (
        <>
          <p className={styles.title}>{title}</p>
          <p className={styles.ref}>
            {t('productDetails.ref')}. {vendorCode}
          </p>
          {price ? (
            <ProductPrice price={parseFloat(price)} className={styles.price} />
          ) : null}
          <div className={styles.colorBox}>
            <p className={styles.submenu}>{t('productDetails.selectColour')}</p>
            {colorSelection}
          </div>
          <p className={styles.submenu}>{t('productDetails.selectSize')}</p>
          <div className={styles.sizeBox}>{sizeSelector}</div>
          {addToCartButton}
        </>
      )}
      {productDescription.map(props => (
        <div className={styles.accordionBox} key={props.title}>
          <Accordion {...props} />
        </div>
      ))}
    </div>
  );
};

export default ProductDetailsInfo;
