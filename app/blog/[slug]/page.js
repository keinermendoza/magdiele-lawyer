import Image from "next/image"
import { fetchSinglePost } from "@/app/lib/services";
import Navbar from "@/app/sections/Navbar";

export const revalidate = 60

// async function fecthPost(slug) {
//     const api = process.env.MAIN_API
//     return fetch(`${api}blog/${slug}/`, {
//         next: {
//             revalidate: 60
//         }})
//     .then(response => response.json())
// }

function formatearFecha(fechaISO) {
    const fecha = new Date(fechaISO);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return fecha.toLocaleDateString('es-ES', options);
}

const Post = ({post}) => {
    const paragraphs = post.body.split('\n')

    return (
    <div className="bg-c-gray-blue-primary min-h-screen">
        <Navbar />
        <main className="max-w-4xl w-full mx-auto px-4 md:px-6 lg:px-8 pt-36 py-16">
            <div className=" flex flex-col items-center gap-5 mb-16 text-black lg:text-lg">
       

                <h1 className="text-center text-4xl">
                    <strong>
                    {post.title}
                    </strong>
                </h1>
                {
                    post.subtitle  && 
                    <h2 className="text-center text-2xl">{post.subtitle}</h2>
                }
            {
                post.image &&
                    (
                    <figure className="w-full rounded-md overflow-hidden">
                        <Image 
                            src={post.image} 
                            alt="foto representativa del tema del articulo" 
                            width={500} 
                            height={500} 
                            className="w-full" />
                    </figure>
                    )
                }
                <p className="w-full">
                    Publicado el {formatearFecha(post.created)}</p>

                <div className="">
                    {paragraphs.map((par, index) => <p key={index}>{par}</p>)}
                </div>
            </div>
            
        </main>
    </div>
    )
}


export default async function PostDetailPage ({params}) {
    const {slug} = params
    const {post, error} = await fetchSinglePost(slug)

    return (
        <>
        {post && <Post post={post} />}
        {/* {error && <p>No fue posible cargar el post</p>}   */}
        </>
    )
}