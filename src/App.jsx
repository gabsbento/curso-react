import "./App.css";
import OtherContainer from "./components/OtherContainer";

function App() {
  let n = 1;
  const redTitle = false;
  return (
    <div className="App">
      <OtherContainer />
      {/* CSS Inline Dinamico */}
      <h2 style={n < 10 ? { color: "red" } : { color: "green" }}> teste</h2>
      {/* Classe dinamica */}
      <h3 className={redTitle ? "red-title" : "green-title"}> titulo</h3>
    </div>
  );
}

export default App;
