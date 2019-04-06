import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { Card, Header, Container, Button, Image } from "semantic-ui-react";

class VideoInfo extends React.Component {
  state = { video: "" };

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
        <Card style={{ width: "100%" }}>
          <Card.Content>
            <Card.Header>
              <VidHead>{video.title}</VidHead>
              <Button basic color="grey" floated="right">
                👍
              </Button>
              <Button basic color="grey" floated="right">
                👎
              </Button>
            </Card.Header>
            <Card.Meta>
              <div>{video.created_at}</div>
              {/* \strftime("%d %b %Y") */}
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
                <UserText>{video.user_id}</UserText>
                <br />
                <text>10,000 subscribers</text>
              </div>

              <div>
                <Button floated="right">Add Friend</Button>
                <h3>{video.description}</h3>
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

export default withRouter(VideoInfo);
