import clsx from 'clsx';
import styles from './Todo.module.scss';
import { FC } from 'react';
import { ITodo } from 'src/types';

interface TodoProps {
	todo: ITodo;
	onDeleted: () => void;
	onToggleDone: () => void;
}

const Todo: FC<TodoProps> = ({ todo, onDeleted, onToggleDone }: TodoProps) => {
	return (
		<li className={clsx(styles.container, { [styles.done]: !!todo.done })}>
			<span id={todo.id} onClick={onToggleDone}>
				{todo.label}
			</span>
			<button className={styles.button} onClick={onDeleted}>
				Delete
			</button>
		</li>
	);
};

export default Todo;
