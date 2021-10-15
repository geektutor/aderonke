import { BrowserRouter, Switch, Route } from "react-router-dom";
import BlogPost from "./compnents/blogPost";
import ScrollToTop from "./compnents/scrollTop";
import AllBlog from "./pages/allBlog";
import Home from "./pages/home";
import Work from "./pages/work";

function App() {
  return (
    <BrowserRouter>
      <Switch>
     
      
        <>
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
          <Route path="/blog-post/:id">
           <BlogPost/>
          </Route>
        </>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
