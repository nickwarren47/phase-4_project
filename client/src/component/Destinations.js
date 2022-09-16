import React, { useState } from 'react'
import DestinationCard from './DestinationCard'
import Globe from "../image/Globe.gif"

function Destinations({ destinations, handleDestClick }) {

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
         image_url={dest.image_url}
         reviews={dest.reviews}
         key={dest.id}
         id={dest.id}
         handleDestClick={handleDestClick} />
      )
   )
   
   return (

      <div className="bg-[url('https://www.toptal.com/designers/subtlepatterns/uploads/just-waves.png')]">
         <div className="flex items-center justify-center scale-100 p-5">
            <img className="rounded-lg border-4 border-black" src={Globe} alt="logo" />
         </div>
         <div className="flex items-center justify-center">
         <input
            className= "ml-5"
            onChange={handleSearch}
            type="text"
            placeholder="Search Destinations"/>
         </div>
         <div className="flex flex-wrap justify-center">
            {destinationList}
         </div>
      </div>
   )
}

export default Destinations;