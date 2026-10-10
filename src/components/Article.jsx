// Displays the title, date, and preview of a blog post.
// Uses a default date if no date is provided.

function Article({ title, date = "January 1, 1970", preview }) {
    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
        </article>
    );
}

export default Article;