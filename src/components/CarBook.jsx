import React from 'react'

export default function CarBook(props) {
    return (
            <>
            {!props.showBookCar &&
                <>
                <h1><strong>Rent a car</strong></h1>
                <button className='mt-2'
                    onClick={() => props.setShowBookCar(true)}>
                    FIND A CAR
                </button>

            <div className='align-self-center'>
                <div className='street street0 mt-5 -ml-[20px] bg-white w-[50px] h-2'></div>
                <div className='street street1 mt-5 ml-[30px] bg-white w-[50px] h-2'></div>
                <div className='street street2 mt-5 ml-[30px] bg-white w-[50px] h-2'></div>
                <div className='street street3 mt-5 ml-[30px] bg-white w-[50px] h-2'></div>

                <div className='car -mt-3 '>
                    <img width="130px" src='/icons/red-car.png'></img>
                </div>
            </div>
            </>
            }
        </>  
        )
}