function Loader() {
    return (
        <div className="fixed z-50 inset-0 bg-[#1F1F1F] bg-opacity-80 flex justify-center items-center">
            <div className="h-12 w-12 mb-4 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-3 w-12 bg-green-500 rounded-full animate-spin"></div>
                </div>
            </div>
        </div>
    );
}

export default Loader;
