// Receives `posts` (array) and renders one <Article> per post inside <main>.
// Each Article gets a unique `key` (post.id) so React can track list items.
import Article from "./Article";

function ArticleList({ posts = [] }) {
  return (
    <main>
      {posts.map((post) => (
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
          minutes={post.minutes}
        />
      ))}
    </main>
  );
}

export default ArticleList;