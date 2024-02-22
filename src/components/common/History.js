import { motion } from "framer-motion";

const History = ({ data, id }) => {
  return (
    <div id={id} className="container-fluid history">
      <h6>{data.title}</h6>
      <div className="row">
        {data.images.map((img, index) => (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.5 }}
            transition={{ duration: 0.5, delay: (index + 1) * 0.25 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            key={img + index}
            viewport={{ once: true }}
            className="col-12 col-sm-6 col-md-4 p-2 my-1"
          >
            <img src={img} alt="" loading="lazy" />
          </motion.div>
        ))}
      </div>
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

export default History;
