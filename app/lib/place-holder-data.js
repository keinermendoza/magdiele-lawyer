const services = [
    {
        id: '1',
        name: 'Compraventa de Vehiculos e Inmuebles',
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
        name: 'Declaracion de Herederos Universales',
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
        name: 'Constitucion de Asociaciones Civiles y Fundaciones',
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
        name: 'Registro de Compañía Anonima',
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
    name: 'Justificativo de Testigos',
    text:'Estoy muy agradecida con los servicios de asesoría profesional de la Dra. Magdiele Mendoza. Desde hace 20 años me ha brindado  una buena atención. La recomiendo ampliamente.',
    image_url: '/images/abogada-testimonio-1-ready.png',
  },
  {
    id: '2',
    name: 'Jeison Ramirez',
    text:'Buenas noches Este Bueno yo me siento satisfecho por los trabajos realizados que me ha hecho la la doctora Marlene porque es una persona muy honesta sincera y amable y no es un solo trabajo que me ha hecho ya me ha hecho varios trabajos y y bueno yo Considero que es una persona adecuada para hacer la lo que es la parte de documentación y todo lo que ella en que ella se especializa sin seriamente y bueno yo la recomiendo y la he recomendado por cierto a a familiares amigos gente cercana y han quedado contentos con con su labor pues Y eso para mí bueno ese gran de Gran agrado y me imagino que para ella sentirse cómoda y y placentera en su en su ámbito de trabajo pues',
    image_url: '/images/abogada-testimonio-2-ready.png',
  },
  {
    id: '3',
    name: 'Libia Alemán',
    text:'quiero darle las gracias y agradecimiento a la doctora matelier Mendoza por su excelente labor ayuda y asesoramiento en los trámites de la declaración de herederos universales la recomiendo que es una persona excelente en su labor de abogado',
    image_url: '/images/abogada-testimonio-3-ready.png',

  },
  {
    id: '4',
    name: 'Lidia Lara',
    text:'Hola qué tal, les quería compartir mi experiencia con mi amiga y abogada Magdiele de Machado, les puedo decir que es una profesional dedicada, ama su trabajo y lo desempeña con dedicación, compromiso y esmero y sobre todo es muy responsable y detallista. Por ende,  no nudo en recomendarla.  Bendiciones',
    image_url: '/images/abogada-testimonio-4-ready.png',
  },  
  {
    id: '5',
    name: 'Justificativo de Testigos',
    text:'Estoy muy agradecida con los servicios de asesoría profesional de la Dra. Magdiele Mendoza. Desde hace 20 años me ha brindado  una buena atención. La recomiendo ampliamente.',
    image_url: '/images/abogada-testimonio-1-ready.png',
  },
  {
    id: '6',
    name: 'Jeison Ramirez',
    text:'Buenas noches Este Bueno yo me siento satisfecho por los trabajos realizados que me ha hecho la la doctora Marlene porque es una persona muy honesta sincera y amable y no es un solo trabajo que me ha hecho ya me ha hecho varios trabajos y y bueno yo Considero que es una persona adecuada para hacer la lo que es la parte de documentación y todo lo que ella en que ella se especializa sin seriamente y bueno yo la recomiendo y la he recomendado por cierto a a familiares amigos gente cercana y han quedado contentos con con su labor pues Y eso para mí bueno ese gran de Gran agrado y me imagino que para ella sentirse cómoda y y placentera en su en su ámbito de trabajo pues',
    image_url: '/images/abogada-testimonio-2-ready.png',
  },
  {
    id: '7',
    name: 'Libia Alemán',
    text:'quiero darle las gracias y agradecimiento a la doctora matelier Mendoza por su excelente labor ayuda y asesoramiento en los trámites de la declaración de herederos universales la recomiendo que es una persona excelente en su labor de abogado',
    image_url: '/images/abogada-testimonio-3-ready.png',

  },
  {
    id: '8',
    name: 'Lidia Lara',
    text:'Hola qué tal, les quería compartir mi experiencia con mi amiga y abogada Magdiele de Machado, les puedo decir que es una profesional dedicada, ama su trabajo y lo desempeña con dedicación, compromiso y esmero y sobre todo es muy responsable y detallista. Por ende,  no nudo en recomendarla.  Bendiciones',
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
  {
    id: 4,
    title: 'Lo que debes saber sobre la Firma de Poderes',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
    image_url: "/images/abogada-ejemplo-firma-poder.jpg",
    date_published: "12 de Mayo 2024",
    temas: [
      "Poder General y Especial",
      "Autorizaciones Personales"
    ]
  }
]
module.exports = {
    services,
    testimonials,
    lastetsPosts
    // customers,
    // invoices,
    // revenue,
  };