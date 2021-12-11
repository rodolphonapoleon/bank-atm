import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Image } from "react-bootstrap";
import logo from "./banklogo.png";
import Account from "./Components/Account";

function App() {
  return (
    <div className="app">
      <Image src={logo} />
      <Account />
    </div>
  );
}

export default App;
