import React, { useState } from 'react'
import { AddShoppingCart, Star, StarOutline } from "@material-ui/icons"
import "./rating.css"

const Rating = ({ ratingArray, ratingNumber }) => {


    // in case we want to send a number to this component "<Review/>"
    if (ratingNumber) return <>
        <div className='rating-star is-flex is-align-items-center'>
            {[...Array(5)].map((s, i) => {
                const curr = i + 1
                return (
                    <span key={i}>
                        {curr <= ratingNumber ? <Star className='' /> : <StarOutline className='' />}
                    </span>
                )
            })}
        </div></>


    // in case no one rated the product
    if (ratingArray?.length == 0 || !ratingArray) return <>
        <div className='rating-star is-flex is-align-items-center'>
            <StarOutline className='' />
            <StarOutline className='' />
            <StarOutline className='' />
            <StarOutline className='' />
            <StarOutline className='' />
            <span className='is-size-7'> (0)</span>
        </div>

    </>


    // clac the reviews rating then divide it by the total number of reviews
    let totalStars = ratingArray.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.attributes.rating
    }, 0);
    const stars = totalStars / ratingArray.length

    return (
        <div className='rating-star is-flex is-align-items-center'>
            {[...Array(5)].map((s, i) => {
                const curr = i + 1
                return (
                    <span key={i}>
                        {curr <= stars ? <Star className='' /> : <StarOutline className='' />}
                    </span>
                )
            })}
            <span className='is-size-7'> ({ratingArray?.length})</span>
        </div>


    )
}

export default Rating