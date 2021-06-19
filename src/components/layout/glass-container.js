import "./glass-container.css";

function GlassContainer({ children, ...props }) {
  return (
    <div className="glass-container" {...props}>
      {children}
    </div>
  );
}

export { GlassContainer };
