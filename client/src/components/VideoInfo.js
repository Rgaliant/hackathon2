import React from "react";
import styled from "styled-components";
import { Card, Header, Container, Button, Image } from "semantic-ui-react";

class VideoInfo extends React.Component {
  state = { dog: "", likes: 0, dislikes: 0 };

  likeCounter = () => {
    let number = this.state.likes
    this.setState({likes: (number + 1)})
  }

  dislikeCounter = () => {
    let number = this.state.dislikes
    this.setState({dislikes: (number + 1)})
  }

  render() {
    return (
      <>
        <Card style={{ width: "100%" }}>
          <Card.Content>
            <Card.Header>
              <VidHead>Video Title Info</VidHead>
              <Button onClick={() => this.likeCounter()}basic color="grey" floated="right">
                👍
                {this.state.likes}
              </Button>
              <Button onClick={() => this.dislikeCounter()} basic color="grey" floated="right">
                👎
                {this.state.dislikes}
              </Button>
            </Card.Header>
            <Card.Meta>
              <div>2 weeks ago</div>
            </Card.Meta>
          </Card.Content>
          <Card.Content>
            <Card.Description>
              <div>
                <Image
                  circular
                  size="tiny"
                  src="https://resources-live.sketch.cloud/files/40fb236a-c9b1-4176-a1ce-58f2a9ff3a08.png?Expires=1554685200&Signature=sBQEvExUEMEyeUTPz7yX5KxsAcBXo2zYEBr9A5X8QdOoF0Vd41RTWVhwL7GoQ8FXbl1ZW1Ad3PI2RAMVfT9tQfnTvwhN6BJBu9jckHAk-tHrbb9Iiw2RcvbaZ3chTjpc~iiM20HTdfCqmTqzihzhW43tm2J1MHtceqLQVOdm6ck_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA"
                />
                <UserText>User Name</UserText>
                <br />
                <text>10,000 subscribers</text>
              </div>

              <div>
                <Button floated="right">Add Friend</Button>
                <h3>Video Description</h3>
              </div>
            </Card.Description>
          </Card.Content>
        </Card>
      </>
    );
  }
}

const VidHead = styled.text`
  font-size: 24px;
  font-weight: 400;
`;

const UserText = styled.text`
  font-size: 18px;
  padding-left: 10px;
`;

export default VideoInfo;
