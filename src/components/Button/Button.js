import React from 'react'
import { Link } from "react-router-dom";

const Button = ({ title, link }) => {
    return (
        <>
            <Link to={link} className="text-pink-500 rounded-full py-3 px-6 border-2 border-pink-500 text-cente">
                {title}
            </Link>
        </>
    )
}

export default Button
