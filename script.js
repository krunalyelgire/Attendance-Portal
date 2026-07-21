const scriptURL = "PASTE_YOUR_WEB_APP_URL_HERE";

function login() {

  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  google.script.run
    .withSuccessHandler(function(response){

      if(response.status == "success"){

        if(response.role == "HR"){
          window.location.href = "hr-dashboard.html";
        }
        else if(response.role == "Employee"){
          window.location.href = "employee-dashboard.html";
        }

      } else {
        alert("Invalid Username or Password");
      }

    })
    .checkLogin(username,password);

}
