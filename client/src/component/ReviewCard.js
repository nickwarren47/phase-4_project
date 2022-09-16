import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { Card } from 'flowbite-react';
import Reviews from './Reviews';

function ReviewCard({ destinations }) {

   const params = useParams();
   const destinationID = parseInt(params.id)
   const [destination, setDestination] = useState(null)

   useEffect(() => {
      fetch(`/destinations/${destinationID}`)
         .then(data => data.json())
         .then(data => {
            setDestination(data)
         });
   }, []);

   return (
      <>
         {destination ? (
            <div className='review-section'>
               <div className="max-w-sm review-card">
                  <Card imgSrc={destination.image_url}>
                     <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {destination.country_or_territory}
                     </h5>
                  </Card>
               </div>
               <div className="max-w-sm review-list">
                  <Reviews destination={destination} />
               </div>
            </div>

         ) : null};
      </>

   )
}

export default ReviewCard