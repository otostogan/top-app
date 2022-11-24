import { RaitingProps } from "./Raiting.props";
import styles from "./Raiting.module.css";
import cn from "classnames";
import StarIcon from "./Star.svg";
import { useEffect, useState, KeyboardEvent} from "react";

export const Rating = ({isEditable = false, rating, setRating, ...props}: RaitingProps):JSX.Element => {

    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    const constructRaiting = (currentRating: number) => {

        const updatedArray = ratingArray.map((r:JSX.Element, i: number) => {
            return(
                <span
                    className={cn(styles.star, {
                        [styles.filled]: i < currentRating,
                        [styles.editable]: isEditable
                    })}
                    onMouseEnter={() => changeDisplay(i + 1)}
                    onMouseLeave={() => changeDisplay(rating)}
                    onClick={() => onClick(i + 1)}
                >
                    <StarIcon
                        tabIndex={isEditable ? 0 : -1}
                        onKeyDown={(e: KeyboardEvent<SVGAElement>) => isEditable && handlerSpace(i + 1, e)}
                    />
                </span>
            );
        });

        setRatingArray(updatedArray);

    };

    const changeDisplay = (i: number) => {
        if(!isEditable){
            return;
        }
        constructRaiting(i);
    };

    const onClick = (i: number) => {
        if(!isEditable || !setRating){
            return;
        }
        setRating(i);
    };

    const handlerSpace = (i: number, e:KeyboardEvent<SVGAElement>) => {
        if(e.code != 'Space' || !setRating){
            return;
        }
        setRating(i);
    };

    useEffect(() => {
        constructRaiting(rating);
    }, [rating]);

    return (
        <div
            {...props}
        >
            {ratingArray.map((r:JSX.Element, i: number) => (
                <span key={i}>
                    {r}
                </span>
            ))}
        </div>
    );
};