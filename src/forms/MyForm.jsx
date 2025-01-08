import React from "react";
import "./MyForm.css";

function MyForm() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

  const handleName = (e) => setName(e.target.value);
  return (
    <div>
      {/** */}
      <form>
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
          <input type="email" name="email" placeholder="Digite seu email" />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default MyForm;
