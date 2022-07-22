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
        image : "https://images.pexels.com/photos/847371/pexels-photo-847371.jpeg?cs=srgb&dl=pexels-frans-van-heerden-847371.jpg&fm=jpg",
        price : 755
    },
    {
        id : 6,
        name : "Nk shoes bt06",
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

}

let removeItem = (id) => {
//   cart =  cart.filter(item => {
//     //item.productId != id && item.quantity == 1
//     console.log(item.productId == id);
//     return 
//   })
    cart = cart.map(item => {
        if (item.productId == id) {
            item.quantity--;
        }
            return item
    })
    renderProducts()

}


renderProducts()
