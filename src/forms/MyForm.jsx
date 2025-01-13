import React from "react";
import "./MyForm.css";

function MyForm({ user }) {
  const [name, setName] = React.useState(user ? user.name : "");
  const [email, setEmail] = React.useState(user ? user.email : "");
  const [bio, setBio] = React.useState("");

  const handleName = (e) => setName(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("enviando form");
    setName("");
    setEmail("");
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
            value={name}
          />
        </div>
        <label>
          <span>Email</span>
          <input
            type="email"
            name="email"
            placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          <span>Bio:</span>
          <textarea
            name="bio"
            placeholder="Digite sua biografia"
            onChange={(e) => {
              setBio(e.target.value);
            }}
            value={bio}
          ></textarea>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default MyForm;
