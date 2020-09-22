let sel = document.querySelector('.select');

function weather() {
   fetch(`http://api.openweathermap.org/data/2.5/weather?id=${sel.value}&units=metric&lang=ru&appid=ca233e057faf4b3de02aa25482e8b94b`)
   .then(function (resp) { return resp.json() })
   .then(function (data) {
      console.log(data);
      document.querySelector('.city_name').textContent = data.name;
      document.querySelector('.temp').innerHTML = `${Math.round(data.main.temp)}&deg`;
      document.querySelector('.clouds').textContent = data.weather[0].description;
      document.querySelector('.icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="">`;
   })
   .catch(function () {
      // catch any errors
   });
}

window.onload = weather;
sel.onchange = weather;