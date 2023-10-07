import "./App.css";
import { fruits } from "./fruits";
import { Dropdown } from "./Dropdown";

function App() {
  return (
    <div className="container">
      <Dropdown items={fruits} multiSelect={false} />
      <Dropdown items={fruits} multiSelect={true} />
    </div>
  );
}

export default App;
