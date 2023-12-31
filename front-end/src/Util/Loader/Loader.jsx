import React from 'react'
import "./Loader.css"
const Loader = () => {
    return (
        <div className="loader-holder is-flex is-justify-content-center is-align-items-center"
         style={{height:"100%"}}>
            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>)
}

export default Loader