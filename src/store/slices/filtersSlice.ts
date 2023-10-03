import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type FiltersState = {
	activeDay: string;
	activeFilter: string;
}

const initialState: FiltersState = {
	activeDay: 'Monday',
	activeFilter: 'Active',
};

export const filtersSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		setWeekday: (state, action: PayloadAction<string>) => {
			state.activeDay = action.payload;
		},
		setFilter: (state, action: PayloadAction<string>) => {
			state.activeFilter = action.payload;
		},
	},
});

export const { setWeekday, setFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
