import "./App.css";
import MyForm from "./forms/MyForm";

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm user={{ name: "João", email: "j@j.com" }} />
    </div>
  );
}

export default App;
