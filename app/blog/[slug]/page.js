import Image from "next/image"
import '../../styles/BlogPreview.css'
import '../../styles/DetailPost.css'

async function fecthPost(slug) {
    return fetch(`https://abogadamagdiele.pythonanywhere.com/api/v1/blog/${slug}/`, {
        next: {
            revalidate: 60
        }})
    .then(response => response.json())
}

function formatearFecha(fechaISO) {
    const fecha = new Date(fechaISO);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return fecha.toLocaleDateString('es-ES', options);
}



export default async function PostDetailPage ({params}) {
    const {slug} = params
    const post = await fecthPost(slug)
    const paragraphs = post.body.split('\n')

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
                        <Image src={post.image} alt="foto representativa del tema del articulo" width={500} height={500} className="" />
                        <p className="mt-1 mb-0"><small>Publicado el {formatearFecha(post.created)}</small></p>
                    </figure>
                    ) : '' 
            }
            <div className="col-auto blog-post">
                {paragraphs.map((par, index) => <p key={index}>{par}</p>)}
            </div>

            {/* <CreateComment id={post.id} /> */}
            {/* <CommentList comments={comments} /> */}
        </main>


    )
}