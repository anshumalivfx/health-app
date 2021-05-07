import React from 'react'
import { NameCard } from './Doctorname-booking/NameCard'

export const homeContent = () => {
    return (

        <div className="container p-3 my-3 border">
            <div className="row">
                <div className="col-md-9">
                    <div className="container p-3 my-3 border">
                        <div className="justify-content-center text-center">
                        <NameCard />
                        </div>
                    </div>
                </div>
                <div className="col-md-3 order-first order-md-last">
                    <div className="container p-3 my-3 border"></div>
                </div>
            </div>
        </div>
    )
}
