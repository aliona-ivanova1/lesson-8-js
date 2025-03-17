
let div = document.getElementById("wrapper");

let request = new XMLHttpRequest();
request.open("GET", "https://reqres.in/api/unknown");

request.addEventListener("load", function () {
  let ii = this.responseText;
  let responseJs = JSON.parse(ii);
  console.log(responseJs);
  let ul = document.createElement("ul");

  responseJs.data.forEach((element) => {
    let li = document.createElement("li");
    li.textContent = `${element.name} ${element.color}`;
    li.style.backgroundColor = element.color;
    ul.appendChild(li);
  });

  div.appendChild(ul);
});

request.addEventListener("error", function () {
  let err = document.createElement("p");
  err.textContent = "Oopsy doopsy error!";

  div.appendChild(err);
});

request.send();

