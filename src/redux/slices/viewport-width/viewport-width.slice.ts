import { CaseReducer, PayloadAction, createSlice } from '@reduxjs/toolkit';
import { SliceName } from '../libs/enums/slice-name.enum';
import { SetViewportWidthPayload } from './libs/types/types';

type ViewportWidthState = {
  viewportWidth: number;
};

const initialState: ViewportWidthState = {
  viewportWidth: window.innerWidth,
};

const setViewportWidth: CaseReducer<
  ViewportWidthState,
  PayloadAction<SetViewportWidthPayload>
> = (state, action) => {
  state.viewportWidth = action.payload.viewportWidth;
};

const { reducer, actions, name } = createSlice({
  name: SliceName.VIEWPORT_WIDTH,
  initialState,
  reducers: {
    setViewportWidth,
  },
});

export { reducer, actions, name };
