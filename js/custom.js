// Add your custom js stuff here
// Want to contribute to saturn startpage? Learn more on our github page.
function getTime() {
  let date = new Date(),
    min = date.getMinutes(),
    //sec = date.getSeconds(),
    hour = date.getHours();
  return (
    "" + (hour < 10 ? "0" + hour : hour) + ":" + (min < 10 ? "0" + min : min)
  ); // + ":" +
  //(sec < 10 ? ("0" + sec) : sec);
}
function getDate() {
  let date = new Date(),
    months = [
      "Jan",
      "Febr",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    cmonth = months[date.getMonth()],
    days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    cday = days[date.getDay()],
    cnum = date.getDate();
  return " " + cday + " " + cnum + " " + cmonth;
}
window.onload = () => {
  let xhr = new XMLHttpRequest();
  // Request to open weather map
  xhr.open(
    "GET",
    "https://api.openweathermap.org/data/2.5/weather?id=934154&&units=metric&appid=853f035d7995af09f2ca63841a1f5e76"
  );
  xhr.onload = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        var prefix = "wi-";
        var today = new Date();
        var hour = today.getHours();
        var dn = "";
        if (hour > 5 && hour < 19) {
          dn = "";
        } else {
          dn = "night-";
        }
        let json = JSON.parse(xhr.responseText);
        console.log(json);
        var code = json.weather[0].id;
        wIcon = prefix + "owm-" + dn + code;
        console.log(wIcon);
        document.getElementById("temp").innerHTML =
          json.main.temp.toFixed(0) + "°";
        document.getElementById("weather-icon").classList.add(wIcon);
      } else {
        console.log("error msg: " + xhr.status);
      }
    }
  };
  xhr.send();
  // Set up the clock and date
  document.getElementById("time").innerHTML =
    `It's ` + getDate() + `, ` + getTime();
};
