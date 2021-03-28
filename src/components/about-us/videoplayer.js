import React from 'react';
import videojs from 'video.js'
import 'video.js/dist/video-js.css';

export default class VideoPlayer extends React.Component {

  componentDidMount() {
    this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
      console.log('Video.js Ready', this)
    });
  }
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose()
    }
  }
   UNSAFE_componentWillReceiveProps(newProps) {
    console.log(newProps.video.video_url);
    if (this.player) {
      this.player.src({
        type: newProps.video.mime_type,
        src: newProps.video.video_url
      });
    } 
  }
  render() {
    return (
      <div> 
        <div data-vjs-player>
          <video ref={ node => this.videoNode = node } className="video-js vjs-fluid vjs-big-play-centered"></video>
        </div>
      </div>
    )
  }
}