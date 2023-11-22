const Iframe = ({ monument }) => {
  return (
    <div className="p-4 my-3 container iframe">
      <iframe
        title={monument.name}
        src={monument.iframe}
        width="100%"
        height="450"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default Iframe;
