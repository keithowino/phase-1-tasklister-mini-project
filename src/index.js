document.addEventListener("DOMContentLoaded", () => {
  // your code here

  let targetForm = document.querySelector("form");

  targetForm.addEventListener("submit", (event) => {
    event.preventDefault();
    buildToDoList(event.target.new_to_do.value);
    targetForm.reset();
  });
});

function buildToDoList(newItem){
  let targetListBody = document.querySelector(".list-body");
  let targetList = document.querySelector(".list");
  let li = document.createElement("li");
  let removeListBtn = document.createElement("button");
  removeListBtn.addEventListener("click", removeList)
  li.textContent = `${newItem} `;
  removeListBtn.textContent = "Cut";
  removeListBtn.className = "btn btn-primary";
  li.appendChild(removeListBtn);
  targetListBody.style.display = "block";
  targetList.appendChild(li);
};

function removeList(event){
  event.target.parentNode.remove();

  let targetListBody = document.querySelector(".list-body");
  let targetList = document.querySelector(".list");

  if (targetList.innerHTML.length < 1){
    targetListBody.style.display = "none";
  }
};