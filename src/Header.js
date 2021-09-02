import "../src/Header.css"

function Header() {
  return (
    <div className="header">
      <header className="App-header">
      <h1>Cristian Cuevas</h1>
        <nav>
            <a href="#about">About Me</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact Me</a>
            {/* <a href="#">Resume</a> */}
        </nav>
      </header>

      <section class="hero-banner">
        <div>
            <h2> HTML & CSS' Worst Nightmare</h2>
        </div>
    </section>

    </div>
  );
}

export default Header;