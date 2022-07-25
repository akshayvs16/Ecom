let products = [
    {
        id:1,
       name: "NK shoes bt01",
       image :"https://images.pexels.com/photos/1670766/pexels-photo-1670766.jpeg?cs=srgb&dl=pexels-mnz-1670766.jpg&fm=jpg",
       price : 675
    },
    {
        id : 2,
        name : "NK shoes bt02",
        image : "https://images.pexels.com/photos/5669075/pexels-photo-5669075.jpeg?cs=srgb&dl=pexels-sohel-patel-5669075.jpg&fm=jpg",
        price : 625
    },
    {
        id : 3,
        name : "Nk shoes bt03",
        image : "https://images.pexels.com/photos/4061395/pexels-photo-4061395.jpeg?cs=srgb&dl=pexels-erik-mclean-4061395.jpg&fm=jpg",
        price : 688
    },
    {
        id : 4,
        name : "Nk shoes bt04"  ,
        image : "https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?cs=srgb&dl=pexels-jd-danny-2385477.jpg&fm=jpg",
        price : 786
    },
    {
        id : 5,
        name : "Nk shoes bt05",
        image : "https://images.pexels.com/photos/4271576/pexels-photo-4271576.jpeg?cs=srgb&dl=pexels-alleksana-4271576.jpg&fm=jpg",
        price : 755
    },
  

    {
        id : 6,
        name : "Nk shoes bt06",
        image : "https://images.pexels.com/photos/6748245/pexels-photo-6748245.jpeg?cs=srgb&dl=pexels-hipkicks-6748245.jpg&fm=jpg",
        price : 799
    },
    {
      id : 7,
     name: "NK shoes bt07",
     image :"https://images.pexels.com/photos/1670766/pexels-photo-1670766.jpeg?cs=srgb&dl=pexels-mnz-1670766.jpg&fm=jpg",
     price : 675
  },
  {
      id : 8,
      name : "NK shoes bt08",
      image : "https://images.pexels.com/photos/5669075/pexels-photo-5669075.jpeg?cs=srgb&dl=pexels-sohel-patel-5669075.jpg&fm=jpg",
      price : 625
  },
  {
      id : 9,
      name : "Nk shoes bt09",
      image : "https://images.pexels.com/photos/4061395/pexels-photo-4061395.jpeg?cs=srgb&dl=pexels-erik-mclean-4061395.jpg&fm=jpg",
      price : 688
  },
    {
      id : 10,
      name : "Nk shoes bt10"  ,
      image : "https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?cs=srgb&dl=pexels-jd-danny-2385477.jpg&fm=jpg",
      price : 786
  },
  {
      id : 11,
      name : "Nk shoes bt11",
      image : "https://images.pexels.com/photos/4271576/pexels-photo-4271576.jpeg?cs=srgb&dl=pexels-alleksana-4271576.jpg&fm=jpg",
      price : 755
  },
  {
      id : 12,
      name : "Nk shoes bt12",
      image : "https://images.pexels.com/photos/6748245/pexels-photo-6748245.jpeg?cs=srgb&dl=pexels-hipkicks-6748245.jpg&fm=jpg",
      price : 799
  }

]

let cart =[
    // {
    //     productId : 1,
    //     quantity : 3

    // }

]


let productListingTag = document.querySelector('#products .row')


let renderProducts = () => {
    
    productListingTag.innerHTML = ""
    products.forEach(product => {
       let  cartBtn = `<a  class="btn btn-primary" onclick="handleAddToCart(${product.id})">Add to Cart</a>`
      cart.forEach(item => {
        if(item.productId == product.id){
            cartBtn = `<a  class="btn btn-primary" onclick="removeItem(${product.id})">-</a> ${item.quantity} <a  class="btn btn-primary" onclick="addMoreItem(${product.id})">+</a>`
        }
      })

      

        productListingTag.innerHTML += `<div class="col-md-4 mb-3">
        <div class="card">
          <img class="card-img-top" src="${product.image}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">₹ ${product.price}</p>
           ${cartBtn}
         
          </div>
        </div>
    </div>`
    })
}

let handleAddToCart = (id) => {
console.log('product id', id);
cart.push({
    productId : id,
    quantity : 1
})
renderProducts()

}


let addMoreItem = (id) => {
    cart = cart.map(item => {
        if (item.productId == id) {
            item.quantity++;
        }
            return item
    })
    renderProducts()
    renderCart()

}

let removeItem = (id) => {
//   cart =  cart.filter(item => {
//     //item.productId != id && item.quantity == 1
//     console.log(item.productId == id);
//     return 
//   })
    cart.forEach((item, index) => {
        if (item.productId == id && item.quantity > 1) {
            cart[index].quantity --;
        }else if (item.productId == id && item.quantity == 1) {
            cart =cart.filter(item => item.productId != id)
        }
            return item
    })
    renderProducts()
    renderCart()
}
let cartBodyTag = document.querySelector('#cartItems .modal-body')
let mainBtnTag = document.querySelector('#mainBtn')

let renderCart =() =>{
     cartBodyTag.innerHTML = ""
     
     let cartTotal = 0
       cart.forEach(item => {
        let product = products.filter(prod => prod.id === item.productId)
        cartTotal += product[0].price * item.quantity

         cartBodyTag.innerHTML += `<div class="card mb-3">
         <div class="row g-0">
           <div class="col-md-4">
             <img src="${product[0].image}" class="img-fluid rounded-start" alt="...">
           </div>
           <div class="col-md-8">
             <div class="card-body">
               <h5 class="card-title">${product[0].name}</h5>
               <p class="card-text">₹ ${product[0].price} x ${item.quantity}</p>
               <a  class="btn btn-primary" onclick="removeItem(${product[0].id})">-</a> ${item.quantity} <a  class="btn btn-primary" onclick="addMoreItem(${product[0].id})">+</a>
             </div>
           </div>
         </div>
       </div>` 
       })

       document.querySelector('#cartTotal').innerHTML = "Grand Total ₹"+cartTotal
     mainBtnTag.innerHTML = `  <button type="button" class="btn btn-primary" onclick=" handleCheckOut()">Buy Now</button>`
}



let handleCheckOut = () => {
    cartBodyTag.innerHTML = `<div class="mb-3">
    <label for="fullNameInput" class="form-label">Full Name</label>
    <input type="text" class="form-control" id="fullNameInput" placeholder="Full name">
  </div>
    <div class="mb-3">
      <label for="emailInput" class="form-label">Email address</label>
      <input type="email" class="form-control" id="emailInput" placeholder="name@example.com">
    
  </div>`
  mainBtnTag.innerHTML = `<button type="button" class="btn btn-primary" onclick = "handleOrder()" >Order</button>`
}

let handleOrder = () =>{
   let fullName = document.querySelector('#fullNameInput').value
   let email = document.querySelector('#emailInput').value

   cart = []

    cartBodyTag.innerHTML = ` <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
    <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
    </symbol>
    <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
    </symbol>
    <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
      <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </symbol>
  </svg>
  
    <div class="alert alert-success d-flex align-items-center" role="alert">
    <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
    <div>
      <h5>Order Placed !!!</h5>
      <p>Thank you <strong>${fullName}</strong>, Your item will be deliver soon ! <br>
      you will get the updates to <strong> ${email} </strong>regarding the order placed</p>
    </div>
  </div> `
  document.querySelector('#cartTotal').innerHTML = ""
  mainBtnTag.innerHTML = ""
  renderProducts()
}

renderProducts()
