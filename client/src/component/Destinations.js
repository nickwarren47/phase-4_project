import React from 'react'
import DestinationCard from './DestinationCard'

function Destinations({ destinations }) {

   const destinationList = destinations.map(dest => (
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

    <div>{destinationList}</div>
  )
}

export default Destinations