import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { Card } from 'flowbite-react';
import Reviews from './Reviews';

function ReviewCard({ destinations }) {

   
   const params = useParams();
   const destinationID = parseInt(params.id)
   const dest = destinations.find(dest => dest.id === destinationID)
   const [destination, setDestination] = useState("")

   useEffect(() => {
      fetch(`/destinations/${destinationID}`)
         .then(data => data.json())
         .then(data => setDestination(data))
   }, [])

   return (
      <div className="max-w-sm">
         <Card imgSrc={destination.image_url}>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
               {destination.country_or_territory}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
               <div>
                  <Reviews destination={dest} />
               </div>
            </p>

         </Card>
      </div>
   )
}

export default ReviewCard