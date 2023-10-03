import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import styles from './header.styles';
import Counter from '../counter/Counter';
import logo from '../../assets/images/logo.svg';

const Header: FC = () => {
	return (
		<Box sx={styles.box}>
			<Box sx={styles.logoBox}>
				<img
					src={logo}
					style={{ width: 50 }}
					alt="weekclick brand logo"
				/>
				<Typography variant="h1" sx={styles.h1}>
					Weekclick
				</Typography>
			</Box>

			<Counter />
		</Box>
	);
};

export default Header;
