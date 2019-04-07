import React from "react";
import { media } from "../theme/Media";
import styled from "styled-components";
import { Header, Grid, Container, Image } from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";

class HomePage extends React.Component {
  state = { videos: [] };

  componentDidMount = () => {
    axios.get("/api/videos").then(res => this.setState({ videos: res.data }));
  };

  sample = () => {
    const { videos } = this.state;
    if (videos.length) {
      const index = Math.floor(Math.random() * videos.length);
      return videos[index];
    } else {
      return null;
    }
  };

  render() {
    const videoLarge = this.sample();
    const videoMedium1 = this.sample();
    const videoMedium2 = this.sample();
    const videoMedium3 = this.sample();
    const videoMedium4 = this.sample();
    const videoSmall1 = this.sample();
    const videoSmall2 = this.sample();
    const videoSmall3 = this.sample();
    const videoSmall4 = this.sample();
    const videoSmall5 = this.sample();
    const videoSmall6 = this.sample();
    const videoSmall7 = this.sample();
    const videoSmall8 = this.sample();
    const videoSmall9 = this.sample();
    const videoSmall10 = this.sample();

    if (videoLarge) {
      return (
        <>
          <Image
            centered
            size="medium"
            src="https://resources-live.sketch.cloud/files/0c691bf6-95ea-4f35-ad3e-46e842eefe7b.png?Expires=1554685200&Signature=mCOAD2p5sijiSsM4HWpafP-cQs4TRHAouci4hZ3tLuXuA~Rs1Fqe8qYhPw3PvbOg2~vl0hr98Uy3ElhQY5~cO9wXDPzYtAR0lrlBZoFTBFmEkK6Qc8LuZfloXO8sT~b-bmR9xhm1v0mGDwIhJABaOqlq6xbKgBGyjfc-0CVJRXE_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA"
          />
          <VidContainer>
            <Grid stackable columns={3}>
              <Grid.Row stretched>
                <Grid.Column stretched width={8}>
                  <MainVid
                    title={videoLarge.title}
                    src={videoLarge.trailer}
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  />
                  <br />
                  <Link to={`/videos/${videoLarge.id}`}>
                    <VidName>{videoLarge.title}</VidName>
                  </Link>
                </Grid.Column>
                <Grid.Column width={4}>
                  <VidFrame
                    title={videoMedium1.title}
                    src={videoMedium1.trailer}
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  />
                  <br />
                  <Link to={`/videos/${videoMedium1.id}`}>
                    <VidName>{videoMedium1.title}</VidName>
                  </Link>

                  <VidFrame
                    title={videoMedium2.title}
                    src={videoMedium2.trailer}
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  />
                  <br />
                  <Link to={`/videos/${videoMedium2.id}`}>
                    <VidName>{videoMedium2.title}</VidName>
                  </Link>
                </Grid.Column>
                <Grid.Column width={4}>
                  <VidFrame
                    title={videoMedium3.title}
                    src={videoMedium3.trailer}
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  />
                  <br />
                  <Link to={`/videos/${videoMedium3.id}`}>
                    <VidName>{videoMedium3.title}</VidName>
                  </Link>{" "}
                  <VidFrame
                    title={videoMedium4.title}
                    src={videoMedium4.trailer}
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  />
                  <br />
                  <Link to={`/videos/${videoMedium4.id}`}>
                    <VidName>{videoMedium4.title}</VidName>
                  </Link>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Grid stackable equal width columns={5}>
              <Grid.Row>
                <Grid.Column>
                  <MiniVid
                    title={videoSmall1.title}
                    src={videoSmall1.trailer}
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  />
                  <br />
                  <Link to={`/videos/${videoSmall1.id}`}>
                    <VidName>{videoSmall1.title}</VidName>
                  </Link>
                </Grid.Column>
                <Grid.Column>
                  <MiniVid
                    title={videoSmall2.title}
                    src={videoSmall2.trailer}
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  />
                  <br />
                  <Link to={`/videos/${videoSmall2.id}`}>
                    <VidName>{videoSmall2.title}</VidName>
                  </Link>
                </Grid.Column>
                <Grid.Column>
                  <MiniVid
                    title={videoSmall3.title}
                    src={videoSmall3.trailer}
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  />
                  <br />
                  <Link to={`/videos/${videoSmall3.id}`}>
                    <VidName>{videoSmall3.title}</VidName>
                  </Link>
                </Grid.Column>
                <Grid.Column>
                  <MiniVid
                    title={videoSmall4.title}
                    src={videoSmall4.trailer}
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  />
                  <br />
                  <Link to={`/videos/${videoSmall4.id}`}>
                    <VidName> {videoSmall4.title}</VidName>
                  </Link>
                </Grid.Column>
                <Grid.Column>
                  <MiniVid
                    title={videoSmall5.title}
                    src={videoSmall5.trailer}
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  />
                  <br />
                  <Link to={`/videos/${videoSmall5.id}`}>
                    <VidName>{videoSmall5.title}</VidName>
                  </Link>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <MiniVid
                    title={videoSmall6.title}
                    src={videoSmall6.trailer}
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  />
                  <br />
                  <Link to={`/videos/${videoSmall6.id}`}>
                    <VidName>{videoSmall6.title}</VidName>
                  </Link>
                </Grid.Column>
                <Grid.Column>
                  <MiniVid
                    title={videoSmall7.title}
                    src={videoSmall7.trailer}
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  />
                  <br />
                  <Link to={`/videos/${videoSmall7.id}`}>
                    <VidName>{videoSmall7.title}</VidName>
                  </Link>
                </Grid.Column>
                <Grid.Column>
                  <MiniVid
                    title={videoSmall8.title}
                    src={videoSmall8.trailer}
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  />
                  <br />
                  <Link to={`/videos/${videoSmall8.id}`}>
                    <VidName>{videoSmall8.title}</VidName>
                  </Link>
                </Grid.Column>
                <Grid.Column>
                  <MiniVid
                    title={videoSmall9.title}
                    src={videoSmall9.trailer}
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  />
                  <br />
                  <Link to={`/videos/${videoSmall9.id}`}>
                    <VidName>{videoSmall9.title}</VidName>
                  </Link>
                </Grid.Column>
                <Grid.Column>
                  <MiniVid
                    title={videoSmall10.title}
                    src={videoSmall10.trailer}
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  />
                  <br />
                  <Link to={`/videos/${videoSmall10.id}`}>
                    <VidName> {videoSmall10.title}</VidName>
                  </Link>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </VidContainer>
        </>
      );
    } else {
      return <h1>No Videos</h1>;
    }
  }
}

const VidContainer = styled(Container)`
  width: 100%;
  display: grid;
  grid-template-columns: 450 auto auto;
  ${media.phone`
    width: 100%
  `};
`;

const VidFrame = styled.iframe`
  width: 220px;
  height: 140px;
  ${media.phone`
    width: 100%
  `};
`;

const MiniVid = styled.iframe`
  width: 170px
  height: 110px
  ${media.phone`
    width: 100%
  `};
`;

const MainVid = styled.iframe`
  width: 500px;
  height: 340px;
  ${media.phone`
    width: 100%
  `};
`;

const VidName = styled.a`
  font-size: 1.3em;
  font-weight: 400;
  text-decoration: none;
  color: black;
`;

const BigCol = styled.div``;

export default HomePage;
