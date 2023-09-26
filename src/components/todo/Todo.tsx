import {
	Checkbox,
	IconButton,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from '@mui/material';
import { FC } from 'react';
import { ITodo } from 'src/types';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

interface TodoProps {
	todo: ITodo;
	onDeleted: () => void;
	onToggleCompleted: () => void;
}

const Todo: FC<TodoProps> = ({
	todo,
	onDeleted,
	onToggleCompleted,
}: TodoProps) => {
	return (
		<ListItem
			secondaryAction={
				<IconButton edge="end" aria-label="delete" onClick={onDeleted}>
					<DeleteOutlineIcon />
				</IconButton>
			}
			disablePadding
		>
			<ListItemButton role={undefined} onClick={onToggleCompleted} dense>
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
