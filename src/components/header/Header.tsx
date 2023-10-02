import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import styles from './header.styles';
import Counter from '../counter/Counter';

const Header: FC = () => {
	return (
		<Box sx={styles.box}>
			<Typography variant="h1" sx={styles.h1}>
				Weekclick
			</Typography>
			<Counter />
		</Box>
	);
};

export default Header;
