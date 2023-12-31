import { useEffect, useState } from "react";
import { monuments } from "../services/monuments";
import { Link, useLocation } from "react-router-dom";
import { useAnimate, stagger, motion } from "framer-motion";

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

function useMenuAnimation(isOpen) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "ul",
      {
        clipPath: isOpen
          ? "inset(0% 0% 0% 0% round 10px)"
          : "inset(10% 50% 90% 50% round 10px)",
      },
      {
        type: "spring",
        bounce: 0,
        duration: 0.5,
      }
    );

    animate(
      ".monument-list",
      isOpen ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.3 },
      {
        duration: 0.2,
        delay: isOpen ? staggerMenuItems : 0,
      }
    );
  }, [isOpen]);

  return scope;
}

const Header = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);
  const handleClick = () => {
    window.scrollTo(0, 0);
    setIsOpen(false);
  };
  useEffect(handleClick, [pathname]);
  return (
    <div ref={scope}>
      <header className="header">
        <motion.div
          whileTap={{ scale: 0.8 }}
          onClick={() => setIsOpen(!isOpen)}
          className={`primary-nav-trigger`}
        >
          <div className={`menu-icon ${isOpen ? "is-clicked" : ""}`}></div>
        </motion.div>
        <motion.div className="logo" whileTap={{ scale: 0.8 }}>
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="30"
              viewBox="0 0 27 30"
              fill="none"
            >
              <path
                d="M26.5537 6.39554C26.7052 6.46876 26.8347 6.59062 26.9158 6.75212C26.9198 6.75979 26.9235 6.76745 26.9272 6.77538C26.935 6.7923 26.9421 6.80975 26.949 6.82719C26.9855 6.92394 27.0017 7.02333 26.9998 7.12113V12.6315C26.9998 13.0676 26.6441 13.421 26.2056 13.421C25.7672 13.421 25.4114 13.0676 25.4114 12.6315V8.38256L21.7962 10.1798C21.4037 10.3749 20.9268 10.2168 20.7308 9.82664C20.5346 9.43675 20.6936 8.9625 21.0858 8.76748L24.4301 7.10538L21.0858 5.44302C20.6936 5.24794 20.5346 4.77372 20.7308 4.38385C20.9268 3.99396 21.4038 3.83589 21.7962 4.0307L26.5537 6.39554ZM26.9998 22.8791C27.0022 22.9949 26.9788 23.1131 26.9272 23.2249C26.8882 23.3089 26.8347 23.3859 26.7688 23.4517C26.702 23.5178 26.6305 23.5675 26.5537 23.6047L21.7961 25.9694C21.4037 26.1645 20.9267 26.0064 20.7308 25.6166C20.5345 25.2264 20.6935 24.7522 21.0857 24.5574L24.43 22.895L21.0857 21.2327C20.6935 21.0378 20.5345 20.5636 20.7308 20.1735C20.9267 19.7836 21.4037 19.6255 21.7961 19.8206L25.4114 21.6176V17.3687C25.4114 16.9328 25.7671 16.5794 26.2056 16.5794C26.644 16.5794 26.9998 16.9328 26.9998 17.3687L26.9998 22.8791ZM2.56997 22.895L5.91402 24.5574C6.30647 24.7522 6.46548 25.2264 6.26925 25.6165C6.07303 26.0064 5.59603 26.1645 5.20387 25.9694L0.446339 23.6047C0.294782 23.5312 0.165298 23.4096 0.0839376 23.2481C0.0802152 23.2404 0.0764933 23.2325 0.0727714 23.2248C0.0650608 23.2079 0.0576155 23.1905 0.0509688 23.173C0.0142767 23.0763 -0.00194254 22.9769 0.00018455 22.8791V17.3685C0.00018455 16.9326 0.355677 16.5792 0.794388 16.5792C1.23283 16.5792 1.58832 16.9326 1.58832 17.3685V21.6174L5.20383 19.8204C5.59601 19.6254 6.07304 19.7834 6.26921 20.1733C6.46543 20.5635 6.30643 21.0377 5.91398 21.2325L2.56997 22.895ZM1.58831 8.38261V12.6315C1.58831 13.0677 1.23282 13.4211 0.794379 13.4211C0.355668 13.4211 0.000175203 13.0677 0.000175203 12.6315V7.12118C-0.00221775 7.00514 0.0209139 6.88725 0.0727611 6.77543C0.11158 6.69137 0.165292 6.61445 0.231228 6.54863C0.297966 6.48255 0.36922 6.43286 0.446333 6.39558L5.20386 4.03061C5.59604 3.83579 6.07308 3.99386 6.26925 4.38376C6.46547 4.77365 6.30647 5.2479 5.91402 5.44292L2.56996 7.10529L5.91402 8.76738C6.30646 8.96246 6.46547 9.43667 6.26925 9.82654C6.07302 10.2167 5.59602 10.3748 5.20386 10.1797L1.58831 8.38261ZM13.1304 0.0903995C13.2407 0.0325104 13.3665 0 13.4997 0C13.6332 0 13.759 0.0325131 13.8693 0.0903995L18.6196 2.45172C19.0118 2.6468 19.1708 3.12101 18.9748 3.51088C18.7786 3.90078 18.3016 4.05885 17.9095 3.86404L14.294 2.06681V6.3157C14.294 6.75159 13.9385 7.10527 13.4998 7.10527C13.0613 7.10527 12.7058 6.75159 12.7058 6.3157V2.06681L9.09032 3.86404C8.69814 4.05885 8.2211 3.90078 8.02493 3.51088C7.82871 3.12099 7.98771 2.64675 8.38016 2.45172L13.1304 0.0903995ZM13.8693 29.9096C13.7589 29.9672 13.6332 30 13.4997 30C13.3665 30 13.2407 29.9672 13.1304 29.9096L8.38005 27.5483C7.98761 27.3532 7.8286 26.879 8.02483 26.4891C8.22105 26.099 8.69805 25.9409 9.09021 26.136L12.7057 27.9332V23.6843C12.7057 23.2481 13.0612 22.8947 13.4996 22.8947C13.9384 22.8947 14.2938 23.2481 14.2938 23.6843V27.9332L17.9094 26.136C18.3015 25.9409 18.7786 26.099 18.9747 26.4891C19.1707 26.879 19.0117 27.3533 18.6195 27.5483L13.8693 29.9096ZM14.2939 13.9092V18.1581C14.2939 18.5939 13.9384 18.9476 13.4997 18.9476C13.0612 18.9476 12.7058 18.5939 12.7058 18.1581V13.9092L8.38004 11.7588C7.98759 11.564 7.82859 11.0898 8.02481 10.6997C8.22103 10.3098 8.69803 10.1517 9.09019 10.3468L13.4996 12.5387L17.9093 10.3468C18.3015 10.1517 18.7786 10.3098 18.9747 10.6997C19.1707 11.0898 19.0117 11.564 18.6195 11.7588L14.2939 13.9092Z"
                fill="white"
              />
              <path
                d="M1.63634 7.04554L13.6136 1.40918L25.5909 7.75009L13.6136 13.3865L1.63634 7.04554Z"
                fill="white"
                stroke="white"
              />
            </svg>
          </Link>
        </motion.div>
      </header>

      <nav>
        <ul
          style={{
            pointerEvents: isOpen ? "auto" : "none",
            clipPath: "inset(10% 50% 90% 50% round 10px)",
          }}
          className="primary-nav container-fluid"
        >
          <h4 className="label">All Monuments</h4>
          <div className="list row">
            {monuments.map((m) => (
              <motion.div
                key={m.id}
                className="col-md-4 col-12 p-2"
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={m.url}
                  onClick={handleClick}
                  className="monument-list row mx-md-0 mx-2"
                >
                  <div className="col-4 p-0">
                    <img src={m.preview} alt={m.title} loading="lazy" />
                  </div>
                  <motion.div
                    initial={{ y: 20 }}
                    animate={{ y: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    }}
                    className="col-8 pe-0"
                  >
                    <h5 className="title">{m.title}</h5>
                    <p className="desc">{m.desc}</p>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
          <button>Contact Us</button>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
