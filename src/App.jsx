import { useState } from "react";
import "./App.css";
import CarDetails from "./components/CarDetails";
import ConditionalRender from "./components/ConditionalRender";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import Fragment from "./components/Fragment";
import Message from "./components/Message";
import ChangeMessageState from "./components/ChangeMessageState";

function App() {
  /*const cars = [
    {id: 1, brand: "VW", color: "Amarelo", status: true, km: 0},
    {id: 2, brand: "Fiat", color: "Branco", status: true, km: 0},
    {id: 3, brand: "Hyundai", color: "Prata", status: true, km: 0}
  ]*/

  function showMessage(){
    console.log("Evento do componente pai");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  }
  return (
    <div className="App">
      <ConditionalRender />
      <CarDetails brand="VW" color="Vermelho" km={12000} status={false}/>
      <CarDetails brand="Ford" color="Vermelho" km={0} status={true}/>
      <CarDetails brand="Fiat" color="Branco" km={0} status={true}/>
      {/* Loop */}
      {/*cars.map((car, index) => (
        <CarDetails 
          brand={car.brand} 
          color={car.color} 
          km={car.km} 
          status={car.status} 
          key={index}
        />
      ))*/}
      <Fragment propFragment={"Terceiro titulo"}/>
      {/** Children */}
      <Container>
        <p>Este é o container</p>
      </Container>
      <ExecuteFunction myFunction={showMessage}/>
      {/** state lift */}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>
    </div>
  );
}

export default App;
