import { Link } from "@remix-run/react";
import Logo from "./Logo";
import Button from "../Button";

export default function Index() {
    return(
        <div className="header">
            <Link to="/">
                <Logo />
            </Link>
            <Button action="link" link="/recipes/add" label="Add a Recipe" style="primary"/>
        </div>
    )
}