import { animation } from "../services/titleAnimation";
import { useLocation } from "react-router-dom";
import { useRef, useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Landing = ({ monument }) => {
  const main = useRef();
  const swipe = useRef(0);
  const { pathname } = useLocation();
  useEffect(() => {
    const timeout = setTimeout(() => {
      animation();
    }, 1000);
    return () => clearTimeout(timeout);
  }, [pathname]);
  // useEffect(() => {
  //   const swipeArea = document.querySelector(".landing");
  //   // const swipeArea = document.body;
  //   let startY = 0;
  //   let endY = 0;

  //   swipeArea.addEventListener(
  //     "touchstart",
  //     function (e) {
  //       startY = e.touches[0].clientY;
  //     },
  //     { passive: false }
  //   );

  //   swipeArea.addEventListener(
  //     "touchmove",
  //     function (e) {
  //       endY = e.touches[0].clientY;
  //       e.preventDefault();
  //     },
  //     { passive: false }
  //   );

  //   swipeArea.addEventListener(
  //     "touchend",
  //     function () {
  //       const deltaY = endY - startY;

  //       if (deltaY > 50) {
  //         // console.log("Swipe down");
  //         swipe.current--;
  //         // Your logic for down swipe
  //       } else if (deltaY < -50) {
  //         // console.log("Swipe up");
  //         swipe.current++;
  //         // Your logic for up swipe
  //         if (swipe.current === 1) {
  //           console.log("Time+Desc");
  //           window.scrollTo(0, 100);
  //         }
  //         if (swipe.current === 2) {
  //           console.log("main");
  //         }
  //       }
  //     },
  //     { passive: false }
  //   );
  // }, []);
  // useEffect(() => {
  //   const handleScroll = (e) => {
  //     e.preventDefault();
  //     console.log(e);
  //   };
  //   // createAnimation();
  //   window.addEventListener("scroll", handleScroll);
  // }, []);
  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const landing = self.selector(".landing");
      gsap.to(".landing", {
        opacity: 0,
        scrollTrigger: {
          trigger: landing,
          start: "180px",
          end: `+=10`,
          scrub: true,
          // markers: true,
          // on,
        },
      });
      gsap.to(".landing", {
        height: 0,
        scrollTrigger: {
          trigger: landing,
          start: "190px",
          end: `+=5`,
          scrub: true,
          // markers: true,
          // on,
        },
      });

      gsap.to(".timeLine", {
        opacity: 1,
        bottom: 0,
        scrollTrigger: {
          trigger: landing,
          start: "50px",
          end: `+=30`,
          scrub: true,
          // markers: true,
        },
      });
      gsap.to(".description", {
        opacity: 1,
        bottom: 0,
        scrollTrigger: {
          trigger: landing,
          start: "50px",
          end: `+=30`,
          scrub: true,
          // markers: true,
        },
      });
    }, main); // <- Scope!

    return () => ctx.revert(); // <- Cleanup!
  }, []);

  return (
    <div ref={main}>
      <div className="landing panel">
        <div
          className="bg"
          style={{
            position: "fixed",
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
        <div className="overlay"></div>
        {/* <div> */}
        <div className="bottom">
          <h1 className="ml1 mainTitle">
            <span className="text-wrapper">
              <span className="letters">{monument.title}</span>
            </span>
          </h1>
          {/* <h1 className="mainTitle">{monument.title}</h1> */}
          {/* <motion.h5
              key={monument.id + "time"}
              initial={{ opacity: 0, y: 75 }}
              transition={{ duration: 0.25, delay: 0.25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.2 }}
            >
              {monument.time}
            </motion.h5>
            <motion.p
              key={monument.id + "desc"}
              initial={{ opacity: 0, y: 75 }}
              transition={{ duration: 0.25, delay: 0.3 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.2 }}
            >
              {monument.desc?.substring(0, 200)}
            </motion.p> */}
          <h5 className="timeLine">{monument.time}</h5>
          <p className="description">{monument.desc}</p>
          {/* <a href={`#details`} className="viewMore">
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
            </a> */}
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Landing;
