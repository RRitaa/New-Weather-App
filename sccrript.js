function displayTemprature(response) {
  console.log(response.data.main.temp);
}

let apiKey = "b26d34366f12efd35f2df5f40edbeeff";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemprature);
