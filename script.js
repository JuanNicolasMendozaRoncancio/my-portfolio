/**
 * Portfolio contact form handler.
 * Opens the default mail client with pre-filled fields and shows a brief confirmation popup.
 */
function sendEmail(event) {
  event.preventDefault();

  const name    = document.getElementById("name").value;
  const email   = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
  window.location.href = `mailto:juannicolasmendoza4@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  showPopup(true);
  setTimeout(() => showPopup(false), 3000);
  document.getElementById("contact-form").reset();
}

function showPopup(visible) {
  document.getElementById("popup").style.visibility = visible ? "visible" : "hidden";
}