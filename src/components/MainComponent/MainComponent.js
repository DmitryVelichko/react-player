import React, { useEffect } from 'react'
import Promo from '../Promo/Promo'
import './MainComponent.css'
import VideoSpoiler from "../VideoSpoiler/VideoSpoiler";
import Footer from "../Footer/Footer";
import axios from 'axios';
import Cookies from 'js-cookie';

const courses = [
  {
    id: 0,
    openDate: new Date("2023-08-08"),
    closeDate: new Date("2023-08-12"),
    courseSubtitle: "День 1 - 7 августа 2023",
    courseTitle: "DOCTOR STAR CADAVER",
    courseDesc: (<><p className='course-desc'>Видео будет доступно до 12 августа 2023 года</p></>),
    videoUrl: "https://facecast.net/w/d2pxiu",
    videoEpisodes: [
      { title: "I Блок: Общие вопросы эмбриологии и анатомии", time: 239 },
      { title: "II Блок: Анатомия верхней трети лица", time: 1976 },
      { title: "III Блок: Анатомия средней трети лица", time: 6413 },
      { title: "IV Блок: Анатомия нижней трети лица", time: 11844 },
    ]
  },
  {
    id: 1,
    openDate: new Date("2023-08-08"),
    closeDate: new Date("2023-08-12"),
    courseSubtitle: "День 2 - 8 августа 2023",
    courseTitle: "DOCTOR STAR CADAVER",
    courseDesc: (<><p className='course-desc'>Видео будет доступно до 15 августа 2023 года</p></>),
    videoUrl: "https://facecast.net/w/r0ziwn",
    videoEpisodes: [
      { title: "I Блок: Анатомия лица", time: 212 },
      { title: "II Блок: Верхняя треть", time: 3386 },
      { title: "III Блок: Средняя треть", time: 5333 },
      { title: "IV Блок: Нижняя треть", time: 7137 },
      { title: "V Блок: Вскрытие по всем зонам", time: 8986 }
    ]
  },
  {
    id: 2,
    openDate: new Date("2023-08-09"),
    closeDate: new Date("2023-08-12"),
    courseSubtitle: "День 3 - 9 августа 2023",
    courseTitle: "DOCTOR STAR CADAVER",
    courseDesc: (<><p className='course-desc'>Видео будет доступно с 9 августа 2023 года</p></>),
    videoUrl: "https://facecast.net/w/1jduln",
    videoEpisodes: [
      { title: "I Практика: Карпова Елена Ивановна", time: 206 },
      { title: "II Практика: Выскуб Максим Николаевич", time: 2361 },
      { title: "III Практика: Лысикова Виктория Александровна", time: 3984 },
      { title: "IV Практика: Флегонтова Елена Александровна", time: 5331 },
      { title: "V Практика: Абрамов Егор Андреевич", time: 6789 }
    ]
  },
]

const MainComponent = () => {

  function parseJwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  }

  function jwtTokenIsExpired(token) {
    const jwt = parseJwt(token);

    if (jwt.exp < (Date.now() / 1000)) {
      return true;
    }

    return false;
  }

  useEffect(() => {
    try {
      let accessToken = Cookies.get('accessToken');      

      if (jwtTokenIsExpired(accessToken)) {
        let refreshToken = Cookies.get('refreshToken');

        if (jwtTokenIsExpired(refreshToken)) {
          window.location.replace('unauth');
          return;
        }

        async function refreshJwtTokens(refreshToken) {          
            const api = `https://website.com/api/authentication/jwt`

            await axios.put(api, null, { headers: { "Authorization": `Bearer ${refreshToken}` } })
              .then(res => {
                accessToken = res.data.accessToken;
                refreshToken = res.data.refreshToken;
      
                Cookies.set('accessToken', accessToken, { expires: 7 });
                Cookies.set('refreshToken', refreshToken, { expires: 7 });
              });
        }
        refreshJwtTokens(refreshToken);
      }

      async function fetchData() {
        const api = `https://website.com/api/user/courses`
        await axios.get(api, { headers: { "Authorization": `Bearer ${accessToken}` } })
          .then(res => {
            if (res.data.data.length === 0) {
              window.location.replace('no-subscription');
            }
          });
      }
      fetchData();


    } catch (error) {
      window.location.replace('unauth');
      Cookies.remove('accessToken');
      Cookies.remove('refreshToken');
    }
  }, [])

  function isAllowed(date) {
    const now = new Date();
    return now > date;
  }

  return (
    <div className="App">
      <div className="container">
        <Promo />

        {courses.map((course) => (
          <VideoSpoiler key={course.id}
            courseId={course.id}
            courseSubtitle={course.courseSubtitle}
            courseTitle={course.courseTitle}
            courseDesc={course.courseDesc}
            videoUrl={course.videoUrl}
            videoEpisodes={course.videoEpisodes}
            isEnabled={isAllowed(course.openDate)}
          />
        ))}

        <Footer />

      </div>
    </div>
  )
}

export default MainComponent