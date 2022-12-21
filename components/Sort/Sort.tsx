import { SortProps, SortEnum} from './Sort.props';
import styles from './Sort.module.css';
import cn from 'classnames';
import SortIcon from './sort.svg';
import { KeyboardEvent } from "react";

export const Sort = ({ sort, setSort, className, ...props }: SortProps): JSX.Element => {

	const onKeySort = (key:KeyboardEvent, sort: SortEnum) => {
		if(key.code == "Space" || key.code == "Enter"){
			key.preventDefault();
			setSort(sort);
		}
	};

	return (
		<div
			className={cn(styles.sort, className)}
			{...props}
		>
			<span
				tabIndex={0}
				onKeyDown={(key:KeyboardEvent) => onKeySort(key, SortEnum.Rating)}
				onClick={() => setSort(SortEnum.Rating)}
				className={cn({
					[styles.active]: sort === SortEnum.Rating
				})}
			>
				<SortIcon className={styles.sortIcon}/> По рейтингу
			</span>
			<span
				tabIndex={0}
				onKeyDown={(key:KeyboardEvent) => onKeySort(key, SortEnum.Price)}
				onClick={() => setSort(SortEnum.Price)}
				className={cn({
					[styles.active]: sort === SortEnum.Price
				})}
			>
				<SortIcon className={styles.sortIcon}/> По цене
			</span>
		</div>
	);
};