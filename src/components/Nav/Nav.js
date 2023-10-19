import { NavLink } from "react-router-dom";
import "./_nav.scss";

export default function Nav() {
    return (
        <nav className="navContainer">
            <ul>
                <li>
                    <NavLink
                        to={`/`}
                        className={({ isActive }) =>
                            isActive
                                ? "navContainer__homeActive"
                                : "navContainer__home"
                        }
                    >
                        Accueil
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={`/about`}
                        className={({ isActive }) =>
                            isActive
                                ? "navContainer__aboutActive"
                                : "navContainer__about"
                        }
                    >
                        A propos
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
