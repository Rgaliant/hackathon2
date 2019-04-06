import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom'
import { Form,} from "semantic-ui-react";

class CommentsForm extends React.Component {
  defaultValues = {
    comments: "",};

  state = {...this.default }

  componentDidMount() {
    axios.get(`/api/videos/${this.props.id}/comments/${this.props.match.params.id}`)
    .then(res => {
      this.setState({ ...res.data })
    })
  
  }

  handleChange = e => {
    const {
      target: { name, value }
    } = e;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {comment} =  this.state
    const { video_id } = this.props
    axios.post(`/api/videos/${this.props.match.params.id}/comments`, comment)
      .then( res => {
        this.setState({comments: [ ...this.state.comments, res.data]})
  })}



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

export default withRouter(CommentsForm)