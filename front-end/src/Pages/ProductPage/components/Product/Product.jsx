import React from 'react'
import { NavLink } from 'react-router-dom'
import { useCartContext } from "../../../../context/CartContext";
import AddToCartBtn from '../../../../components/AddToCartBtn/AddToCartBtn'
import RemoveFromCartBtn from '../../../../components/RemoveFromCartBtn/RemoveFromCartBtn'
import "./product.css"
import Rating from '../../../../components/Rating/Rating';
const Product = ({ data, id }) => {
    const { cart } = useCartContext()
console.log("ttttt" , data)
    return (
        <div className="container pt-6">
            <div >
                <nav className="breadcrumb is-hidden-mobile mb-0 px-6" aria-label="breadcrumbs">
                    <ul>
                        <li ><NavLink to={"../home"} className='dark--text--color'>Home</NavLink></li>
                        <li ><NavLink to={"../market"} className='dark--text--color'>Market</NavLink></li>
                        <li className="is-active"><a href="#" aria-current="page">{data.title}</a></li>
                    </ul>
                </nav>
                <div className="">
                    <div className="columns is-mobile is-multiline m-0">
                        <div className="product-img column is-7-desktop is-5-tablet is-12-mobile p-5" >
                            <img src={`http://localhost:1337${data.image.data.attributes.url}`} />

                        </div>
                        <div className="column is-5-desktop is-7-tablet is-12-mobile py-6 ">
                            <h2 className="title">
                                {data.title}
                            </h2>
                            <Rating ratingArray={data.reviews.data}/>
                            <p className="subtitle">{data.desc}
                            </p>
                            <div className="categories my-4">
                                {data.categories.data.map((cat, i) =>
                                    <NavLink key={i} to={"../../market"} className=" is-primary px-2">
                                        {cat.attributes.name}
                                    </NavLink>

                                )}
                            </div>
                            <div className=" is-flex  is-flex-direction-column mt-4">
                                <h4 className='is-size-2 mr-3'>
                                    ${data.price}
                                </h4>


                                {cart?.some(item => item.id == id) ? <RemoveFromCartBtn id={id} /> :
                                    <AddToCartBtn data={data} id={id} />}

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>)
}

export default Product