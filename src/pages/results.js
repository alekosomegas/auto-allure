

export default function Results(carsResults) {
    console.log(carsResults.carsResults.vehicles);

    const items = carsResults.carsResults.vehicles.map((car) => <li>{car.brand} {car.mark} ${car.price} <img src={car.thumbnail} /></li>)


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