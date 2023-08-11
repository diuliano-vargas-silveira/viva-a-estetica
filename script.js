const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("email")?.value;
  const password = document.getElementById("password")?.value;
  const cPassword = document.getElementById("c_password")?.value;

  if (email === "" || password === "" || cPassword === "") {
    alert("Por favor preencha todos os campos!");
    return;
  }

  if (password !== cPassword) {
    alert("Senhas devem ser iguais");
    return;
  }

  console.log("Email:", email);
  console.log("Senha:", password);
  console.log("ConfirmarSenha:", cPassword);

  localStorage.setItem("user", email);

  const link = window.document.createElement("a");
  link.href = "/home/home.html";
  link.click();
});
