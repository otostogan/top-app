import { TextareaProps } from './Textarea.props';
import styles from './Textarea.module.css';
import cn from 'classnames';
import { ForwardedRef, forwardRef } from 'react';

export const Textarea = forwardRef(({error, className, ...props }: TextareaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
	return (
		<div className={cn(className, styles.textAreaWrapper)}>
			<textarea ref={ref} className={cn(styles.textarea, {
					[styles.error]: error
				})} 
				{...props} 
			/>
			{error && 
			<span className={styles.errorMessage}>
				{error.message}
			</span>
			}

		</div>
	);
});