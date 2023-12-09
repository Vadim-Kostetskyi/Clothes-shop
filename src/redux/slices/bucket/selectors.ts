import { name as bucketName } from './bucket.slice';
import { type RootState } from '../../store';

export const selectQuantity = (state: RootState): number =>
  state[bucketName].quantity;
