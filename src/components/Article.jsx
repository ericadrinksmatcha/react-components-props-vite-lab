// Displays a single post: title (h3), date (small), and preview (p).
// `date` defaults to "January 1, 1970" when a post has no date.
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