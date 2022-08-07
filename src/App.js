import "./App.css";
import NavBar from "./Header/NavBar";
import Hero from "./HeroImage/Hero";
import Row from "./Rows/Row";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Hero />

      <Row title="Netflix Original" />
    </div>
  );
}

export default App;
