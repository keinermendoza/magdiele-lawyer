import Image from "next/image"
import Link from "next/link";

function formatearFecha(fechaISO) {
    const fecha = new Date(fechaISO);
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    return fecha.toLocaleDateString('es-ES', options);
}

export default function PostCard({imageUrl, title, text, datePublished, topics, slug}) {
    const topicsCount = topics.length;
  return (
    <article
        className="bg-white flex flex-col gap-2 lg:gap-4 p-4 rounded-lg "
    >
        {
            imageUrl &&
        <Image 
            src={imageUrl}
            alt={title}
            width={300}
            height={300}
            className="rounded-lg w-full"
        />
        }

        <h3 className="font-medium text-lg lg:text-xl">{title}</h3>
        <p className="grow text-base lg:text-lg">{text}</p>
        <p className="text-sm lg:text-base">Temas: {topics?.map((topic, index) => (
            <>
                <span>{topic}</span>
                {index < topicsCount -1 && (<span> | </span>)} 
                </>
            
        ))} </p>
        <div className="flex justify-between items-center gap-2">
            <p className="text-sm lg:text-base">Publicado: {formatearFecha(datePublished)}</p>
            <Link 
                href={`/blog/${slug}`} 
                className="`w-fit text-sm lg:text-base flex items-center gap-3 lg:gap-5 rounded-md py-2 px-4 bg-c-blue-primary text-white">
                Leer Más
            </Link> 
        </div>

    </article>
  )
}
