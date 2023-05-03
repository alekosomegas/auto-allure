
import CarListing from "@/components/CarListing"

export default function Results( props ) {
    let items
    if(props.carsResults.data !== undefined && props.carsResults.data !== null &&  props.carsResults.data.vehicles !== null && props.carsResults.data.vehicles !== undefined ) {
        items = props.carsResults.data.vehicles.map((car) => <CarListing car={car} days={props.carsResults.days} /> )
    }

    return (
        <>
            <div className="cars grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-10">
                {items}
            </div>
            <div>
                <p>
                *The term 'or similar' indicates that the vehicle you rent may not be the exact make and model as the vehicle displayed, although it will be from the same car group, meaning that it will be comparable in size and performance to that vehicle. The actual vehicle you rent will depend on the makes and models available at the time within the car group you request. If we are unable to provide a vehicle in your requested car group, we will provide a vehicle from the next available car group up at no extra charge.
                </p>
            </div>
        </>


    )
}