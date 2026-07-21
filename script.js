const webAppURL = "https://script.google.com/macros/s/AKfycbzTtPGTeSQAcgb6Am_yvvkgINZTjo0P0vD0BYPewO4wyartoqC5N0BfRbx7p_fsKGQ/exec";

function login() {

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  fetch(webAppURL + "?username=" + username + "&password=" + password)
  
  .then(response => response.json())

  .then(data => {

    if(data.status == "success") {

      localStorage.setItem("orgId", data.orgId);
      localStorage.setItem("role", data.role);

      if(data.role == "HR") {
        window.location.href = "hr-dashboard.html";
      }
      else {
        window.location.href = "employee-dashboard.html";
      }

    } 
    else {
      document.getElementById("message").innerHTML = "Invalid Username or Password";
    }

  })
  .catch(error => {
    console.log(error);
    document.getElementById("message").innerHTML = "Server connection error";
  });

}
