import ScrollSpy from "./ScrollSpy";
const Details = ({ monument }) => {
  return (
    <div className="tabDetails container-fluid p-0">
      <ScrollSpy monument={monument} />
    </div>
  );
};

export default Details;
