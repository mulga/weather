function searchCity() {
  var userCity = document.getElementById("userCity").value;

  console.log(userCity);

  $.getJSON(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      userCity +
      "&appid=244adec19c53db0f9ef155e9aa0b3d85",
    function (data) {
      console.log(data);
      console.log(data.name);
      $("#displayCity").text(data.name);
      var icon =
        " https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
      console.log(icon);
      $("#icon").attr("src", icon);

      var temp = data.main.temp;
      temp = Math.ceil((temp / 100) * 10);
      console.log(temp);
      $("#displayTemp").text(temp);

      var weather = data.weather[0].main;
      console.log(weather);
      $("#displayWeather").text(weather);
    }
  );
}
