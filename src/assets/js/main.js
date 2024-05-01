const subscribeForm = document.forms["subscribe-form"];
const emailInput = subscribeForm.email;
const errorMessage = document.querySelector("#email-validation");

subscribeForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const subscribeInner = document.querySelector("#subscribe-inner");

    if (!emailInput.checkValidity()) {
        emailInvalid();
    } else {
        subscribeInner.classList.add("subscribe__rotate");
        document.querySelector("#dismiss-message").addEventListener("click", () => {
            subscribeInner.classList.remove("subscribe__rotate");
        }, {once: true});
    }
});

emailInput.addEventListener("blur", (e) => {
    if (!e.target.checkValidity()) {
        emailInvalid();
    } else {
        emailValid();
    }
});

function emailInvalid() {
    errorMessage.textContent = "Valid email required";
    emailInput.classList.add("form__input--invalid");
}

function emailValid() {
    errorMessage.textContent = "";
    emailInput.classList.remove("form__input--invalid");
}