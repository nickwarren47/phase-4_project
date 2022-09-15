import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from "flowbite-react"

function DestinationCard({ country_or_territory, continent, flag_url, handleDestClick, image_url, reviews, destReviews }) {

  let navigate = useNavigate()

  function handleDestCardClick() {
    navigate("/destination-reviews")
  }

  return (
    <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-6 ml-auto mr-auto">
      <img src={flag_url} alt={country_or_territory} className="object-scale-down w-48 h-auto border border-black" />
      <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{country_or_territory}</h5>
      <p className="font-medium text-black cursor-pointer mb-3 dark:text-gray-400" >{continent}</p>
      <div className="flex flex-wrap gap-2">
        <Button onClick={handleDestCardClick} gradientMonochrome="success">
          Reviews
        </Button>
      </div>
    </div>
  )
}

export default DestinationCard