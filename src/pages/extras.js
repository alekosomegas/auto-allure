import React from "react";
import Steps from "@/components/Steps";
import Extra from "@/components/Extra";
import {useRouter} from "next/router"
import * as utils from '@/utils';

export default function Extras(props) {
    const [sameReturn, setSameReturn] = React.useState(false)
    const [showForm, setShowForm] = React.useState((props.locations.pick === "Other" || props.locations.drop === "Other"))
    const [tempLocationPick, setTempLocationPick] = React.useState(props.locations.pick)
    const [tempLocationDrop, setTempLocationDrop] = React.useState(props.locations.drop)
    const [tempPickCity, setTempPickCity] = React.useState("Limassol")
    const [tempDropCity, setTempDropCity] = React.useState("Limassol")
    const [tempPickCharge, setTempPickCharge] = React.useState()
    const [tempDropCharge, setTempDropCharge] = React.useState()
    const [submitted, setSubmitted] = React.useState(false)

    const router = useRouter();

    React.useEffect(() => {
        if (sameReturn) {setTempDropCity(tempPickCity)}
    }, [tempPickCity])

    let tempLocations = {pick: tempLocationPick , drop: tempLocationDrop}
    React.useEffect(() => {
        tempLocations = {pick: tempLocationPick , drop: tempLocationDrop}
        setTempPickCharge((utils.airportDelivery(tempLocations, tempPickCity, tempDropCity)["Pick-up charge"]))
        setTempDropCharge((utils.airportDelivery(tempLocations, tempPickCity, tempDropCity)["Drop-off charge"]))
    }, [tempLocationPick, tempLocationDrop, tempPickCity, tempDropCity])


    function handleSubmitAddress(event) {
        event.preventDefault()

        props.setLocations(prev => {
            return {
                ...prev,
                pick: tempLocationPick,
                drop: tempLocationDrop
            }
        })

        props.setDelivery(prev => {
            return {
                ...utils.airportDelivery(tempLocations, tempPickCity, tempDropCity)
            }
        })

        setSubmitted(!submitted)
    }

    function handleNextStep() {
        if(props.locations.pick === "Other" || props.locations.drop === "Other") {
            if(!submitted) {
                alert("Please fill in address")
                return
            }
        }
        props.setStep(4)
        router.push("/review")
    }

    React.useEffect(() => {
        Object.keys(props.extras).map(key => {
            props.setExtras(prev => {
                return {
                    ...prev,
                    [key] : utils.extrasPrice(key,props.carsResults.days)
                }
            })
        })}
    , [props.carsResults.days])

    function handleAddExtra(title) {
        props.setExtras(prev => {
            return {
                ...prev,
                [title] : prev[title] ? false : utils.extrasPrice(title, props.carsResults.days) //!prev[title]
            } 
        })
    }

    return (
        <div className="">
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
            <div className="m-5 md:grid md:grid-cols-2 gap-4">
                <div>
                    <Extra
                        title={"Additional Driver"}
                        days={props.carsResults.days}
                        icon={"/icons/icon-add-driver.png"}
                        info={"Allow anyone in the group to drive the rented car and give yourself the opportunity to enjoy the journey from the passenger’s seat."}
                        handleAddExtra={handleAddExtra}
                        extras={props.extras}
                    />
                </div>
                <div>
                    <Extra
                        title={"Infant Seat"}
                        days={props.carsResults.days}
                        icon={"/icons/infant.png"}
                        info={"Group 0+/1: Ideal for children weighing between 0 - 18 kg."}
                        handleAddExtra={handleAddExtra}
                        extras={props.extras}
                    />
                </div>
                <div>
                    <Extra
                        title={"Child Seat"}
                        days={props.carsResults.days}
                        icon={"/icons/baby.png"}
                        info={"Group 0+/1: Ideal for children weighing between 0 - 18 kg."}
                        handleAddExtra={handleAddExtra}
                        extras={props.extras}
                    />
                </div>
                <div>
                    <Extra
                        title={"Booster Seat"}
                        days={props.carsResults.days}
                        icon={"/icons/baby.png"}
                        info={"Booster seat (group 2-3): Ideal for children weighing between 15-36kg."}
                        handleAddExtra={handleAddExtra}
                        extras={props.extras}
                    />
                </div>
            </div>

            {
            <div>
                <form onChange={() => {setSubmitted(false)}} onSubmit={handleSubmitAddress} className="bg-white rounded-lg m-5 p-4 max-md:flex max-md:flex-col">
                    <div className="col-span-2  mb-4 flex justify-between">
                        <div className="flex flex-col">
                            <h4>Deliver & Collect</h4>
                            <h6>Pick-up / Drop-off your vehicle from an address of your choice</h6>
                        </div>
                        <button onClick={(e) => {e.preventDefault(); setShowForm(!showForm)}} className="h-10">{showForm ? "^" : "v"}</button>
                    </div>

                    {showForm && 
                    <>
                    <div className=" grid grid-cols-2 gap-4  max-md:flex max-md:flex-col">
                    <fieldset className="col-span-2 grid grid-cols-2 gap-4 max-md:flex max-md:flex-col" disabled={submitted ? true : false}>
                        <div className="flex flex-col text-sm">
                            <div className="flex justify-between">
                                <strong className="mb-2">Pick-up Location</strong>
                                <select id="location-pick" type="text" defaultValue={props.locations.pick} onChange={(event) => {setTempLocationPick(event.target.value)}}>
                                    <option value="Limassol Office">LIMASSOL OFFICE</option>  
                                    <option value="Larnaka Airport">LARNACA AIRPORT</option>
                                    <option value="Paphos Airport">PAPHOS AIRPORT</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            
                            {
                            (tempLocationPick === "Other") &&
                            <div className="flex flex-col">
                                <label for="address">Address</label>
                                <input id="address" required type="text"></input>
                                <label>City</label>
                                <select defaultValue={tempDropCity} onChange={event => {setTempPickCity(event.target.value)}}>
                                    <option>Limassol</option>
                                    <option>Nicosia</option>
                                    <option>Larnaca</option>
                                    <option>Paphos</option>
                                    <option>Famagusta</option>
                                </select>
                                <label for="postal">Postal Code</label>
                                <input id="postal" required type="text"></input>
                                <label for="notes">Notes</label>
                                <textarea id="notes" type="text"></textarea>
                                <span className="mt-4 mb-6"><strong>{utils.toCurrency(tempPickCharge)}</strong><small className="text-xs">{tempPickCharge !== 0 && " charge"}</small></span>
                            </div>
                            }
                        </div>

                        <div className="flex flex-col text-sm">  
                            <div className="text-sm flex justify-between">
                                <div className="flex flex-col">
                                    <strong className="mb-2">Drop-off Location</strong>
                                    {tempLocationPick === "Other" && tempLocationDrop === "Other" &&
                                        <div>
                                            <label for="same">Same as Pick-up</label>
                                            <input className="h-fit ml-2" onChange={() => setSameReturn(!sameReturn)} type="checkbox" id="same" checked={sameReturn} />
                                        </div>
                                    }
                                </div>
                                <select type="text" defaultValue={props.locations.drop} className="" onChange={event => setTempLocationDrop(event.target.value)}>
                                    <option value="Limassol Office">LIMASSOL OFFICE</option>  
                                    <option value="Larnaka Airport">LARNACA AIRPORT</option>
                                    <option value="Paphos Airport">PAPHOS AIRPORT</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>


                            {!sameReturn && tempLocationDrop === "Other" &&
                                <div className="flex flex-col text-sm">
                                <label for="address">Address</label>
                                <input id="address" required type="text"></input>
                                <label>City</label>
                                <select defaultValue={tempDropCity} onChange={event => {setTempDropCity(event.target.value)}}>
                                    <option>Limassol</option>
                                    <option>Nicosia</option>
                                    <option>Larnaca</option>
                                    <option>Paphos</option>
                                    <option>Famagusta</option>
                                </select>
                                <label for="postal">Postal Code</label>
                                <input id="postal" required type="text"></input>
                                <label for="notes">Notes</label>
                                <textarea id="notes" type="text"></textarea>
                                <span className="mt-4 mb-6" ><strong>{utils.toCurrency(tempDropCharge)}</strong><small className="text-xs">{tempDropCharge !== 0 && " charge"}</small></span>
                                </div>
                            }

                        </div>
                        </fieldset>
                        <button className={`col-span-2 
                            ${(tempLocationPick !== props.locations.pick || tempLocationDrop !== props.locations.drop || tempLocationPick === "Other" || tempLocationDrop === "Other") ?
                                "" :
                                ""
                            }
                            `}>{submitted ? "Edit" : "Submit"}</button>
                        
                    </div>
                    </>
                    }
                </form>
            </div>
            }
            <div className="w-full flex justify-center">
                <button onClick={handleNextStep} className="mb-10 max-md:w-full mx-5">Review and Book {" >>"}</button>
            </div>
        </div>
    )
}