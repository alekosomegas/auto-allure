import Image from "next/image"

export default function CarListing( props ) {
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
                    <span className="list-item">
                        <img className="icon inline-block " src="icons\gas-pump-solid.svg" alt="" />
                        <p className="inline-block ml-2 ">{props.car.fuel}</p>
                    </span>
                    <span className="list-item">
                        <img className="icon inline-block" src="icons\car.png" alt="" />
                        <p className="ml-2 inline-block">{props.car.number_doors} doors</p>
                    </span>
                    <span className="list-item">
                        <img className="icon inline-block" src="icons\suitcase-solid.svg" alt="" />
                        <p className="ml-2 inline-block">{props.car.large_bags} large bags</p>
                    </span>
                    <span className="list-item">
                        <img className="icon inline-block" src="icons\manual-transmission.png" alt="" />
                        <p className="ml-2 inline-block">{props.car.transmission.split(" ")[0]}</p>
                    </span>
                    <span className="list-item">
                        <img className="icon inline-block" src="icons\car-seat.png" alt="" />
                        <p className="ml-2 inline-block">{props.car.number_seats} seats</p>
                    </span>
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

