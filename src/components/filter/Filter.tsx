import { FC } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import styles from './filter.styles';
import { v4 as uuidv4 } from 'uuid';
import {
	Box,
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
} from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { availableWeekdays, availableFilters } from './filter.data';
import { setFilter, setWeekday } from '../../store/slices/filtersSlice';
import { clearCompleted } from '../../store/slices/todosSlice';

const Filter: FC = () => {
	const dispatch = useAppDispatch();
	const activeWeekday = useAppSelector((state) => state.filters.activeDay);
	const activeFilter = useAppSelector((state) => state.filters.activeFilter);

	const onWeekdayChange = (event: SelectChangeEvent<string>) => {
		dispatch(setWeekday(event.target.value));
	};

	const onFilterChange = (event: React.MouseEvent, value: any) => {
		dispatch(setFilter(value));
	};

	const onClearCompleted = (event: React.MouseEvent) => {
		dispatch(clearCompleted());
	};

	return (
		<Box sx={styles.box}>
			<FormControl sx={styles.formControl} size="small">
				<InputLabel id="demo-select-small-label">Weekday</InputLabel>
				<Select
					labelId="demo-select-small-label"
					id="demo-select-small"
					value={activeWeekday}
					label="Weekday"
					onChange={onWeekdayChange}
				>
					{availableWeekdays.map((day) => (
						<MenuItem key={uuidv4()} value={day}>
							{day}
						</MenuItem>
					))}
				</Select>
			</FormControl>

			<ToggleButtonGroup
				color="primary"
				value={activeFilter}
				exclusive
				onChange={onFilterChange}
				aria-label="Filter"
			>
				{availableFilters.map((filter) => (
					<ToggleButton key={uuidv4()} value={filter}>
						{filter}
					</ToggleButton>
				))}
			</ToggleButtonGroup>

			<Button color="error" variant="outlined" onClick={onClearCompleted}>
				Clear completed
			</Button>
		</Box>
	);
};

export default Filter;
