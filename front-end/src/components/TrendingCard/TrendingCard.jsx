import React from 'react'
import "./TrendingCard.css"
import { motion } from "framer-motion"
import { NavLink } from 'react-router-dom'

const TrendingCard = ({ data }) => {
    console.log("dat", data)
    return (
        <motion.div
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="column is-3-desktop is-4-tablet is-6-mobile  ">
            <div className="card is-clickable trending-main-card">

                <figure className="image trending-img">
                    <img src={`http://localhost:1337${data.image.data.attributes.url}`} />
                </figure>
                <NavLink to={"../../market"} className="p-2 main--text--color">
                    <div className="m-0">
                        <div className=" trending-title is-size-5 is-size-6-mobile has-text-centered">{data.title}</div>
                    </div>


                </NavLink>

            </div>
        </motion.div>


    )
}

export default TrendingCard