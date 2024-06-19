import Image from "next/image"

export default function TestimonialCard({name, text, urlImage}) {
    return (
        <article className="flex flex-col p-4 rounded-md bg-c-gold-transparent text-c-brown-primary">
            <header 
                className="flex justify-between items-center mb-5">
                <figure className="rounded-full w-9 h-9 overflow-hidden">
                    <Image
                        src={urlImage}
                        alt={name}
                        width={36}
                        height={36}
                     />
                </figure>

                <h3 className="text-2xl">
                    {name}
                </h3>
                
            </header>

            <div className="text-lg">
                <p>{text}</p>
            </div>
        </article>

    )
}