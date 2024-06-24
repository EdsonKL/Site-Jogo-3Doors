document
  .getElementById("buttonReport")
  .addEventListener("click", getUserFromHTML);

function getUserFromHTML() {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const message = document.getElementById("textarea").value;
  const stars = document.getElementById("cm_star-empty").value;
  console.log(stars);

  const alertText = document.getElementById("alertText");
  const SecondAlertText = document.getElementById("secondAlertText");

  if (email == "" || message == "") {
    alertText.classList.add("open");
    SecondAlertText.classList.add("open");
    alertText.classList.remove("close");
    SecondAlertText.classList.remove("close");
    return;
  }

  alertText.classList.add("close");
  SecondAlertText.classList.add("close");
  alertText.classList.remove("open");
  SecondAlertText.classList.remove("open");

  const body = {
    message: message,
    email: email,
  };
  document.getElementById("email").value = "";
  document.getElementById("textarea").value = "";
  document.getElementById("buttonReport").innerText = "Enviado";
  fazPost(body);
}

async function fazPost(body) {
  console.log(body);
  await fetch("https://api-3-doors-game.vercel.app/sendmail", {
    method: "POST",
    headers: {
      "X-api-key": process.env.X_API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then(console.log("passou no fetch"));
}

//
const buttonMenuShow = document
  .getElementById("menuShow")
  .addEventListener("click", menuShow);
function menuShow() {
  let menuMobile = document.querySelector(".mobile-menu");
  console.log("chegou aqui");
  if (menuMobile.classList.contains("open")) {
    menuMobile.classList.remove("open");
    document.querySelector(".icon").src =
      "../../assets/images/menu_white_36dp.svg";
  } else {
    menuMobile.classList.add("open");
    document.querySelector(".icon").src =
      "../../assets/images/close_white_36dp.svg";
  }
}
//
