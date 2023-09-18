import React, { useState } from 'react';
import { FC, ReactElement } from 'react';
import styles from './Add.module.scss';

const Add: FC<{ onAdded(label: string): void }> = ({
	onAdded,
}): ReactElement => {
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
		<form className={styles.container} onSubmit={onSubmit}>
			<input
				placeholder="What needs to de done?"
				type="text"
				value={label}
				onChange={onLabelChange}
			/>
		</form>
	);
};

export default Add;
