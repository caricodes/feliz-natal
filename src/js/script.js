function countdownUntilChristmas() {
  const christmas = new Date("Dec 25, 2024 00:00:00");

  let countdownInterval = setInterval(function () {
    let today = new Date().getTime();

    let remainingTime = christmas - today;

    let days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
      days + "d - " + hours + "h - " + minutes + "m - " + seconds + "s";

    if (remainingTime < 0) {
      clearInterval(countdownInterval);
      document.getElementById("countdown").innerHTML = "FELIZ NATAL 🤶";
    }
  }, 1000);
}

countdownUntilChristmas();
