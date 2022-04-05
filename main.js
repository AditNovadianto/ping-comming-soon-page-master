const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const input = document.querySelector("form input");

const form = document.querySelector("main form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = input.value;

  if (!email) {
    return;
  }

  const isEmailValid = validateEmail(email);

  if (isEmailValid) {
    alert("Email anda Valid");

    form.classList.remove("error");

    input.value = "";
  } else {
    form.classList.add("error");

    form.style.animation = "error 0.3s ease";
  }
});

form.addEventListener("animationend", () => {
  form.style.animation = "none";
});
