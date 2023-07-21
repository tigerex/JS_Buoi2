import data from "./data.json" assert { type: "json" };
console.log(data);
let container = document.getElementById("container");
let header = document.getElementById("header");
let body = document.body;
body.style = "margin: 0";
header.style.width = "100%";
// header.style.paddingLeft = "60px";
// header.style.paddingRight = "60px";
header.style.backgroundColor = "#000000";

let cart = [];

//navbar
function buildNavbar() {
  let navbar = document.createElement("div");
  navbar.setAttribute("id", "Navbar");
  navbar.style.display = "flex";
  navbar.style.backgroundColor = "#000000";
  navbar.style.width = "100%";
  navbar.style.height = "30px";
  navbar.style.paddingTop = "15px";
  navbar.style.paddingBottom = "15px";
  navbar.style.zIndex = 9999;
  navbar.style.position = "fixed";
  navbar.style.top = "-4px";

  let logo = document.createElement("img");
  logo.src =
    "https://www.goatguns.com/cdn/shop/files/gold_goatgun_title-01.png?v=1672974313";
  logo.style.height = "25px";
  logo.style.marginTop = "5px";
  logo.style.marginLeft = "60px";

  let options = [
    "GOATGUNS",
    "ATTACHMENTS",
    "ACCESSORIES",
    "BUYERS GUIDE",
    "MORE",
  ];

  let optionBox = document.createElement("div");
  optionBox.style.display = "flex";
  optionBox.style.alignItems = "end";
  optionBox.style.justifyContent = "space-between";
  optionBox.style.gap = "30px";
  optionBox.style.paddingLeft = "15px";
  optionBox.style.paddingBottom = "5px";
  for (let i = 0; i < options.length; i++) {
    let optionButton = document.createElement("button");
    optionButton.innerHTML = options[i];
    optionButton.style.backgroundColor = "#000000";
    optionButton.style.color = "white";
    optionButton.style.border = "none";
    optionButton.style.fontSize = "14px";
    optionButton.style.fontFamily = "'Maven Pro', sans-serif";
    optionButton.style.fontWeight = "bold";

    optionBox.appendChild(optionButton);
  }

  let searchBox = document.createElement("input");
  searchBox.style.width = "250px";
  searchBox.style.height = "30px";
  searchBox.style.borderRadius = "10px";
  searchBox.placeholder = "Search";
  searchBox.style.marginLeft = "10%";

  let human = document.createElement("img");
  human.src =
    "https://www.pngkit.com/png/full/88-885453_login-white-on-clear-user-icon.png";
  human.style.width = "25px";
  human.style.marginLeft = "30px";

  let cart = document.createElement("img");
  cart.src =
    "https://www.pngkey.com/png/full/307-3071593_accessories-shopping-cart-icon-white.png";
  cart.style.width = "25px";
  cart.style.marginLeft = "70px";

  navbar.appendChild(logo);
  navbar.appendChild(optionBox);
  navbar.appendChild(searchBox);
  navbar.appendChild(human);
  navbar.appendChild(cart);
  return navbar;
}
let newNavbar = buildNavbar();
header.appendChild(newNavbar);

//small line under navbar.
let header_line = document.createElement("div");
header_line.style.width = "100%";
header_line.style.height = "5px";
header_line.style.position = "fixed";
header_line.style.zIndex = 9999;
header_line.style.backgroundColor = "#fab818";
header_line.style.top = "55px";

header.appendChild(header_line);

