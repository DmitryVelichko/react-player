import MainComponent from './components/MainComponent/MainComponent';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import AuthPage from './components/AuthPage/AuthPage'
import Cookies from 'js-cookie';


function App() {

  const accessToken = Cookies.get('accessToken');

  return (
    <Routes>
      <Route path='/' element={accessToken ? <MainComponent/> : <AuthPage/>} />
      <Route path="*" element={<h1>Страницы не существует. 404.</h1>} />
      <Route path='unauth' element={<AuthPage/>}/>
      <Route path='no-subscription' element={<h1>У Вас нет доступа к данному курсу, обратитесь к Вашему менеджеру.</h1>}/>
    </Routes>
  );
}

export default App;
