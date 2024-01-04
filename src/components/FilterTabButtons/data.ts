import { TFunction } from 'i18next';
import { Subcategory } from 'redux/types';

export type ButtonsProps = {
  name: string;
  value: Subcategory | string;
};

export const getButtons = (t: TFunction<string, string>): ButtonsProps[] => [
  {
    name: t('categoryItems.all'),
    value: 'CLOTHING',
  },
  {
    name: t('categoryItems.jackets'),
    value: Subcategory.JACKETS,
  },
  {
    name: t('categoryItems.fieldJackets'),
    value: Subcategory.CARDIGANS,
  },
  {
    name: t('categoryItems.overshirts'),
    value: Subcategory.OVERSHIRTS,
  },
  {
    name: t('categoryItems.quiltedCoats'),
    value: Subcategory.QUILTED,
  },
];
