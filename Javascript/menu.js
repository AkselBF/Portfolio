
const burgerMenu = document.querySelector(".burgermenu");
const navigation = document.querySelector(".navigation");

burgerMenu.addEventListener("change", () => {
  if (burgerMenu.checked) {
    navigation.style.left = "0";
    navigation.style.height = "85%";
    navigation.style.bottom = "0";
    navigation.style.top = "15%";
    navigation.style.borderTopRightRadius = "30px";
  } else {
    navigation.style.left = "-300px";
    navigation.style.height = "85%";
    navigation.style.bottom = "0";
    navigation.style.top = "15%";
    navigation.style.borderTopRightRadius = "30px";
  }
});

window.addEventListener("resize", () => {
  const windowWidth = window.innerWidth;
  if (windowWidth >= 800) {
    showNavigation();
  } else {
    hideNavigation();
  }
});

function showNavigation() {
  navigation.style.left = "0";
  navigation.style.height = "100%";
  navigation.style.top = "0";
  navigation.style.borderTopRightRadius = "0";
  burgerMenu.checked = true;
}

function hideNavigation() {
  navigation.style.left = "-300px";
  navigation.style.height = "100%";
  navigation.style.top = "0";
  navigation.style.borderTopRightRadius = "0";
  burgerMenu.checked = false;
}