import { TFunction } from 'i18next';
import { Category, Subcategory } from 'types/types';

export type ButtonsProps = {
  name: string;
  value: Category | Subcategory;
};

export const getButtons = (t: TFunction<string, string>): ButtonsProps[] => [
  {
    name: t('categoryItems.all'),
    value: Category.CLOTHING,
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
