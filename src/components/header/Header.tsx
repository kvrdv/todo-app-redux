import { FC } from 'react';
import styles from './Header.module.scss';

export interface HeaderProps {
	title: string;
	active: number;
	done: number;
}

const Header: FC<HeaderProps> = ({ title, active, done }: HeaderProps) => {
	return (
		<div className={styles.container}>
			<h1>{title}</h1>
			<h2>
				<span className={styles.count}>{active}</span> more to do,{' '}
				<span className={styles.count}>{done}</span> done
			</h2>
		</div>
	);
};

export default Header;
