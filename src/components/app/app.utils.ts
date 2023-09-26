import { ITodo } from 'src/types';
import { v4 as uuidv4 } from 'uuid';

const createTodo = (label: string): ITodo => {
	return {
		id: uuidv4(),
		label,
		completed: false,
	};
};

const filtering = (items: ITodo[], filter: string | null): ITodo[] => {
	switch (filter) {
		case 'all':
			return items;
		case 'active':
			return items.filter((item) => !item.completed);
		case 'completed':
			return items.filter((item) => item.completed);
		default:
			return items;
	}
};

export { createTodo, filtering };
