import React from "react";
import { IoMdArrowRoundForward } from "react-icons/io";

const PageIterator = (props) => {
  console.log(props);
  return (
    <div className="pages">
      {props.data.map(function (ele, index) {
        console.log(ele);
        return (
          <div key={index} className="contentInterated">
            {ele.pageMedia.includes("jpg") ? (
              <img src={ele.pageMedia} className="media" />
            ) : (
              <video
                src={ele.pageMedia}
                autoPlay
                muted
                loop
                className="media"
              ></video>
            )}
            <div className="pageContent">
              <h1>{ele.pageContent.heading}</h1>
              <p>{ele.pageContent.description}</p>
              <button>
                {ele.pageContent.btnText} <IoMdArrowRoundForward />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PageIterator;
