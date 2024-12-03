const Events = () => {
  const handleMyClick = (e) => {
    console.log(e);
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
    </div>
  );
};

export default Events;
