import React from "react";
import Steps from "@/components/Steps";
import Extra from "@/components/Extra";
import {useRouter} from "next/router"

export default function Extras(props) {
    const [sameReturn, setSameReturn] = React.useState(true)
    const [showForm, setShowForm] = React.useState((props.locations.pick === "Other" || props.locations.drop === "Other"))
    const [tempLocationPick, setTempLocationPick] = React.useState(props.locations.pick)
    const [tempLocationDrop, setTempLocationDrop] = React.useState(props.locations.drop)

    const router = useRouter();

    function handleSubmitAddress(event) {
        event.preventDefault()

        props.setLocations(prev => {
            return {
                ...prev,
                pick: tempLocationPick,
                drop: tempLocationDrop
            }
        })


        // props.setDelivery(prev => {
        //     return {
        //         ...prev,
        //         [title] : price
        //     }
        // })

    }

    function handleNextStep() {
        props.setStep(4)
        router.push("/review")
    }

    function handleAddExtra(title, price) {
        props.setExtras(prev => {
            return {
                ...prev,
                [title] : prev[title] ? false : price //!prev[title]
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
                        price={5}
                        icon={"/icons/icon-add-driver.png"}
                        info={"Allow anyone in the group to drive the rented car and give yourself the opportunity to enjoy the journey from the passenger’s seat."}
                        handleAddExtra={handleAddExtra}
                        extras={props.extras}
                    />
                </div>
                <div>
                    <Extra
                        title={"Child Seat"}
                        price={5}
                        icon={"/icons/baby.png"}
                        info={"Group 0+/1: Ideal for children weighing between 0 - 18 kg."}
                        handleAddExtra={handleAddExtra}
                        extras={props.extras}
                    />
                </div>
                <div>
                    <Extra
                        title={"Additional coverage (SCDW)"}
                        price={15}
                        icon={"/icons/file.png"}
                        info={"RSeduce your liability to a minimum charge, according to the car group you have picked, by paying an additional small fee in the price of collision damage waiver."}
                        handleAddExtra={handleAddExtra}
                        extras={props.extras}
                    />
                </div>
            </div>

            {
            <div>
                <form onSubmit={handleSubmitAddress} className="bg-white rounded-lg m-5 p-4 max-md:flex max-md:flex-col">
                    <div className="col-span-2  mb-4 flex justify-between">
                        <div className="flex flex-col">
                            <h4>Deliver & Collect</h4>
                            <h6>Pick-up / Drop-off your vehicle from an address of your choice</h6>
                        </div>
                        <button onClick={(e) => {e.preventDefault(); setShowForm(!showForm)}} className="h-10">{showForm ? "^" : "v"}</button>
                    </div>

                    {showForm && 
                    <div className=" grid grid-cols-2 gap-4 ">
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
                                <select>
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
                                <select>
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
                                </div>
                            }

                        </div>
                        <span><strong>€ 20 </strong><small className="text-xs">extra</small></span>
                        <button className={`col-span-2 
                            ${(tempLocationPick !== props.locations.pick || tempLocationDrop !== props.locations.drop) ?
                                "" :
                                "hidden"
                            }
                            `}>Sumbit</button>
                        
                    </div>
                    }
                </form>
            </div>
            }
            <div className="w-full flex justify-center">
                <button onClick={handleNextStep} className=" ">Review and Book {" >>"}</button>
            </div>
        </div>
    )
}