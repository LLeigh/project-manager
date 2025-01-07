export default function Tooltip({
    text,
}: {
    text: string;
}) {
    return(
        <span className="absolute hidden group-hover:flex bg-primary text-black text-2xs text-nowrap px-2 py-0.5 -bottom-6 rounded">
            {text}        
        </span>
    )
}