import React from 'react'

const Button = ({ title, link }) => {
    return (
        <div>
            <Link to={link}>{title}</Link>
        </div>
    )
}

export default Button
