import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { Card } from 'flowbite-react';

function ReviewCard({ id, country_or_territory, image_url, reviews }) {

   // const params = useParams();
   //  const destinationID = parseInt(params.id)
   //  const [destination, setDestination] = useState(null)

   //  useEffect(() => {
   //      fetch(`/${destinationID}`)
   //          .then(data => data.json())
   //          .then(data => console.log(data))
   //  }, [])

   return (
      <div className="max-w-sm">
         <Card imgSrc={image_url}>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
               {country_or_territory}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
               Reviews
            </p>
         </Card>
      </div>
   )
}

export default ReviewCard