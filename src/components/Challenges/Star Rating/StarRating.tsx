import React, { useState } from 'react'

const StarRating: React.FC = () => {

    const[rating, setRating] = useState<number>(2)
    const[hoverRating, setHoverRating] = useState<number>(0)

    return (
        <div className='my-14'>
            <div className='flex justify-center items-center'>
                {[...Array(5)].map((star, index) => {
                    index += 1
                    return (
                        <button 
                            key={index}
                            className='text-5xl' 
                            role='button'
                            onClick={() => setRating(index)}
                            onMouseEnter={() => setHoverRating(index)}
                            onMouseLeave={() => setHoverRating(rating)}
                        >
                            <span>{(hoverRating || rating) >= index ? <p>&#9733;</p> : <p>&#9734;</p>}</span>
                        </button>
                    )
                })}
            </div>
        </div>
    )
}

export default StarRating