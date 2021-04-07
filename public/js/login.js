const loginFormHandler = async (event) => {
  // event.preventDefault();

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

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
