import { FC } from 'react';
import Todo from '../todo/Todo';
import { v4 as uuidv4 } from 'uuid';
import { List } from '@mui/material';
import styles from './todo-list.styles';
import { useAppSelector } from '../../hooks/hooks';
import filtering from '../../utils/utils';

const TodoList: FC = () => {
	const activeWeekday = useAppSelector((state) => state.filters.activeDay);
	const activeFilter = useAppSelector((state) => state.filters.activeFilter);

	const allTodos = useAppSelector((state) => state.todos);
	let visibleTodos = filtering(allTodos, activeFilter);

	if (activeWeekday !== 'All') {
		visibleTodos = visibleTodos.filter(
			({ weekday }) => weekday === activeWeekday
		);
	}

	return (
		<List sx={styles.list}>
			{visibleTodos.map((todo) => {
				return <Todo key={uuidv4()} todo={todo} />;
			})}
		</List>
	);
};

export default TodoList;
