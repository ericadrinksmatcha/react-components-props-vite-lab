// Displays the blog logo and description inside an <aside>.
// Props: `image` (img src, defaults to a placeholder) and `about` (blurb text).
function About({ image = "https://via.placeholder.com/215", about }) {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;