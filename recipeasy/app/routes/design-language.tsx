export default function DesignLanguage() {

    return (
        <div className="design-language-page">
            
            <div className="flex flex-col gap-4 max-w-4xl mx-auto my-10">
                <h5 className="text-xl">Typography</h5>
                <hr />
                <h1>Heading 1</h1>
                <h2>Heading 2</h2>
                <h3>Heading 3</h3>
                <h5 className="text-xl mt-10">Colors</h5>
                <hr />
                <div className="flex flex-row gap-4">
                    <div className="bg-primary w-32 h-32 border border-gray flex items-center justify-center">
                        <span className="text-base">Primary</span>
                    </div>
                    <div className="bg-primary-dark w-32 h-32 border border-gray flex items-center justify-center">
                        <span className="text-base text-white">Primary Dark</span>
                    </div>
                </div>
                <div className="flex flex-row gap-4">
                    <div className="bg-secondary w-32 h-32 border border-gray flex items-center justify-center">
                        <span className="text-base text-white">Secondary</span>
                    </div>
                </div>
                <div className="flex flex-row gap-4">
                    <div className="bg-tertiary w-32 h-32 border border-gray flex items-center justify-center">
                        <span className="text-base text-white">Tertiary</span>
                    </div>
                    <div className="bg-tertiary-light w-32 h-32 border border-gray flex items-center justify-center">
                        <span className="text-base text-black">Tertiary Light</span>
                    </div>
                </div>
                <div className="flex flex-row gap-4">
                    <div className="bg-focus w-32 h-32 border border-gray flex items-center justify-center">
                        <span className="text-base text-white">Focus</span>
                    </div>
                </div>
                <div className="flex flex-row gap-4">
                    <div className="bg-black w-32 h-32 border border-gray flex items-center justify-center">
                        <span className="text-base text-white">Black</span>
                    </div>
                    <div className="bg-gray w-32 h-32 border border-gray flex items-center justify-center">
                        <span className="text-base text-white">Gray</span>
                    </div>
                    <div className="bg-white w-32 h-32 border border-gray flex items-center justify-center">
                        <span className="text-base text-black">White</span>
                    </div>
                </div>
            </div>
        </div>
    )

}