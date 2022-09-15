import React from 'react'
import { Link } from 'react-router-dom';

function DestReviews({ handleDestClick, reviews, country_or_territory, image_url, destReviews }) {
   
  return (
    <Link to='/destination-reviews' onClick={handleDestClick}>
      {country_or_territory}
      
    </Link>
  )
}

export default DestReviews