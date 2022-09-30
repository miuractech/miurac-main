import { createSlice } from '@reduxjs/toolkit';

const initialState = { toogleCta: '' };

const CTASlice = createSlice({
  name: 'cta',
  initialState,
  reducers: {
    openCTA(state, action) {
      state.toogleCta = action.payload;
    },
    closeCTA(state) {
      state.toogleCta = '';
    },
  },
});

export const { openCTA , closeCTA} = CTASlice.actions;
export default CTASlice.reducer;
