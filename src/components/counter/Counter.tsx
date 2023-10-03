import { Typography } from '@mui/material';
import { FC } from 'react';
import styles from './counter.styles';
import { useAppSelector } from '../../hooks/hooks';

const Counter: FC = () => {
	let todos = useAppSelector((state) => state.todos);
	const activeWeekday = useAppSelector((state) => state.filters.activeDay);

	todos = todos.filter(({ weekday }) => weekday === activeWeekday);

	const completedCount = todos.filter((element) => element.completed).length;
	const activeCount = todos.length - completedCount;

	return (
		<Typography variant="h3" sx={styles.typography}>
			{activeCount} to do / {completedCount} done on {activeWeekday}
		</Typography>
	);
};

export default Counter;
