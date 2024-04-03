const Tooltip = ({ text }: { text: string }) => {
  return (
    <div className="tooltip">
      <span className="tooltip__text">{text}</span>
    </div>
  );
};

export default Tooltip;
