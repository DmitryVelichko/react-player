import React from 'react'
import FirstScreen from '../FirstScreen/FirstScreen'
import SecondScreen from '../SecondScreen/SecondScreen'
import './MainComponent.css'

const MainComponent = () => {
  return (
    <div className="App">
    <div className="container">
      <FirstScreen />
      <SecondScreen />
    </div>
  </div>
  )
}

export default MainComponent