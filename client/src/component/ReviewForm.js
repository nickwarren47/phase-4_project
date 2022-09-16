import React, { useState, useContext, useEffect } from "react"
import { Label, Select, TextInput, Textarea, Button } from "flowbite-react"
import { AuthContext } from "../Context/AuthContext"
import Review from "../image/Review.gif"

function ReviewForm({ destinations, destinationID, onReviewAdd, reviewToUpdate, isModal = false }) {

    console.log('reviewtoupdate', reviewToUpdate)
    const [countryID, setCountryID] = useState(destinationID)
    const [rating, setRating] = useState(1)
    const [city, setCity] = useState("")
    const [lengthOfStay, setLengthOfStay] = useState("")
    const [image, setImage] = useState("")
    const [review, setReview] = useState("")
    const [proTip, setProTip] = useState("")
    const { user } = useContext(AuthContext);

    useEffect(() => {
        if (reviewToUpdate !== null) {
            setRating(reviewToUpdate.rating)
            setCity(reviewToUpdate.city)
            setLengthOfStay(reviewToUpdate.length_of_stay)
            setImage(reviewToUpdate.image_url)
            setReview(reviewToUpdate.review)
            setProTip(reviewToUpdate.pro_tip)
        }
        else {
            setRating(1)
            setCity("")
            setLengthOfStay("")
            setImage("")
            setReview("")
            setProTip("")
        }
    }, [reviewToUpdate])

    const destinationOptions = destinations ? destinations
        .map(destination => {
            return (
                <option
                    key={destination.id}
                    value={destination.id}>
                    {destination.country_or_territory}
                </option>
            )
        }) : null;

    function handleSubmit(e) {
        e.preventDefault()
        fetch("/reviews", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "rating": rating,
                "image_url": image,
                "review": review,
                "pro_tip": proTip,
                "length_of_stay": lengthOfStay,
                "city": city,
                "destination_id": countryID
            }),
        })
            .then((r) => r.json())
            .then((data) => {
                if (onReviewAdd) {
                    onReviewAdd(data)
                }
                else {
                    alert("New review created!")
                }
            })
    }

    return (
        <div>
            {!isModal ? (
                <div className="flex items-center justify-center scale-100 p-5">
                    <img src={Review} alt="logo" />
                </div>
            ) : null}
            <div className={!isModal ? "p-5 mx-20 my-20 border-2 border-black" : ""}>
                {destinations ? (
                    <div id="select">
                        <div className="mb-2 block">
                            <Label
                                htmlFor="country"
                                value="Select your destination!" />
                        </div>
                        <Select
                            id="country"
                            required={true}
                            value={countryID}
                            onChange={(e) => setCountryID(e.target.value)}>
                            {destinationOptions}
                        </Select>
                    </div>
                ) : null}

                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="base"
                            value="Rating (1-5)" />
                    </div>
                    <TextInput
                        id="base"
                        type="number"
                        sizing="md"
                        min="1"
                        max="5"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)} />
                </div>
                <form className="flex flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="city"
                                value="City" />
                        </div>
                        <TextInput
                            id="city"
                            type="text"
                            placeholder="City"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            required={true} />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="length_of_stay"
                                value="Length of Stay" />
                        </div>
                        <TextInput
                            id="length_of_stay"
                            type="number"
                            placeholder="How long was your stay?"
                            value={lengthOfStay}
                            onChange={(e) => setLengthOfStay(e.target.value)}
                            required={true} />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="image"
                                value="Photo Moment!" />
                        </div>
                        <TextInput
                            id="image"
                            type="url"
                            placeholder="Kodak Moment"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            required={true} />
                    </div>
                    <div id="textarea">
                        <div className="mb-2 block">
                            <Label
                                htmlFor="review"
                                value="Review!" />
                        </div>
                        <Textarea
                            id="review"
                            placeholder="Leave a review..."
                            required={true}
                            value={review}
                            onChange={(e) => setReview(e.target.value)}
                            rows={4} />
                    </div>
                    <div id="textarea">
                        <div className="mb-2 block">
                            <Label
                                htmlFor="comment"
                                value="Pro-Tip! (Optional)" />
                        </div>
                        <Textarea
                            id="comment"
                            placeholder="Leave a professional tip..."
                            required={true}
                            value={proTip}
                            onChange={(e) => setProTip(e.target.value)}
                            rows={4} />
                    </div>
                </form>
                <div className="m-1">
                    <Button
                        color="dark"
                        pill={true}
                        onClick={handleSubmit}>
                        Submit
                    </Button>
                </div>
            </div>
        </div>
    )
}


export default ReviewForm