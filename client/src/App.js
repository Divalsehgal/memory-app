import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route component={Home} path="/" />
      </BrowserRouter>
    </div>
  );
}

export default App;
