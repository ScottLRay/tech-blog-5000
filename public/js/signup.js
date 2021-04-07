async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector("#username-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  fetch("/api/users", {
    method: "POST",
    body: JSON.stringify({
      username: username,
      password : password,
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
  .querySelector("#signup-form")
  .addEventListener("submit", signupFormHandler);
