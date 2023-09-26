import { FC, useEffect } from 'react';
import Header from '../header/Header';
import Add from '../add/Add';
import { useState } from 'react';
import TodoList from '../todo-list/TodoList';
import Filter from '../filter/Filter';
import { ITodo } from 'src/types';
import GlobalStyle from 'src/assets/styles/global';
import { Box } from '@mui/material';
import { createTodo, filtering } from './app.utils';

const App: FC = () => {
	const [filter, setFilter] = useState<string | null>('all');
	const [data, setData] = useState<ITodo[]>([]);

	const onDeleted = (id: string): void => {
		setData(() => {
			const index = data.findIndex((element) => element.id === id);
			const newData = [...data.slice(0, index), ...data.slice(index + 1)];
			return newData;
		});
	};

	const onToggleCompleted = (id: string): void => {
		setData(() => {
			const idx = data.findIndex((el) => el.id === id);
			const oldItem = data[idx];
			const newItem = { ...oldItem, completed: !oldItem.completed };
			const newData = [
				...data.slice(0, idx),
				newItem,
				...data.slice(idx + 1),
			];

			return newData;
		});
	};

	const onAdded = (label: string): void => {
		const newTodo = createTodo(label);
		setData(() => {
			const newData = [...data, newTodo];
			return newData;
		});
	};

	const handleClear = () => {
		setData(() => {
			const newData = data.filter((item) => !item.completed);
			return newData;
		});
	};

	const handleFilter = (
		event: React.MouseEvent<HTMLElement, MouseEvent>,
		newFilter: string
	) => {
		setFilter(newFilter);
	};

	const visibleItems = filtering(data, filter);
	const completedCount = data.filter((element) => element.completed).length;
	const activeCount = data.length - completedCount;

	useEffect(() => {
		setData([
			createTodo("Don't eat"),
			createTodo("Don't sleep"),
			createTodo('Look good'),
			createTodo("Don't speak"),
		]);
	}, []);

	return (
		<Box
			sx={{
				boxShadow: 3,
				borderRadius: '16px',
				padding: '1.3rem',
				m: '0 auto',
				width: '600px',
			}}
		>
			<GlobalStyle />
			<Header activeCount={activeCount} completedCount={completedCount} />
			<Filter
				filter={filter}
				onFilterChange={handleFilter}
				onClearCompleted={handleClear}
			/>
			<Add onAdded={onAdded} />
			<TodoList
				todos={visibleItems}
				onDeleted={onDeleted}
				onToggleCompleted={onToggleCompleted}
			/>
		</Box>
	);
};

export default App;
