import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="heading">Dictionary</header>
        <p>Which word are you interested in exploring further? </p>
        <main>
          <Dictionary />
        </main>
        <footer>
          Coded by{" "}
          <a
            href="https://github.com/lucynowland"
            target="_blank"
            rel="noreferrer"
          >
            Lucy Nowland
          </a>{" "}
          which is open-sourced on{" "}
          <a
            href="https://github.com/lucynowland/react-dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>{" "}
          & hosted on{" "}
          <a
            href="https://react-dictionary-search-project.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
