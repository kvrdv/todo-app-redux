import { Todo } from 'types/types';

const filtering = (todos: Todo[], activeFilter: string | null) => {
	switch (activeFilter) {
		case 'Active':
			return todos.filter((todo) => !todo.completed);
		case 'Completed':
			return todos.filter((todo) => todo.completed);
		case 'All':
		default:
			return todos;
	}
};

export default filtering;
