import React, { useState, useEffect } from 'react'

const LaunchSearch = ({ searchFunction }) => {
    
    const formSubmission = (e) =>  e.preventDefault()

    return (
        <div className="w-60 mx-auto flex justify-center mb-5 rounded-full border-2 border-pink-400 outline-none">
            <form action="" className="w-full" onSubmit={formSubmission}>
                <input 
                    type="text" 
                    className="px-10 py-1 w-full rounded-full text-center outline-none" 
                    placeholder="start typing to search launches" 
                    onChange={ searchFunction }
                />
            </form>
        </div>
    )
}

export default LaunchSearch
