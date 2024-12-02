const TemplateExpressions = () => {
  const name = "João";
  const data = {
    age: 30,
    job: "Desenvolvedor",
  };
  return (
    <div>
      <h1>Template Expressions - {name}</h1>
      <p>
        O {name} tem {data.age} anos e trabalha como {data.job}
      </p>
    </div>
  );
};

export default TemplateExpressions;
