const Events = () => {
  const handleMyClick = (e) => {
    console.log(e);
  };

  const renderSomething = (x) => {
    if (x) {
      return <h1>True</h1>;
    } else {
      return <h1>False</h1>;
    }
  };
  return (
    <div>
      <div>
        <button onClick={handleMyClick}>Click</button>
      </div>
      <div>
        <button onClick={() => console.log("Clicou no segundo botão")}>
          Click Aqui Também
        </button>
      </div>
      {renderSomething(true)}
    </div>
  );
};

export default Events;
