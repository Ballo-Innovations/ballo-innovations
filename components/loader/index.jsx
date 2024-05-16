import Image from "next/image";
import "./style.css";
import logo from "@/public/Ballo Logo New/Ballo logo new copy white.png";
import FollowMouse from "./mouseTracker";
import RippleEffect from "./rippleEffect";

const Loader = () => {
  return (
    <div id="loader">
      <FollowMouse />
      <RippleEffect
        top={"10%"}
        left={"-20%"}
        width={"20vw"}
        rippleClass="ripple-1"
      />

      <RippleEffect
        top={"70%"}
        left={"50%"}
        width={"8vw"}
        rippleClass="ripple-2"
      />

      <RippleEffect
        top={"-15%"}
        left={"40%"}
        width={"11vw"}
        rippleClass="ripple-3"
      />

      <RippleEffect
        top={"20%"}
        left={"70%"}
        width={"13vw"}
        rippleClass="ripple-4"
      />

      <RippleEffect
        top={"60%"}
        left={"10%"}
        width={"11vw"}
        rippleClass="ripple-4"
      />

      <div className="loader-container relative w-full h-full flex-center overflow-visible">
        <Image
          src={logo}
          alt="Ballo Innovations"
          quality={100}
          className="w-[80vw]"
          blurDataURL={logo.blurhashDataUrl}
        />
      </div>
    </div>
  );
};

export default Loader;
