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
    alertText.classList.remove("close")
    SecondAlertText.classList.remove("close")
    return
  }
  
  alertText.classList.add("close");
  SecondAlertText.classList.add("close");
  alertText.classList.remove("open")
  SecondAlertText.classList.remove("open")

  const body = {
    message: message,
    email: email,
  };
  document.getElementById("email").value = ""
  document.getElementById("textarea").value = ""
  document.getElementById("buttonReport").innerText = "Enviado"
  fazPost(body);
}

async function fazPost(body) {
  console.log(body);
  await fetch("http://localhost:3000/sendmail", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then(console.log("passou no fetch"));
}
