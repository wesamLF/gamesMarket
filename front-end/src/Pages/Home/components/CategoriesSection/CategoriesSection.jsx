import React from 'react'
import CategoryCard from '../CategoryCard/CategoryCard'

const CategoriesSection = () => {

    return (
        <>

            <div className='hero is-fullheight-with-navbar is-flex is-align-content-center is-justify-content-center is-flex-wrap-wrap'>
                <div className="is-clipped" style={{ padding: "50px 100px 50px 100px", width: "100%" }}>
                    <div className="title is-flex is-justify-content-center is-align-items-center mb-6">
                        <p className='is-size-3 dark--text--color'>Categories</p>
                    </div>
                    <div className="columns is-multiline is-mobile">
                        <CategoryCard
                            CategoryName={"Action"}
                            desc={"pump up your adrenaline with our wide variety of action games with special prices"}
                            imgSrc={"/assets/images/action.jpg"} />
                        <CategoryCard
                            CategoryName={"FPS"}
                            desc={"first-person shooter games, enjoy our wide variety of games with special prices"}
                            imgSrc={"/assets/images/fps.jpg"}  />
                        <CategoryCard
                            CategoryName={"Horror"}
                            desc={"our prices will make you jump scared!"} 
                            imgSrc={"/assets/images/horror.jpg"} />
                        <CategoryCard
                            CategoryName={"Card Game"}
                            desc={"paper is dangerous! so.... try out some of our card games."} 
                            imgSrc={"/assets/images/cardGames.jpg"} />
                    </div>
                </div>

            </div>

        </>)
}

export default CategoriesSection