import React from 'react'
import Flatpickr from 'react-flatpickr';
import "flatpickr/dist/themes/dark.css";
import {useRouter} from "next/router"
import * as utils from '@/utils';

function datesPicked(start, end) {
    if(start === undefined || end === undefined)  return false
    if(daysBetween(start, end) <= 0)              return false
    return true

}

function daysBetween(start, end) {
    const oneDay = 1000 * 60 * 60 * 24
    return Math.round((end.getTime() - start.getTime()) / oneDay)
}

export default function CarBook({ dateRange, setDateRange, setCarsResults, locations, setLocations, step, setDelivery }) {
    const router = useRouter();

    async function handleSubmit(event, dateRange) {
        event.preventDefault()

        setDelivery(prev => {
            return {
                ...utils.airportDelivery(locations)
            }
        })

        setCarsResults(prev => {
            return {
                ...prev,
                days : daysBetween(dateRange.startDate, dateRange.endDate)
            }
        })
        
        if(step == 3) {
            router.push("/extras")
            return
        }
        if(step == 4) {
            router.push("/review")
            return
        }

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
        <div className='flex flex-col'>                            
            <datalist id="locations">
                <option value="LIMASSOL OFFICE"/>  
                <option value="LARNACA AIRPORT"/>
                <option value="PAPHOS AIRPORT"/>
                <option value="Other"/>
            </datalist>

            {
                !datesPicked(dateRange.startDate, dateRange.endDate) &&
                <div>
                    <h1>
                        <strong>
                            <span>Rent a car</span>
                        </strong>
                    </h1>

                    <div className='flex flex-col '>
                        <label>Select pick-up and drop-of dates:</label>
                        <Flatpickr
                        className=''
                            options = {{
                                mode:"range",
                                dateFormat:"d-m-Y",
                                minDate: "today",
                            }}
                            onChange = {(newDate) => {setDateRange(prev => {
                                newDate[0].setHours(10)
                                newDate[1] && newDate[1].setHours(10)              
                                return {
                                    ...prev,
                                    startDate: newDate[0],
                                    endDate: newDate[1],
                                }
                            })}} 
                        />
                    </div>
                </div>
            }

            {
                datesPicked(dateRange.startDate, dateRange.endDate) &&

                <form className='max-w-lg min-w-md flex-col mx-4 '>

                    <div className='grid grid-cols-2 gap-4 mb-4 max-md:grid-cols-1 '>

                        <div id='pickup-location' className='grid grid-cols-1'>
                            <label>Pick-up Location</label>
                            {/* <input type="text" name="dropoff-location" list="locations" defaultValue={"LIMASSOL OFFICE"}/> */}
                            <select type="text" defaultValue={locations.pick} className="" onChange={event => {setLocations(prev => {return {...prev, pick: event.target.value, drop: prev.drop}})}}>
                                <option value="Limassol Office">LIMASSOL OFFICE</option>  
                                <option value="Larnaka Airport">LARNACA AIRPORT</option>
                                <option value="Paphos Airport">PAPHOS AIRPORT</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div id='dropoff-location' className='grid grid-cols-1'>
                            <label>Drop-off Location</label>
                            {/* <input type="text" name="dropoff-location" list="locations" defaultValue={"LIMASSOL OFFICE"}/> */}
                            <select type="text" defaultValue={locations.drop} onChange={event => {setLocations(prev => {return {...prev, pick: prev.pick , drop: event.target.value}})}}>
                                <option value="Limassol Office">LIMASSOL OFFICE</option>  
                                <option value="Larnaka Airport">LARNACA AIRPORT</option>
                                <option value="Paphos Airport">PAPHOS AIRPORT</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div id='datetime' className='md:col-span-2 grid grid-cols-2 gap-4'>
                            <div id="pickup-datetime">
                                <div>
                                    <label>Pick-up Date</label>
                                        <div className='grid grid-cols-2 -mt-2'>
                                            <Flatpickr className='!rounded-r-none'
                                                options={{
                                                    defaultDate:dateRange.startDate,
                                                    minDate: "today",
                                                    dateFormat:"d M y",
                                                }}
                                                onChange={newDate => {
                                                    setDateRange(prev => {
                                                        return {
                                                            ...prev,
                                                            startDate: newDate[0],
                                                        }})
                                                }}/>
                                            <Flatpickr className='bg-grey !rounded-l-none'
                                                options={{
                                                    defaultDate: "10:00",
                                                    enableTime: true,
                                                    noCalendar: true,
                                                    dateFormat: "H:i",
                                                    time_24hr: true
                                                }}
                                                onChange={newTime => {
                                                    setDateRange(prev => {
                                                        prev.startDate.setHours(newTime[0].getHours())
                                                        prev.startDate.setMinutes(newTime[0].getMinutes())
                                                        return {
                                                            ...prev,
                                                        }})
                                                }}/>
                                        </div>
                                </div>
                            </div>

                            <div id="dropoff-datetime">
                                <div>
                                    <label>Drop-off Date</label>
                                       <div className='grid grid-cols-2 -mt-2'>
                                            <Flatpickr className='!rounded-r-none'
                                                options={{
                                                    defaultDate:dateRange.endDate,
                                                    minDate: "today",
                                                    dateFormat:"d M y",
                                                }}
                                                onChange={newDate => {
                                                    setDateRange(prev => {
                                                        return {
                                                            ...prev,
                                                            endDate: newDate[0],
                                                        }})
                                                }}/>
                                            <Flatpickr className='bg-grey !rounded-l-none'
                                                options={{
                                                    defaultDate: "10:00",
                                                    enableTime: true,
                                                    noCalendar: true,
                                                    dateFormat: "H:i",
                                                    time_24hr: true
                                                }}
                                                onChange={newTime => {
                                                    setDateRange(prev => {
                                                        prev.endDate.setHours(newTime[0].getHours())
                                                        prev.endDate.setMinutes(newTime[0].getMinutes())
                                                        return {
                                                            ...prev,
                                                        }})
                                                }}/>
                                       </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button className='mt-2'
                    onClick={(event) => handleSubmit(event, dateRange)}>
                        FIND A CAR
                    </button>
                </form>
            }



            <div className='align-self-center'>
                <div className='street street0 mt-5 -ml-[20px] bg-white w-[50px] h-2'></div>
                <div className='street street1 mt-5 ml-[30px] bg-white w-[50px] h-2'></div>
                <div className='street street2 mt-5 ml-[30px] bg-white w-[50px] h-2'></div>
                <div className='street street3 mt-5 ml-[30px] bg-white w-[50px] h-2'></div>


                <div className='car -mt-3 '>
                    <img width="130px" src='/icons/red-car.png'></img>
                </div>

            </div>

        </div>
    )
}