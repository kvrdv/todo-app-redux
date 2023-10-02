import { FC, useState } from 'react';
import { TextField } from '@mui/material';
import styles from './add.styles';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { addTodo } from '../../store/slices/todosSlice';

const Add: FC = () => {
	const [label, setLabel] = useState('');
	const dispatch = useAppDispatch();
	const activeWeekday = useAppSelector((state) => state.filters.activeDay);

	const onLabelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setLabel(event.target.value);
	};

	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		dispatch(addTodo(label, activeWeekday));
		setLabel('');
	};

	return (
		<form onSubmit={onSubmit}>
			<TextField
				sx={styles.textField}
				id="outlined-controlled"
				label="Create new todo"
				variant="outlined"
				onChange={onLabelChange}
				value={label}
			/>
		</form>
	);
};

export default Add;
