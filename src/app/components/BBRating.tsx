import { Rating } from '@material-tailwind/react'
import React from 'react'

export default function BBRating() {
    const handleRating = (e:any) => {
        console.log(e.target.value)
    
        // other logic
      }
  return (
    <div className='App'>
    <Rating
      onClick={handleRating}
      onChange={handleRating}
      /* Available Props */
    />
  </div>
  )
}
