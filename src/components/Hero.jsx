import "../styles/Hero.css";
function Hero() {
  return (
    <div id="hero">
      <section id="hero-container">
        <h1 id="welcome">Welcome!</h1>
        <p id="welcome-text">
          Start by searching for a company by either it's name or org.nr <br />{" "}
          or click on the "Company list" button to browse.
        </p>
      </section>
    </div>
  );
}
export default Hero;
