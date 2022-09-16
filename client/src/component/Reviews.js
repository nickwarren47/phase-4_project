import React, { useState, useContext, useEffect } from "react";


function Reviews({ destination }) {

    const [listOfReviews, setListOfReviews] = useState(destination.reviews)
    const [userReview, setUserReview] = useState("")

    useEffect(() => {
        fetch(`/destinations/${destination.id}`)
            .then(data => data.json())
            .then(data => {
                console.log(data)
            })
    }, [])


    return (
        <div>
            <ul>
                {listOfReviews.map((review, index) => {
                    return (
                        <li key={index}>
                            <div>
                                <span> <b>{review.username}</b> </span>
                                <span> ({review.location}) says: </span>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Reviews