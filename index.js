// Heading
const freelanceContainer = document.getElementById("freelance-container");
const title = document.createElement("h1");
title.textContent = "Freelancer Forum!";
freelanceContainer.append(title);

// Style
freelanceContainer.style.width = "80%";
freelanceContainer.style.margin = "0 auto";
freelanceContainer.style.textAlign = "center";

// Available Freelancers Array
const names = [
  "Alice",
  "Bob",
  "Carol",
  "John",
  "Buzz",
  "Tina",
  "Robert",
  "Guile",
  "Ryu",
];
const occupations = [
  "Writer",
  "Teacher",
  "Programmer",
  "Street_Fighter",
  "USAF_Officer",
  "Dentist",
  "Retired_Space_Ranger",
  "Movie_Director",
  "Stunt_Man",
];
const prices = [
  "$30",
  "$50",
  "$70",
  "$100",
  "$5000",
  "$600",
  "$400",
  "$200",
  "$300",
];
const groups = [];

// const table = document.createElement("table");
// table.className = "table";
// const freelance = document.getElementById("freelance");
// freelance.appendChild(table);

// const thead = document.createElement("thead");
// table.appendChild(thead);

// const tr = document.createElement("tr");
// thead.appendChild(tr);

// const thName = document.createElement("th");
// thName.innerHTML = "Name";
// tr.appendChild(thName);

// const thOccupation = document.createElement("th");
// thOccupation.innerHTML = "Occupation";
// tr.appendChild(thOccupation);

// const thPrice = document.createElement("th");
// thPrice.innerHTML = "Price";
// tr.appendChild(thPrice);

// const tbody = document.createElement("tbody");
// table.appendChild(tbody);

// const display = () => {
//   tbody.innerHTML = "";

//   groups.forEach((element) => {
//     const trBody = document.createElement("tr");
//     tbody.appendChild(trBody);

//     const tdName = document.createElement("td");
//     tdName.innerHTML = element.name;
//     trBody.appendChild(tdName);

//     const tdOccupation = document.createElement("td");
//     tdOccupation.innerHTML = element.occupation;
//     trBody.appendChild(tdOccupation);

//     const tdPrice = document.createElement("td");
//     tdPrice.innerHTML = element.price;
//     trBody.appendChild(tdPrice);
//   });
// };

// Timer

const addGroupsIntervalId = setInterval(() => {
  addGroups();
  if (groups.length % 4 === 0) {
    display();
  }
}, 3000);

// Render each freelanser as a card
// function render() {
//   const freelance = document.querySelector("#freelance");
//   freelance.innerHTML = "";
//   groups.forEach((group) => {
//     const card = document.createElement("div");
//     card.classList.add("card");

//     const cardBody = document.createElement("div");
//     cardBody.classList.add("card-body", "text-center");

//     const cardTitle = document.createElement("h5");
//     cardTitle.classList.add("card-title");
//     cardTitle.textContent = `${group.name} - ${group.occupation} - ${group.price}`;

//     cardBody.appendChild(cardTitle);
//     card.appendChild(cardBody);
//     freelance.appendChild(card);
//   });
// }

// // Rendered groups
function render() {
  const freelance = document.querySelector("#freelance");
  const freeLanceElements = groups.map((group) => {
    const element = document.createElement("li");
    element.classList.add(group.name, group.occupation, group.price);
    element.textContent = `${group.name} - ${group.occupation} - ${group.price}`;
    return element;
  });
  freelance.replaceChildren(...freeLanceElements);
}

// Randomizer and push
function addGroups() {
  const name = names[Math.floor(Math.random() * names.length)];
  const occupation =
    occupations[Math.floor(Math.random() * occupations.length)];
  const price = prices[Math.floor(Math.random() * prices.length)];

  groups.push({ name, occupation, price });

  render();
}
