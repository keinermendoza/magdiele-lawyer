import { FaWhatsapp } from "react-icons/fa6";

export default function ContactButton () {
    return (
        <a href="https://wa.me/message/ZHCKCJK5L7MXI1" target="_blank" className="btn warning-btn p-3 mx-auto mt-2">
            <FaWhatsapp />
            <span className='mx-2'>
                Entre en Contacto
            </span>
        </a>
    )
}