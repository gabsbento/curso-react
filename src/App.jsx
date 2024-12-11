import "./App.css";
import Events from "./components/Events";

//Components
import FirstComponent from "./components/FirstComponent";
import TemplateExpressions from "./components/TemplateExpressions";
function App() {
  return (
    <div className="App">
      <h1>Fundamentos</h1>
      <FirstComponent />
      <TemplateExpressions />
      <Events />
      <div>
        <img src="/img1.jpg" alt="Imagem 1" />
      </div>
    </div>
  );
}

export default App;
