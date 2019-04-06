import React from "react";
import styled from "styled-components";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { Image } from "semantic-ui-react";

class HeroVideo extends React.Component {
  state = { video: [] };

  componentDidMount() {
    const { id } = this.props.match.params;
    axios.get(`/api/videos/${id}`).then(res => {
      this.setState({ video: res.data });
    });
  }

  render() {
    const { video } = this.state;
    return (
      <>
        <VidCont>
          <iframe
            title="test"
            width="100%"
            height="100%"
            src={video.trailer}
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
export default withRouter(HeroVideo);
