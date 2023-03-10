import React, { useState } from 'react'
import './VideoSidebar.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import MessageIcon from '@mui/icons-material/Message';
import ShareIcon from '@mui/icons-material/Share';

const VideoSidebar = ({ likes, shares, messages }) => {

    const [liked, setLiked] = useState(false);
    return (
        <div className='videoSidebar'>
            <div className="videoSidebar__button">
                {liked ? (
                    <FavoriteIcon
                        onClick={(e) => setLiked(false)}
                    />
                ) : (
                    <FavoriteBorderOutlinedIcon
                        onClick={(e) => setLiked(true)}
                    />
                )}
                <p>{liked ? likes + 1 : likes}</p>
            </div>
            <div className="videoSidebar__button">
                <MessageIcon />
                <p>{messages}</p>
            </div>
            <div className="videoSidebar__button">
                <ShareIcon />
                <p>{shares}</p>
            </div>
        </div>
    )
}

export default VideoSidebar