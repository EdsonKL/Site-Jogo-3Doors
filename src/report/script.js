document
  .getElementById("buttonReport")
  .addEventListener("click", getUserFromHTML);

function getUserFromHTML() {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const message = document.getElementById("textarea").value;
  const where = document.querySelector('input[name="where"]:checked').value;
  const nameUser = document.getElementById("nameUser").value;

  const alertText = document.getElementById("alertText");
  const secondAlertText = document.getElementById("secondAlertText");
  const thirdAlertText = document.getElementById("thirdAlertText");

  if (nameUser == "") {
    alertText.classList.add("open");
    alertText.classList.remove("close");
    return;
  } else {
    alertText.classList.add("close");
    alertText.classList.remove("open");
  }
  if (email == "") {
    secondAlertText.classList.add("open");
    secondAlertText.classList.remove("close");
    return
  }
  else{
    secondAlertText.classList.add("close");
    secondAlertText.classList.remove("open");

  }
  if (message == "") {
    thirdAlertText.classList.add("open");
    thirdAlertText.classList.remove("close");
    return
  }
  else{
    thirdAlertText.classList.add("close");
    thirdAlertText.classList.remove("open");

  }

  alertText.classList.add("close");
  secondAlertText.classList.add("close");
  alertText.classList.remove("open");
  secondAlertText.classList.remove("open");

  const body = {
    nameUser: nameUser,
    where: where,
    message: message,
    email: email,
  };

  document.getElementById("nameUser").value = ""
  document.getElementById("email").value = "";
  document.getElementById("textarea").value = "";
  document.getElementById("buttonReport").innerText = "Enviado";
  fazPost(body);
}

async function fazPost(body) {
  await fetch("https://api-3-doors-game.vercel.app/sendmail", {
    method: "POST",
    headers: {
      "X-api-key":
        "T69ve4cPJD4rK23mEpx40LXlwhDf7Y6grwpIL03yMtX2XgiuaZp1C6HkQvgsJUu1",
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
