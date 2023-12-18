import React, { FC } from 'react';
import PhotoSwitcher from 'components/PhotoSwitcher';
// import styles from './index.module.scss';

export interface ItemPageProps {
  // Icon?: ReactElement;
  // text?: string;
  // wrapperClass?: string;
  // labelCheckbox?: string;
}

const ProductPage: FC<ItemPageProps> = () => {
  return (
    <>
      <PhotoSwitcher />
    </>
  );
};

export default ProductPage;
