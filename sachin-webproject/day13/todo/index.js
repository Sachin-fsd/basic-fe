document.querySelector("form").addEventListener("submit", addtask);

let todoarr = JSON.parse(localStorage.getItem("todo")) || [];

function addtask(event) {
//   event.preventDefault();
  let row = document.createElement("tr");
  let taskname = document.querySelector("#task").value;
  if (taskname == "") {
    alert("enter some task");
  }
  let taskpriority = document.querySelector("#priority").value;
  if (taskpriority == "") {
    alert("enter some priority");
  }

  if (taskname !== "" && taskpriority !== "") {
    let obj = { taskname, taskpriority };

    todoarr.push(obj);
    localStorage.setItem("todo", JSON.stringify(todoarr));
    addshow(obj);
  }
}

displaytable(todoarr);

function addshow(obj, i) {
  let row = document.createElement("tr");
  let td1 = document.createElement("td");
  td1.innerText = obj.taskname;
  let td2 = document.createElement("td");
  td2.innerText = obj.taskpriority;
  if (td2.innerText == "High") {
    td2.style.backgroundColor = "red";
  } else {
    td2.style.backgroundColor = "green";
  }
  let td3 = document.createElement("img");
  td3.src = "file:///C:/Users/91931/Downloads/heart-svgrepo-com%20(2).svg";
  //   td3.innerText = "Add to Favourites";
  td3.addEventListener("click", () => add_to_fav(obj, i));
  let td4 = document.createElement("td");
  td4.innerText = "Delete";
  td4.addEventListener("click", () => deletetask(obj, i));
  row.append(td1, td2, td3, td4);
  document.querySelector("tbody").append(row);
}

function displaytable(todoarr) {
  for (let i = 0; i < todoarr.length; i++) {
    let obj = todoarr[i];
    addshow(obj, i);
  }
}
// console.log(todoarr);
let favarr = JSON.parse(localStorage.getItem("favourites")) || [];

let x = 0;
function add_to_fav(obj, i) {
  favarr.push(obj);
  if (x == 0) {
    document.querySelectorAll("img")[i].src =
      "file:///C:/Users/91931/Downloads/heart-svgrepo-com%20(1).svg";
    console.log(x);
  }
  localStorage.setItem("favourites", JSON.stringify(favarr));
  alert("Task added to favourites");
}

function deletetask(obj, i) {
  todoarr.splice(i, 1);
  localStorage.setItem("todo", JSON.stringify(todoarr));
  document.querySelector("tbody").innerHTML = "";
  displaytable(todoarr);
}


