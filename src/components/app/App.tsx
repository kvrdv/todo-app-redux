import React, { FC, ReactElement, useEffect } from 'react';
import styles from './App.module.scss';
import Header from '../header/Header';
import Add from '../add/Add';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import TodoList from '../todo-list/TodoList';
import Filter from '../filter/Filter';
import { ITodo } from 'src/types';

const App: FC = (): ReactElement => {
	const [filter, setFilter] = useState('all');
	const [data, setData] = useState<ITodo[]>([]);

	const onDeleted = (id: string): void => {
		setData(() => {
			const index = data.findIndex((element) => element.id === id);
			const newData = [...data.slice(0, index), ...data.slice(index + 1)];
			return newData;
		});
	};

	const onToggleDone = (id: string): void => {
		setData(() => {
			const idx = data.findIndex((el) => el.id === id);
			const oldItem = data[idx];
			const newItem = { ...oldItem, done: !oldItem.done };
			const newData = [
				...data.slice(0, idx),
				newItem,
				...data.slice(idx + 1),
			];

			return newData;
		});
	};

	const create = (label: string): ITodo => {
		return {
			id: uuidv4(),
			label,
			done: false,
		};
	};

	const onAdded = (label: string): void => {
		const newTodo = create(label);

		setData(() => {
			const newData = [...data, newTodo];
			return newData;
		});
	};

	const onClear = () => {
		setData(() => {
			const newData = data.filter((item) => !item.done);
			return newData;
		});
	};

	const onFilterChange = (filter: string): void => {
		setFilter(filter);
	};

	const filtering = (items: ITodo[], filter: string): ITodo[] => {
		console.log('filter');
		switch (filter) {
			case 'active':
				return items.filter((item) => !item.done);
			case 'done':
				return items.filter((item) => item.done);
			default:
				return items;
		}
	};

	const visibleItems = filtering(data, filter);
	const doneCount = data.filter((element) => element.done).length;
	const activeCount = data.length - doneCount;

	useEffect(() => {
		setData([
			create("Don't eat"),
			create("Don't sleep"),
			create('Look good'),
			create("Don't speak"),
		]);
	}, []);

	return (
		<div className={styles.container}>
			<Header title="todos" active={activeCount} done={doneCount} />

			<Filter
				filter={filter}
				onFilterChange={onFilterChange}
				onClear={onClear}
			/>
			<Add onAdded={onAdded} />

			<TodoList
				todos={visibleItems}
				onDeleted={onDeleted}
				onToggleDone={onToggleDone}
			/>
		</div>
	);
};

export default App;
