import React from 'react'

export default function Ubicacion() {
  return (
    <section 
        id="contacto"
        className="relative
        bg-c-gold-soft text-c-brown-primary">
        <div className='relative z-10 max-w-[85rem] w-full mx-auto p-4 md:p-6 lg:p-8'>
            <h2 className="text-center text-4xl">Oficina de la Abogada Magdiele</h2>

            <div className='flex justify-between items-center'>
                <div>
                    <p>Centro Comercial Gloria al Bravo Pueblo, piso 1, local 210-212 Avenida Francisco de Miranda, Caracas 1073, Miranda, Venezuela</p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.278706556812!2d-66.81243872596984!3d10.478681389652563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a596ecd8e722b%3A0xae62a633343cf1fe!2sAbogada%20Civil%20y%20Mercantil%20Magdiele%20Mendoza!5e0!3m2!1ses-419!2sbr!4v1684617076462!5m2!1ses-419!2sbr" width="350" height="350" style={{border:0}} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

                <div>
                    <p>Hora de Atencion al Publico</p>
                    <table>
                        <thead>
                            <tr>
                                <th>Dia de la Semana</th>
                                <th>Horario de funcionamiento</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Lunes</td>
                                <td>8:30 am - 5:30 pm </td>
                            </tr>
                            <tr>
                                <td>Martes</td>
                                <td>8:30 am - 5:30 pm </td>
                            </tr>
                            <tr>
                                <td>Miercoles</td>
                                <td>8:30 am - 5:30 pm </td>
                            </tr>
                            <tr>
                                <td>Jueves</td>
                                <td>8:30 am - 5:30 pm </td>
                            </tr>
                            <tr>
                                <td>Viernes</td>
                                <td>8:30 am - 5:30 pm </td>
                            </tr>
                            <tr>
                                <td>Sabado</td>
                                <td>Cerrado</td>
                            </tr>
                            <tr>
                                <td>Domingo</td>
                                <td>Cerrado</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>
  )
}
