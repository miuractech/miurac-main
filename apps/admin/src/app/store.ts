import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import userReduser from '../MIDL/AdminAuth/redux-slice';

const store = configureStore({
  reducer: {
    user: userReduser,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch; // Export a hook that can be reused to resolve types
export type RootState = ReturnType<typeof store.getState>;
export default store;
