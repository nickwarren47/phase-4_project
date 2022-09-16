import React, { useState, useContext, useEffect } from "react";
import { Button, Modal } from 'flowbite-react';
import ReviewForm from './ReviewForm';
import { AuthContext } from "../Context/AuthContext"


function Reviews({ destination }) {

    const [listOfReviews, setListOfReviews] = useState(destination.reviews)
    const [modalShown, setModalShown] = useState(false);
    const [reviewToUpdate, setReviewToUpdate] = useState(null);

    const { user, signout } = useContext(AuthContext);


    function toggleModal() {
        setModalShown(!modalShown);
    }

    function onReviewAdd(data) {
        setListOfReviews([...listOfReviews, data])
        setModalShown(false);
    }

    function handleDelete(review) {
        const postReqObj = {
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
                "Accepts": "application/json",
            }
        }
        fetch(`/reviews/${review.id}`, postReqObj)
            .then(() => {
                let newList = [...listOfReviews]
                newList = newList.filter(item => item.id !== review.id)
                setListOfReviews(newList)
            })
    }

    function triggerUpdate (review) {
        setReviewToUpdate(review);
        setModalShown(true);
    }

    function handleAddReview () {
        setReviewToUpdate(null)
        toggleModal()
    }

    // useEffect(() => {
    //     if (reviewToUpdate.id && !modalShown) {
    //         setModalShown(true)
    //     }
    // }, [reviewToUpdate])

    // function handleUpdate (review, event) {
    //     event.preventDefault();

    //     fetch(`reviews/${animalId}`, {
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({
    //             "adopted?": true,
    //             "user_id": loginUserId,
    //         }),
    //     })
    //         .then((r) => r.json())
    //         .then((data) => {
    //             setAnimal(data)
    //         })
    // }

    return (
        <>
            <h2>Reviews</h2>
            <ul>
                {listOfReviews.map((review, index) => {
                    return (
                        <li className="border-b-4 border-black" key={index}>
                            <div>
                                <div>
                                    <b>{review.user.username} </b>
                                    ({review.user.location}) says:
                                </div>
                                <div> City: {review.city} </div>
                                <div> Length of Stay (days): {review.length_of_stay} </div>
                                <div>
                                    Kodak Moment! <img className="border-2 border-black" src={review.image_url} />
                                </div>
                                <div> Review: {review.review}</div>
                                <div> Pro-Tip! {review.pro_tip} </div>
                                {user.id === review.user.id ?
                                    (<div className="m-1 flex flex-wrap gap-2">
                                        <Button
                                            onClick={() => handleDelete(review)} 
                                            size="xs"
                                            color="failure">
                                            Delete
                                        </Button>
                                        <Button
                                            onClick={() => triggerUpdate(review)}
                                            size="xs"
                                            color="purple">
                                            Update Review!
                                        </Button>
                                    </div>
                                    ) : null}
                            </div>
                        </li>
                    )
                })}
            </ul>
            <div className="mt-3">
                <Button onClick={handleAddReview}>
                    Add Review
                </Button>
            </div>

            <Modal
                className="form-modal"
                show={modalShown}
                position="center"
                onClose={toggleModal}>
                <Modal.Header>
                    Add your Review for {destination.country_or_territory}!
                </Modal.Header>
                <Modal.Body>
                    <ReviewForm 
                        onReviewAdd={onReviewAdd} 
                        destinationID={destination.id} 
                        isModal={true} 
                        reviewToUpdate={reviewToUpdate} />
                </Modal.Body>
            </Modal>

        </>


    )
}

export default Reviews