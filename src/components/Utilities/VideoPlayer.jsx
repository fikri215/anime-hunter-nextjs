"use client"

import { useState } from "react"
import YouTube from "react-youtube"

const VideoPlayer = ({ youtubeId }) => {
    const option = {
        width: "300",
        height: "250"
    }

    const [isOpen, setIsOpen] = useState(true)

    const handleVideoPlayer = () => {
        setIsOpen((prevState) => !prevState)
    }

    const Player = () => {
        return (
            <div className="fixed bottom-2 right-2">
                <button className="float-right text-color-white bg-color-secondary hover:bg-color-accent px-3 py-1 mb-1" onClick={handleVideoPlayer}>
                    X
                </button>
                <YouTube 
                    videoId={youtubeId} 
                    onReady={(event) => event.target.pauseVideo()}
                    opts={option}
                />
            </div>
        )
    }

    const OpenPlayer = () => {
        return (
            <div className="fixed bottom-5 right-0">
                <button className="text-color-white bg-color-secondary hover:bg-color-accent px-3 py-2 transition-all shadow-xl" onClick={handleVideoPlayer}>
                    Open Trailer
                </button>
            </div>
        )
    }

    return isOpen ? <Player /> : <OpenPlayer />
}

export default VideoPlayer