export default function CommentList ({comments}) {
    return (
        <section className="section">
        {
        comments.map(comment =>
        (
            <article key={comment.id} 
                className="card my-3 p-3 bg-primary">
                <h3>{comment.user.username}</h3>
                <p>{comment.body}</p>
            </article>
        ))}
        </section>
    )
}