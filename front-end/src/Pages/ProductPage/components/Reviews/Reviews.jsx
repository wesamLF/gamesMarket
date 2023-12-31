import React from 'react'
import "./reviews.css"
import Review from '../Review/Review'
import AddReview from '../AddReview/AddReview'
const Reviews = ({ data }) => {
    return (
        <div className='reviews-sections mt-6'>
            <div className="container px-6 ">
                <div className="columns is-justify-content-space-between is-align-items-start is-relative">
                    <span className='column is-size-3 dark--text--color'>Rviews</span>
                    <div className="column">
                        <AddReview />
                    </div>
                </div>
                {data.map((d, i) => {
                    return <Review key={i}data={d} />
                })}


            </div>
        </div>
    )
}

export default Reviews