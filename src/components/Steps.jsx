import React from "react";
import Logo from "./Logo";
import Image from "next/image";
import {useRouter} from "next/router"

export default function Steps( props ) {
    const router = useRouter();

    const [showSummary, setShowSummary] = React.useState(false)
    
    function handleEdit1Clicked() {
        router.push("/")
    }

    function handleEdit2Clicked() {
        props.setStep(prev => {
                return prev-1
        })
        props.setSelectedCar(null)
        router.push("/results")
    }

    function handleBackClicked() {
        switch (props.step) {
            case 2: handleEdit1Clicked()
            break
            case 3: handleEdit2Clicked()
            break
        }
    }

    const stepsText = {
        1: "Location Selection",
        2: "Car Choice",
        3: "Choose Extras",
        4: "Review & Book"
    }


    let extraItems
    console.log(props.extras);
    if (props.extras )  console.log(Object.keys(props.extras).length )
    if (props.extras && Object.keys(props.extras).length)  extraItems = Object.keys(props.extras).map(extra =>{
        if(props.extras[extra]) return <li>{extra}</li>
    })
        
    return (
        <>
        <div className="h-10 w-full fixed top-0 bg-dark flex justify-between pr-4 z-40 ">
            <a href="/" className="scale-50 flex no-underline">
                <Logo
                icon={false} />
            </a>
            <a href="/" className="no-underline text-highlight2 self-center">
                <font>CANCEL </font>
                <strong className="bg-highlight2 ml-2 px-1 rounded-full text-dark font-bold text-lg">&#x00D7;</strong>

            </a>
        </div>

        <div className="max-lg:hidden">
            <div className="steps text-sm drop-shadow-lg fixed z-50 top-10 w-full bg-white">

                <div className="steps-top grid grid-cols-4 mb-3 pt-4">

                    <div className="step1 flex gap-2 extraItems-center px-3">
                        <b className={`step-number ${props.step === 1 && "step-number-selected "} ${props.step > 1 && "step-number-done "}`}>1</b>
                        <div className="flex w-full justify-between ">
                            <span className="uppercase "> Location Selection</span>
                            <span onClick={handleEdit1Clicked}  className="cursor-pointer underline decoration-highlight1"> EDIT</span>
                        </div>
                    </div>

                    <div className="step2 flex gap-2 extraItems-center px-3">
                        <b className={`step-number ${props.step === 2 && "step-number-selected "} ${props.step > 2 && "step-number-done "}`}>2</b>
                        <div className="flex w-full justify-between ">
                            <span className="uppercase "> Car Choice</span>
                            <span onClick={handleEdit2Clicked} className={`cursor-pointer underline ${props.step !== 3 && "hidden "}  decoration-highlight1`}> EDIT</span>
                        </div>
                    </div>

                    <div className="step3 flex gap-2 extraItems-center px-3">
                    <b className={`step-number ${props.step === 3 && "step-number-selected "} ${props.step > 3 && "step-number-done "}`}>3</b>
                        <span className="uppercase ">Choose Extras</span>
                        <span className="hidden underline decoration-orange-500"> EDIT</span>
                    </div>

                    <div className="step4 flex gap-2 extraItems-center px-3">
                    <b className={`step-number ${props.step === 4 && "step-number-selected "} ${props.step > 4 && "step-number-done "}`}>4</b>
                        <span className="uppercase "> Rental Total</span>
                        <span className="hidden underline decoration-orange-500"> EDIT</span>
                    </div>
                </div>

                <div className="steps-bottom grid grid-cols-4 ">

                    <div className={`step1 ${props.step >= 1 && "step-selected"} !border-l-0 step grid grid-cols-2 gap-2`}>
                        <div className="mb-2">
                            <strong className="text-xs"> Pick-up location</strong>
                            <h5>{props.locations.pick}</h5>
                            {
                                props.dates.startDate &&
                            <small className="tracking-tighter">{props.dates.startDate
                                .toLocaleString('default', { day:"numeric", month: 'long' })} 
                                ,{" "+ props.dates.startDate
                                .toLocaleString('default', { year:"numeric" })}
                                {" - "+props.dates.startDate.toLocaleTimeString("default", { hour: "2-digit", minute: "2-digit" })}
                            </small>
                            }
                        </div>

                        <div className="justify-self-end ">
                            <strong className=" text-xs"> Drop-off location</strong>
                            <h5>{props.locations.drop}</h5>
                            {props.dates.endDate &&
                            <small>{props.dates.endDate
                                .toLocaleString('default', { day:"numeric", month: 'long' })} 
                                ,{" "+ props.dates.endDate
                                .toLocaleString('default', { year:"numeric" })}
                                {" - "+props.dates.endDate.toLocaleTimeString("default", { hour: "2-digit", minute: "2-digit" })}
                            </small>
                            }
                        </div>
                    </div>
                    
                    <div className={` step2 step ${props.step >= 2 && "step-selected"}`}>
                        {
                        props.selectedCar &&    
                        <div className="flex flex-row justify-between">
                            <div className="flex flex-col">
                                <small className="text-sm">Group <strong>{props.selectedCar.group}</strong></small>
                                <h4>{props.selectedCar.brand} {props.selectedCar.mark}</h4>
                                <small>or similar model*</small>
                                <small>€{props.days * props.selectedCar.price}</small>
                            </div>

                            <Image 
                                src={props.selectedCar.thumbnail} 
                                width={80}
                                height={60}
                                alt="car"
                            /> 
                        </div>
                        }
                    </div>

                    <div className={`step3 step ${props.step >= 3 && "step-selected"}`}>
                        <span></span>
                        <span>{extraItems}</span>
                    </div>

                    <div className={`step4 step ${props.step >= 4 && "step-selected"}`}>
                        <span>{props.totalPrice}</span>
                    </div>

                </div>

            </div>
            <div className="min-h-[180px]">

            </div>
        </div>



        <div className="lg:hidden bg-highlight1 text-white w-full px-4 fixed z-50 top-10 h-9 ">
            <div className="flex flex-wrap justify-between align-bottom">
                <span onClick={handleBackClicked} className="cursor-pointer mt-[0.75rem] text-xs">BACK</span>
                <div className="flex flex-row gap-2">
                    <h4 className="bg-dark rounded-[50%] w-5 text-sm mt-2 text-center text-highlight1"><strong>{props.step}</strong></h4>
                    <h4 className="text-[1.1rem] mt-2">{stepsText[props.step]}</h4>
                </div>
                <span onClick={() => setShowSummary(!showSummary)} className="cursor-pointer mt-[0.75rem] text-xs">SUMMARY</span>
            </div>
        </div>

        {props.step > 2 &&
            <div className="lg:hidden bg-white w-full z-50 top-20 h-9 pt-2 text-center">
                <span className="text-center">Total: €{props.days * props.selectedCar.price}</span>
            </div>
        }

        {showSummary &&
        <div className="bg-white drop-shadow-lg mb-6">

            <div className="mb-2 px-6">
                <strong className="text-xs"> Pick-up location</strong>
                <h5 className="-mb-1">{props.locations.pick}</h5>
                {
                    props.dates.startDate &&
                <small className="tracking-tighter">{props.dates.startDate
                    .toLocaleString('default', { day:"numeric", month: 'long' })} 
                    ,{" "+ props.dates.startDate
                    .toLocaleString('default', { year:"numeric" })}
                    {" - "+props.dates.startDate.toLocaleTimeString("default", { hour: "2-digit", minute: "2-digit" })}
                </small>
                }
            </div>

            <div className="mb-2 px-6 ">
                <strong className=" text-xs"> Drop-off location</strong>
                <h5 className="-mb-1">{props.locations.drop}</h5>
                {props.dates.endDate &&
                <small>{props.dates.endDate
                    .toLocaleString('default', { day:"numeric", month: 'long' })} 
                    ,{" "+ props.dates.endDate
                    .toLocaleString('default', { year:"numeric" })}
                    {" - "+props.dates.endDate.toLocaleTimeString("default", { hour: "2-digit", minute: "2-digit" })}
                </small>
                }
            </div>

            <div className="mb-2 px-4 pr-10">
                {
                props.selectedCar &&    
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col">
                        <small className="text-xs">Group <strong>{props.selectedCar.group}</strong></small>
                        <h4 className="-mb-1">{props.selectedCar.brand} {props.selectedCar.mark}</h4>
                        <small className="text-xs">or similar model*</small>
                    </div>

                    <Image 
                        className=""
                        src={props.selectedCar.thumbnail} 
                        width={120}
                        height={80}
                        alt="car"
                    /> 
                </div>
                }
            </div>

        </div>
        }
        </>
    )
}