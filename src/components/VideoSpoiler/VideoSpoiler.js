import React, {useState} from 'react'
import './VideoSpoiler.css'

import VideoPlayer from '../VideoPlayer/VideoPlayer';


const VideoSpoiler = ({
    courseId,
    videoUrl,
    videoEpisodes,
    courseTitle,
    courseSubtitle,
    courseDesc,
    isEnabled,
}) => {
    const [unfold, setUnfold] = useState(false);

    function handleUnfold() {
        setUnfold(!unfold);
    }

    return (
        <div className={"video-spoiler" + (unfold && isEnabled ? " unfold" : "")}>
            <div className="spoiler-title" onClick={handleUnfold}>
                <div className="spoiler-text-left">
                    <p className='subtitle'>{courseSubtitle}</p>
                    <p className='title'>{courseTitle}</p>
                </div>

                <div className="spoiler-icon">
                    
                </div>

                <div className="spoiler-text-right">
                    {courseDesc}
                </div>
            </div>
            <div className="spoiler-content">
                <VideoPlayer
                    courseId={courseId}
                    isVisible={unfold}
                    videoUrl={videoUrl}
                    videoEpisodes={videoEpisodes}
                />
            </div>
        </div>
    )
}

export default VideoSpoiler