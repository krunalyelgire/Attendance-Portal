const webAppURL = "https://script.google.com/macros/s/AKfycbxEmbL8co7DTKuRn2il1iQ5-0j9m3JEOq_5zhJx0x4iuQYozeOkHrbdXknvS01VqsM36A/exec";

function login() {

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  fetch(webAppURL + "?username=" + encodeURIComponent(username) + "&password=" + encodeURIComponent(password))
  
  .then(response => response.json())

  .then(data => {

    console.log(data);

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

      document.getElementById("message").innerHTML = "Invalid Username or Password";

    }

  })

  .catch(error => {

    console.log(error);
    document.getElementById("message").innerHTML = "Server connection error";

  });

}
