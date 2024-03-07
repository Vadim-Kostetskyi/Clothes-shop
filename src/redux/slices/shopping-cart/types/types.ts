import { RootState } from 'redux/store';
import { Color, Size } from 'types/types';

export type AddItemPayload = {
  id: string;
  title: string;
  vendorCode: number;
  colour: Color;
  size: Size;
  price: number;
  count?: number;
};

export type GetQuantityUniqueProducts = {
  state: RootState;
  id: string;
  colour: Color;
  size: Size;
};

export { Color, Size } from 'types/types';
