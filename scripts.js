function scrollTo(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  }
  
  function submitForm(e) {
    e.preventDefault();
    document.getElementById("msg").innerText =
      "Thank you! We will contact you shortly.";
  }
  