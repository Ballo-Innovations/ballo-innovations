import "./style.css";

const RippleEffect = ({ top, left, width, rippleClass }) => {
  return (
    <div
      className="absolute bg-transparent scale-[3] md:scale-100 opacity-40"
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
