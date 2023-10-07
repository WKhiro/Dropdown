import "./App.css";
import { fruits } from "./fruits";
import { pokemon } from "./pokemon";
import { Dropdown } from "./Dropdown";

function App() {
  return (
    <>
      <h1>DROPDOWNS</h1>
      <div className="container">
        <Dropdown items={fruits} itemType={"Fruit"} multiSelect={true} />
        <Dropdown items={pokemon} itemType={"Pokemon"} multiSelect={false} />
      </div>
    </>
  );
}

export default App;
