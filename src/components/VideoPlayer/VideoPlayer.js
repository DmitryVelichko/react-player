import ReactPlayer from 'react-player'
import React, { useRef, useEffect, useState } from "react";
import './VideoPlayer.css'


const VideoPlayer = ({
    courseId,
    isVisible,
    videoUrl,
    videoEpisodes,
}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const myRef = useRef(null)

    window.addEventListener("contextmenu", e => e.preventDefault());

    return (
        <div className="video-player">
            <div className="player-text-container">
                <div className="player">
                    <iframe className="player-wrapper" src={videoUrl} width="976" height="549" allow="autoplay; fullscreen" allowfullscreen></iframe>
                    {/* <div className="player-wrapper">
                        <ReactPlayer
                            ref={myRef}
                            url={videoUrl}
                            height='100%'
                            width='100%'
                            controls={true}
                            playing={(isPlaying && isVisible) }
                            config={{ file: { attributes: { controlsList: 'nodownload' } } }}
                        />
                    </div> */}
                    {/* <div className="episodes-container">
                        <h1 className='playlist-header'>Эпизоды</h1>
                        {videoEpisodes.map((episode) => (
                            <button key={courseId + '-' + Math.random()} className="player-button" onClick={() => {
                                myRef.current.seekTo(episode.time);
                                setIsPlaying(true);
                            }}>{episode.title}</button>
                        ))}
                    </div> */}
                </div>

            </div>

        </div>
    )
}

export default VideoPlayer