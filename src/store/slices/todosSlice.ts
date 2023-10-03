import { createSlice, } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from '../../types/types';

const initialState: Todo[] = [
	{
		id: '1',
		weekday: 'Monday',
		label: "Don't eat on Monday",
		completed: false,
	},
	{
		id: '2',
		weekday: 'Tuesday',
		label: "Don't sleep on Tuesday",
		completed: false,
	},
	{
		id: '3',
		weekday: 'Wednesday',
		label: 'Look good on Wednesday',
		completed: false,
	},
	{
		id: '4',
		weekday: 'Thursday',
		label: "Don't speak on Thursday",
		completed: false,
	},
	{
		id: '5',
		weekday: 'Friday',
		label: "Don't jump on Friday",
		completed: false,
	},
	{
		id: '6',
		weekday: 'Saturday',
		label: "Don't swim on Saturday",
		completed: false,
	},
	{
		id: '7',
		weekday: 'Sunday',
		label: "Don't run on Sunday",
		completed: false,
	},
];

const todosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addTodo: {
			reducer: (state, action: PayloadAction<Todo>) => {
				state.push(action.payload);
			},
			prepare: (label: string, weekday: string) => ({
				payload: {
					id: uuidv4(),
					weekday,
					label,
					completed: false,
				},
			}),
		},
		deleteTodo(state, action: PayloadAction<string>) {
			const index = state.findIndex(({ id }) => id === action.payload);
			state.splice(index, 1);
		},
		toggleComplete(state, action: PayloadAction<string>) {
			const index = state.findIndex(({ id }) => id === action.payload);
			state[index].completed = !state[index].completed;
		},
		clearCompleted(state) {
			return (state = state.filter((todo) => !todo.completed));
		},
	},
});

export const { addTodo, deleteTodo, toggleComplete, clearCompleted } =
	todosSlice.actions;

export default todosSlice.reducer;
