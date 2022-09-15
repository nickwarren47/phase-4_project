import React from 'react'

function DestinationCard({ country_or_territory, continent, flag_url }) {

  return (
    <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-6 ml-auto mr-auto">
      <img src={flag_url} alt={country_or_territory} className="object-scale-down h-24 w-48" />
      <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{country_or_territory}</h5>
      <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{continent}</p>
      <a href="#" className="inline-flex items-center text-blue-600 hover:underline">
        Reviews
        <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
      </a>
   </div>
  )
}

export default DestinationCard