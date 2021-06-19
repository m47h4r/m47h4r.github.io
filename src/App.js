import { GlassContainer } from "./components/layout/glass-container";
import { ImageBackground } from "./components/layout/image-background";

function App() {
  return (
    <ImageBackground style={{ height: "100%" }}>
      <GlassContainer>
        <div>Coming soon...</div>
      </GlassContainer>
    </ImageBackground>
  );
}

export default App;
