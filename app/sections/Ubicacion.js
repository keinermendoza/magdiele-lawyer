import Decoration from "../components/Decoration"
export default function Ubicacion() {
  return (
    <section 
        id="ubicacion"
        className="relative
        bg-c-gold-soft text-c-brown-primary">
            <Decoration />
            <Decoration position='tr' />
            <Decoration position='bl' />
            <Decoration position='br' />
        <div className='relative z-10 max-w-[85rem] w-full mx-auto  px-4 md:px-6 lg:px-8 py-16 lg:py-24'>
            <h2 className="text-center text-2xl lg:text-4xl mb-10 lg:mb-16">Oficina de la Abogada Magdiele</h2>

            <div className='flex flex-col lg:flex-row justify-between gap-12 lg:gap-20 items-center'>
                <div className="flex flex-col gap-3 lg:gap-5 text-xl lg:text-2xl text-center w-full max-w-2xl">
                    <p>Centro Comercial Gloria al Bravo Pueblo, piso 1, local 210-212 Avenida Francisco de Miranda, Caracas 1073, Miranda, Venezuela</p>
                    <iframe
                        className="grow min-h-96 " 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.278706556812!2d-66.81243872596984!3d10.478681389652563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a596ecd8e722b%3A0xae62a633343cf1fe!2sAbogada%20Civil%20y%20Mercantil%20Magdiele%20Mendoza!5e0!3m2!1ses-419!2sbr!4v1684617076462!5m2!1ses-419!2sbr" width="auto" height="auto" style={{border:0}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>

                <div>
                    <p className="text-xl lg:text-2xl text-center mb-3 lg:mb-5">Horarios de Atención al Público</p>
                    <table className="border-separate border-spacing-2px">
                        <thead>
                            <tr className="text-white font-light ">
                                <th className="bg-c-brown-primary p-2 rounded-md ">Dia de la Semana</th>
                                <th className="bg-c-brown-primary p-2 rounded-md ">Horario de funcionamiento</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr  >
                                <td className="bg-c-gray-blue-primary p-2 rounded-md ">Lunes</td>
                                <td className="bg-c-gray-blue-primary p-2 rounded-md ">8:30 am - 5:30 pm </td>
                            </tr>
                            <tr >
                                <td className="bg-c-gray-blue-primary p-2 rounded-md ">Martes</td>
                                <td className="bg-c-gray-blue-primary p-2 rounded-md ">8:30 am - 5:30 pm </td>
                            </tr>
                            <tr >
                                <td className="bg-c-gray-blue-primary p-2 rounded-md ">Miercoles</td>
                                <td className="bg-c-gray-blue-primary p-2 rounded-md ">8:30 am - 5:30 pm </td>
                            </tr>
                            <tr >
                                <td className="bg-c-gray-blue-primary p-2 rounded-md ">Jueves</td>
                                <td className="bg-c-gray-blue-primary p-2 rounded-md ">8:30 am - 5:30 pm </td>
                            </tr>
                            <tr >
                                <td className="bg-c-gray-blue-primary p-2 rounded-md ">Viernes</td>
                                <td className="bg-c-gray-blue-primary p-2 rounded-md ">8:30 am - 5:30 pm </td>
                            </tr>
                            <tr >
                                <td className="bg-c-gray-blue-primary p-2 rounded-md ">Sabado</td>
                                <td className="bg-c-gray-blue-primary p-2 rounded-md ">Cerrado</td>
                            </tr>
                            <tr >
                                <td className="bg-c-gray-blue-primary p-2 rounded-md ">Domingo</td>
                                <td className="bg-c-gray-blue-primary p-2 rounded-md ">Cerrado</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>
  )
}
