import { useCallback, useEffect, useRef } from "react";
import TabDetail from "./TabDetails";
import { update, Tween, Easing } from "@tweenjs/tween.js";

const ScrollSpy = ({ monument }) => {
  const activeLink = useRef();
  const scrollDuration = 10;
  const elementOffsetTop = useCallback((el) => {
    const rect = el.getBoundingClientRect(),
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop };
  }, []);
  const animate = useCallback((time) => {
    requestAnimationFrame(animate);
    update(time);
  }, []);
  useEffect(() => {
    const sections = monument.tabDetails?.map((section) =>
      document.getElementById(section.id)
    );
    const links = document.querySelectorAll(".scroll-h a");
    const onScroll = () => {
      const windowHeight = window.innerHeight;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const top = rect.top;
        const bottom = rect.bottom;
        const id = section.getAttribute("id");
        const threshold = windowHeight * 0.5;

        if (top <= threshold && bottom >= threshold) {
          // Remove active class from all links
          links.forEach((link) => {
            link.classList.remove("active");
          });

          // Add active class to the link associated with the section
          const link = document.querySelector(`[href="#${id}"]`);

          if (link) {
            link.classList.add("active");
            if (activeLink.current !== id) {
              handleScroll(link);
              activeLink.current = id;
            }
          }
        }
      });
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [monument]);
  const handleScroll = (el) => {
    const container = document.querySelector(".scroll-h");
    container.scrollLeft = el.offsetLeft;
  };
  const animateScrolling = useCallback(
    (e) => {
      e.preventDefault();
      const coords = { y: window.scrollY || window.pageYOffset },
        hash = e.target.hash.replace("#", ""),
        target = document.getElementById(hash);

      window.setTimeout(() => {
        console.log(elementOffsetTop(target).top - 160);
        if (target) {
          window.scrollTo(0, coords.y);
          // Create a new tween that modifies 'coords'.
          new Tween(coords)
            // Move to top of the clicked element in 700ms.
            .to({ y: elementOffsetTop(target).top - 160 }, scrollDuration)
            // Use an easing function to make the animation smooth.
            .easing(Easing.Exponential.Out)
            .onUpdate(function () {
              // Called after tween.js updates 'coords'.
              // Move 'box' to the position described by 'coords' with a CSS translation.
              window.scrollTo(0, coords.y);
            })
            // Start tween immediately.
            .start();

          requestAnimationFrame(animate);
        }
      }, 100);
    },
    [animate, elementOffsetTop]
  );
  return (
    <>
      <div className="scroll-container" id="details">
        <div className="px-2">
          <div className="scroll-h">
            {monument.tabDetails?.map((el) => (
              <a
                key={el.id}
                id={"tab/" + el.id}
                onClick={animateScrolling}
                href={`#${el.id}`}
              >
                {el.title}
              </a>
            ))}
            <div className="indicator"></div>
          </div>
        </div>
      </div>
      <div
        className="container"
        style={{ position: "relative", padding: "1.5rem" }}
      >
        {monument.tabDetails?.map((detail) => (
          <TabDetail data={detail} key={detail.title} id={detail.id} />
        ))}
      </div>
    </>
  );
};

export default ScrollSpy;
