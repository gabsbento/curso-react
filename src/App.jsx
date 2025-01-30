import "./App.css";
import { useState, useEffect } from "react";
function App() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const url = "http://localhost:3001/products";

  useEffect(() => {
    async function getProducts() {
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
    }

    getProducts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = { name, price };
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
  };

  return (
    <div className="App">
      <h1>Hello World</h1>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              {product.name} - R$ {product.price}
            </li>
          );
        })}
      </ul>
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Preço:
            <input
              type="text"
              value={price}
              name="price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
