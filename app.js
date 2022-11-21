let Products = [
    {
        sourceImg: "./image/airpod.jpg",
        name: 'AirPods Pro',
        price: '249',
        numprice: 249,
        amount: 0
    },
    {
        sourceImg: "./image/switch.jpg",
        name: 'Nintendo Switch',
        price: '299',
        numprice: 299,
        amount: 0
    },
    {
        sourceImg: "./image/PS5.jpg",
        name: 'PS5',
        price: '499',
        numprice: 499,
        amount: 0
    },
    {
        sourceImg: "./image/Xbox.jpg",
        name: 'Xbox Series X',
        price: '499',
        numprice: 499,
        amount: 0
    },
    {
        sourceImg: "./image/iphone.jpg",
        name: 'Iphone 14 Pro Max - 1TB',
        price: '1,599',
        numprice: 1599,
        amount: 0
    },
    {
        sourceImg: "./image/samsung.jpg",
        name: 'Samsung S22 Ultra - 1TB',
        price: '1,399',
        numprice: 1399,
        amount: 0
    },
    {
        sourceImg: "./image/macbook.jpg",
        name: `MacBook Pro 14' M1 Max (64GB RAM | 4TB)`,
        price: '4,699',
        numprice: 4699,
        amount: 0
    },
    {
        sourceImg: "./image/macstudio.jpg",
        name: `2022 Mac Studio M1 Ultra (128GB RAM | 8TB)`,
        price: '6,999',
        numprice: 6999,
        amount: 0
    },
    {
        sourceImg: "./image/GTX.jpg",
        name: `Pro Gaming PC(AMD 5950X, RTX 3090, 64GB, 4TB SSD)`,
        price: '4,950',
        numprice: 4950,
        amount: 0
    }
]
function formatCash(str) {
    return str.split('').reverse().reduce((prev, next, index) => {
        return ((index % 3) ? next : (next + ',')) + prev
    })
}
function intToFloat(num, decPlaces) { return num.toFixed(decPlaces); }
function showProduct(arr){
    var divData = '';
    for(let i in arr){
        divData +=` <div class="element">
        <img src="${arr[i].sourceImg}" alt=${arr[i].name}">
        <p id="name">${arr[i].name}</p>
        <span id="price">USD ${arr[i].price}</span>
        <div class="buyAndSellContainer">
            <button  class="btn-sell format-text" id="sell${i}">Sell</button>
            <span id="amount${i}">${arr[i].amount}</span>
            <button class="btn-buy format-text" id="buy${i}">Buy</button>
        </div>
        </div>`
    }
    document.getElementById('allElements').innerHTML = divData;
}
showProduct(Products)
document.getElementById('totalMoney').innerText=`Remaining: $217,000,000,000`;
document.getElementById('percentageLeft').innerText=`You haven't spent a single dollar! start buying!`
let arrBuyBtn = document.querySelectorAll('.btn-buy');
let arrSellBtn = document.querySelectorAll('.btn-sell');
console.log(arrBuyBtn);
console.log(arrSellBtn);
let arr1 =[];
let arr2=[];
for(let i in arrBuyBtn){
    if(arrBuyBtn[i].id){
        arr1.push(arrBuyBtn[i].id);
    }
}
for(let i in arrSellBtn){
    if(arrSellBtn[i].id){
        arr2.push(arrSellBtn[i].id);
    }
}
for(let i in arr2){
    if(Products[i].amount == 0){
        document.getElementById(arr2[i]).disabled = true;
    }
}
for(let i in arr1){
    document.getElementById(arr1[i]).addEventListener('click',()=>{
        Products[i].amount += 1;
        document.getElementById(`amount${i}`).innerText = Products[i].amount;
        if(Products[i].amount > 0){
            document.getElementById(arr2[i]).disabled = false;
        }
        let totalPrice = 0;
        for(let i in Products){
            totalPrice += Products[i].amount * Products[i].numprice;
        }
        let newTotalPrice = 217000000000 - totalPrice;
        let strPrice = formatCash(newTotalPrice.toString());
        document.getElementById('totalMoney').innerText=`Remaining: $${strPrice}`;
        let percent = intToFloat((totalPrice/217000000000)*100,6);
        document.getElementById('percentageLeft').innerText=`You only spent ${percent} % of the total!`

    })
}
for(let i in arr2){
    document.getElementById(arr2[i]).addEventListener('click',()=>{
        Products[i].amount -= 1;
        document.getElementById(`amount${i}`).innerText = Products[i].amount;
        if(Products[i].amount == 0){
            document.getElementById(arr2[i]).disabled = true;
        }
        let totalPrice = 0;
        for(let i in Products){
            totalPrice += Products[i].amount * Products[i].numprice;
        }
        let newTotalPrice = 217000000000 - totalPrice;
        let strPrice = formatCash(newTotalPrice.toString());
        document.getElementById('totalMoney').innerText=`Remaining: $${strPrice}`;
        let percent = intToFloat((totalPrice/217000000000),6);
        document.getElementById('percentageLeft').innerText=`You only spent ${percent} % of the total!`
    })
}

for(let i =0; i<buyBtn.length; i++){
    sellBtn[i].addEventListener('click',()=>{
        item[i].amount += 1;
        amount[i].innerText= item[i].amount;
    })
}
// for(let i in arr1){
//     document.getElementById(arr1[i]).addEventListener('click',()=>{
//         console.log();
//     })
// }
// // for(let i in arr1){
// //     if(arr1[i]){
// //         arr2.push(arr1[i]);
// //     }
// // }
// console.log(arr1);