import React from "react";

function ConditionalRender() {
  const [x] = React.useState(false);
  return (
    <div>
      <h1>Isso será exibido?</h1>
      {x && <p>Se x for true, sim</p>}
    </div>
  );
}

export default ConditionalRender;
