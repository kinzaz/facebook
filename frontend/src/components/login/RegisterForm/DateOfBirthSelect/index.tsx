import { useDate } from '../../../../hooks/useDate';
import styles from '../style.module.scss';
import { DateOfBirthSelectProps } from './DateOfBirthSelect.props';

export const DateOfBirthSelect = ({
	handleRegisterChange,
	bDay,
	bMonth,
	bYear,
}: DateOfBirthSelectProps): JSX.Element => {
	const { days, months, years } = useDate();

	return (
		<div className={styles.grid}>
			<select name="bDay" onChange={handleRegisterChange} value={bDay}>
				{days.map((day, i) => (
					<option value={day} key={i}>
						{day}
					</option>
				))}
			</select>
			<select name="bMonth" onChange={handleRegisterChange} value={bMonth}>
				{months.map((month, i) => (
					<option value={month} key={i}>
						{month}
					</option>
				))}
			</select>
			<select name="bYear" onChange={handleRegisterChange} value={bYear}>
				{years.map((year, i) => (
					<option value={year} key={i}>
						{year}
					</option>
				))}
			</select>
		</div>
	);
};
