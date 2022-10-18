import "./App.css";
import logo from "./logo.svg";

function About() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>About Page</h1>
        <p>Books are fun to read and can be very helpful for learning new stuff</p>
        <p>Rules of book reading are fairly self-explanatory</p>

        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default About;
