import "./App.css";
import Events from "./components/Events";

//Components
import FirstComponent from "./components/FirstComponent";
import TemplateExpressions from "./components/TemplateExpressions";

import City from "./assets/img2.jpg";
import ManageData from "./components/ManageData";
function App() {
  return (
    <div className="App">
      <h1>Fundamentos</h1>
      <ManageData />
      <FirstComponent />
      <TemplateExpressions />
      <Events />
      <div>
        <img src="/img1.jpg" alt="Imagem 1" />
      </div>
      <div>
        <img src={City} alt="cidade" />
      </div>
    </div>
  );
}

export default App;
