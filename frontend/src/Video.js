import React, { useRef, useState } from 'react'
import './Video.css'
import VideoFooter from './VideoFooter';

const Video = () => {

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
                    src="https://player.vimeo.com/progressive_redirect/playback/769576744/rendition/720p/file.mp4?loc=external&oauth2_token_id=57447761&signature=d6f6656f72a88450df65bbd196e74d812bb8d5b5e81f7210a1ca000f9a39c06b"
                    type="video/mp4"
                />
            </video>

            {/* VideoFooter */}

            <VideoFooter />

            {/* VideoSidebar */}
        </div>
    )
}

export default Video