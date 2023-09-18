import { FC } from 'react';
import styles from './Filter.module.scss';

interface FilterProps {
	filter: string;
	onFilterChange: (filter: string) => void;
	onClear: () => void;
}

const Filter: FC<FilterProps> = ({
	filter,
	onFilterChange,
	onClear,
}: FilterProps) => {
	const elements = [
		{ name: 'all', label: 'All' },
		{ name: 'active', label: 'Active' },
		{ name: 'done', label: 'Done' },
	];

	return (
		<div className={styles.container}>
			<div>
				{elements.map(({ name, label }) => {
					// const isActive = filter === name;
					// const classNames = isActive ? 'btn-info' : 'btn-outline-secondary';

					return (
						<button
							className={styles.button}
							key={name}
							onClick={() => onFilterChange(name)}
						>
							{label}
						</button>
					);
				})}
			</div>

			<button className={styles.button} onClick={() => onClear()}>
				Clear completed
			</button>
		</div>
	);
};

export default Filter;
