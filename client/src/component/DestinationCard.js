import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import DestReviews from './DestReviews'

function DestinationCard({ country_or_territory, continent, flag_url, handleDestClick, image_url, reviews, destReviews }) {

  // function handleDestCardClick() {
  //   history.push(``)
  // }

  return (
    <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-6 ml-auto mr-auto">
      <img src={flag_url} alt={country_or_territory} className="object-scale-down h-24 w-48" />
      <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{country_or_territory}</h5>
      <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{continent}</p>
      <DestReviews handleDestClick={handleDestClick} image_url={image_url} reviews={reviews} country_or_territory={country_or_territory} />
   </div>
  )
}

export default DestinationCard