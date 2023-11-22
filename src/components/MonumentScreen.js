import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { getMonumentsByName } from "../services/monuments";
import Landing from "./Landing";
import Details from "./Details";
import NearByMonuments from "./NearBy";
import Iframe from "./Iframe";
const MonumentScreen = () => {
  let { name } = useParams();
  const monument = useMemo(() => getMonumentsByName(name), [name]);

  return (
    <div>
      {monument && (
        <>
          {/* <div>
          </div> */}
          <Landing monument={monument} />
          <Details monument={monument} />
          <NearByMonuments monument={monument} />
          <Iframe monument={monument} />
        </>
      )}
    </div>
  );
};

export default MonumentScreen;
