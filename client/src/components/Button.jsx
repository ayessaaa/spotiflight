function Button({text, className, onClick, fit=false}) {
    return (
        <div>
            <button onClick={onClick} className={`bg-[#597BC5] text-white hover:scale-105 transition-all px-10 py-2 text-lg font-bold rounded-3xl ${className} cursor-pointer`}>{text}</button>
        </div>
    )
}

export default Button
