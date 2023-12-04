import BeforeAndAfter from "./BeforeAndAfter";
import { useState } from "react";
import { motion } from "framer-motion";
import Lightbox from "react-awesome-lightbox";

const Conservation = ({ data, id }) => {
  let [open, setOpen] = useState(false);
  let [currentIndex, setCurrentIndex] = useState(0);
  const handleGallaryOpen = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };
  return (
    <div id={id} className="container-fluid conservation mt-5">
      <h6>{data.title}</h6>
      <div className="row pb-4 p-2">
        {data.images.map((img, index) => (
          // <motion.div
          //   initial={{ opacity: 0, y: 50, scale: 0.5, filter: "blur(10px)" }}
          //   transition={{ duration: 0.25, delay: (index + 1) * 0.25 }}
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
      {data.desc.map((desc, index) => (
        <motion.p
          margin={200}
          initial={{ opacity: 0, y: 75 }}
          transition={{ duration: 0.25, delay: (index + 1) * 0.1 }}
          whileInView={{ opacity: 1, y: 0 }}
          key={index}
          viewport={{ amount: 0.2, once: true }}
        >
          {desc}
        </motion.p>
      ))}
      <h6>Before and After</h6>
      {data.beforeAfter.map((beforeAfter, index) => (
        <div className="row justify-content-center" key={index}>
          <div className="col-12 col-md-9 my-2 p-md-5 before-after">
            <BeforeAndAfter image={beforeAfter} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Conservation;
