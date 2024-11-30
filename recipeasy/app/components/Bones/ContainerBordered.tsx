export default function ContainerBordered({
    children,
}:{
    children: any;
}) {
    return(
        <div className="bg-white px-8 pb-8 pt-4 my-4 border-4 border-black h-auto max-w-6xl mx-auto flex flex-col justify-center items-center">
            {children}
        </div>
    ) 
}
