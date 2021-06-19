import "./image-background.css";

function ImageBackground({ style, children }) {
  return (
    <div style={style} className="image-background">
      {children}
    </div>
  );
}

export { ImageBackground };
