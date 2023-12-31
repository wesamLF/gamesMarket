import React from 'react'
import { NavLink } from "react-router-dom";
import "./CategoryCard.css"
import { motion } from "framer-motion"

const CategoryCard = ({ CategoryName, desc, imgSrc }) => {
    return (

        <NavLink to={"/market"} className="column m-0 is-3-desktop is-4-tablet is-12-mobile is-clickable  ">
            <motion.div
                initial={{ x: 150 , opacity :0}}
                whileInView={{ x: 0 , opacity: 1}}
                transition={{ duration: 1 }}>
                <div className="card CategoryCard dark--bg--color" >
                    <div className="p-2">
                        <header className="card-header ">
                            <p className="card-header-title is-flex is-justify-content-center is-align-items-center light--text--color">
                                {CategoryName}
                            </p>
                        </header>
                        <div className="card-image">
                            <figure className="image iss-256x256">
                                <img src={imgSrc} />
                            </figure>

                        </div>
                        <div className='category-card-desc'>
                            <span>{desc}</span>
                        </div>

                    </div>

                </div>
            </motion.div>
        </NavLink>
    )
}

export default CategoryCard