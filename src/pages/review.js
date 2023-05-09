import React from "react"
import Steps from "@/components/Steps"

export default function Review( props ) {
    
    return (
        <>
            <Steps 
                dates={props.dateRange}
                step={props.step}
                setStep={props.setStep}
                selectedCar={props.selectedCar}
                setSelectedCar={props.setSelectedCar}
                days={props.carsResults.days}
                locations={props.locations}
                setLocations={props.setLocations}
                extras={props.extras}
                totalPrice={props.totalPrice}
                delivery={props.delivery}
            />

            <form className="flex flex-col text-sm">
                <div className="flex flex-col bg-white rounded-xl p-4 m-4 gap-3">
                    <strong>Personal Information</strong>
                    <div className="flex flex-col">
                        <label for="name">Name*</label>
                        <input id="name" type="text"/>
                    </div>
                    <div className="flex flex-col">
                        <label for="email">Email*</label>
                        <input id="email" type="email"/>
                    </div>
                    <div className="flex flex-col">
                        <label for="confirm-email">Confirm Email*</label>
                        <input id="confirm-email" />
                    </div>
                    <div className="flex flex-col">
                        <label for="tel">Phone number*</label>
                        <input id="tel" type="tel"></input>
                    </div>
                </div>

                <div className="flex flex-col bg-white rounded-xl p-4 m-4 gap-3">
                    <strong>Address Information</strong>
                    <div className="flex flex-col">
                        <label for="street">Address*</label>
                        <input id="street" type="text" />
                    </div>
                    <div className="flex flex-col">
                        <label for="postal">Postal Code*</label>
                        <input id="postal" type="text" />
                    </div>
                    <div className="flex flex-col">
                        <label for="city">City*</label>
                        <input id="city" type="text" />
                    </div>
                    <div className="flex flex-col">
                        <label for="country">Country*</label>
                        <input id="country" type="text" />
                    </div>
                </div>
            </form>
        </>
    )
}