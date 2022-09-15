import React from 'react'
import { Card } from 'flowbite-react';

function ReviewCard({ country_or_territory, image_url, reviews }) {

   console.log(reviews)

   
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