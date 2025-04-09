let isElementVisible = false;

function handleEvent(event, message) {
  const p = document.createElement("p");
  p.innerHTML = message;

  if (isElementVisible === false) {
    isElementVisible = true;
    p.classList.add("showed-text", "para", "shadow", "mt-2", "py-4", "px-4");
    event.target.parentNode.parentNode.after(p);
  } else if (isElementVisible === true) {
    isElementVisible = false;
    event.target.parentNode.parentNode.nextElementSibling.remove();
  }
}
