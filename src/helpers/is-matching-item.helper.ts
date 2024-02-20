import { type AddItemPayload } from 'redux/slices/shopping-cart';
import { type Color, type Size } from 'types/types';

export const isMatchingItem = (
  { id, colour, size }: Pick<AddItemPayload, 'id' | 'colour' | 'size'>,
  productId: string,
  productColour: Color,
  productSize: Size,
): boolean =>
  id === productId && colour === productColour && size === productSize;
