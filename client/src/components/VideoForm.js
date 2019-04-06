import React from 'react'
import { Form } from 'semantic-ui-react';
import axios from 'axios';

class VideoForm extends React.Component {
  defaultValues = {
    title: "",
    duration: '',
    genre: '',
    description: '',
    trailer: '',
  }
  state = { ... this.defaultValues}

  handleSubmit = e => {
    e.preventDefault();
    const video = this.state;
    axios.post(`api/videos`, video)
      .then( res => {this.props.history.push(`/`)
    })
    this.setState({ ...this.state})
  }

  handleChange = e => {
    const { target: {name, value}} = e
    this.setState({ [name]: value})
}


  addVideo = (video) => {
    this.setState({ videos: [...this.state.videos, video] });
    debugger
  };
  
  render () {
    const {
      title,
      duration,
      genre,
      description,
      trailer
    } = this.state

    return (
      <>
    <Form onSubmit={this.handleSubmit}>
      <Form.Group widths='equal'>
        <Form.Field name='title' value={title} label='Title' control='input' onChange={this.handleChange}/>
        <Form.Field name='duration' value={duration} label='Duration' control='input' onChange={this.handleChange}/>
        <Form.Field name='genre' value={genre} label='Genre' control='select' onChange={this.handleChange}>
          <option value='cat video'>Cat video</option>
          <option value='Humor'>Humor</option>
          <option value='Documentary'>Documentary</option>
          <option value='Other'>Other</option>
        </Form.Field>
      </Form.Group>
        <Form.Field name='description' value={description} label='description' control='textarea' rows='3' onChange={this.handleChange}/>
        <Form.Field name='trailer' value={trailer} label='trailer' control='input' onChange={this.handleChange}/>
      <Form.Field control='button'>
        upload
      </Form.Field>
    </Form>
    </>
  )}
}

export default VideoForm

