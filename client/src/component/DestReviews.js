import React from 'react'
import ReviewCard from './ReviewCard'

function DestReviews({ destinations, destReviews }) {

  console.log(destReviews)

  const destinationReviewList = destReviews.map(dest => (
    <ReviewCard   
      country_or_territory={dest.country_or_territory}
      image_url={dest.image_url}
      reviews={dest.reviews}
      key={dest.id}
      id={dest.id}
      />
  ))
  
  return (
    <div>
      {destinationReviewList}
    </div>
  )
}

export default DestReviews