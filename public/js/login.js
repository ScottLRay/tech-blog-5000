const loginFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#username-login");
  const password = document.querySelector("#password-login").value.trim();

  fetch("/api/users/login", {
    method: "POST",
    body: JSON.stringify({
      username: username,
      password: password,
    }),
    headers: { "Content-Type": "application/json" },
  })
    .then(function () {
      document.location.replace("/dashboard");
    })
    .catch((error) => {
      alert("Failed to log in");
      console.log(error);
    });
};

async function signupFormHandler(event) {
  event.preventDefault();

  console.log(document.querySelector("#name-signup").value)
  
  const name = document.querySelector("#name-signup").value.trim();
  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  fetch("/api/users", {
    method: "POST",
    body: JSON.stringify({
      name: name,
      username: username,
      email: email,
      password: password,
    }),
    headers: { "Content-Type": "application/json" },
  })
    .then(function () {
      console.log("success");
      document.location.replace("/dashboard");
    })
    .catch((error) => {
      console.log(error);
    });
}

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
