import { PProps } from "./Tag.props";
import styles from "./Tag.module.css";
import cn from "classnames";

export const Tag = ({size = "m", children, color="ghost", href, className,...props}: PProps):JSX.Element => {
    return (
        <div
            className={cn(styles.tag, styles[size], styles[color])}
            {...props}
        >
        {
            href
                ? <a href={href}>{children}</a> 
                : <>{children}</>
        }
        </div>
    );
};