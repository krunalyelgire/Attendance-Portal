const webAppURL = "https://script.google.com/macros/s/AKfycbygPRpF3yZJxFJh_HyRGAXQs-wvGiJQYrFlzVXhlPwBCfhW9Pps4eW-gu_4-jGA-c5S/exec";


function login() {


  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;



  var script = document.createElement("script");


  script.src = webAppURL +
    "?username=" + encodeURIComponent(username) +
    "&password=" + encodeURIComponent(password) +
    "&callback=loginResult";



  document.body.appendChild(script);


}



function loginResult(data) {


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


    document.getElementById("message").innerHTML =
    "Invalid Username or Password";


  }


}
