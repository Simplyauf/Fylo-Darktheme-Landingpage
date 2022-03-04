const emailCont = document.querySelector(".emailCont");
const email = document.querySelector(".email");
const emailBtn = document.querySelector(".emailBtn");

emailValue = email.value;
emailBtn.addEventListener(
  "mousedown",
  () => {
    // let emailRegex=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let emailRegex = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    const spanElem = document.createElement("p");

    if (emailValue.match(emailRegex)) {
      spanElem.innerHTML = "Email is valid";
      spanElem.style.color = "green";
    } else {
      spanElem.innerHTML = "Please enter a valid email adress";
      spanElem.style.color = "red";
    }
    emailCont.after(spanElem);
  },
  { once: true }
);
