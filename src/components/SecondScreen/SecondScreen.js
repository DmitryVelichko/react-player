import ReactPlayer from 'react-player'
import video from '../../assets/video.mp4'
import React, { useRef, useEffect } from "react";


const SecondScreen = () => {
    const myRef = useRef(null)

    return (
        <div className="screen2">
            <div className="player">
                <ReactPlayer
                    ref={myRef}
                    url={video}
                    height='500px'
                    width='750px'
                    controls={true}
                    playing={true}

                />
                <div className="btnContainer">
                    <button className="btn" onClick={() => {
                        return myRef.current.seekTo(12.7)
                    }}>Раздел 1</button>
                    <button className="btn" onClick={() => {
                        return myRef.current.seekTo(22.7)
                    }}>Раздел 2</button>
                    <button className="btn" onClick={() => {
                        return myRef.current.seekTo(32.7)
                    }}>Раздел 3</button>
                </div>
            </div>
        </div>
    )
}

export default SecondScreen