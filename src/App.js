import MainComponent from './components/MainComponent/MainComponent';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import AuthPage from './components/AuthPage/AuthPage'


function App() {

  return (
    <Routes>
      <Route path='/' element={<AuthPage />} />
      <Route path='/logged-in' element={<MainComponent />} />
    </Routes>
  );
}

export default App;
