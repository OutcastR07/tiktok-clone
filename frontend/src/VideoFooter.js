import React from 'react'
import './VideoFooter.css'
import MusicNoteIcon from '@mui/icons-material/MusicNote';

const VideoFooter = ({ channel, description, song }) => {
    return (
        <div className='videoFooter'>
            <div className="videoFooter__text">
                <h4>@{channel}</h4>
                <p>{description}</p>
                <MusicNoteIcon className='videoFooter__icon' />
                <div className="videoFooter__ticker">
                    <div className="ticker">
                        {song}
                    </div>
                </div>
            </div>
            <img
                className='videoFooter__record'
                src="https://static.thenounproject.com/png/934821-200.png"
                alt=""
            />
        </div>
    )
}

export default VideoFooter