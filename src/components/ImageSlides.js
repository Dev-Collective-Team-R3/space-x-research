import React, { useState, useEffect, useCallback } from 'react'
import { FaDotCircle } from 'react-icons/fa'

const ImageSlides = ({ images }) => {
    
    const [ imageCounter, setImageCounter ] = useState(0)

    const handleImageChange = useCallback(() =>{
        imageCounter < images.length - 1  ? setImageCounter(imageCounter+1) : setImageCounter(0)
    })

    const handleClick = (index) => {
        setImageCounter(index)
    }

    useEffect(()=>{
        const interval = setInterval(() => {
            handleImageChange()
        }, 3000);

        return ()=> clearInterval(interval)
    },[handleImageChange])

    return (
        <div>
            <img src={images[imageCounter]} alt="spacex slideshow" className="object-cover h-screen-3/4 w-2/3 ml-auto mr-auto"  onClick={handleImageChange} />            
            <div className="flex items-center justify-around mt-3">
                {
                    images.map((image, index) => (<span onClick={()=> handleClick(index)} key={index} className={`${index == imageCounter ? "text-xl" : "text-gray-300 text-xs cursor-pointer"} mx-5 mb-2`}><FaDotCircle /></span>))
                }
            </div>
        </div>
    )
}

export default ImageSlides
