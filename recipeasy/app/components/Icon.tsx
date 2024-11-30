
const icons = [
    "caret",
    "close",
    "eye-ball",
    "folder",
    "hastag",
];

export default function Icon({ 
    icon, 
    role = "img", 
    className 
} : {
    icon: string, 
    role?: string, 
    className: string
}) {
    return (
      <svg aria-label={icon} role={role} className={className} >
        <use href={`/assets/sprite.svg#${icon}`} />
      </svg>
    );
}