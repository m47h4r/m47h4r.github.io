import { useEffect } from "react";
import { GlassContainer } from "./components/layout/glass-container";
import { ImageBackground } from "./components/layout/image-background";
import { FlexMainContainer } from "./components/layout/flex-main-container";

function App() {
  // useEffect(() => {
  //   setTimeout(() => {

  //   }, 1000)
  // }, [])
  return (
    <ImageBackground>
      <FlexMainContainer>
        <GlassContainer style={{ width: "250px" }}>
          <div>Welcome</div>
        </GlassContainer>
        {/* <GlassContainer style={{ flexGrow: "1" }}>
          <div>Welcome</div>
        </GlassContainer> */}
      </FlexMainContainer>
    </ImageBackground>
  );
}

export default App;
