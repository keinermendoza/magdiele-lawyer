'use client'

import { useState, useContext } from 'react'
import TokenContext from '../context/TokenContext'    
import '../styles/Ubicacion.css'
import ContactButton from './ContactButton'

export default function Ubicacion () {
    const endpoint = 'https://abogadamagdiele.pythonanywhere.com/api/v1/blog/realizar/consulta/'
    const {token} = useContext(TokenContext)
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [telefono, setTelefono] = useState('')
    const [consulta, setConsulta] = useState('')

    function handleSubmit(e) {
        e.preventDefault()

        console.log(nombre, email, telefono, consulta)
        fetch(endpoint, {
            method: 'POST',
            headers: {
                'Authorization': `Token ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nombre:nombre,
                email:email,
                telefono:telefono,
                consulta:consulta,
            })
        })
        .then((response) => {
            if (response.ok) {
                alert('mesnaje exitoso')
                setNombre('')
                setConsulta('')
                setTelefono('')
                setEmail('')
            } else {
                throw new Error('')
            }
        })
        .catch(err => {
            alert('algo salio mal, por favor revisa que el email este bien escrito')
        }) 
        
        
    }
    return (
        
        <section id="ubicacion" className="container-fluid section ubicacion bg-img row" >

                <div className='mb-5 mb-md-0 col-md-6'>

                    <h2 className="subtitle">Ubicación</h2>
                    <h3>Centro Comercial Gloria al Bravo Pueblo, piso 1, local 210-212 Avenida Francisco de Miranda, Caracas 1073, Miranda, Venezuela</h3>

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.278706556812!2d-66.81243872596984!3d10.478681389652563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a596ecd8e722b%3A0xae62a633343cf1fe!2sAbogada%20Civil%20y%20Mercantil%20Magdiele%20Mendoza!5e0!3m2!1ses-419!2sbr!4v1684617076462!5m2!1ses-419!2sbr" 
                            width="350" height="350" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    <div className="d-flex justify-content-center">
                        <ContactButton />         
                    </div>
                </div>
                

                <div className='col-md-6'>

                        <form onSubmit={handleSubmit}  id="form-contacto"  method="post">
                            <label className='fs-4' htmlFor="nombre">Nombre</label>
                            <input value={nombre} 
                                onChange={(e) => setNombre(e.target.value)} 
                                className='form-control mb-4 mt-2'
                                required id="nombre"
                                placeholder="*necesario"
                                type="text" 
                                name="nombre" />
                            
                            <label className='fs-4' htmlFor="email">Email</label>
                            <input value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                className='form-control mb-4 mt-2'
                                required id="email"
                                placeholder="*necesario"
                                type="email" 
                                name="email" />
                            
                            <label className='fs-4' htmlFor="telefono">Telefono</label>
                            <input value={telefono} 
                                onChange={(e) => setTelefono(e.target.value)} 
                                className='form-control mb-4 mt-2'
                                id="telefono" 
                                placeholder="" 
                                type="text" 
                                name="telefono" />
                            
                            <label className='fs-4' htmlFor="consulta">Comentario o Consulta</label>
                            <textarea value={consulta} 
                                onChange={(e) => setConsulta(e.target.value)} 
                                className='form-control mb-4 mt-2'
                                id="consulta" 
                                name="consulta"
                                cols="30" rows="7"></textarea>
                            
                            <div className="d-flex justify-content-center">
                                <input className="btn warning-btn" type="submit" value="Enviar Mensaje" />
                            </div>
                            
                        </form>
                </div>
        </section>

       
    )
}