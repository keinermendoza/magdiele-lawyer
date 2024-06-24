import { HiChatAlt2 } from "react-icons/hi"
// import axiosInstance from "../lib/services"
import PostCard from "../components/PostCard"
import Navbar from "../sections/Navbar"
// import { fetchLatestPost } from "../lib/services"
import { fetchAllPost } from "../lib/services"
import Image from "next/image"
import breakLine from '/public/icons/break-line.svg'

export default async function blogPage() {

        // const resp = await axiosInstance.get("blog/")
        // const allPosts = resp.data
    const {allPosts, error} = await fetchAllPost()
    return (
        <div className="bg-c-gray-blue-primary min-h-screen">
        <Navbar />
        <main className="max-w-[85rem] w-full mx-auto px-4 md:px-6 lg:px-8 pt-36 py-16">
            <div className="text-center flex flex-col items-center gap-10 mb-16 text-white">
                <h1 className='text-3xl lg:text-4xl'>Todas las Publicaciones</h1>
                <Image 
                    alt='salto de linea'
                    src={breakLine}
                />
            </div>

            <div 
              id="container-last-posts-cards"
              className='grid gap-10 sm:grid-cols-2 lg:grid-cols-3'
              > 
              {allPosts &&
                allPosts?.map(post => (
                  <PostCard 
                    key={post.id}
                    title={post.title}
                    text={post.short_body}
                    datePublished={post.updated}
                    topics={post.topics}
                    imageUrl={post.image}
                    slug={post.slug}
                />
                  
                ))
              }
              
              
            </div>
            {error && 
            <div className='w-full text-white text-center text-xl'>
              <p>Estamos experimentando problemas en nuestros servidores y no ha sido posible cargar las publicaciones</p>
            </div>
            }

        </main>
        </div>

    )
}