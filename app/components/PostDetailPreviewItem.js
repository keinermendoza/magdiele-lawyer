export default function PostListPreviewItem({title, body, created}) {
    
    return (
        <article className="rounded-3 border p-3 m-1">
            <div className="card-body">
                <h3>{title}</h3>
                <p>{body}</p>
            </div>
            <div className="card-footer my-0">
                <span className="">Publicado el {created}</span>
                <h4 className="text-center mt-2">Leer más</h4>
            </div>
        </article>
    )
}