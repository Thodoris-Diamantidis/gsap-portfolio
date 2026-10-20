function StackBox({name, icon: Icon}) {
    return (
        <div className="flex flex-col items-center gap-3 p-4 h-full border border-amber-300/20 rounded-xl transition-colors duration-300 hover:border-amber-300/50 hover:bg-white/5">
            <div className="w-15 h-15 flex items-center justify-center bg-white/5 rounded-full text-2xl">
                <Icon aria-hidden="true"/>
            </div>
            <span className="text-gray-200 font-medium text-center">{name}</span>
        </div>
    )
}

export default StackBox
