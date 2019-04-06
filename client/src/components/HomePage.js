import React from "react";
import { media } from "../theme/Media";
import styled from "styled-components";
import { Header, Grid, Container, Segment } from "semantic-ui-react";
import axios from 'axios'
import { Link } from 'react-router-dom'

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
              <Link to={`/videos/${videoLarge.id}`}>{videoLarge.title}</Link>
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
              <Link to={`/videos/${videoMedium1.id}`}>{videoMedium1.title}</Link>
              
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
              <Link to={`/videos/${videoMedium2.id}`}>{videoMedium2.title}</Link>
             
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
              <Link to={`/videos/${videoMedium3.id}`}>{videoMedium3.title}</Link>
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
              <Link to={`/videos/${videoMedium4.id}`}>{videoMedium4.title}</Link>
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
              <Link to={`/videos/${videoSmall1.id}`}>{videoSmall1.title}</Link>
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
              <Link to={`/videos/${videoSmall2.id}`}>{videoSmall2.title}</Link>
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
              <Link to={`/videos/${videoSmall3.id}`}>{videoSmall3.title}</Link>
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
              <Link to={`/videos/${videoSmall4.id}`}>{videoSmall4.title}</Link>
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
              <Link to={`/videos/${videoSmall5.id}`}>{videoSmall5.title}</Link>
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
              <Link to={`/videos/${videoSmall6.id}`}>{videoSmall6.title}</Link>
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
              <Link to={`/videos/${videoSmall7.id}`}>{videoSmall7.title}</Link>
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
              <Link to={`/videos/${videoSmall8.id}`}>{videoSmall8.title}</Link>
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
              <Link to={`/videos/${videoSmall9.id}`}>{videoSmall9.title}</Link>
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
              <Link to={`/videos/${videoSmall10.id}`}>{videoSmall10.title}</Link>
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
