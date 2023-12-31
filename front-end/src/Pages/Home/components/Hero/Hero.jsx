import React from 'react'
import { Search } from "@material-ui/icons"
import "./Hero.css"
import { NavLink } from 'react-router-dom'
import { motion } from "framer-motion"

const Hero = () => {

    return (
        <>
            <div className="circles"></div>
            <div className={` container is-relative hero is-fullheight-with-navbar is-flex is-align-content-center is-justify-content-center is-flex-wrap-wrap`}>
                <div className=' p-6'>
                    <div className="columns is-multiline is-mobile m-0" >
                        <div className="column is-6-desktop is-6-tablet is-12-mobile mb-6 is-flex is-align-content-center is-justify-content-center is-flex-direction-column">
                            <div className="title py-5 is-size-1">
                                review games now!
                            </div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                                className="subtitle">
                                lurem luremluremluremluremlurem vluremlurem luremlurem luremluremluremlurem lurem
                            </motion.div>
                            <div className="dark--bg--color columns is-multiline is-mobile is-clipped	">
                                <motion.div
                                    initial={{ x: "-100" }}
                                    animate={{ x: 0 }}
                                    transition={{ duration: 1, type: "spring", stiffness: 100 }}
                                    className="column ">
                                    <NavLink to={"../market"} className="button is-fullwidth has-text-weight-bold has-text-white dark--text--color px-2">
                                        <Search className='mr-2 ' />Explore
                                    </NavLink>
                                </motion.div>
                            </div>

                        </div>
                        <div className="column p-0 is-6-desktop is-6-tablet is-12-mobile  is-flex is-align-content-center is-justify-content-center">
                            <figure className="image" style={{ height: "350px", zIndex: "10" }}>
                                <img src="/assets/images/gaming.svg" />
                            </figure>
                        </div>
                    </div>
                </div>

            </div>
        </>

    )
}

export default Hero