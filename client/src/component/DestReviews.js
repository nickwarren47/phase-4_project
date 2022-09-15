import React from 'react'
import ReviewCard from './ReviewCard'

function DestReviews({ destinations }) {

  const destinationReviewList = destinations.map(dest => (
    <ReviewCard   
      country_or_territory={dest.country_or_territory}
      image_url={dest.image_url}
      // reviews={dest.reviews}
      key={dest.id}
      id={dest.id}/>
  ))
  
  return (
    <div>
      {destinationReviewList}
    </div>
  )
}

export default DestReviews