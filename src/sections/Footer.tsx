import { imgImage12 } from "../assets";

export default function Footer() {
  return (
    <div className="relative w-full overflow-hidden" style={{ height: 504 }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          alt=""
          className="absolute max-w-none w-full"
          style={{ height: "160.91%", top: "-60.91%", left: "-0.01%" }}
          src={imgImage12}
        />
      </div>
    </div>
  );
}
