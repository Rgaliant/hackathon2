import React from "react";
import VideoComments from "./VideoComments";
import VideoInfo from "./VideoInfo";
import HeroVideo from "./HeroVideo";
import { Container } from "semantic-ui-react";

const VideosShow = props => {
  return (
    <>
      <div>
        <h1>video show page</h1>
      </div>
      <HeroVideo videoId={props.match.params.id} />
      <Container>
        <VideoInfo />
        <VideoComments />
      </Container>
    </>
  );
};

export default VideosShow;
