import { RootState } from 'redux/store';

export const category = (state: RootState) => state.auth.userInfo;
