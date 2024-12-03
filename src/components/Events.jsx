const Events = () => {
  const handleMyClick = (e) => {
    console.log(e);
  };
  return (
    <div>
      <div>
        <button onClick={handleMyClick}>Click</button>
      </div>
    </div>
  );
};

export default Events;
