import styles from './Splitter.module.scss';
import { SplitterProps } from './Splitter.props';
import cn from 'classnames';

export const Splitter = ({ className }: SplitterProps): JSX.Element => {
	return <div className={cn(styles.splitter, className)} />;
};
