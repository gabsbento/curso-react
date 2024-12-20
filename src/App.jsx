import "./App.css";
import ConditionalRender from "./components/ConditionalRender";
import ShowUserName from "./components/ShowUserName";

function App() {
  const name = "Gabriel";
  return (
    <div className="App">
      <ConditionalRender />
      <ShowUserName name={name} />
    </div>
  );
}

export default App;
