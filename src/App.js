import { BrowserRouter } from "react-router-dom";
import Home from "./pages/home";


function App() {
  return (
 
    <BrowserRouter>
     <div className="App">
     <Home/>
    </div>
    </BrowserRouter>
   
  );
}

export default App;
