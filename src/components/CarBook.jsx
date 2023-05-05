import React from 'react'
import Flatpickr from 'react-flatpickr';
import "flatpickr/dist/themes/dark.css";
import {useRouter} from "next/router"

function datesPicked(start, end) {
    if(start === undefined || end === undefined)  return false
    if(daysBetween(start, end) <= 0)              return false
    return true

}

function daysBetween(start, end) {
    const oneDay = 1000 * 60 * 60 * 24
    return Math.round((end.getTime() - start.getTime()) / oneDay)
}


export default function CarBook({ dateRange, setDateRange, setCarsResults }) {
    const router = useRouter();

    async function handleSubmit(event, dateRange) {
        event.preventDefault()
        
        fetch('api/find-cars', {
            method: "POST",
            body: JSON.stringify(dateRange)
        })
        .then(async (res) => {
            if(res.ok) {
                let data = await res.json()
                console.log(data);
                setCarsResults(prev => {
                    return {
                        ...prev,
                        data: data,
                        days: daysBetween(dateRange.startDate, dateRange.endDate)
                }})
                router.push("/results")
            }})
    }

    return (
        <>
            <div>
                <h1>
                    <strong>
                        <span>Rent a car</span>
                    </strong>
                </h1>
            </div>

            <div className='flex flex-row'>
                <div className='flex flex-col w-[250px]'>
                    <label>Select pick-up and drop-of dates:</label>
                    <Flatpickr
                    className=''
                        options = {{
                            mode:"range",
                            dateFormat:"d-m-Y",
                            minDate: new Date(),
                        }}
                        onChange = {(newDate) => {setDateRange(prev => {
                            return {
                                ...prev,
                                startDate: newDate[0],
                                endDate: newDate[1],
                            }
                        })}} 
                    />
                </div>


            </div>
                {
                    datesPicked(dateRange.startDate, dateRange.endDate) &&
                    <small className=''>{daysBetween(dateRange.startDate, dateRange.endDate)} days</small>
                }

            <div>
                {
                    datesPicked(dateRange.startDate, dateRange.endDate) &&
                    <button className='mt-2'
                    onClick={(event) => handleSubmit(event, dateRange)}>
                        FIND A CAR
                    </button>
                }
            </div>

            <div className=''>
                <div className='street street0 mt-5 -ml-[20px] bg-gray-400 w-[50px] h-2'></div>
                <div className='street street1 mt-5 ml-[30px] bg-gray-400 w-[50px] h-2'></div>
                <div className='street street2 mt-5 ml-[30px] bg-gray-400 w-[50px] h-2'></div>
                <div className='street street3 mt-5 ml-[30px] bg-gray-400 w-[50px] h-2'></div>


                <div className='car -mt-3 '>
                    <img width="130px" src='/icons/red-car.png'></img>
                </div>

            </div>

        </>
    )
}