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
import { withRouter } from 'react-router-dom';
import axios from "axios";

class VideoComments extends React.Component {
  state = { comments: [] }

  componentDidMount() {
    const { id } = this.props
    axios.get(`api/videos/${id}/comments`)
    .then(res => {
      this.setState({ comments: res.data })
    })
  }

  addComment = (comment) => {
    axios.post(`api/videos/${this.props.match.params.id}/comments`)
      .then( res => {
        this.setState({comments: [ ...this.state.comments, res.data]})
      }
    )
  }

  render() {
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
                      <Button color="youtube">delete</Button>
                    </Comment.Actions>
                  </Comment.Content>
                </Comment>
              </Segment>
            </Comment.Group>
          </Grid.Column>
          <Grid.Column>
            <h3>Other Videos</h3>
            <div>
              <VidFrame
                width="100%"
                title="joe"
                src="https://www.youtube.com/embed/sCD9zjf_YRU"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>
          </Grid.Column>
          <Grid.Column>
            <Container style={{ display: "flex" }}>
              <SideText>This is a new car</SideText>
            </Container>
          </Grid.Column>
        </Grid.Row>
        <CommentsForm 
        video_id={this.props.id}
        addComment={this.addComment}
        />
      </Grid>
    </>
  );
};
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
