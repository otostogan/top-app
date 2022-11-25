import { useContext } from "react";
import { AppContext } from "../../context/app.context";
import { MenuProps } from "./Menu.props";

export const Menu = ({...props}: MenuProps):JSX.Element => {

    const {menu, setMenu, firstCategory} = useContext(AppContext);

    return (
        <div {...props}>
            <ul>
				{menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
			</ul>
        </div>
    );
};