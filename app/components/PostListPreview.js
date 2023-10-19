import Link from "next/link"
import PostListPreviewItem from "./PostDetailPreviewItem";
import '../styles/BlogPreview.css'

async function fecthPosts() {
    return fetch('https://abogadamagdiele.pythonanywhere.com/api/v1/blog', {
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
 export default async function PostListPreview ({limit=null}) {

    let posts = await fecthPosts()
    if (limit) {
        posts = posts.slice(0, limit)
    }

    return (
        <section className={`${limit ? 'section auto-h' : ''} blog-preview`}>
            { limit ? (
                <h2 className="mb-3 fs-1">Ultimas Publicaciones</h2>
            ) : (
                <h2 className="mb-3 fs-1">Todas las Publicaciones</h2>
            )}

            <div className='row'>

        {
            posts.map(post => (
                
                <Link key={post.slug} href={`/blog/${post.slug}`} className="nav-link col-12 col-md-6">
                <PostListPreviewItem 
                    title={post.title}
                    body={post.body.slice(0, 120) + '...'}
                    created={formatearFecha(post.created)}
                    className=""
                    />
            </Link>   
            ))
        }
            </div>
        </section>
    )
 }