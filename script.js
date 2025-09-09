const validator = new JustValidate('#submit-automatically_form_form', {
  submitFormAutomatically: true,
});

validator.addField('#submit-automatically_form_email', [
  {
    rule: 'required',
    errorMessage: 'Email is required',
  },
  {
      rule: 'email',
      errorMessage: 'Email is not valid',
  },
]);

const form = document.getElementById("submit-automatically_form_form");

form.addEventListener("submit", function (e) {
  // prevent real submit for demo
  e.preventDefault();
  // add submitted class
  form.classList.add("submitted");


  // if valid, you can continue with real submit
  if (form.checkValidity()) {
    const email=document.getElementById("submit-automatically_form_email").value;

  //save email to localStorage
  localStorage.setItem("subscriberEmail",email);
    window.location.href= "SuccessPage.html";
  }
});

function updateImage() {
  const img = document.getElementById('responsive-img');
      const width = window.innerWidth;
  if (width <= 480) {
    img.src = '/assets/images/illustration-sign-up-mobile.svg';
  }else if(width <= 843){
    img.src = '/assets/images/illustration-sign-up-tablet.svg';
  }
  else {
    img.src = '/assets/images/illustration-sign-up-desktop.svg';
  }
}

window.addEventListener('resize', updateImage);
window.addEventListener('DOMContentLoaded', updateImage);
