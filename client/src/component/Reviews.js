import React, { useState } from "react"

function Reviews() {

    const [listOfReviews, setListOfReviews] = useState()
    const [userReview, setUserReview] = useState("")
    const [listOfMessages, setListOfMessages] = useState([])
    const [userComment, setUserComment] = useState("")
    const loginUserId = auth.user.id

    useEffect(() => {
        fetch(`http://localhost:9292/animals/${animal.id}/comments`)
            .then(data => data.json())
            .then(data => {
                setListOfMessages(data)
            })
    }, [])

    const addComment = (e) => {
        e.preventDefault()
        const postReqObj = {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Accepts": "application/json",
            },
            body: JSON.stringify({
                "message": userComment,
                "user_id": loginUserId,
                "animal_id": animal.id
            })
        }
        fetch(`http://localhost:9292/animals/${animal.id}/comments`, postReqObj)
            .then((res) => res.json())
            .then((data) => {
                setListOfMessages([...listOfMessages, data])
                setUserComment("")
            })
    }

    function removeComment(message) {
        const postReqObj = {
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
                "Accepts": "application/json",
            }
        }
        fetch(`http://localhost:9292/comments/${message.id}}`, postReqObj)
            .then((res) => res.json())
            .then((data) => {
                const newList = [...listOfMessages]
                let listingIndex = 0
                for (let i = 0; i < newList.length; i++) {
                    const currListing = newList[i]
                    if (currListing.id === message.id) {
                        listingIndex = i;
                        break;
                    }
                }
                newList.splice(listingIndex, 1)
                setListOfMessages(newList);
            })
    }

    return (
        <form class="w-full max-w-lg">
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                        First Name
                    </label>
                </div>
                <div class="w-full md:w-1/2 px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                        Last Name
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                </div>
                <div class="w-full md:w-1/2 px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                        Last Name
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                </div>
            </div>
        </form>
    )
}


export default Reviews