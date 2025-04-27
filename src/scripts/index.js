const body = document.querySelector("body");

function updateElementText(id, newText) {
  const element = document.getElementById(id);
  
  if (element && element.textContent !== newText) {
    element.classList.add("fade");
    element.classList.remove("normal");
    setTimeout(() => {
      element.textContent = newText;
      element.classList.remove("fade");
      element.classList.add("normal");
    }, 150);
  }
}

function setDarkMode() {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const hour = new Date().getHours();
  
  if ( prefersDark || hour >= 18 || hour < 5) {
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
  }
}

function updateWatch() {
  const now = new Date();

  const day = now.getDate();
  const month = now.getMonth();
  const year = now.getFullYear();
  let hours = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();

  const months = [
    "janeiro", "fevereiro", "março", "abril", "maio", "junho",
    "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
  ];

  hours = hours.toString().padStart(2, "0");
  minute = minute.toString().padStart(2, "0");
  second = second.toString().padStart(2, "0");

  const hoursForm = `${hours}`;
  const minuteForm = `${minute}`;
  const secondForm = `${second}`;
  const dateForm = `${day} de ${months[month]} de ${year}`;

  updateElementText("date", dateForm);
  updateElementText("hours", hoursForm);
  updateElementText("minute", minuteForm);
  updateElementText("second", secondForm);
}

setDarkMode();
setInterval(updateWatch, 1000);
updateWatch();
