import React from "react";
import "./MyForm.css";

function MyForm() {
  return (
    <div>
      {/** */}
      <form>
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" name="name" placeholder="Digite seu nome" />
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
