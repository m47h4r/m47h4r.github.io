import "./glass-container.css";

function GlassContainer({ children, isDense, ...props }) {
  let className = isDense
    ? "glass-container glass-container--dense"
    : "glass-container";

  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}

export { GlassContainer };
