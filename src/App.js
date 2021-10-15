import { BrowserRouter, Switch, Route } from "react-router-dom";
import ScrollToTop from "./compnents/scrollTop";
import AllBlog from "./pages/allBlog";
import Home from "./pages/home";
import Work from "./pages/work";

function App() {
  return (
    <BrowserRouter>
      <Switch>
     
      
        <div className="App">
        <ScrollToTop />
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/blogs">
            <AllBlog />
          </Route>
          <Route path="/works">
            <Work />
          </Route>
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
