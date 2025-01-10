import React from "react";
import "./MyForm.css";

function MyForm() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

  const handleName = (e) => setName(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("enviando form");
  };

  console.log(name, email);
  return (
    <div>
      {/** */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite seu nome"
            onChange={handleName}
          />
        </div>
        <label>
          <span>Email</span>
          <input
            type="email"
            name="email"
            placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default MyForm;
