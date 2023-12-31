import React from 'react'
import "./Review.css"
import DeleteReview from '../../../../components/deleteReview/DeleteReview'
import { useUserContext } from '../../../../context/UserContext'
import Rating from '../../../../components/Rating/Rating'
const Review = ({ data }) => {
    // const userName = data.users_permissions_user.data.username
    // const createdAt = data.createdAt
    // const desc = data.text
    // const rating = data.rating
    const { userInfo } = useUserContext()
    const checkIfReviewOwner = () => {
        if (data?.attributes?.users_permissions_user?.data?.id === userInfo?.id) return true
        else return false

    }
    return (
        <>
            <hr className='review-hr' />
            <div className={`review columns is-size-6 m-0 p-4 ${checkIfReviewOwner()&& "review-custom-bg"}`} >
                <div className="column is-one-fifth 
                 is-flex is-justify-content-start is-align-items-start is-flex-direction-column">
                    <span>{data.attributes.users_permissions_user.data.attributes.username}</span>
                    <span className='is-size-7'>{data.attributes.createdAt}</span>
                </div>
                <div className="column is-one-fifth 
                is-flex is-justify-content-center is-align-items-start">
                    <Rating ratingNumber={data.attributes.rating} /> 
                </div>
                <div className="column is-flex is-justify-content-start is-align-items-start">
                    {data.attributes.text}
                </div>
                {checkIfReviewOwner() && <DeleteReview userId={userInfo.id} reviewId={data.id} token={userInfo.token} />
 }
            </div>
        </>
    )
}

export default Review