import "./style.css";

const RippleEffect = ({ top, left, width, rippleClass }) => {
  return (
    <div
      className="bg-inherit absolute bg-transparent"
      style={{
        width: width,
        height: width,
        top: top,
        left: left,
      }}
    >
      <div className="w-full h-full relative bg-transparent">
        <div className={`ripple ${rippleClass}`} />
        <div className={`ripple ${rippleClass}`} />
        <div className={`ripple ${rippleClass}`} />
      </div>
    </div>
  );
};

export default RippleEffect;
