import React from 'react'
import { Card, Header, Container, Button } from 'semantic-ui-react'

class VideoInfo extends React.Component {
  state = {dog: ''}

  render () {
    return (
      <>
      <Card style={{width: '100%'}}>
        <Card.Content>
        <Card.Header>
          Video Title Info
        
          <Button>Like</Button>
          <Button>Dislike</Button>
    
        </Card.Header>
        
        </Card.Content>
      
          <Card.Meta>
            <div>
            STUFF
            </div>
          </Card.Meta>
            
        <Card.Content>
          <Card.Meta>
            <div>
            PROFILE ICON
            User Name
            </div>
          
            <div>
            Video Description
            </div>
          </Card.Meta>
          </Card.Content>
      </Card>
            </>
    )
  }
}
export default VideoInfo;
    

