const accessToGeo = (pos) => {
  const posObj = {
    latitude: pos.coords.latitude,
    longitude: pos.coords.longitude,
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

const weatherSearch = (posObj) => {
  //   console.log(posObj);

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${posObj.latitude}&lon=${posObj.longitude}&units=metric&appid=28258ba8728417252c0032d51065ff11`
  )
    .then((res) => {
      //res.json() =>  안에 들어있는 데이터들을 자동으로 json 형식으로 바꾸어 보내준다
      //res.json 반환 결과가 아래 then 에 전달
      return res.json();
    })
    .then((json) => {
      console.log(json.name, json.weather[0].description);
    })
    .catch((err) => {
      console.error(err);
    });
};

askForLocation();
