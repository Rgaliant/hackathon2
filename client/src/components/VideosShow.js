import React from 'react'
import VideoComments from './VideoComments';
import VideoInfo from './VideoInfo'




const VideosShow = () => {
  return (
    <>
      <div>
        <h1>video show page</h1>
      </div>
      <VideoInfo />
      <VideoComments />
    </>
  )
}

export default VideosShow;