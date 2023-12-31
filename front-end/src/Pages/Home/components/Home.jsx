import React from 'react'
import "./Home.css"
import Hero from './Hero/Hero'
import TrendingSection from '../../../components/TrendingSection/TrendingSection'
import CategoriesSection from './CategoriesSection/CategoriesSection'
const Home = () => {
    console.log("home reloaded")

    return (
    <>
        <Hero />
        <TrendingSection />
        <CategoriesSection />

    </>
    )
}

export default Home