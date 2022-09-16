import React, { useState, useContext } from "react";
import { Button, Modal } from 'flowbite-react';
import ReviewForm from './ReviewForm';
import { AuthContext } from "../Context/AuthContext"
import { useNavigate } from "react-router-dom";


function Reviews({ destination }) {

    const [listOfReviews, setListOfReviews] = useState(destination.reviews)
    const [modalShown, setModalShown] = useState(false);
    const [reviewToUpdate, setReviewToUpdate] = useState(null);
    const navigate = useNavigate();

    const { user } = useContext(AuthContext);

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
        if (user) {
            setReviewToUpdate(null)
            toggleModal()
        }
        else {
            navigate("/login")
        }
    }

    function onReviewUpdate (updatedReview) {
        const list = listOfReviews.map(review => {
            if (review.id === updatedReview.id) {
                return updatedReview
            }
            return review
        })
        setListOfReviews(list);
        setModalShown(false);
    }

    return (
        <div className="bg-white my-4 p-2 border-2 rounded-md border-black">
            <h2><b>✨Reviews✨</b></h2>
            <ul>
                {listOfReviews.map((review, index) => {
                    return (
                        <li className="border-b-4 border-black" key={index}>
                            <div>
                                <div>
                                    <b>{review.user.username} </b>
                                    ({review.user.location}) says:
                                </div>
                                <div> Rating: <b>{review.rating}/5</b> </div>
                                <div> City: <b>{review.city}</b> </div>
                                <div> Length of Stay (days): {review.length_of_stay} </div>
                                <div>
                                    <b>Instagram Moment!</b> <img className="border-2 border-black" src={review.image_url} alt="review"/>
                                </div>
                                <div> <b>Review:</b> {review.review}</div>
                                <div> <b>Pro-Tip!</b> {review.pro_tip} </div>
                                {user && (user.id === review.user.id) ?
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
                    {reviewToUpdate ? 
                    (<ReviewForm 
                        onReviewUpdate={onReviewUpdate}
                        destinationID={destination.id} 
                        isModal={true} 
                        reviewToUpdate={reviewToUpdate} />
                    ) : (
                        <ReviewForm 
                        onReviewAdd={onReviewAdd} 
                        destinationID={destination.id} 
                        isModal={true} />
                    ) }
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Reviews