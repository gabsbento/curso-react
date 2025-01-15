import React from "react";

function ConditionalRender() {
  const [x] = React.useState(false);
  const [name, setName] = React.useState("João");
  return (
    <div>
      <h1>Isso será exibido?</h1>
      {x && <p>Se x for true, sim</p>}
      {name === "João" ? (
        <p>Se name for João, sim</p>
      ) : (
        <p>O nome não é João</p>
      )}
      <button onClick={() => setName("Maria")}>Alterar nome</button>
    </div>
  );
}

export default ConditionalRender;
