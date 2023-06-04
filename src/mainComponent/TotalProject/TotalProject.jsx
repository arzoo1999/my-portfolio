import "./TotalProjectStyle.scss";
// import { useState, useEffect } from "react";
import { useState, useEffect, useRef } from "react";

const TotalProject = () => {
  const [count, setCount] = useState(0);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          const interval = setInterval(() => {
            setCount((prevCount) => prevCount + 1);
          }, 100);

          return () => {
            clearInterval(interval); // Cleanup the interval on component unmount
          };
        }
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current); // Stop observing on component unmount
      }
    };
  }, []);

  return (
    <>
      <div className="totalMainCointainer">
        <div className="totalProjectContainer" ref={targetRef}>
          <div className="totalContainer">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div className="counterdIVsTYLE">{count}+</div>
              <div className="totalProjectHeadingStyle">Total Projects</div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div className="counterdIVsTYLE">{count}+</div>
              <div className="totalProjectHeadingStyle">Total Projects</div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div className="counterdIVsTYLE">{count}+</div>
              <div className="totalProjectHeadingStyle">Total Projects</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TotalProject;
