import { Box, Typography } from '@mui/material';
import { FC } from 'react';

interface HeaderProps {
	activeCount: number;
	completedCount: number;
}

const Header: FC<HeaderProps> = ({
	activeCount,
	completedCount,
}: HeaderProps) => {
	return (
		<Box
			sx={{
				mb: '1.3rem',
				pb: '1.3rem',
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'space-between',
				borderBottom: '2px solid #1976d2'
			}}
		>
			<Typography
				variant="h1"
				sx={{
					color: '#1976d2',
					fontSize: '3rem',
				}}
			>
				Todo App
			</Typography>

			<Typography
				variant="h3"
				sx={{
					color: 'rgba(0, 0, 0, 0.4)',
					fontSize: '1.3rem',
					fontWeight: '600',
					alignSelf: 'flex-end',
				}}
			>
				{activeCount} more to do, {completedCount} done{' '}
			</Typography>
		</Box>
	);
};

export default Header;
