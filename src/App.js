// Default
import "./App.css";

// Data
import HomeComponents from "../src/components/Home.js";
import PharmaList from "./components/Pharmalist.js";

function App() {
  return (
    <div>
      <HomeComponents />
      <div>
        <PharmaList />
      </div>
    </div>
  );
}

export default App;
