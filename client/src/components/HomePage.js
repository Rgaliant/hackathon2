import React from "react";
import { media } from "../theme/Media";
import styled from "styled-components";
import { Header, Grid, Container, Segment } from "semantic-ui-react";
import axios from 'axios'

class HomePage extends React.Component {
  state = { videos: []}

  componentDidMount = () => {
    axios.get('/api/videos')
      .then(res => 
        this.setState({videos: res.data}))
  }

  sample = () => {
    const { videos, } = this.state;
    if (videos.length) {
      const index = Math.floor(Math.random() * videos.length);
      return videos[index];
    } else {
      return null;
    }
  }
    
  
 

  render() {
    const videoLarge = this.sample()
    const videoMedium1 = this.sample()
    const videoMedium2 = this.sample()
    const videoMedium3 = this.sample()
    const videoMedium4 = this.sample()
    const videoSmall1 = this.sample()
    const videoSmall2 = this.sample()
    const videoSmall3 = this.sample()
    const videoSmall4 = this.sample()
    const videoSmall5 = this.sample()
    const videoSmall6 = this.sample()
    const videoSmall7 = this.sample()
    const videoSmall8 = this.sample()
    const videoSmall9 = this.sample()
    const videoSmall10 = this.sample()
  

    if (videoLarge) {
    return (
      <>
       

    
    <Header as="h3" textAlign="center">
      UToob
    </Header>
    <VidContainer>
      <Grid stackable columns={3}>
        <Grid.Row stretched>
          <Grid.Column stretched width={8}>
            <Segment>
              <MainVid
                title={videoLarge.title}
                src={videoLarge.trailer}
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
              <br />
              {videoLarge.title}
            </Segment>
          </Grid.Column>
          <Grid.Column width={4}>
            <Segment>
              <VidFrame
                title={videoMedium1.title}
                src={videoMedium1.trailer}
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
              <br />
              {videoMedium1.title}
            </Segment>
            <Segment>
            <VidFrame
                title={videoMedium2.title}
                src={videoMedium2.trailer}
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
              <br />
              {videoMedium2.title}
            </Segment>
          </Grid.Column>
          <Grid.Column width={4}>
            <Segment>
            <VidFrame
                title={videoMedium3.title}
                src={videoMedium3.trailer}
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
              <br />
              {videoMedium3.title}
            </Segment>
            <Segment>
              {" "}
              <VidFrame
                title={videoMedium4.title}
                src={videoMedium4.trailer}
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
              <br />
              {videoMedium4.title}
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid stackable equal width columns={5}>
        <Grid.Row>
          <Grid.Column>
            <Segment>
              <MiniVid
                title={videoSmall1.title}
                src={videoSmall1.trailer}
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
              <br />
              {videoSmall1.title}
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
            <MiniVid
                title={videoSmall2.title}
                src={videoSmall2.trailer}
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
              <br />
              {videoSmall2.title}
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
            <MiniVid
                title={videoSmall3.title}
                src={videoSmall3.trailer}
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
              <br />
              {videoSmall3.title}
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
            <MiniVid
                title={videoSmall4.title}
                src={videoSmall4.trailer}
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
              <br />
              {videoSmall4.title}
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
            <MiniVid
                title={videoSmall5.title}
                src={videoSmall5.trailer}
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
              <br />
              {videoSmall5.title}
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Segment>
            <MiniVid
                title={videoSmall6.title}
                src={videoSmall6.trailer}
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
              <br />
              {videoSmall6.title}
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
            <MiniVid
                title={videoSmall7.title}
                src={videoSmall7.trailer}
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
              <br />
              {videoSmall7.title}
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
            <MiniVid
                title={videoSmall8.title}
                src={videoSmall8.trailer}
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
              <br />
              {videoSmall8.title}
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
            <MiniVid
                title={videoSmall9.title}
                src={videoSmall9.trailer}
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
              <br />
              {videoSmall9.title}
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
            <MiniVid
                title={videoSmall10.title}
                src={videoSmall10.trailer}
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
              <br />
              {videoSmall10.title}
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </VidContainer>
  </>

    )
    } else {
      return <h1>No Videos</h1>
    
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

const BigCol = styled.div``;

export default HomePage;
