
// import CommentList from "./components/CommentList"
// import CreateComment from "./components/CreateCommet"
// import Image from "next/image"
import { HiChatAlt2 } from "react-icons/hi"
import '../../styles/BlogPreview.css'
import '../../styles/DetailPost.css'

function fecthPost(slug) {
    return fetch(`http://localhost:8000/api/v1/blog/${slug}`, {
        next: {
            revalidate: 60
        }})
    .then(response => response.json())
}

// function fetchComments(id) {
//     return fetch(`http://localhost:8000/api/v1/blog/${id}/comments`, {
//         next:  {
//             revalidate: 60
//         }})
//     .then(response => response.json())
// }

function formatearFecha(fechaISO) {
    const fecha = new Date(fechaISO);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return fecha.toLocaleDateString('es-ES', options);
}



export default async function PostDetailPage ({params}) {
    const {slug} = params
    const post = await fecthPost(slug)
    const paragraphs = post.body.split('\n')

    // const comments = await fetchComments(id)
    return (
        <main className="main section mt-3 container-lg">
            <div className="max-w-600px mx-auto mb-1">
                <h1>
                    <strong>
                    {post.title}
                    </strong>
                </h1>
                {
                    post.subtitle ? 
                    (<h2>{post.subtitle}</h2>)
                    : ''
                }
            </div>
            {
                post.image ? 
                    (
                    <figure className="col-12 col-md-9 mx-auto">
                        <img src={post.image} width={500} className="" />
                        <p className="mt-1 mb-0"><small>Publicado el {formatearFecha(post.created)}</small></p>
                    </figure>
                    ) : '' 
            }
            <div className="col-auto blog-post">
                {paragraphs.map(par => <p>{par}</p>)}
            </div>

            {/* <CreateComment id={post.id} /> */}
            {/* <CommentList comments={comments} /> */}
        </main>


    )
}