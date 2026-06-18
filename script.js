const message = document.querySelector("#message");
const button = document.querySelector("#changeMessage");

button.addEventListener("click", () => {
    message.textContent = "My Git project is working!";
});
