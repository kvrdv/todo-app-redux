import { useState } from 'react';
import { FC } from 'react';
import { TextField } from '@mui/material';

const Add: FC<{ onAdded(label: string): void }> = ({ onAdded }) => {
	const [label, setLabel] = useState('');

	const onLabelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setLabel(event.target.value);
	};

	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		onAdded(label);
		setLabel('');
	};

	return (
		<form onSubmit={onSubmit}>
			<TextField
				sx={{ width: '100%' }}
				id="outlined-controlled"
				label="What needs to de done?"
				variant="outlined"
				onChange={onLabelChange}
				value={label}
			/>
		</form>
	);
};

export default Add;
