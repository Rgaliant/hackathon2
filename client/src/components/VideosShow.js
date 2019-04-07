import React from "react";
import VideoComments from "./VideoComments";
import VideoInfo from "./VideoInfo";
import HeroVideo from "./HeroVideo";
import { Container } from "semantic-ui-react";

const VideosShow = props => {
  return (
    <>
      <div />
      <HeroVideo videoId={props.match.params.id} />
      <Container>
        <VideoInfo />
        <VideoComments id={props.match.params.id} />
      </Container>
    </>
  );
};

export default VideosShow;
