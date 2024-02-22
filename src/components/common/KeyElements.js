import { motion } from "framer-motion";
const KeyElements = ({ data, id }) => {
  return (
    <div id={id} className="container-fluid keyElements mt-5">
      <h6>{data.title}</h6>
      <div className="row">
        {data.details.map((detail, index) => (
          <div
            key={detail + index}
            className="col-12 col-sm-6 col-md-4 p-2 my-1"
          >
            <h5>
              <b>{detail.title}</b>
            </h5>
            {detail.images.map((img, index) => (
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.5 }}
                transition={{ duration: 0.5, delay: (index + 1) * 0.25 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                key={img + index}
                viewport={{ once: true }}
                className="my-3"
              >
                <img src={img} alt="" loading="lazy" />
              </motion.div>
            ))}
            {detail.desc.map((desc, index) => (
              <motion.p
                initial={{ opacity: 0, y: 75 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  easings: "easeIn",
                  duration: 1,
                  delay: (index + 1) * 0.1,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                key={index}
                viewport={{ amount: 0.75 }}
              >
                {desc}
              </motion.p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyElements;