function buildBackgournd() {
  //that backgroundImage
  let background_image = document.createElement("div");
  background_image.style.width = "100%";
  background_image.style.height = "350px";
  background_image.style.background =
    "url('https://www.goatguns.com/cdn/shop/t/46/assets/miniaturear15handguardsassembly--edited-1673985347938.jpg?v=1673985350') no-repeat center top";
  background_image.style.backgroundSize = "100%";
  background_image.style.position = "fixed";
  background_image.style.zIndex = 0;

  //where all them in-image-texts be
  let background_image_text = document.createElement("div");
  background_image_text.style.width = "50%";
  background_image_text.style.height = "auto";
  background_image_text.style.padding = "110px 0px 100px 220px";

  //top text
  let p_top = document.createElement("p");
  let p_top_text = document.createTextNode("GREATEST OF ALL TIME:");
  p_top.style.color = "rgb(245, 166, 35)";
  p_top.style.margin = "0";
  p_top.style.fontFamily = "sans-serif";
  p_top.style.fontSize = "20px";
  p_top.style.fontWeight = "700";
  p_top.appendChild(p_top_text);

  //middle text
  let h2 = document.createElement("h2");
  let h2_text = document.createTextNode("MINIATURE ATTACHMENTS");
  h2.style.color = "#ffffff";
  h2.style.margin = "0";
  h2.style.fontFamily = "sans-serif";
  h2.style.fontSize = "35px";
  h2.style.fontWeight = "1000";
  h2.appendChild(h2_text);

  //bot text
  let p_bottom = document.createElement("p");
  let p_bottom_text = document.createTextNode("MOD YOUR MODELS ");
  p_bottom.style.color = "#ffffff";
  p_bottom.style.margin = "0";
  p_bottom.style.fontFamily = "sans-serif";
  p_bottom.style.fontSize = "20px";
  p_bottom.style.fontWeight = "700";
  p_bottom.style.fontStyle = "italic";
  p_bottom.appendChild(p_bottom_text);

  //print them out
  background_image_text.appendChild(p_top);
  background_image_text.appendChild(h2);
  background_image_text.appendChild(p_bottom);

  //print them text
  background_image.appendChild(background_image_text);

  //print that image and them texts
  // container.appendChild(background_image);
  return background_image;
}
let background = buildBackgournd();
container.appendChild(background);

function buildlayout() {
  //white empty space
  let display = document.createElement("div");
  display.setAttribute("id", "Display");
  display.style.position = "relative";
  display.style.top = "330px";
  // content_box.style.width = "100%";
  // content_box.style.height = "2000px"
  display.style.backgroundColor = "#ffffff";
  display.style.padding = "auto 220px";

  let sort = document.createElement("p");
  let sort_text = document.createTextNode("SORT BY:");
  sort.appendChild(sort_text);
  sort.style.fontFamily = "sans-serif";
  sort.style.margin = "15px 220px";

  let typeOption = [
    "ALL",
    "AR15",
    "AK47",
    "AK12",
    "1911",
    "M16",
    ".50",
    "ROUNDS",
    "ACCESSORIES",
  ];

  let optionButton = document.createElement("div");
  optionButton.style.marginBottom = "20px";
  optionButton.style.marginLeft = "220px";
  optionButton.style.display = "flex";
  optionButton.style.alignItems = "left";
  optionButton.style.justifyContent = "flex-start";
  optionButton.style.gap = "20px";
  for (let i = 0; i < typeOption.length; i++) {
    let Button = document.createElement("button");
    Button.innerHTML = typeOption[i];
    Button.style.border = "1px solid black";
    Button.style.borderColor = "#000000";
    Button.style.fontSize = "15px";
    Button.style.fontWeight = "400";
    Button.style.textAlign = "center";
    Button.style.margin = "0";
    Button.style.color = "#000000";
    Button.style.padding = "8px 16px 8px 16px";
    Button.style.backgroundColor = "white";

    optionButton.appendChild(Button);
  }

  display.appendChild(sort);
  display.appendChild(optionButton);
  return display;
}

let display = buildlayout();
container.appendChild(display);

function buildItemCard(item) {
  let { name, numReview, price, imageURL } = item;

  let itemCard = document.createElement("div");
  Object.assign(itemCard.style, {
    width: "100%",
    height: "100%",
    "font-family": "sans-serif",
    "text-align": "center",
    "max-width": "500px",
    "font-size": "16px",
    margin: "0px 0px 20px 30px",
  });

  itemCard.innerHTML = `
    <img src="${imageURL}" style="width: 100%; height: 230px; object-fit: contain;">
    <div style="margin-top: 5px;">
    <h4 style="margin-bottom: 4px; font-weight: 500">${name}</h4>
    <img src="https://img.freepik.com/premium-vector/five-star-rating-icon-rating-stars-vector-flat-stars-isolated_118339-1270.jpg?w=2000" style="width: 100%; height: 25px; object-fit: contain; position:relative; left: -45px">
    <p style="margin-top: 5px; position:relative; right: -45px; top: -30px">${numReview}</p>
    <p style="margin-top: 5px; position:relative; top: -40px; color: rgb(0, 108, 229)">view detail</p>
    <p style="margin-top: 0px; position:relative; top: -40px; font-weight: 530">${price}</p>
    </div>
    `;

  let button = document.createElement("button");
  button.innerText = "Add to cart"

  Object.assign(button.style, {
    border: "none",
    borderRadius: "8px",
    outline: "0",
    padding: "10px",
    color: "black",
    backgroundColor: "rgb(245, 171, 48)",
    textAlign: "center",
    cursor: "pointer",
    width: "70%",
    fontSize: "18px",
    position: "relative",
    top: "-40px",
  });

  button.addEventListener("click", () => {
    add(item);
  });

  itemCard.appendChild(button);

  return itemCard;
}

