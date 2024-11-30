export default function PageContainer({
    type,
    hasBackground,
    children,
} : { 
    type: 'standard' | 'centered'
    hasBackground?: boolean;
    children: any;
}) {
    const centeredStyles = "flex flex-col items-center justify-start p-20 min-h-screen w-full";
    return (
        <div className={`m-0 p-0 pb-6 w-full h-full ${hasBackground ? 'background-image' : ''}`}>
            <div className={` ${type === 'standard' ? 'p-20' : centeredStyles }`}>
                { children }
            </div>
        </div>

    
    )
}   