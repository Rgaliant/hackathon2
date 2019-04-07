import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom'
import { Form,} from "semantic-ui-react";

class CommentsForm extends React.Component {
  state = { name: ''
  }
  

 
  handleSubmit = (e) => {
    e.preventDefault()
    const {name} = this.state
    axios.post(`/api/videos/${this.props.match.params.id}/comments`, {name: this.state.name, video_id: this.props.match.params.id})
      .then( res => {

      })
    
  }


  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };


  render () {
   
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label="Comment"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          />
          <Form.Button color="youtube"> Submit </Form.Button>
       </Form>
    )
  }
}

export default withRouter(CommentsForm)