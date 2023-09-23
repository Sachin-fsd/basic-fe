document.querySelector("form").addEventListener("submit", detail);

let signuparr = JSON.parse(localStorage.getItem("signup")) || [];
let ans = "New User";
let userobj;
function detail(event) {
  event.preventDefault();
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let mobile = document.querySelector("#mobile").value;
  let password = document.querySelector("#password").value;

  userobj = {
    name,
    email,
    mobile,
    password,
  };
  if(userobj.name == "" || userobj.email == "" || userobj.mobile == "" || userobj.password == ""){
    alert("Enter all Details");
    return;
  }
  checkmail(userobj.email);
}
console.log(userobj);

function checkmail(mail) {
  signuparr.forEach((elem) => {
    if (elem.email == mail) {
      ans = "Already Registered";

      return ans;
    }
  });
  if (ans == "Already Registered") {
    alert(ans);
    window.location.href = "signin.html";
  }
  if (ans !== "Already Registered") {
    signuparr.push(userobj);

    localStorage.setItem("signup", JSON.stringify(signuparr));
    alert("You are now Registered");
    window.location.href = "signin.html";
  }
}

document.querySelector("button").addEventListener("click", signin);

function signin() {
  window.location.href = "signin.html";
}
