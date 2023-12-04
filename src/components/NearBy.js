import { motion } from "framer-motion";

const NearByMonuments = ({ monument }) => {
  return (
    <div className="p-4 pt-0 container">
      <div id="nearby" className="container-fluid nearBy">
        <h6>Nearby Monuments:</h6>

        <div className="row">
          {monument.nearBy.map((m, index) => (
            <motion.div
              initial={{
                opacity: 0,
                x: -200,
                scale: 0.5,
              }}
              transition={{ duration: 0.2, delay: (index + 1) * 0.15 }}
              whileInView={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              viewport={{ once: true }}
              key={index}
              className="col-12 col-md-6"
            >
              <a href={m.url} key={index} className="list">
                <h5>{m.title}</h5>
                {m.distance && <p>{m.distance} away</p>}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NearByMonuments;
