import { FC } from 'react';
import Todo from '../todo/Todo';
import styles from './TodoList.module.scss';
import { ITodo } from 'src/types';

interface TodoListProps {
	todos: ITodo[];
	onDeleted: (id: string) => void;
	onToggleDone: (id: string) => void;
}

const TodoList: FC<TodoListProps> = ({
	todos,
	onDeleted,
	onToggleDone,
}: TodoListProps) => {
	return (
		<ul className={styles.list}>
			{todos.map(({ id, label, done }: ITodo) => {
				return (
					<Todo
						todo={{ id, label, done }}
						onDeleted={() => onDeleted(id)}
						onToggleDone={() => onToggleDone(id)}
					/>
				);
			})}
		</ul>
	);
};

export default TodoList;
