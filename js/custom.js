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
// Set up the clock and date
document.getElementById("time").innerHTML =
  `It's ` + getDate() + `, ` + getTime();
