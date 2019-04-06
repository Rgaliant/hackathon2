import React from "react";
import styled from "styled-components";
import axios from "axios";
import { Image } from "semantic-ui-react";

class HeroVideo extends React.Component {
  state = { video: [] };

  componentDidMount() {
    axios
      .get(`/api/videos/:id`)
      .then(res => this.setState({ video: res.data }));
  }

  render() {
    const { video } = this.state;
    return (
      <>
        <h1>{video.description}</h1>
        <VidCont>
          <iframe
            title="test"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/jV8B24rSN5o"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </VidCont>
      </>
    );
  }
}

const VidCont = styled.div`
  top: 0;
  bottom: 0;
  width: 100%;
  height: 600px;
`;
export default HeroVideo;
