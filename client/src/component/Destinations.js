import React from 'react'

function Destinations({destinations}) {

   const destinationList = destinations.map(dest => console.log(dest))


  return (

    <div>{destinationList}</div>
  )
}

export default Destinations