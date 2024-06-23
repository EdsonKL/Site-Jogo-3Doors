// 
const buttonMenuShow = document.getElementById("menuShow").addEventListener("click", menuShow)
function menuShow() {
  let menuMobile = document.querySelector('.mobile-menu');
  console.log("chegou aqui")
  if (menuMobile.classList.contains('open')) {
      menuMobile.classList.remove('open');
      document.querySelector('.icon').src = "../../assets/images/menu_white_36dp.svg";
  } else {
      menuMobile.classList.add('open');
      document.querySelector('.icon').src = "../../assets/images/close_white_36dp.svg";
  }
}
  // 