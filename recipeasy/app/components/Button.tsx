import { Link } from "@remix-run/react";

export default function Button({
    action,
    link = '',
    label,
    style,
    className,
} : {
    action: 'link' | 'function' | 'submit';
    link: string;
    label: string;
    style: 'primary' | 'secondary' | 'tertiary' | 'link';
    className?: string;
}) {
    

    return(
        <>
            {action === 'link' &&(
                <Link to={link} className={`button button-${style} ${className}`} aria-label={`link to ${label}`}>
                    {label}
                </Link>
            )}
        </>
    )
}