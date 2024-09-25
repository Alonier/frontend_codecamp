import OWKey from "../../key.js";
const savedWeatherData = JSON.parse(localStorage.getItem("saved-weather"));

//coords : pos.coords
const accessToGeo = ({ coords }) => {
  const { latitude, longitude } = coords;

  //shorthand property
  const posObj = {
    latitude,
    longitude,
  };

  weatherSearch(posObj);
};

const askForLocation = () => {
  const posObj = navigator.geolocation.getCurrentPosition(
    accessToGeo,
    (err) => {
      console.log(err);
    }
  );
};

//todo의 내용을 사용자의 지역명으로 변경
const weatherDataActive = ({ location, weather }) => {
  //가지고 있는 이미지가 아니면 Clear로 변환
  const weatherMainList = [
    "Fog",
    "Clouds",
    "Drizzle",
    "Rain",
    "Snow",
    "ThunderStorm",
  ];
  weather = weatherMainList.includes(weather) ? weather : "Clear";

  //h1 태그 내용 변경
  const locationName = document.getElementById("todo__location");
  locationName.textContent = `${location}`;

  //현재 날씨에 따라 배경화면 변경
  document.body.style["background-image"] = `url('./images/${weather}.jpg')`;

  //localStorage의 날씨, 위치와 현재 날씨,위치가 다르다면 localStorage 정보 갱신
  if (
    !savedWeatherData ||
    savedWeatherData.location !== location ||
    savedWeatherData.weather !== weather
  ) {
    //localStorage에 현재 위치,날씨 저장
    localStorage.setItem(
      "saved-weather",
      JSON.stringify({ location, weather })
    );
  }
};

const weatherSearch = ({ latitude, longitude }) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${OWKey}`
  )
    .then((res) => {
      //res.json() =>  안에 들어있는 데이터들을 자동으로 json 형식으로 바꾸어 보내준다
      //res.json 반환 결과가 아래 then 에 전달
      return res.json();
    })
    .then((json) => {
      console.log(json.name, json.weather[0].main);
      const weatherData = {
        location: json.name,
        weather: json.weather[0].main,
      };
      weatherDataActive(weatherData);
    })
    .catch((err) => {
      console.error(err);
    });
};

askForLocation();
if (savedWeatherData) {
  weatherDataActive(savedWeatherData);
}
