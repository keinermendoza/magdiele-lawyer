const services = [
    {
        id: '1',
        name: 'Compraventa de Vehículos e Inmuebles',
        has_post:true,
    },
      {
        id: '2',
        name: 'Poder General y Especial',
        has_post:true,
        image_url: '/customers/lee-robinson.png',
      },
      {
        id: '3',
        name: 'Divorcio por Desafecto',
        has_post:true,
        image_url: '/customers/hector-simpson.png',
      },
      {
        id: '4',
        name: 'Titulo Supletorio',
        has_post:null,
        image_url: '/customers/steven-tey.png',
      },
      {
        id: '5',
        name: 'Declaración de Herederos Universales',
        has_post:null,
        image_url: '/customers/steph-dietz.png',
      },
      {
        id: '6',
        name: 'Contrato de Arrendamiento',
        has_post:null,
        image_url: '/customers/michael-novotny.png',
      },
      {
        id: '7',
        name: 'Constitución de Asociaciones Civiles y Fundaciones',
        has_post:null,
        image_url: '/customers/evil-rabbit.png',
      },
      {
        id: '8',
        name: 'Justificativo de Testigos',
        has_post:null,
        image_url: '/customers/emil-kowalski.png',
      },
      {
        id: '9',
        name: 'Registro de Compañía Anónima',
        has_post:null,
        image_url: '/customers/amy-burns.png',
      },
      {
        id: '10',
        name: 'Registro de PYMES',
        has_post:true,
        image_url: '/customers/balazs-orban.png',

      },
      {
        id: '11',
        name: 'Actas de Asambleas',
        has_post:null,
        image_url: '/customers/balazs-orban.png',
      },  
]

const testimonials = [
  {
    id: '1',
    name: 'Carmen Palacios',
    text:'Estoy muy agradecida con los servicios de asesoría profesional de la Dra. Magdiele. Desde hace 20 años me ha brindado  una buena atención. La recomiendo ampliamente.',
    image_url: '/images/abogada-testimonio-1-ready.png',
  },
  {
    id: '2',
    name: 'Jeison Ramirez',
    text:'Me siento satisfecho con los trabajos realizados por la doctora Magdiele, es una persona muy honesta y amable. La he recomendado a familiares y amigos y todos han quedado contentos con su labor.',
    image_url: '/images/abogada-testimonio-2-ready.png',
  },
  {
    id: '3',
    name: 'Libia Alemán de Vergara',
    text:'Quiero darle las gracias y agradecimientos a la doctora Magdiele por su excelente labor, ayuda y asesoramiento con la declaración de herederos universales, es una excelente persona y abogada.',
    image_url: '/images/abogada-testimonio-3-ready.png',

  },
  {
    id: '4',
    name: 'Lidia Lara',
    text:'Les quiero compartir mi experiencia con mi amiga la abogada Magdiele. Les puedo decir que es una profesional dedicada, ama su trabajo y lo desempeña con dedicación y compromiso, es muy responsable y detallista. No dudo en recomendarla, bendiciones.',
    image_url: '/images/abogada-testimonio-4-ready.png',
  },  
  {
    id: '5',
    name: 'Carmen Palacios',
    text:'Estoy muy agradecida con los servicios de asesoría profesional de la Dra. Magdiele. Desde hace 20 años me ha brindado  una buena atención. La recomiendo ampliamente.',
    image_url: '/images/abogada-testimonio-1-ready.png',
  },
  {
    id: '6',
    name: 'Jeison Ramirez',
    text:'Me siento satisfecho con los trabajos realizados por la doctora Magdiele, es una persona muy honesta y amable. La he recomendado a familiares y amigos y todos han quedado contentos con su labor.',
    image_url: '/images/abogada-testimonio-2-ready.png',
  },
  {
    id: '7',
    name: 'Libia Alemán',
    text:'Quiero darle las gracias y agradecimientos a la doctora Magdiele por su excelente labor, ayuda y asesoramiento con la declaración de herederos universales, es una excelente persona y abogada.',
    image_url: '/images/abogada-testimonio-3-ready.png',

  },
  {
    id: '8',
    name: 'Lidia Lara',
    text:'Les quiero compartir mi experiencia con mi amiga la abogada Magdiele. Les puedo decir que es una profesional dedicada, ama su trabajo y lo desempeña con dedicación y compromiso, es muy responsable y detallista. No dudo en recomendarla, bendiciones.',
    image_url: '/images/abogada-testimonio-4-ready.png',
  },  
]


const lastetsPosts = [
  {
    id: 1,
    title: 'Lo que debes saber sobre la Firma de Poderes',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
    image_url: "/images/abogada-ejemplo-firma-poder.jpg",
    date_published: "12 de Mayo 2024",
    temas: [
      "Poder General y Especial",
      "Autorizaciones Personales"
    ]
  },
  {
    id: 2,
    title: 'Lo que debes saber sobre la Firma de Poderes',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
    image_url: "/images/abogada-ejemplo-firma-poder.jpg",
    date_published: "12 de Mayo 2024",
    temas: [
      "Poder General y Especial",
      "Autorizaciones Personales"
    ]
  },
  {
    id: 3,
    title: 'Lo que debes saber sobre la Firma de Poderes',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
    image_url: "/images/abogada-ejemplo-firma-poder.jpg",
    date_published: "12 de Mayo 2024",
    temas: [
      "Poder General y Especial",
      "Autorizaciones Personales"
    ]
  },
  // {
  //   id: 4,
  //   title: 'Lo que debes saber sobre la Firma de Poderes',
  //   text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
  //   image_url: "/images/abogada-ejemplo-firma-poder.jpg",
  //   date_published: "12 de Mayo 2024",
  //   temas: [
  //     "Poder General y Especial",
  //     "Autorizaciones Personales"
  //   ]
  // }
]
module.exports = {
    services,
    testimonials,
    lastetsPosts
    // customers,
    // invoices,
    // revenue,
  };