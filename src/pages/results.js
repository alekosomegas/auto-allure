
import CarListing from "@/components/CarListing"

export default function Results( props ) {
    let items
    if(props.carsResults.data.vehicles !== undefined) {
        items = props.carsResults.data.vehicles.map((car) => <CarListing car={car} days={props.carsResults.days} /> )
    }

    return (
        <>
            <div className="cars grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-10">
                {items}
            </div>
        </>


    )
}