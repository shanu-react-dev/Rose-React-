import React from "react";
import MediaControlCard from "../../ReusableItems/MediaControlCard";

const Content = (data) => {
  return (
    <div className="content">
      <MediaControlCard {...data} />
    </div>
  );
};

export default Content;
