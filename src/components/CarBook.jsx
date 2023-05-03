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
                
                // setCarsResults(data)
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
                    <label>Pick dates:</label>
                    <Flatpickr
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

                {
                    datesPicked(dateRange.startDate, dateRange.endDate) &&
                    <h3>{daysBetween(dateRange.startDate, dateRange.endDate)} days</h3>
                }

            </div>

            <div>
                {
                    datesPicked(dateRange.startDate, dateRange.endDate) &&
                    <button
                    onClick={(event) => handleSubmit(event, dateRange)}>
                        FIND A CAR
                    </button>
                }
            </div>

        </>
    )
}