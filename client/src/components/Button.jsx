function Button({text, className}) {
    return (
        <div>
            <button className={`hover:scale-105 transition-all w-full py-2 text-lg font-bold rounded-3xl ${className} cursor-pointer`}>{text}</button>
        </div>
    )
}

export default Button
