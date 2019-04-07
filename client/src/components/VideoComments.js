import React from "react";
import {
  Card,
  Button,
  Header,
  Comment,
  Segment,
  Grid,
  Container
} from "semantic-ui-react";
import styled from "styled-components";
import CommentsForm from "./CommentsForm";
import { withRouter, Link } from "react-router-dom";
import axios from "axios";

class VideoComments extends React.Component {

  state = {
    videos: [
      // Video_id: "1",
      // duration: "2:30", genre: "Pop",
      // description: "Impedit tenetur tempora molestiae.",
      // trailer: "https://www.youtube.com/embed/fEHpq-BxFm4",
      // created_at: "2019-04-06 20:38:19",
      // updated_at: "2019-04-06 20:38:19"
    ],
    comments: []
  };

  componentDidMount() {
    axios.get(`/api/videos/${this.props.match.params.id}/comments`).then(res => {
      this.setState({ comments: res.data });
    });
  }


  addComment = (comment) => {
    axios.post(`api/videos/${this.props.match.params.id}/comments`, comment)
      .then( res => {
        this.setState({comments: [ ...this.state.comments, res.data]})
      }
    )
  }

  sample = () => {
    const { videos } = this.state;
    if (videos.length) {
      const index = Math.floor(Math.random() * videos.length);
      return videos[index];
    } else {
      return null;
    }
  };




  // removeComment = (comment_id, video_id) => {
  //   axios.delete(`/api/videos/${video_id}/comments/${comment_id}`)
  //     .then( res => {
  //       const { comments, } = this.props;
  //       this.setState({ comments: comments.filter(c => c.id !== id), })
  //     })
  // }

  render() {
    const vidA = this.sample();
    const vidB = this.sample();
    const vidC = this.sample();
    const vidD = this.sample();
    return (
      <>
        <Grid stackable columns={"equal"}>
          <Grid.Row>
            <Grid.Column stretched width={10}>
              <Comment.Group>
                <Header as="h3" dividing>
                  Comments
                </Header>
                <Segment>
                  <Comment>
                    <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
                    <Comment.Content>
                      <Comment.Author as="a">Matt</Comment.Author>
                      <Comment.Metadata>
                        <div>Today at 5:42PM</div>
                      </Comment.Metadata>
                      <Comment.Text>How artistic!</Comment.Text>
                      <Comment.Actions>
                        <Comment.Action>Reply</Comment.Action>
                        <Button color="youtube">edit</Button>
                        <Button color="youtube">delete</Button>
                      </Comment.Actions>
                    </Comment.Content>
                  </Comment>
                </Segment>
                <Segment>
                  <Comment>
                    <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
                    <Comment.Content>
                      <Comment.Author as="a">Matt</Comment.Author>
                      <Comment.Metadata>
                        <div>Today at 5:42PM</div>
                      </Comment.Metadata>
                      <Comment.Text>How artistic!</Comment.Text>
                      <Comment.Actions>
                        <Comment.Action>Reply</Comment.Action>
                        <Button color="youtube">edit</Button>
                        <Button color="youtube">delete</Button>
                      </Comment.Actions>
                    </Comment.Content>
                  </Comment>
                </Segment>
                <Segment>
                  <Comment>
                    <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
                    <Comment.Content>
                      <Comment.Author as="a">Matt</Comment.Author>
                      <Comment.Metadata>
                        <div>Today at 5:42PM</div>
                      </Comment.Metadata>
                      <Comment.Text>How artistic!</Comment.Text>
                      <Comment.Actions>
                        <Comment.Action>Reply</Comment.Action>
                        <Button color="youtube">edit</Button>
                        {/* <Button onClick={() => this.removeComment(id, this.props.videoId)} color="youtube">delete</Button> */}
                      </Comment.Actions>
                    </Comment.Content>
                  </Comment>
                </Segment>
              </Comment.Group>
            </Grid.Column>
            <Grid.Column>
              <h3>Other Videos</h3>
              <div>
                <Link to={`/videos/1`}>
                  <text>The Parliament of Man</text>
                </Link>
                <VidFrame
                  width="100%"
                  title="joe"
                  src="https://www.youtube.com/embed/fEHpq-BxFm4"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                />
              </div>
              <div>
                <Link to={`/videos/1`}>
                  <text>Nectar in a Sieve</text>
                </Link>
                <VidFrame
                  width="100%"
                  title="joe"
                  src="https://www.youtube.com/embed/OJu0qN4NiCY"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                />
              </div>
              <div>
                <Link to={`/videos/1`}>
                  <text>The Green Bay Tree</text>
                </Link>
                <VidFrame
                  width="100%"
                  title="joe"
                  src="https://www.youtube.com/embed/xpNeg0hPZIs"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                />
              </div>
            </Grid.Column>
            <Grid.Column>
              <Container style={{ display: "flex" }}>
                <SideText>Impedit tenetur tempora molestiae.</SideText>
              </Container>
              <br />
              <br />
              <Container style={{ display: "flex" }}>
                <SideText>Eligendi unde quos dolores.</SideText>
              </Container>
              <br />
              <br />
              <br />
              <Container style={{ display: "flex" }}>
                <SideText>Recusandae asperiores quae ut.</SideText>
              </Container>
            </Grid.Column>
          </Grid.Row>
          <CommentsForm video_id={this.props.id} addComment={this.addComment} />
        </Grid>
      </>
    );
  }
}

const VidFrame = styled.iframe`
  width: 240px;
`;

const SideText = styled.span`
  font-size: 18px;
  font-weight: 200;
  padding-left: 50px;
  padding-top: 90px;
`;

export default withRouter(VideoComments);
