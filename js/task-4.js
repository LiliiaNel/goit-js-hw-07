const form = document.querySelector(".js-login-form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const registerForm = event.target;
  const email = registerForm.elements.email.value.trim();
  const password = registerForm.elements.password.value.trim();
  
  if (email === "" || password === "") {
   alert("All form fields must be filled in");
    return;
  } 
    const formData = {
    email: email,
    password: password,
  };
  console.log(formData);
  registerForm.reset();
};
