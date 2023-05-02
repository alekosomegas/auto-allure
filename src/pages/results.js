

export default function Results(carsResults) {
    let items
    if(carsResults.carsResults.vehicles !== undefined) {
        items = carsResults.carsResults.vehicles.map((car) => <li>{car.brand} {car.mark} ${car.price} <img src={car.thumbnail} /></li>)
    }

    return (
        <>
                
        <h1>Results</h1>
        <h2>
            
            <ul>
                {items}
            </ul>
        </h2>
        </>


    )
}