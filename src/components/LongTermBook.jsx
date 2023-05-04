import React from "react";

export default function LongTermBook({show, setShow}) {

    return (
        <div className="flex flex-col justify-center ">

            <h5 className="flex justify-center">Need to buy a new car?</h5>

            <div className="flex justify-center mx-12">
                <h3 className="flex self-center " >
                    <strong className="text-center " >Discover the advantages of long-term rental</strong>
                </h3>
            </div>

            {
                show &&
                <img className="scale-50 -my-10" src="/icons/long-term-cars.png" alt="long-term-cars" />  
            }

            <div className="flex justify-center">
                <button >See Offers</button>
            </div>
        </div>
    )
}