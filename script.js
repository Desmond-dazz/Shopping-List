const btnClearAll = document.querySelector("button");
const btnAdd = document.querySelector(".fa-circle-plus");
const form = document.querySelector("form");
const item = document.querySelector(".item");
const list = document.querySelector("ul");

function createElement(elemnt) {
  const NewElement = document.createElement(elemnt);
  return NewElement;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

// Add item

btnAdd.addEventListener("click", (e) => {
  if (item.value == "") {
    alert("Please Enter an Item!");
    return;
  } else {
    // Create elements
    const span = createElement("span");
    const li = createElement("li");
    const label = createElement("label");
    const check = createElement("input");
    const bin = createElement("i");

    check.setAttribute("type", "checkbox");
    check.className = "checkBox";
    bin.className = "fa-solid fa-trash";

    li.appendChild(label);
    li.appendChild(bin);
    label.textContent = item.value;
    label.insertAdjacentElement("afterbegin", check);
    label.insertAdjacentElement("afterbegin", span);

    list.appendChild(li);

    // "Styles";
    list.style.height = `${list.childElementCount * 61}px`;

    setTimeout(() => {
      li.style.transform = "translateX(0)";
    }, 300);

    item.value = "";
  }
});

// Cancell item

list.addEventListener("click", (e) => {
  let listHeight = Number(list.style.height.replace("px", ""));
  if (e.target.classList[0] == "checkBox") {
    e.target.previousElementSibling.classList.toggle("cancell");
  }
  // Delete Item
  else if (e.target.classList[1] == "fa-trash") {
    e.target.parentElement.style.transform = "translateX(-100%)";

    list.style.height = `${listHeight - 61}px`;
    setTimeout(() => {
      e.target.parentElement.remove();
    }, 300);
  }
});

// Clear all items
btnClearAll.addEventListener("click", () => {
  const li = document.querySelectorAll("li");

  if (li.length == 0) {
    alert("List is empty!");
  } else {
    li.forEach((elemnt) => {
      elemnt.remove();
    });

    list.style.height = "0px";
  }
});
