import githubLogo from "../assets/github-mark-white.png";
import "../styles/Footer.css";
export default function Footer() {
  return (
    <>
      <section id="footer">
        <div id="nomnom">
          <p>This was made using React</p>
          <p>Made by Lars Henrik Roan Midtsæter</p>
          <a href="https://github.com/mrhl082024" target="_blank">
            <img id="git-logo" src={githubLogo} alt="github logo" />
          </a>
        </div>
      </section>
    </>
  );
}
