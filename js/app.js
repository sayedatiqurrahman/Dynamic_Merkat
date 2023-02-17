// nav bars dynamication
document.getElementById('view-card').addEventListener('click', function () {
    alert('you can see the product card  \n under the "View Cart" button')
})
document.getElementById('log-out').addEventListener('click', function () {
    window.location.href = 'log.html'
})
document.getElementById('settings').addEventListener('click', function () {
    return alert('you have no access for settings')
})



// cards code
document.getElementById('first-btn').addEventListener('click', function (e) {
    getValuebyID(e);
    disableAttribute('first-btn')

})
document.getElementById('second-btn').addEventListener('click', function (e) {
    getValuebyID(e);
    disableAttribute('second-btn')

})
document.getElementById('third-btn').addEventListener('click', function (e) {
    getValuebyID(e);
    disableAttribute('third-btn')

})
document.getElementById('forth-btn').addEventListener('click', function (e) {
    getValuebyID(e);
    disableAttribute('forth-btn')

})

// product value calculation
function getValuebyID(e) {
    const productName = e.target.parentNode.parentNode.children[0].innerText;
    const productPrice = e.target.parentNode.parentNode.children[2].children[0].innerText;
    const productQuantity = e.target.parentNode.parentNode.children[3].children[0].innerText;
    const totalPrice = productQuantity * productPrice;
    displayData(productName, productPrice, productQuantity, totalPrice)
}

// input value is special
document.getElementById('fifth-btn').addEventListener('click', function (e) {
    const productName = e.target.parentNode.parentNode.children[0].innerText;
    const productPrice = e.target.parentNode.parentNode.children[2].value;
    const productQuantity = e.target.parentNode.parentNode.children[3].value;
    if (isNaN(productPrice) || productPrice < 1 || isNaN(productQuantity) || productQuantity < 1) {
        return alert('sorry ... provide a valid nunber!!!')
    }
    const totalPrice = productPrice * productQuantity
    displayData(productName, productPrice, productQuantity, totalPrice)
})



// JUST FOR ACCESS
const allQuantity = document.getElementById('all-quantity')
const allTotal = document.getElementById('all-total')
const subTotal = document.getElementById('sub-total');
let allQ = 0;
let sum = 0;
let count = 0;


function displayData(productName, productPrice, productQuantity, totalPrice) {
    const container = document.getElementById('table-body');
    const tr = document.createElement('tr');
    count++;
    tr.innerHTML = `
        <td id="siNo">${count}</td>
        <td>${productName}</td>
        <td>${productPrice}</td>
        <td>${productQuantity}</td>
        <td id='total-Price'>${totalPrice}</td>
    `
    sum = parseInt(totalPrice) + sum;
    subTotal.innerText = sum;
    allTotal.innerText = sum;


    allQ += parseInt(productQuantity)
    allQuantity.innerText = allQ;
    const qPQ = document.getElementById('t-product');
    qPQ.innerText = count;
    const qPQ2 = document.getElementById('t-product2');
    qPQ2.innerText = count;
    const qPQ3 = document.getElementById('t-product3');
    qPQ3.innerText = count;

    container.appendChild(tr);
}

function disableAttribute(id) {
    document.getElementById(id).setAttribute('disabled', true)
}