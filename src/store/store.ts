import { configureStore } from '@reduxjs/toolkit';
import filtersReducer from './slices/filtersSlice';
import todosReducer from './slices/todosSlice';

export const store = configureStore({
	reducer: {
		filters: filtersReducer,
		todos: todosReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
