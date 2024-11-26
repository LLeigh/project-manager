import { NavLink } from "@remix-run/react";

export default function Logo() {
    return (
        <div className="footer">
            <ul className="nav-links">
                <li className="nav-link">
                    <NavLink to="/">Home</NavLink>
                </li>
                <li className="nav-link">
                    <NavLink to="/recipes">Recipes</NavLink>
                </li>
                <li className="nav-link">
                    <NavLink to="/coming-soon">Meal Plans</NavLink>
                </li>
                <li className="nav-link">
                    <NavLink to="/coming-soon">Grocery Lists</NavLink>
                </li>
                <li className="nav-link">
                    <NavLink to="/coming-soon">About</NavLink>
                </li>
            </ul>
            <div>
                <span className="copyright">©2024 Recipeasy</span>
            </div>
        </div>
    )
}