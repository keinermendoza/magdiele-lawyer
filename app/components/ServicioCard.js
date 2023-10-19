'use client'
import { useState } from "react"
import { FaCirclePlus, FaCircleXmark } from "react-icons/fa6";

export default function ServicioCard({title, icon, description, caracts}) {

    const [hover, setHover] = useState()
    const [selected, setSelected] = useState()

    function handleHover() {setHover(true)}
    function handleBlure() {setHover(false)}
    function handleSelect() {setSelected(!selected)}

    
    return (
        <div className="">
            <div onMouseOver={handleHover}
                onMouseLeave={handleBlure}
                onClick={handleSelect}
                className="card bg-gray p-4 max-w-350px mx-auto ">

                <h3 className="">
                    <span className="float-start up">{icon}</span>
                    <span className="ms-2">{title}</span>
                </h3>
                <p>{description}</p>
                <h2 className="m-0">
                    {
                        selected 
                        ? (<FaCircleXmark className={`float-end pink ${hover ? 'indigo' : ''}`} />)
                        : (<FaCirclePlus className={`float-end ${hover ? 'indigo' : ''}`} />)
                    }
                </h2>
            </div>

            <div    onClick={handleSelect}
                    className={`card bg-gray p-4 max-w-350px mx-auto card-extra  ${selected ? 'active mt-1 mb-4' : ''}`} >
                <ul>
                    {caracts.map((caract, index) =>
                    <li key={index}> 
                        {caract}
                    </li>)}
                </ul>
            </div>


        </div>

    )
}