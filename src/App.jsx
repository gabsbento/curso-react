import "./App.css";
import CarDetails from "./components/CarDetails";
import ConditionalRender from "./components/ConditionalRender";

function App() {
  return (
    <div className="App">
      <ConditionalRender />
      <CarDetails brand="VW" color="Vermelho" km={12000}/>
    </div>
  );
}

export default App;
