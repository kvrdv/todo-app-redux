import { FC } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Box, Button } from '@mui/material';

interface FilterProps {
	filter: string | null;
	onFilterChange: (
		event: React.MouseEvent<HTMLElement, MouseEvent>,
		newFilter: string
	) => void;
	onClearCompleted: () => void;
}

const Filter: FC<FilterProps> = ({
	filter,
	onFilterChange,
	onClearCompleted,
}: FilterProps) => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'space-between',
				m: '1.3rem 0',
				height: '2rem',
			}}
		>
			<ToggleButtonGroup
				color="primary"
				value={filter}
				exclusive
				onChange={onFilterChange}
				aria-label="Filter"
			>
				<ToggleButton value="all">All</ToggleButton>
				<ToggleButton value="active">Active</ToggleButton>
				<ToggleButton value="completed">Completed</ToggleButton>
			</ToggleButtonGroup>

			<Button color="error" variant="outlined" onClick={onClearCompleted}>
				Clear completed
			</Button>
		</Box>
	);
};

export default Filter;
