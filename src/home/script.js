const buttonSignup = document.getElementById("buttonSignup");
const buttonSignin = document.getElementById("buttonSignin")

const nameUser = document.getElementById("nameUser").value;
const email = document.getElementById("email").value;
const age = document.getElementById("age").value;
const state = document.getElementById("state").value;
const city = document.getElementById("city").value;
const password = document.getElementById("password").value;
const verifyPassword = document.getElementById("verifyPassword").value;

const alertName = document.getElementById("alertName");
const alertEmail = document.getElementById("alertEmail");
const alertAge = document.getElementById("alertAge");
const alertState = document.getElementById("alertState");
const alertCity = document.getElementById("alertCity");
const alertPassword = document.getElementById("alertPassword");
const alertPasswordMinimum = document.getElementById("alertPasswordMinimum");
const alertVerifyPassword = document.getElementById("alertVerifyPassword");

buttonSignup.addEventListener("click", Signup);

function verifyFields(
  nameUser,
  email,
  age,
  state,
  city,
  password,
  verifyPassword
) {
  if (nameUser == "") {
    alertName.classList.add("open");
    alertName.classList.remove("close");
    return false;
  } else {
    alertName.classList.add("close");
    alertName.classList.remove("open");
  }
  if (email == "") {
    alertEmail.innerText = "Email Obrigatório";
    alertEmail.classList.add("open");
    alertEmail.classList.remove("close");
    return false;
  } else {
    alertEmail.classList.add("close");
    alertEmail.classList.remove("open");
  }
  
  if (state == "") {
    alertState.classList.add("open");
    alertState.classList.remove("close");
    return false;
  } else {
    alertState.classList.add("close");
    alertState.classList.remove("open");
  }
  if (age == "" || age == null || age == 0) {
    alertAge.classList.add("open");
    alertAge.classList.remove("close");
    return false;
  } else {
    alertAge.classList.add("close");
    alertAge.classList.remove("open");
  }
  if (city == "") {
    alertCity.classList.add("open");
    alertCity.classList.remove("close");
    return false;
  } else {
    alertCity.classList.add("close");
    alertCity.classList.remove("open");
  }
  if (password == "" || password.length == 0) {
    alertPassword.classList.add("open");
    alertPassword.classList.remove("close");
    return false;
  } else {
    alertPassword.classList.add("close");
    alertPassword.classList.remove("open");
  }
  if (password.length < 6) {
    alertPasswordMinimum.classList.add("open");
    alertPasswordMinimum.classList.remove("close");
    return false;
  } else {
    alertPasswordMinimum.classList.add("close");
    alertPasswordMinimum.classList.remove("open");
  }
  if (password !== verifyPassword) {
    alertVerifyPassword.classList.add("open");
    alertVerifyPassword.classList.remove("close");
    return false;
  } else {
    alertVerifyPassword.classList.add("close");
    alertVerifyPassword.classList.remove("open");
    return true;
  }
}

async function Signup() {
  event.preventDefault();

  const nameUser = document.getElementById("nameUser").value;
  const email = document.getElementById("email").value;
  const age = parseInt(document.getElementById("age").value);
  const state = document.getElementById("state").value;
  const city = document.getElementById("city").value;
  const password = document.getElementById("password").value;
  const verifyPassword = document.getElementById("verifyPassword").value;
  let fillFields = verifyFields(
    nameUser,
    email,
    age,
    state,
    city,
    password,
    verifyPassword
  );
  if (fillFields == true) {
    console.log("entrou aqui pq os campos estão preenchidos corretamente");
    const body = {
      age: age,
      city: city,
      email: email,
      name: nameUser,
      password: password,
      state: state,
    };
    console.log(body);
    try {
      const res = await fetch("https://api-3-doors-game.vercel.app/signup", {
        method: "POST",
        headers: {
          "X-api-key":
            "T69ve4cPJD4rK23mEpx40LXlwhDf7Y6grwpIL03yMtX2XgiuaZp1C6HkQvgsJUu1",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      console.log(data);
      if (data.message === "Usuário criado.") {
        document.getElementById("nameUser").value = "";
        document.getElementById("email").value = "";
        document.getElementById("age").value = "";
        document.getElementById("state").value = "MA";
        document.getElementById("city").value = "";
        document.getElementById("password").value = "";
        document.getElementById("verifyPassword").value = "";
        buttonSignup.innerText = "Conta Criada!"
        buttonSignin.innerText = "Fazer Login"

      }

      let erroEmail = data?.errors[0].email || "";
      if (erroEmail == "Email ja esta em uso") {
        alertEmail.innerText = "Este E-email já está em uso";
        alertEmail.classList.add("open");
        alertEmail.classList.remove("close");
      } else if (erroEmail == "Email invalido") {
        alertEmail.innerText = "Este E-email é inválido";
        alertEmail.classList.add("open");
        alertEmail.classList.remove("close");
      }
    } catch (error) {}
    return;
  }
  console.log("chegou aqui pq ta faltando coisa");
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
    document.querySelector(".icon").src = "./assets/images/menu_white_36dp.svg";
  } else {
    menuMobile.classList.add("open");
    document.querySelector(".icon").src =
      "./assets/images/close_white_36dp.svg";
  }
}
//
