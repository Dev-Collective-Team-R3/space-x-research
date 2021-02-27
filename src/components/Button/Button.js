import React from 'react'
import { Link } from "react-router-dom";

const Button = ({ title, link }) => {
    return (
        <>
            <Link to={link} className="text-white rounded-full py-3 px-6 border-2 border-white text-center">
                {title}
            </Link>
        </>
    )
}

export default Button
