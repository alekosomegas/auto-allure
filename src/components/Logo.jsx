import Image from "next/image"
import React from "react"

export default function Logo( props ) {
    return (
    <>
    {
        props.icon &&
        <Image
            className="p-0"
            src={"/company_logo_inv.png"}
            width={40}
            height={40}
            alt={'logo'}
        />
    }
        <div className="flex flex-col">
                <strong className="m-0 font-logo text-4xl tracking-wide text-white">auto-</strong>
            <small className="text-[0.75rem] leading-[0.3rem] text-white">rent-a-car</small>
        </div>
        <strong className="relative font-logo text-5xl tracking-wide text-white">allure</strong>

    </>
    )
}