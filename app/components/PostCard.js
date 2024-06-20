import { Span } from "next/dist/trace"
import Image from "next/image"
import { FaArrowsToCircle } from "react-icons/fa6"

export default function PostCard({imageUrl, title, text, datePublished, topics}) {
    const topicsCount = topics.length;
  return (
    <article
        className="bg-white flex flex-col gap-5 p-4 rounded-lg "
    >
        <Image 
            src={imageUrl}
            alt={title}
            width={300}
            height={300}
            className="rounded-lg w-full"
        />
        <h3 className="text-2xl">{title}</h3>
        <p className="text-xl">{text}</p>
        <p className="">Publicado: {datePublished}</p>
        <p >Temas: {topics.map((topic, index) => (
            <>
                <span>{topic}</span>
                {index < topicsCount -1 && (<span> | </span>)} 
                </>
            
        ))} </p>

    </article>
  )
}
