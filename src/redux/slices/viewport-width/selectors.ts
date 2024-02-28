import { name as viewportWidthName } from './viewport-width.slice';
import { type RootState } from '../../store';

export const selectViewportWidth = (state: RootState): number =>
  state[viewportWidthName].viewportWidth;
