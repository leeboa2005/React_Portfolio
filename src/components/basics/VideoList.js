import React from "react";
import VideoItem from "../basics/VideoItem";

const VideoList = (props) => {
  console.log(props);
  return (
    <div className="list">
      <ul>
        {props.videos.map((video) => (
          <VideoItem key={video.id.videoId} video={video} />
        ))}
      </ul>
    </div>
  );
};

export default VideoList;