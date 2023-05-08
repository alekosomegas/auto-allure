import React from "react";
import Steps from "@/components/Steps";
import Extra from "@/components/Extra";

export default function Extras(props) {
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
            />
            
            <div className="m-5 md:grid md:grid-cols-2 gap-4">
            <div>
                <Extra
                    title={"Additional Driver"}
                    price={5}
                    icon={"/icons/car.png"}
                    info={"Allow anyone in the group to drive the rented car and give yourself the opportunity to enjoy the journey from the passenger’s seat."}
                />
            </div>
            <div>
                <Extra
                    title={"Child Seat"}
                    price={5}
                    icon={"/icons/car.png"}
                    info={"Group 0+/1: Ideal for children weighing between 0 - 18 kg."}
                />
            </div>
            <div>
                <Extra
                    title={"Additional coverage (SCDW)"}
                    price={15}
                    icon={"/icons/car.png"}
                    info={"reduce your liability to a minimum charge, according to the car group you have picked, by paying an additional small fee in the price of collision damage waiver."}
                />
            </div>
            {(props.locations.pick === "Other" || props.locations.drop === "Other") &&
            <div>
                <Extra
                    title={"Additional coverage (SCDW)"}
                    price={15}
                    icon={"/icons/car.png"}
                    info={"reduce your liability to a minimum charge, according to the car group you have picked, by paying an additional small fee in the price of collision damage waiver."}
                />
            </div>
            }
            </div>
        </>
    )
}