import "./App.css";
import CarDetails from "./components/CarDetails";
import ConditionalRender from "./components/ConditionalRender";

function App() {
  return (
    <div className="App">
      <ConditionalRender />
      <CarDetails brand="VW" color="Vermelho" km={12000} status={false}/>
      <CarDetails brand="Ford" color="Vermelho" km={0} status={true}/>
      <CarDetails brand="Fiat" color="Branco" km={0} status={true}/>
    </div>
  );
}

export default App;
