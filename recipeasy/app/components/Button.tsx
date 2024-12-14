import { Link } from "@remix-run/react";

export default function Button({
    action,
    link = '',
    label,
    style,
    disabled = false,
    className,
    onClick
}: {
    action: 'link' | 'function' | 'submit';
    link?: string;
    label: string;
    style: 'primary' | 'secondary' | 'tertiary' | 'link';
    disabled?: boolean;
    className?: string;
    onClick?: () => void;
}) {


    return (
        <>
            {action === 'link' && (
                <Link to={link} className={`button button-${style} ${className}`} aria-label={`link to ${label}`}>
                    {label}
                </Link>
            )}
            {action === 'submit' && (
                <button type="submit" className={`button button-${style} ${className}`} aria-label={`submit form to add new recipe`} disabled={disabled}>
                    {label}
                </button>
            )}
            {action === 'function' && (
                <button type="button" className={`button button-${style} ${className}`} aria-label={label} disabled={disabled} onClick={onClick}>
                    {label}
                </button>
            )}
        </>
    )
}