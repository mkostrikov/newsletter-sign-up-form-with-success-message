const e=document.forms["subscribe-form"],t=e.email,i=document.querySelector("#email-validation");function s(){i.textContent="Valid email required",t.classList.add("form__input--invalid")}e.addEventListener("submit",e=>{e.preventDefault();let i=document.querySelector("#subscribe-inner");t.checkValidity()?(i.classList.add("subscribe__rotate"),document.querySelector("#dismiss-message").addEventListener("click",()=>{i.classList.remove("subscribe__rotate")},{once:!0}),t.value=""):s()}),t.addEventListener("blur",e=>{e.target.checkValidity()?(i.textContent="",t.classList.remove("form__input--invalid")):s()});
//# sourceMappingURL=index.93232b6c.js.map
