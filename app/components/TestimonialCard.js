import Image from "next/image"

export default function TestimonialCard({name, text, urlImage}) {
    return (
        <article className="cursor-grab flex flex-col p-4 rounded-md bg-c-gold-transparent text-c-brown-primary">
            <header 
                className="flex gap-5 items-center mb-5">
                <figure className="rounded-xl overflow-hidden">
                    <Image
                        src={urlImage}
                        alt={name}
                        width={50}
                        height={50}
                     />
                </figure>

                <h3 className="text-xl lg:text-2xl">
                    {name}
                </h3>
                
            </header>

            <div className="lg:text-lg">
                <p>{text}</p>
            </div>
        </article>

    )
}