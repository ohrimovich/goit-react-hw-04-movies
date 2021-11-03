import { NavLink } from "react-router-dom";
import s from './Navigation.module.scss'


const Navigation = () => {
    return (
        <nav className={s.navContainer}>
            <ul className={s.list}>
            <li className={s.item}>
                    <NavLink
                        exact to='/'
                        className={s.link}
                        activeClassName={s.activeLink}
                    >Home
                    </NavLink>
                </li>
            <li className={s.item}>
                    <NavLink
                        to='/movies'
                        className={s.link}
                        activeClassName={s.activeLink}
                    >Movies</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;