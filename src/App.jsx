import "./App.css";
import { useState, useEffect } from "react";
function App() {
  const [products, setProducts] = useState([]);
  const url = "http://localhost:3001/products";

  useEffect(() => {
    async function getProducts() {
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
    }

    getProducts();
  }, []);
  return (
    <div className="App">
      <h1>Hello World</h1>
      <ul>
        {products.map((product) => {
          return <li key={product.id}>{product.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
