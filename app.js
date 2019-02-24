window.onload = function () {
  const secondsArrow = document.getElementById('seconds');
  const minutesArrow = document.getElementById('minutes');
  const hoursArrow = document.getElementById('hours');
  const AMorPMinput = document.getElementById('AMorPM');
  let AMorPM = '';

  function setDate() {
    const now = new Date();

    // manage seconds
    const seconds = now.getSeconds() + 1;
    const secondsDegree = (seconds * (360 / 60)) + 90; // 360 is total degrees, 60 is total seconds, 90 is to make the arrow starts at 12 o'clock(default starts at 9 o'clock)
    secondsArrow.style.transform = `rotate(${secondsDegree}deg)`;

    // manage minutes
    const minutes = now.getMinutes();
    const minutesDegree = (minutes * (360 / 60)) + 90;
    minutesArrow.style.transform = `rotate(${minutesDegree}deg)`;

    // manage hours
    const hours = now.getHours(); // 24 hours
    const hoursDegree = ((hours - 12) * (360 / 12)) + 90;
    hoursArrow.style.transform = `rotate(${hoursDegree}deg)`;

    AMorPMinput.innerHTML = (hours >= 12) ? AMorPM = 'PM' : AMorPM = 'AM';
  }

  setDate();
  setInterval(setDate, 1000);
}