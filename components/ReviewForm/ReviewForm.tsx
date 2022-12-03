import { ReviewFormProps } from './ReviewForm.props';
import styles from './ReviewForm.module.css';
import CloseIcon from './close.svg';
import cn from 'classnames';
import { Input } from '../Input/Input';
import { Rating } from '../Rating/Rating';
import { Textarea } from '../Textarea/Textarea';
import { Button } from '../Button/Button';
import { useForm, Controller } from 'react-hook-form';
import { IReviewForm } from './ReviewForm.interface';

export const ReviewForm = ({productId,className, ...props }: ReviewFormProps): JSX.Element => {
	const { register, control, handleSubmit, formState: {errors}} = useForm<IReviewForm>();

	const onSubmit = (data: IReviewForm) => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className={cn(styles.reviewForm, className)}
				{...props}
			>
				<Input 
					{...register('name', {required: {value: true, message: "Заполните имя!"}})}  
					error={errors.name}
					placeholder='Имя'
				/>
				<Input 
					{...register('title', {required: {value: true, message: 'Заполните заголовок отзыва!'}})}
					error={errors.title}
					placeholder='Заголовок отзыва'
					className={styles.title}
				/>
				<div className={styles.rating}>
					<span>Оценка:</span>
					<Controller
						control={control}
						name='rating'
						rules={{ required: {value: true, message: "Укажите рейтинг"}}}
						render={({ field }) => (
							<Rating error={errors.rating} ref={field.ref} isEditable rating={field.value} setRating={field.onChange} />
						)}
					/>
				</div>
				<Textarea  
					{...register('description', {required: {value: true, message: 'Заполните отзыв!'}})} 
					error={errors.description}
					placeholder='Текст отзыва' 
					className={styles.description} 
				/>
				<div className={styles.submit}>
					<Button appearance="primary">Отправить</Button>
					<span className={styles.info}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
				</div>
			</div>
			<div className={styles.success}>
				<div className={styles.successTitle}>Ваш отзыв отправлен</div>
				<div>
					Спасибо, ваш отзыв будет опубликован после проверки.
				</div>
				<CloseIcon className={styles.close} />
			</div>
		</form>
	);
};