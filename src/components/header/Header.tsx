import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import styles from './header.styles';
import Counter from '../counter/Counter';

const Header: FC = () => {
	return (
		<Box sx={styles.box}>
			<Box sx={styles.logoBox}>
				<Typography variant="h1" sx={styles.h1}>
					Todo App
				</Typography>
			</Box>
			<Counter />
		</Box>
	);
};

export default Header;
