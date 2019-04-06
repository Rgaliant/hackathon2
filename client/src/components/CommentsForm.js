import React from 'react';
import axios from 'axios';
import { Form,} from "semantic-ui-react";

class CommentsForm extends React.Component {
  defaultValues = {
    comments: "",};

  state = {...this.default}

  handleSubmit = (e) => {
    e.preventDefault();
    const comment = this.state;
    debugger
    axios.post(`/api/videos/${this.props.match,params}/comments`, comment).then(res => {
      console.log()
      this.props.history.push("/VideosShow");
    })
    this.setState({...this.state});
  }

  handleChange = e => {
    const {
      target: { name, value }
    } = e;
    this.setState({ [name]: value });
  };

  render () {
    const {comments} = this.state
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label="Comment"
          name="Comment"
          value={comments}
          onChange={this.handleChange}
          />
          <Form.Button color="youtube"> Submit </Form.Button>
       </Form>
    )
  }
}

export default CommentsForm