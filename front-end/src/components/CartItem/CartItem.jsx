import React from 'react'
import { NavLink } from 'react-router-dom'
import "./CartItem.css"
import { DeleteForever } from "@material-ui/icons"

const CartItem = ({ data, cart, setCart, setIsOpen }) => {
    console.log("item render")
    const handleRemoveFromCart = () => {
        const newArray = cart.filter(item => item.id !== data.id)
        localStorage.setItem("cart", JSON.stringify(newArray))
        setCart(newArray)
    }
    

    return (
        <div className="shopping-cart-modal-body p-2 is-flex has-backgrsound-danger is-align-items-center is-justify-content-space-between is-flex-direction-row">
            <NavLink to={`../../product/${data.id}`} onClick={() => setIsOpen(false)}>
                <div className="is-flex is-flex-direction-row is-align-items-center is-clickable">
                    <figure className="item-image-container is-flex is-align-items-center">
                        <img src={data.img} />
                    </figure>
                    <div className="px-4 is-flex is-flex-direction-column outlined--text--color">
                        <h3 className="is-size-3 is-size-5-tablet is-size-6-mobile ">
                            {data.title}
                        </h3>
                        <h4 className=''>
                            {data.price}$
                        </h4>
                    </div>
                </div>
            </NavLink>
            <div className="is-clickable " onClick={handleRemoveFromCart}>
                <DeleteForever className='deletde-item-icon' />
            </div>
        </div>
    )
}

export default CartItem