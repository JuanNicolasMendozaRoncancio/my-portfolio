function sendEmail(event) {
  event.preventDefault(); // Evita recargar la página

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  // Esto abre el cliente de correo predeterminado
  const mailtoLink = `mailto:juannicolasmendoza4@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\n${message}`
  )}`;

  window.location.href = mailtoLink;

  // Muestra el popup de confirmación
  showPopup(true);

  // Oculta el popup después de 3 segundos
  setTimeout(() => {
    showPopup(false);
  }, 3000);

  // Limpia el formulario
  document.getElementById("contact-form").reset();
}

function showPopup(bool) {
  const popup = document.getElementById("popup");
  popup.style.visibility = bool ? "visible" : "hidden";
}
