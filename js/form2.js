$(function() {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("#registration").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      firstname: "required",
      lastname: "required",
        terms: "required",
        address: "required",
        mobilenumber: "required",
      email: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        email: true
      },
    },
    // Specify validation error messages
    messages: {
      firstname: "Please enter your firstname",
      lastname: "Please enter your lastname",
        address: "Please enter a valid address",
        mobilenumber: "Please enter a valid phone number",
      email: "Please enter a valid email address",
        gender2: "Please select a gender",
        terms: "Please read and agree to our T&C"
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      form.submit();
    }
  });
});