// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useLayoutEffect, useRef } from "react";

// gsap.registerPlugin(ScrollTrigger);
const Landing = ({ monument }) => {
  // const main = useRef();

  // useLayoutEffect(() => {
  //   const ctx = gsap.context((self) => {
  //     const bg = self.selector(".bg");
  //     bg.forEach((bg) => {
  //       gsap.to(bg, {
  //         opacity: 0,
  //         scrollTrigger: {
  //           trigger: bg,
  //           start: "0",
  //           end: "80%",
  //           scrub: true,
  //         },
  //       });
  //     });
  //   }, main); // <- Scope!

  //   return () => ctx.revert(); // <- Cleanup!
  // }, []);
  return (
    <div className="landing panel">
      <div
        className="bg"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url("${monument.preview}")`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundRepeat: "noPepeat",
        }}
      ></div>
      <div className="bottom">
        <h1 className="mainTitle">{monument.title}</h1>
        <h5>{monument.time}</h5>
        <p>{monument.desc}</p>
        <a href={`#details`} className="viewMore">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="13"
            viewBox="0 0 27 13"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.5193 6.0002L0 0.328649L0.616203 0L13.1355 5.67155C13.6762 5.91648 14.5145 5.90667 15.0308 5.64937L26.3527 0.00739378L27 0.321255L15.6781 5.96323C14.8176 6.39206 13.4204 6.40842 12.5193 6.0002Z"
              fill="black"
              fillOpacity="0.5"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.5193 12.7043L0 7.03272L0.616203 6.70407L13.1355 12.3756C13.6762 12.6206 14.5145 12.6107 15.0308 12.3534L26.3527 6.71147L27 7.02533L15.6781 12.6673C14.8176 13.0961 13.4204 13.1125 12.5193 12.7043Z"
              fill="black"
              fillOpacity="0.5"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Landing;
