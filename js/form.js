$(function() {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("#registration").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      cardname: "required",
      cardnumber: "required",
      expiration: "required",
        cvc: "required",
    },
    // Specify validation error messages
    messages: {
      cardnane: "Please enter your full name",
      cardnumber: "Please enter your card number",
        expiration: "Please enter your cards expiraiton date",
        cvc: "Please enter your cvv",
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      form.submit();
    }
  });
});