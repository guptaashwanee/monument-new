import { useState } from "react";
import Lightbox from "react-awesome-lightbox";
import { motion } from "framer-motion";

const Architecture = ({ data, id }) => {
  let [open, setOpen] = useState(false);
  let [currentIndex, setCurrentIndex] = useState(0);
  const handleGallaryOpen = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };
  return (
    <div id={id} className="container-fluid architecture mt-5">
      <h6>{data.title}</h6>
      <div className="row pb-4 p-2">
        {data.images.map((img, index) => (
          // <motion.div
          //   initial={{ opacity: 0, y: 50, scale: 0.5, filter: "blur(5px)" }}
          //   transition={{ duration: 0.2, delay: (index + 1) * 0.15 }}
          //   whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          //   key={img + index}
          //   viewport={{ once: true }}
          //   className="col-11 col-sm-6 col-md-4 p-0 me-3 imageContainer"
          // >
          <div
            key={img + index}
            className="col-11 col-sm-6 col-md-4 p-0 me-3 imageContainer"
          >
            <img
              loading="lazy"
              src={img}
              alt=""
              onClick={() => handleGallaryOpen(index)}
            />
          </div>
          // </motion.div>
        ))}
      </div>
      {open && (
        <Lightbox
          allowRotate={false}
          images={data.images}
          startIndex={currentIndex}
          onClose={(e) => setOpen(false)}
        />
      )}
      <div>
        {data.desc.map((desc, index) => (
          <motion.p
            initial={{ opacity: 0, y: 75 }}
            transition={{
              type: "spring",
              stiffness: 100,
              easings: "easeIn",
              duration: 1,
              // delay: (index + 1) * 0.1,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            key={index}
            viewport={{ amount: 0.75 }}
          >
            {desc}
          </motion.p>
        ))}
      </div>
    </div>
  );
};

export default Architecture;
