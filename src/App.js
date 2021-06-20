import { useEffect } from "react";
import { GlassContainer } from "./components/layout/glass-container";
import { ImageBackground } from "./components/layout/image-background";
import { FlexMainContainer } from "./components/layout/flex-main-container";
import { NavigationSidebar } from "./components/navigation-sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Blog } from "./page/blog";
import { About } from "./page/about";

function App() {
  // useEffect(() => {
  //   setTimeout(() => {

  //   }, 1000)
  // }, [])
  return (
    <Router>
      <ImageBackground>
        <FlexMainContainer>
          <GlassContainer>
            <NavigationSidebar />
          </GlassContainer>
          <GlassContainer style={{ flexGrow: "1" }}>
            <Switch>
              <Route path="/blog">
                <Blog />
              </Route>
              <Route path="/about">
                <About />
              </Route>
            </Switch>
          </GlassContainer>
        </FlexMainContainer>
      </ImageBackground>
    </Router>
  );
}

export default App;
