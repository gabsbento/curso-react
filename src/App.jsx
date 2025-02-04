import "./App.css";
import { useState, useEffect } from "react";
import { useFetch } from "./hooks/useFetch";
const url = "http://localhost:3001/products";
function App() {
  const [products, setProducts] = useState([]);

  const { data: items, httpConfig, loading } = useFetch(url);

  console.log(items);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  /*useEffect(() => {
    async function getProducts() {
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
    }

    getProducts();
  }, []);*/

  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = { name, price };
    /*const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    const addedProduct = await res.json();
    setProducts((prevProducts) => [...prevProducts, addedProduct]);*/
    httpConfig(product, "POST");
    setName("");
    setPrice("");
  };

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      {loading && <p>Carregando...</p>}
      {!loading && (
        <ul>
          {items &&
            items.map((product) => {
              return (
                <li key={product.id}>
                  {product.name} - R$ {product.price}
                </li>
              );
            })}
        </ul>
      )}
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
          {loading && (
            <button type="submit" disabled>
              Carregando...
            </button>
          )}
          {!loading && <button type="submit">Cadastrar</button>}
        </form>
      </div>
    </div>
  );
}

export default App;
