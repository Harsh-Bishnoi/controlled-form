import React from 'react'

const Button = ({ name, text, type, onchange, value }) => {
    return (
        <button name={name} value={value} type={type} onChange={onchange} className="px-7 rounded-4xl font-mono flex cursor-pointer mx-auto py-2 border-[1.5px] mt-6 border-black transition-all duration-500 ease-in-out hover:text-white hover:[box-shadow:inset_109px_0px_0_0_black]">
            {text}
        </button>
    )
}

export default Button