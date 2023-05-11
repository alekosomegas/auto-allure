import React from "react";
import Image from "next/image";
import * as utils from '@/utils';

export default function Extra( props ) {
    return (
        <div className="bg-white h-full flex max-lg:flex-col rounded-2xl justify-between overflow-hidden mb-6 p-4 gap-3">

            <div className="flex gap-4">
                <Image 
                    className=""
                    src={props.icon} 
                    width={35}
                    height={35}
                    alt="icon"
                /> 
                <div className="grid grid-cols-1 max-w-[25rem]">
                    <h4>{props.title}</h4>
                    <small className="text-xs">{props.info}</small>
                </div>

            </div>

            <div className="flex max-lg:flex-col">
                <div className="text-center mx-4">
                    <strong>{utils.toCurrency(utils.extrasPrice(props.title,props.days))}</strong> 
                    <span className="text-xs"> / day</span>
                </div>
                
                <button onClick={() => props.handleAddExtra(props.title)} className="h-10">{props.extras[props.title] ? "X" : "Add"}</button>
            </div>
        </div>
    )
}