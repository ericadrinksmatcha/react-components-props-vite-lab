// Displays the blog name in an <h1> inside a <header>.
// Props: `name` (passed down from App).
function Header({ name }) {
  return (
    <header>
      <h1>{name}</h1>
    </header>
  );
}

export default Header;