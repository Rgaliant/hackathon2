import React from 'react'
import {Card, Button, Header} from 'semantic-ui-react'

const VideoComments = () => {
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
    </>
  )
}

export default VideoComments
