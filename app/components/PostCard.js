import Image from "next/image"

export default function PostCard({imageUrl, title, text, datePublished, topics}) {
    const topicsCount = topics.length;
  return (
    <article
        className="bg-white flex flex-col gap-2 lg:gap-4 p-4 rounded-lg "
    >
        <Image 
            src={imageUrl}
            alt={title}
            width={300}
            height={300}
            className="rounded-lg w-full"
        />
        <h3 className="font-medium text-lg lg:text-xl">{title}</h3>
        <p className="text-base lg:text-lg">{text}</p>
        <p className="text-sm lg:text-base">Publicado: {datePublished}</p>
        <p className="text-sm lg:text-base">Temas: {topics.map((topic, index) => (
            <>
                <span>{topic}</span>
                {index < topicsCount -1 && (<span> | </span>)} 
                </>
            
        ))} </p>

    </article>
  )
}
