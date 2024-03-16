import { Color, Size } from 'types/types';

export const generateKey = (id: string, color: Color, size: Size): string =>
  `${id}${color}${size}`;
