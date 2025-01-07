import { Link } from "@remix-run/react";
import { ReactNode } from "react";

export default function Button({
    action,
    link = '',
    label,
    style,
    disabled = false,
    iconOnly = false,
    className,
    children,
    onClick
}: {
    action: 'link' | 'function' | 'submit';
    link?: string;
    label: string;
    style: 'primary' | 'secondary' | 'tertiary' | 'link' | 'icon-only';
    disabled?: boolean;
    iconOnly?: boolean;
    children?: ReactNode;
    className?: string;
    onClick?: () => void;
}) {


    return (
        <>
            {iconOnly ? (
                <>
                    {action === 'link' && (
                        <Link to={link} className={`button-icon-only button-${style} ${className}`} aria-label={`link to ${label}`}>
                            {children}
                        </Link>
                    )}
                    {action === 'submit' && (
                        <button type="submit" className={`button-icon-only button-${style} ${className}`} aria-label={`submit form to add new recipe`} disabled={disabled}>
                            {children}
                        </button>
                    )}
                    {action === 'function' && (
                        <button type="button" className={`button-icon-only button-${style} ${className}`} aria-label={label} disabled={disabled} onClick={onClick}>
                            {children}
                        </button>
                    )}
                </>

            )
                :
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
            }
        </>
    )
}