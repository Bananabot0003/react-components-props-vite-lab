// Takes the posts array and displays each post
// using the Article component.

import Article from "./Article";

function ArticleList({ posts }) {
    return (
        <main>
            {posts.map((post) => (
                <Article
                    key={post.id}
                    title={post.title}
                    date={post.date}
                    preview={post.preview}
                />
            ))}
        </main>
    );
}

export default ArticleList;