// let slides = document.getElementsByClassName("pic")

// let n = 0;

// setInterval(() => {
//     if(n>=slides.length){
//         n=0;
//         slideshow();
//     }else{
//         slideshow();
//     }

// }, 2000);
// function slideshow() {
//     console.log("f", n)
//     if (n < slides.length) {
//         for (let i = 0; i < slides.length; i++) {
//             if (i == n) {
//                 console.log("s", n)
//                 slides[i].style.display = "block";
//             } else {
//                 slides[i].style.display = "none";

//             }
//         }
//     }
//     n++;

// }

let img = document.querySelectorAll("img");
for (let i = 0; i < img.length; i++) {
  img[i].onclick = product;
}
function product() {
  window.location.href = "product.html";
}

let prod = document.querySelectorAll(".slide>div");
console.log(prod);
let obj = {};
// let top3 = [];for(let i=0; i<prod.lemgth)

let s = 0;
let n = s;
function slid() {
  console.log("s", s, n);

  (n = 0), (s = 0);
  for (let i = 0; i < prod.length; i++) {
    prod[i].style.display = "none";
  }
  console.log("in slid", s, n);
  for (n; n < s + 5; n++) {
    prod[n].style.display = "block";
    console.log("slid end", s, n);
  }
  (n = 0), (s = 0);
}
slid();

function next() {
  console.log("t", s, n);

  s++;
  n++;
  if (s + 5 > prod.length) {
    slid();
  }
  for (let i = 0; i < prod.length; i++) {
    prod[i].style.display = "none";
  }
  for (n; n < s + 5; n++) {
    prod[n].style.display = "block";
  }

  n = s;
}
