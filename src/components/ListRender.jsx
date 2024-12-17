import React from "react";

const ListRender = () => {
  const [list] = React.useState(["Luiz", "Maria", "João"]);

  const [users, setUsers] = React.useState([
    { id: 1, name: "Gabriel", age: 31 },
    { id: 2, name: "João", age: 28 },
    { id: 3, name: "Pedro", age: 44 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);
    setUsers((prevUsers) => {
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };
  return (
    <div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete Random user</button>
    </div>
  );
};

export default ListRender;
