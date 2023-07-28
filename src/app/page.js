"use client"

import styles from './page.module.css'
import VideoPlayer from 'react-video-player-extended';
import React, { useState } from 'react'
import './index.css'
import Image from 'next/image';


export default function App() {
  const markersSample = [
    {
      id: 1,
      time: 19,
      title: 'Настройка через командную строку',
    },
    {
      id: 2,
      time: 89,
      title: 'Создание TS-конфига',
    },
    {
      id: 3,
      time: 150,
      title: 'Запуск проекта через "npm run build"',
    },
    {
      id: 4,
      time: 216,
      title: 'Реклама курса по TypeScript',
    },
  ]

  const [url] = useState('/video.mp4')
  const [controls, setControls] = useState(['Play', 'Time', 'Progress', 'Volume', 'FullScreen'])
  const [settings, setSettings] = useState(['Title'])
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.7)
  const [timeStart] = useState(0)
  const [fps] = useState(30)
  const [selectedMarker, setSelectedMarker] = useState(undefined)
  const [markers, setMarkers] = useState(markersSample)

 


  const handlePlay = () => {
    setIsPlaying(true)
  }

  const handlePause = () => {
    setIsPlaying(false)
  }

  const handleControlToggle = (event) => {
    let result = [...controls]
    const name = event.target.id
    if (result.includes(name)) {
      result = result.filter((item) => item !== name)
    } else {
      result.push(name)
    }
    setControls(result)
  }

  const handleSettingToggle = (event) => {
    let result = [...settings]
    const name = event.target.id
    if (result.includes(name)) {
      result = result.filter((item) => item !== name)
    } else {
      result.push(name)
    }
    setSettings(result)
  }

  const handleVolume = (value) => {
    setVolume(value)
  }

  const handleProgress = (e) => {
    console.log('Current time: ', e.target.currentTime)
  }

  const handleDuration = (duration) => {
    console.log('Duration: ', duration)
  }

  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker)
  }

  const handleMarkerAdd = (marker) => {
    const updatedMarkers = markers.map((m) => m)
    updatedMarkers.push(marker)
    setMarkers(updatedMarkers)
  }

  return (
    <>
      <header className="main-header">
        <h1 className="app-name" style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>Кастомный видеоплеер</h1>
      </header>

      <div className="container">
        <VideoPlayer
          url={url}
          controls={controls}
          isPlaying={isPlaying}
          volume={volume}
          loop={false}
          markers={markers}
          height={'auto'}
          width={'940px'}
          timeStart={timeStart}
          onPlay={handlePlay}
          onPause={handlePause}
          onVolume={handleVolume}
          onProgress={handleProgress}
          onDuration={handleDuration}
          onMarkerClick={handleMarkerClick}
          onMarkerAdded={handleMarkerAdd}
          onVideoPlayingComplete={(props) => setIsPlaying(false)}
          fps={fps}
          selectedMarker={selectedMarker}
        
        />
        
      </div>
    </>
  )
}