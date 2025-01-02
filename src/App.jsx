import "./App.css";
import CarDetails from "./components/CarDetails";
import ConditionalRender from "./components/ConditionalRender";

function App() {
  const cars = [
    {id: 1, brand: "VW", color: "Amarelo", status: true, km: 0},
    {id: 2, brand: "Fiat", color: "Branco", status: true, km: 0},
    {id: 3, brand: "Hyundai", color: "Prata", status: true, km: 0}
  ]
  return (
    <div className="App">
      <ConditionalRender />
      <CarDetails brand="VW" color="Vermelho" km={12000} status={false}/>
      <CarDetails brand="Ford" color="Vermelho" km={0} status={true}/>
      <CarDetails brand="Fiat" color="Branco" km={0} status={true}/>
      {/* Loop */}
      {cars.map((car, index) => (
        <CarDetails 
          brand={car.brand} 
          color={car.color} 
          km={car.km} 
          status={car.status} 
          key={index}
        />
      ))}
    </div>
  );
}

export default App;
