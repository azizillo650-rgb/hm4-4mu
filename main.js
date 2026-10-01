
const itemInput = document.querySelector("#itemInput");
const addBtn = document.querySelector("#addBtn");
const itemsList = document.querySelector("#itemsList");

addBtn.onclick = function() {
  const text = itemInput.value;

  const li = document.createElement("li");
  li.textContent = text;

  itemsList.appendChild(li);

  itemInput.value = "";
};

