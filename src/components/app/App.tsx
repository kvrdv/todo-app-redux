import { FC } from 'react';
import Header from '../header/Header';
import TodoList from '../todo-list/TodoList';
import Filter from '../filter/Filter';
import { Box, Paper } from '@mui/material';
import styles from './app.styles';
import GlobalStyle from '../../assets/styles/global';
import Add from '../add/Add';

const App: FC = () => {
	return (
		<Paper variant="elevation" elevation={6} sx={styles.paper}>
			<GlobalStyle />
			<Header />

			<Filter />
			<Box>
				<Add />
				<TodoList />
			</Box>
		</Paper>
	);
};

export default App;
