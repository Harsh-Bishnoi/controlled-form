import React from 'react'

const Input = ({ inputClass, type, placeholder }) => {
    return (
        <>
            <input className={`sm:max-w-[400px] text-black text-gray-500 border-[1.5px] outline-0 w-full p-3 rounded-md font-mono font-bold ${inputClass}`} type={type} placeholder={placeholder} />
        </>
    )
}

export default Input