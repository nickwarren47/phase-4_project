import React, { useState } from 'react'
import DestinationCard from './DestinationCard'

function Destinations({ destinations }) {

   const [search, setSearch] = useState("")

   const searchResults = destinations.filter(dest => (
      dest.country_or_territory.toLowerCase().includes(search.toLowerCase()) ||
      dest.continent.toLowerCase().includes(search.toLowerCase())
   ))

   function handleSearch(e) {
      setSearch(e.target.value)
   }

   const destinationList = searchResults.map(dest => (
      <DestinationCard
         country_or_territory={dest.country_or_territory}
         continent={dest.continent}
         flag_url={dest.flag_url}
         key={dest.id}
         id={dest.id}
      />
      )
   )
   
  return (

    <div>
      <input
        onChange={handleSearch}
        type="text"
        placeholder="Search Destinations"
      />
      <div className="flex flex-wrap justify-center">
         {destinationList}
      </div>
   </div>
  )
}

export default Destinations;