import React from "react";
import { media } from "../theme/Media";
import styled from "styled-components";
import { Header, Grid, Container, Segment } from "semantic-ui-react";

const HomePage = () => (
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
                title="Mello"
                src="https://www.youtube.com/embed/x3y4WdN4PI8"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
              <br />
              Video Name
            </Segment>
          </Grid.Column>
          <Grid.Column width={4}>
            <Segment>
              <VidFrame
                title="Jai"
                src="https://www.youtube.com/embed/l7aRTZ6dHIE"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
              <br />
              Video Name
            </Segment>
            <Segment>
              {" "}
              <VidFrame
                title="Jai"
                src="https://www.youtube.com/embed/l7aRTZ6dHIE"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
              <br />
              Video Name
            </Segment>
          </Grid.Column>
          <Grid.Column width={4}>
            <Segment>
              <VidFrame
                title="Jai"
                src="https://www.youtube.com/embed/l7aRTZ6dHIE"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
              <br />
              Video Name
            </Segment>
            <Segment>
              {" "}
              <VidFrame
                title="Jai"
                src="https://www.youtube.com/embed/l7aRTZ6dHIE"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
              <br />
              Video Name
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid stackable equal width columns={5}>
        <Grid.Row>
          <Grid.Column>
            <Segment>
              <MiniVid
                title="Jai"
                src="https://www.youtube.com/embed/l7aRTZ6dHIE"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
              <br />
              Video Name
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <MiniVid
                title="Jai"
                src="https://www.youtube.com/embed/l7aRTZ6dHIE"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
              <br />
              Video Name
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <MiniVid
                title="Jai"
                src="https://www.youtube.com/embed/l7aRTZ6dHIE"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
              <br />
              Video Name
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <MiniVid
                title="Jai"
                src="https://www.youtube.com/embed/l7aRTZ6dHIE"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
              <br />
              Video Name
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <MiniVid
                title="Jai"
                src="https://www.youtube.com/embed/l7aRTZ6dHIE"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
              <br />
              Video Name
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Segment>
              <MiniVid
                title="Jai"
                src="https://www.youtube.com/embed/l7aRTZ6dHIE"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
              <br />
              Video Name
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <MiniVid
                title="Jai"
                src="https://www.youtube.com/embed/l7aRTZ6dHIE"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
              <br />
              Video Name
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <MiniVid
                title="Jai"
                src="https://www.youtube.com/embed/l7aRTZ6dHIE"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
              <br />
              Video Name
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <MiniVid
                title="Jai"
                src="https://www.youtube.com/embed/l7aRTZ6dHIE"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
              <br />
              Video Name
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <MiniVid
                title="Jai"
                src="https://www.youtube.com/embed/l7aRTZ6dHIE"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
              <br />
              Video Name
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </VidContainer>
  </>
);

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
