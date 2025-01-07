import "./App.css";
import Title from "./components/Title";

function App() {
  let n = 1;
  const redTitle = false;
  return (
    <div className="App">
      {/* CSS Inline Dinamico */}
      <h2 style={n < 10 ? { color: "red" } : { color: "green" }}> teste</h2>
      {/* Classe dinamica */}
      <h3 className={redTitle ? "red-title" : "green-title"}> titulo</h3>
      {/* CSS Module */}
      <Title />
      <h1>Teste</h1>
    </div>
  );
}

export default App;
