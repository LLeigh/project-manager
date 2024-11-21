import { Link } from "@remix-run/react";
import Logo from "./Logo";

export default function Index() {
    return(
        <div className="header">
            <Link to="/">
                <Logo />
            </Link>
            <Link to="/recipes/add" className="button button-primary">
                Add a Recipe
            </Link>
        </div>
    )
}