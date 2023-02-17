let serial = 0;

// for first card

document.getElementById("first-card").addEventListener("click", function (e) {
  //   get data from html using id
  serial += 1;
  const productName = document.getElementById("first-Name").innerText;
  const productPrice = document.getElementById("first-price").innerText;
  const productQuantity = document.getElementById("first-quantity").innerText;
  const priceTotal = parseInt(productPrice) * parseInt(productQuantity);

  displayData(productName, productPrice, productQuantity, priceTotal);
  disableBtn("first-card");
});

// second card using event object
document.getElementById("second-card").addEventListener("click", function (e) {
  serial += 1;
  const productName = e.target.parentNode.parentNode.children[0].innerText;
  const productPrice =
    e.target.parentNode.parentNode.children[2].children[0].innerText;
  const productQuantity =
    e.target.parentNode.parentNode.children[3].children[0].innerText;
  const priceTotal = parseInt(productPrice) + parseInt(productQuantity);

  displayData(productName, productPrice, productQuantity, priceTotal);
  disableBtn("second-card");
});

// for third card

document.getElementById("third-card").addEventListener("click", function (e) {
  //   get data from html using id
  serial += 1;
  const productName = document.getElementById("third-name").innerText;
  const productPrice = document.getElementById("third-price").innerText;
  const productQuantity = document.getElementById("third-quantity").innerText;
  const priceTotal = parseInt(productPrice) - parseInt(productQuantity);

  displayData(productName, productPrice, productQuantity, priceTotal);
  disableBtn("third-card");
});
// for fourth card

document.getElementById("fourth-card").addEventListener("click", function (e) {
  //   get data from html using id
  serial += 1;
  const productName = document.getElementById("fourth-name").innerText;
  const productPrice = document.getElementById("fourth-price").innerText;
  const productQuantity = document.getElementById("fourth-quantity").innerText;
  const priceTotal = parseInt(productPrice) - parseInt(productQuantity);

  displayData(productName, productPrice, productQuantity, priceTotal);
  disableBtn("fourth-card");
});
// for fifth card

document.getElementById("fifth-card").addEventListener("click", function (e) {
  //   get data from html using id
  serial += 1;
  const productName = document.getElementById("fifth-name").innerText;

  const productPriceElm = document.getElementById("fifth-price");
  const productPriceStr = productPriceElm.value;
  const productPrice = parseFloat(productPriceStr);

  const productQuantityElm = document.getElementById("fifth-quantity");
  const productQuantityStr = productQuantityElm.value;
  const productQuantity = parseFloat(productQuantityStr);

  if (isNaN(productPrice) || isNaN(productQuantity)) {
    alert("Input valid number for fifth card");
    return;
  }
  if (productPrice <= 0 || productQuantity <= 0) {
    alert("Input number can not negative");
    return;
  }

  const priceTotal = productPrice / productQuantity;

  displayData(productName, productPrice, productQuantity, priceTotal);
  disableBtn("fifth-card");
});

// common function for show data
function displayData(productName, productPrice, productQuantity, priceTotal) {
  //show the data
  const tableContainer = document.getElementById("table-container");
  const tr = document.createElement("tr");
  tr.innerHTML = `
  <td>${serial}</td>
  <td>${productName}</td>
  <td>${productPrice}</td>
  <td>${productQuantity}</td>
  <td>${priceTotal}</td>
  `;

  tableContainer.appendChild(tr);
}

function disableBtn(id) {
  document.getElementById(id).setAttribute("disabled", true);
}
