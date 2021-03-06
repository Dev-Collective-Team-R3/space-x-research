import React from 'react'
import { Link } from "react-router-dom";

const Button = ({ title, link, active }) => {

    const focus_style = active ? "bg-pink-500 text-white" : "border border-pink-500 text-pink-500"
    const button_style = `rounded-full py-3 px-6 text-center hover:bg-pink-500 hover:text-white ${ focus_style }`
    
    return (
        <>
            <Link to={link} className={button_style}>
                {title}
            </Link>
        </>
    )
}

export default Button
