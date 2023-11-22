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
            <h5>{detail.title}</h5>
            {detail.images.map((img, index) => (
              <img className="my-3" key={index} src={img} alt={""} />
            ))}

            {detail.desc.map((desc, index) => (
              <p key={index}>{desc}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyElements;
