import React from "react";
import Steps from "@/components/Steps";
import Extra from "@/components/Extra";
import {useRouter} from "next/router"

export default function Extras(props) {
    const [sameReturn, setSameReturn] = React.useState(true)
    const router = useRouter();

    function handleSubmitAddress(event) {
        event.preventDefault()
        props.setStep(4)
        props.setLocations((prev) => {
            console.log(event);
            return {
                ...prev,
                pick: event.target[0].value,
                drop: sameReturn ? event.target[0].value : event.target[5].value
            }
        })
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
            {(props.locations.pick === "Other" || props.locations.drop === "Other") &&
            <div>
                <form onSubmit={handleSubmitAddress} className="bg-white rounded-lg m-5 p-4 grid grid-cols-2 gap-4 max-md:flex max-md:flex-col">
                    <h4 className="col-span-2 text-center mb-2">Pick-up/Drop-off at a different location</h4>
                    
                    <div className="flex flex-col text-sm">
                        <strong className="mb-2">Pick-up Location</strong>
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

                    <div className="flex flex-col text-sm">

                        <div className="text-sm flex justify-between">
                            <strong className="mb-2">Drop-off Location</strong>
                            <div className="flex justify-end">
                                <label for="same">Same as Pick-up</label>
                                <input className="h-fit ml-2" onChange={() => setSameReturn(!sameReturn)} type="checkbox" id="same" checked={sameReturn} />
                            </div>
                        </div>
                        {!sameReturn &&
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
                    <button className="col-span-2">Sumbit</button>
                </form>
            </div>
            }
            <div className="w-full flex justify-center">
                <button onClick={handleSubmitAddress} className="m-5">Next Step</button>
            </div>
        </div>
    )
}