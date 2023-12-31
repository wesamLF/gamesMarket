import React from 'react'
import { AccessTime, CreditCard, ContactSupport, BatteryChargingFull } from "@material-ui/icons"
import "./aboutus.css"
import AboutUsCard from './AboutUsCard/AboutUsCard'

const AboutUs = () => {
    return (
        <div className='container p-6 has-background-dadnger is-flex is-justify-content-center is-align-items-center'>
            <div className="has-background-indfo pt-6">
                <div className="mb-2">
                    <h2 className="is-size-2 dark--text--color has-text-weight-bold	">
                        About us
                    </h2>
                </div>
                <div className=" mb-6">
                    <span>
                        We are an e-commerce company specializes on selling digital
                        games for all the platforms and consoles with the best prices.
                        With multiple payment methods and fast customer support.
                    </span>
                </div>
                <div className="">
                    <div className="columns ">
                        <AboutUsCard title={"No More Waitning!"} animationTime={1}>
                            <AccessTime />
                        </AboutUsCard>
                        <AboutUsCard title={"Safe Payment Methods!"} animationTime={1.5}>
                            <CreditCard />
                        </AboutUsCard>
                    </div>
                    <div className="columns ">
                        <AboutUsCard title={"24/7 Customer Support!"} animationTime={2}>
                            <ContactSupport />
                        </AboutUsCard>
                        <AboutUsCard title={"Gear Up!!"} animationTime={2.5}>
                            <BatteryChargingFull />
                        </AboutUsCard>
                    </div>

                </div>


            </div>
        </div >
    )
}

export default AboutUs