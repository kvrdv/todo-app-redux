import { FC } from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {
	Checkbox,
	IconButton,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from '@mui/material';
import { TodoProps } from './todo.types';
import { useAppDispatch } from '../../hooks/hooks';
import { deleteTodo, toggleComplete } from '../../store/slices/todosSlice';

const Todo: FC<TodoProps> = ({ todo }) => {
	const dispatch = useAppDispatch();

	const onDeleted = (event: React.MouseEvent) => {
		dispatch(deleteTodo(event.currentTarget.id));
	};

	const onToggleCompleted = (event: React.MouseEvent) => {
		dispatch(toggleComplete(event.currentTarget.id));
	};

	return (
		<ListItem
			secondaryAction={
				<IconButton
					edge="end"
					aria-label="delete"
					onClick={onDeleted}
					id={todo.id}
				>
					<DeleteOutlineIcon />
				</IconButton>
			}
			disablePadding
		>
			<ListItemButton
				role={undefined}
				onClick={onToggleCompleted}
				dense
				id={todo.id}
			>
				<ListItemIcon>
					<Checkbox
						edge="start"
						checked={todo.completed}
						tabIndex={-1}
						disableRipple
						inputProps={{ 'aria-labelledby': todo.id }}
					/>
				</ListItemIcon>
				<ListItemText id={todo.id} primary={todo.label} />
			</ListItemButton>
		</ListItem>
	);
};

export default Todo;