// function findItem(cart, fn) {
//   let isFound = false;

//   for (let index = 0; index < cart.length; index++) {
//     const element = cart[index];

//     if (fn(element)) {
//       return index;
//       break;
//     }
//   }

//   if (!isFound) {
//     return -1;
//   }
// }

function add(item) {
  //tuong duong voi ham findItem
  let itemPosition = cart.findIndex((itemInCart) => {
    return itemInCart.id == item.id;
  });

  if (itemPosition === -1) {
    item.quanity = 1;
    cart.push(item);
  }
  else {
    cart[itemPosition].quanity += 1
  }

  console.log(cart);

}

let itemList = document.createElement("div");
itemList.style.display = "grid";
itemList.style.Gap = "10px";
itemList.style.gridTemplateColumns = "repeat(auto-fit, minmax(350px, 1fr))";
itemList.style.justifyContent = "center";

let Cards_Space = document.createElement("div");
Cards_Space.style.padding = "0px 170px 0px 170px";
Cards_Space.style.backgroundColor = "#ffffff";
Cards_Space.style.top = "310px";
Cards_Space.style.zIndex = 100;
Cards_Space.style.position = "relative";

class item {
  constructor(name, numReview, price, imageURL) {
    this.name = name;
    this.numReview = numReview;
    this.price = price;
    this.imageURL = imageURL;
  }
}

/**
 * @param {item[]}
 */

let listOfItem = [...data];

for (let i = 0; i < listOfItem.length; i++) {
  let newItemCard = buildItemCard(listOfItem[i]);
  itemList.appendChild(newItemCard);
}

// let newItemCard1 = buildItemCard(
//     "Masterkay",
//     "13 reviews",
//     "$20.00",
//     "https://www.goatguns.com/cdn/shop/products/MasterkeyHold.jpg?v=1669752914"
// )

// let newItemCard2 = buildItemCard(
//     "M203 Gren Launcher",
//     "114 reviews",
//     "$20.00",
//     "https://www.goatguns.com/cdn/shop/products/GrenadeLauncher.jpg?v=1595438990"
// )

// let newItemCard3 = buildItemCard(
//     "Mini 4x Scope",
//     "352 reviews",
//     "$8.00",
//     "https://www.goatguns.com/cdn/shop/products/ACOG_41c77084-6df8-44c7-9b8a-2fabf0862eb7.jpg?v=1626210423"
// )

// let newItemCard4 = buildItemCard(
//     "Holo Sight",
//     "64 reviews",
//     "$8.00",
//     "https://www.goatguns.com/cdn/shop/products/Red_Dot_0977470c-8503-4e6a-9673-03151022ed85.jpg?v=1626210317"
// )

// let newItemCard5 = buildItemCard(
//     "Short Holo Sight",
//     "17 reviews",
//     "$8.00",
//     "https://www.goatguns.com/cdn/shop/products/ShortHolo.jpg?v=1614893430"
// )

// let newItemCard6 = buildItemCard(
//     "Reflex Sight",
//     "6 reviews",
//     "$8.00",
//     "https://www.goatguns.com/cdn/shop/products/HoldingaminatureRefelxSightGoatgunattachment.jpg?v=1629318217"
// )

// let newItemCard7 = buildItemCard(
//     "Mini Red Dot",
//     "10 reviews",
//     "$8.00",
//     "https://www.goatguns.com/cdn/shop/products/RedDotHold.jpg?v=1629318699"
// )

// let newItemCard8 = buildItemCard(
//     "Tac Scope",
//     "17 reviews",
//     "$8.00",
//     "https://www.goatguns.com/cdn/shop/products/Tac-Scope.jpg?v=1629317803"
// )

// let newItemCard9 = buildItemCard(
//     "Mini Tac Light",
//     "23 reviews",
//     "$15.00",
//     "https://www.goatguns.com/cdn/shop/products/FlashHand.jpg?v=1651706628"
// )

// itemList.appendChild(newItemCard1);
// itemList.appendChild(newItemCard2);
// itemList.appendChild(newItemCard3);
// itemList.appendChild(newItemCard4);
// itemList.appendChild(newItemCard5);
// itemList.appendChild(newItemCard6);
// itemList.appendChild(newItemCard7);
// itemList.appendChild(newItemCard8);
// itemList.appendChild(newItemCard9);

Cards_Space.appendChild(itemList);

container.appendChild(Cards_Space);
