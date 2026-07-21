const webAppURL = "https://script.google.com/macros/s/AKfycby4Fkh9cLPm33hVkG9HGJf5S5b8PC0k-PPxTl8GhKaUELWvAzFefT76ZEGT0_FOxatj/exec";


function login() {

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;


  var script = document.createElement("script");

  script.src = webAppURL +
    "?username=" + encodeURIComponent(username) +
    "&password=" + encodeURIComponent(password) +
    "&callback=loginResponse";


  document.body.appendChild(script);

}



function loginResponse(data) {


  if(data.status == "success") {


    localStorage.setItem("orgId", data.orgId);
    localStorage.setItem("role", data.role);



    if(data.role == "HR") {

      window.location.href = "hr-dashboard.html";

    } else {

      window.location.href = "employee-dashboard.html";

    }


  } 
  else {

    document.getElementById("message").innerHTML =
    "Invalid Username or Password";

  }


}
