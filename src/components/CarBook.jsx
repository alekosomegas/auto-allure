import React from 'react'
import Flatpickr from 'react-flatpickr';
import "flatpickr/dist/themes/dark.css";

function datesPicked(start, end) {
    if(start === undefined || end === undefined)  return false
    if(daysBetween(start, end) <= 0)              return false
    return true

}

function daysBetween(start, end) {
    const oneDay = 1000 * 60 * 60 * 24
    return Math.round((end.getTime() - start.getTime()) / oneDay)
}

export default function CarBook() {
    const [dateRange, setDateRange] = React.useState({
        startDate: undefined,
        endDate: undefined,
    })

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
                    <button>
                        FIND A CAR
                    </button>
                }
            </div>

        </>
    )
}