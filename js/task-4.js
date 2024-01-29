const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();
  
  if (email.trim() === "" || password === "") {
    return alert ('All form fields must be filled in');
  }
  const login = {}
  login.email = email;
  login.password = password;
  console.log(login);
  form.reset();
}
