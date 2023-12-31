import React, {  useState } from 'react'
import "./Cart.css"
import CartItem from '../CartItem/CartItem'
import { ShoppingCart } from "@material-ui/icons"
import { useCartContext } from "../../context/CartContext";

const Cart = () => {
console.log("cart renderrrr")
    const [isOpen, setIsOpen] = useState(false)
    const { cart, setCart } = useCartContext()
    const calcTotalPrice = () => {
        const prices = cart.map(item => item.price)
        return prices.reduce((accum, curr) => {
            const temp = accum + curr
            return ((Math.trunc(temp * 100) / 100))

        }, 0)

    }
    return (
        <>
            <div className='cart-icon px-3 mr-3 is-flex is-justify-content-center is-align-items-center is-clickable'>
                <ShoppingCart onClick={() => setIsOpen(!isOpen)} />
                {cart.length === 0 ? "" : <div className='cart-counter'>{cart.length} </div>}
            </div>

            <div className={`modal ${isOpen ? "is-active" : ""}`}>
                <div className="modal-background" onClick={() => setIsOpen(!isOpen)}></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Modal title</p>
                        <button className="delete" aria-label="close" onClick={() => setIsOpen(!isOpen)}></button>
                    </header>
                    <section className="modal-card-body">
                        {cart.length === 0 && <h1>Cart Is Empty!</h1>}
                        {cart.map((item, i) => <CartItem key={i} data={item} cart={cart} setCart={setCart} setIsOpen={setIsOpen} />)}


                    </section>
                    <footer className="modal-card-foot is-flex is-justify-content-space-between">
                        <button className="button checkout-btn">Check Out </button>
                        <span className='is-size-4'>Total Price : {calcTotalPrice()} $</span>
                    </footer>
                </div>
            </div>

        </>
    )
}

export default Cart