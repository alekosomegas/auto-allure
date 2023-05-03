import Image from "next/image"

export default function CarListing( props ) {
    console.log(props.car)

    return (
        <>
            <div className="listing relative bg-white text-black h-full min-w-fit grid grid-cols-2 rounded-2xl overflow-hidden mb-6 p-3">
                
                <div className="listing-title leading-3 col-span-2">
                    <small className="text-sm"> 
                        Group  
                        <strong> {props.car.group} </strong>
                    </small>
                    <div className="text-lg font-bold ">
                        {props.car.brand} {props.car.mark}
                    </div>
                    <small className="text-xs">or Similar*</small>
                </div>

                <div className="listing-info absolute right-5 top-6 text-sm underline decoration-orange-500">
                    INFO
                </div>

                <div className="listing-specifications text-xs ">
                    <ul>
                        <li>{props.car.fuel}</li>
                        <li>{props.car.number_doors}</li>
                        <li>{props.car.large_bags} large</li>
                        <li>{props.car.transmission.split(" ")[0]}</li>
                        <li>{props.car.number_seats}</li>
                    </ul>
                </div>

                <div className="listing-img ">
                    <Image 
                        src={props.car.thumbnail} 
                        width={150}
                        height={100}
                        alt="car"
                    /> 
                </div>

                <div className="listing-price leading-3">
                    <span className="text-lg font-bold"> € {props.car.price} </span>
                    <span> / day</span>
                    <br/>
                    <small className="text-xs font-light">
                        € {props.days * props.car.price} amount for the period 
                    </small>
                </div>

                <div className="listing-select justify-self-end self-end">

                    <button>select</button>
                </div>

                <div className="listing-cancel col-b4 text-sm">
                    <small>
                        <strong>
                            Cancel for free 
                        </strong>
                    </small>
                    <div>

                    </div>
                </div>

            </div>
        </>

    )
}
