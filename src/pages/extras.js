import React from "react";
import Steps from "@/components/Steps";

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
            <h1>Extras</h1>
        </>
    )
}