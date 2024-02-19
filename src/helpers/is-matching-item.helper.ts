import { type AddItemPayload } from 'redux/slices/shopping-cart';
import { type Color, type Size } from 'types/types';

export const isMatchingItem = (
  item: AddItemPayload,
  id: string,
  colour: Color,
  size: Size,
): boolean => item.id === id && item.colour === colour && item.size === size;
