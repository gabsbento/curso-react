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
    </div>
  );
}

export default App;
