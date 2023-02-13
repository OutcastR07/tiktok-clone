import React, { useRef, useState } from 'react'
import './Video.css'
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

const Video = ({ url, channel, description, song, likes, messages, shares }) => {

    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);

    const handleVideoPress = () => {
        if (playing) {
            videoRef.current.pause()
            setPlaying(false)
        } else {
            videoRef.current.play()
            setPlaying(true)
        }
    }

    return (
        <div className='video'>
            <video
                onClick={handleVideoPress}
                className='video__player'
                loop
                ref={videoRef}
            >
                <source
                    className='video__source'
                    src={url}
                    type="video/mp4"
                />
            </video>

            {/* VideoFooter */}

            <VideoFooter channel={channel} description={description} song={song} />

            {/* VideoSidebar */}

            <VideoSidebar likes={likes} messages={messages} shares={shares} />
        </div>
    )
}

export default Video