import React from 'react'
import {Card, Button, Header} from 'semantic-ui-react'
import CommentsForm from './CommentsForm'

class VideoComments extends React.Component {
  state = { comments: "", name: ""}

 render() {

  // // this.componentDidMount()
  // //  TODO: Make GET request with axios
  // //  TODO: Update state
  

  // // editComment () 
  // // /api/videos/${id}/comments/:id(.:format)	

  // deleteComment(id) => {
  //   // /api/videos/${id}/comments/:id(.:format)	
  //   // .then (res => {
  //     const { comments, } = this.state;
  //     this.setState({ comments: comments.filter( r => r.id !== id),})
  //   })
  

   return (
     <>
    <Header>Comments</Header>
    <Card.Group> 
    <Card fluid raised>
      <Card.Content>
        <Card.Header>Matthew Harris</Card.Header>
        <Card.Description>I love this video</Card.Description>
      </Card.Content>
      <Button.Group>
      <Button color="youtube">edit</Button>
      <Button color="youtube">delete</Button>
      </Button.Group>
    </Card>
    <Card raised fluid>
      <Card.Content>
        <Card.Header>Matthew Harris</Card.Header>
        <Card.Description>Matthew is a pianist living in Nashville.</Card.Description>
      </Card.Content>
      <Button.Group>
      <Button color="youtube">edit</Button>
      <Button color="youtube">delete</Button>
      </Button.Group>
    </Card>
    <Card raised fluid>
      <Card.Content>
        <Card.Header>Matthew Harris</Card.Header>
        <Card.Description>Matthew is a pianist living in Nashville.</Card.Description>
      </Card.Content>
      <Button.Group>
      <Button color="youtube">edit</Button>
      <Button color="youtube">delete</Button>
      </Button.Group>
    </Card>
    </Card.Group>
    <CommentsForm />
    </>
  )
}
}

export default VideoComments
