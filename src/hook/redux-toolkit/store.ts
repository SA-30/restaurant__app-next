import { configureStore } from '@reduxjs/toolkit';
import tableReducer from './features/table-slice'
import { TypedUseSelectorHook, useSelector } from 'react-redux';

export const store = configureStore({
    reducer: {
        tableReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector;