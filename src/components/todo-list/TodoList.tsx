import { FC } from 'react';
import Todo from '../todo/Todo';
import { ITodo } from 'src/types';
import { v4 as uuidv4 } from 'uuid';
import { List } from '@mui/material';

interface TodoListProps {
	todos: ITodo[];
	onDeleted: (id: string) => void;
	onToggleCompleted: (id: string) => void;
}

const TodoList: FC<TodoListProps> = ({
	todos,
	onDeleted,
	onToggleCompleted,
}: TodoListProps) => {
	return (
		<List
			sx={{
				mt: '1.3rem',
				p: 0,
			}}
		>
			{todos.map(({ id, label, completed }: ITodo) => {
				return (
					<Todo
						key={uuidv4()}
						todo={{ id, label, completed }}
						onDeleted={() => onDeleted(id)}
						onToggleCompleted={() => onToggleCompleted(id)}
					/>
				);
			})}
		</List>
	);
};

export default TodoList;
