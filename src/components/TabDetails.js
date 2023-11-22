import Architecture from "./common/Architecture";
import Conservation from "./common/Conservation";
import History from "./common/History";
import KeyElements from "./common/KeyElements";

const TabDetail = ({ data, id }) => {
  if (data.title === "History") return <History data={data} id={id} />;
  if (data.title === "Architecture")
    return <Architecture data={data} id={id} />;
  if (data.title === "Conservation")
    return <Conservation data={data} id={id} />;
  if (data.title === "Key Elements") return <KeyElements data={data} id={id} />;
  return null;
};

export default TabDetail;
