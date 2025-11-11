// === Вітання при вході ===
alert("👋 Ласкаво просимо на наш сайт! Ми раді вас бачити ❤️");

// === Зворотний зв’язок через prompt() ===
const userName = prompt("Як вас звати?");
if (userName && userName.trim() !== "") {
  document.addEventListener("DOMContentLoaded", () => {
    const greetBox = document.createElement("p");
    greetBox.textContent = `Вітаємо, ${userName}! Гарного вам дня 😊`;
    greetBox.style.textAlign = "center";
    greetBox.style.fontSize = "1.3em";
    greetBox.style.color = "#2b7a78";
    document.body.prepend(greetBox);
  });
}

// === Кнопка подяки ===
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("helloBtn");
  const msg = document.getElementById("message");

  if (btn && msg) {
    btn.addEventListener("click", () => {
      msg.textContent = "💚 Дякуємо, що завітали до нас! Повертавайте ще!";
      msg.style.fontSize = "1.2em";
      msg.style.color = "#17252a";
    });

    // Анімація при наведенні
    btn.onmouseover = () => {
      btn.style.backgroundColor = "#3aafa9";
      btn.style.color = "white";
      btn.style.transform = "scale(1.1)";
      btn.style.transition = "0.3s";
    };

    btn.onmouseout = () => {
      btn.style.backgroundColor = "";
      btn.style.color = "";
      btn.style.transform = "scale(1)";
    };
  }
});

// === Додатково: підтвердження перед виходом ===
window.addEventListener("beforeunload", (event) => {
  event.preventDefault();
  event.returnValue = "Ви впевнені, що хочете залишити сайт?";
});
