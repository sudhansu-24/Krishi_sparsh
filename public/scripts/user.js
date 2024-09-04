
//const axios = require('axios');
import axios from 'axios';

let items = document.querySelector('.cartItems')
items.addEventListener('click',(ev)=>{
    if( ev.target.classList.contains('decrease')){
        let id = ev.target.parentElement.nextElementSibling.getAttribute('id')
        axios.get(`/user/cart/decrease?id=${id}`).then(({data})=>{
            let {cart,totalPrice,cartQuantity} = data 
            document.querySelector('totalPrice').innerText = totalPrice
            items.innerHTML=""
            cart.forEach(p => {
                let li = document.createElement('li')
                li.innerHTML=`
                <img src=${p.id.imageUrl}height="150px" width="150px" ><br>
            Name: <span>${p.id.name}</span><br>
            Description: <span>${p.id.desccription}</span><br>
            Price: <span>${p.id.price}</span><br>
                `
                li.innerHTML += `<div class="quantity">
                                    <button class="decreaseQuantityBtn">-</button> Quantity: ${p.quantity} <button
                                         class="increaseQuantityBtn">+</button>
                                </div>
                                <div style="display: none;" id="${p.id._id}"></div>
            `
                cartItems.appendChild(li);
                document.querySelector('.cartQuantity').innerText = cartQuantity;
            });
        }).catch(err => {
            alert("Not able to update cart");
        })
    }
    else if(ev.target.classList.contains('increaseQuantityBtn')){
        let id = ev.target.parentElement.nextElementSibling.getAttribute('id');
        // console.log(id);
        axios.get(`/user/cart/increase?id=${id}`).then(({ data }) => {
            // console.log(data);
            let { cart, totalPrice, cartQuantity } = data;
            document.querySelector('.totalPrice').innerText = totalPrice;
            cartItems.innerHTML = "";
            // console.log(cart)
            cart.forEach(p => {
                // totalPrice += parseInt(p.id.price) * parseInt(p.quantity);
                let li = document.createElement('li');
                li.innerHTML = `
                <img height="150px" src=${p.id.imageUrl}></img><br>
                Name: <span>${p.id.name}</span> <br>
                Description: <span>${p.id.description}</span><br>
                Price: <span>${p.id.price}</span><br>
            `
                // if (p.id.reviews.length > 0) {
                //     let str = ""
                //     p.id.reviews.forEach(item => {
                //         str += ${item.details}, ${items.rating}
                //     });
                // }
                // li.innerText += str;
                li.innerHTML += `<div class="quantity">
                                    <button class="decreaseQuantityBtn">-</button> Quantity: ${p.quantity} <button
                                         class="increaseQuantityBtn">+</button>
                                </div>
                                <div style="display: none;" id="${p.id._id}"></div>
            `
                cartItems.appendChild(li);

                document.querySelector('.cartQuantity').innerText = cartQuantity;
            });
        }).catch(err => {
            alert("Not able to update cart");
        })
    }
})

/////////////////////// CODE FOR ADD TO CART ENDS ////////////////////////////////////////////////////////////////////////////////////////////////////












                
            


   