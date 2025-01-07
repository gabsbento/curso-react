import "./App.css";
import OtherContainer from "./components/OtherContainer";

function App() {
  let n = 1;
  return (
    <div className="App">
      <OtherContainer />
      {/* CSS Inline Dinamico */}
      <h2 style={n < 10 ? { color: "red" } : { color: "green" }}> teste</h2>
    </div>
  );
}

export default App;
