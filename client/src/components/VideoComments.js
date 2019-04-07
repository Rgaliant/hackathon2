import React from "react";
import {
  Card,
  Button,
  Header,
  Comment,
  Segment,
  Grid,
  Container,
  Icon,
  Image
} from "semantic-ui-react";
import styled from "styled-components";
import CommentsForm from "./CommentsForm";
import { withRouter, Link } from "react-router-dom";
import { AuthConsumer } from "../providers/AuthProvider";
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
    axios.get(`api/videos/${this.props.video_id}/comments`).then(res => {
      this.setState({ comments: res.data });
    });
  }

  updateComments = comment => {
    this.setState({ comments: [comment, ...this.state.comments] });
  };

  handleDelete = id => {
    axios.delete(`/api/videos/${this.props.id}/comments/${id}`).then(res =>
      this.setState({
        comments: this.state.comments.filter(c => c.id !== id)
      })
    );
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

  showButtons = cid => {
    return (
      <div>
        <Button icon color="blue" onClick={this.toggleForm}>
          <Icon name="pencil" />
        </Button>
        <Button icon="trash" onClick={() => this.handleDelete(cid)} />
      </div>
    );
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
    const { comments } = this.state;
    return (
      <>
        <Grid stackable columns={"equal"}>
          <Grid.Row>
            <Grid.Column stretched width={10}>
              <Comment.Group>
                <Header as="h3" dividing>
                  <CommentsForm
                    video_id={this.props.id}
                    updateComments={this.updateComments}
                  />
                </Header>
                <Segment.Group>
                  {comments.map(comment => (
                    <>
                      <Segment key={comment.id}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between"
                          }}
                        >
                          <div>
                            <h4>
                              <Image
                                src="https://i.imgur.com/XLErQNQ.png"
                                avatar
                              />
                              uToober
                            </h4>
                            {comment.body}
                            <p
                              style={{
                                fontSize: "10px",
                                color: "grey",
                                fontWeight: "400"
                              }}
                            >
                              1 Day Ago
                            </p>
                          </div>
                          {this.showButtons(comment.user_id)}
                        </div>
                      </Segment>
                    </>
                  ))}
                </Segment.Group>
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
        </Grid>
      </>
    );
  }
}

export class ConnectedComments extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {auth => <VideoComments {...this.props} auth={auth} />}
      </AuthConsumer>
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

export default ConnectedComments;
