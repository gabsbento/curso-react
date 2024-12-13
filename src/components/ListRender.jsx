import React from "react";

const ListRender = () => {
  const [list] = React.useState(["Luiz", "Maria", "João"]);
  return (
    <div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListRender;
