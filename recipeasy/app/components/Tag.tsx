import Icon from "./Icon";

export default function Tag({
    name,
    size = "base",
}: {
    name: string;
    size?: "base" | "small";
}) {

    const smallSizeClasses ="text-2xs";
    const baseSizeClasses="text-xs"

    return (
        <div className={`tag ${size === "small" ? smallSizeClasses : baseSizeClasses}`}>
            <span>{name}</span>
            {/* <Icon icon="close" className="h-5 w-5" /> */}
        </div>
    )
}