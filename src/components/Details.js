import { useEffect, useMemo, useRef } from "react";
import ScrollSpy from "./ScrollSpy";
// import TabDetail from "./TabDetails";
import { useLocation } from "react-router-dom";

const Details = ({ monument }) => {
  // const bottomRef = useRef(null),
  //   mainRef = useRef(null),
  //   { pathname } = useLocation();

  // const sections = useMemo(() => {
  //   return monument.tabDetails?.map((detail) => ({
  //     id: detail.id,
  //     label: detail.title,
  //     content: <TabDetail data={detail} key={detail.title} id={detail.id} />,
  //   }));
  // }, [monument]);
  // useEffect(() => {
  //   if (!bottomRef.current || !mainRef.current) return;
  //   mainRef.current.style.marginTop = `-${
  //     bottomRef.current.clientHeight + 20
  //   }px`;
  // }, [bottomRef, mainRef, pathname]);
  return (
    <div className="tabDetails container-fluid p-0">
      <ScrollSpy monument={monument} />
    </div>
  );
};

export default Details;
