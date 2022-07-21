let products = [
    {
       name: "NK shoes bt01",
       image :"https://images.pexels.com/photos/1670766/pexels-photo-1670766.jpeg?cs=srgb&dl=pexels-mnz-1670766.jpg&fm=jpg",
       price : 675
    },
    {
        name : "NK shoes bt02",
        image : "https://images.pexels.com/photos/5669075/pexels-photo-5669075.jpeg?cs=srgb&dl=pexels-sohel-patel-5669075.jpg&fm=jpg",
        price : 625
    },
    {
        name : "Nk shoes bt03",
        image : "https://images.pexels.com/photos/4061395/pexels-photo-4061395.jpeg?cs=srgb&dl=pexels-erik-mclean-4061395.jpg&fm=jpg",
        price : 688
    },
    {
        name : "Nk shoes bt04"  ,
        image : "https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?cs=srgb&dl=pexels-jd-danny-2385477.jpg&fm=jpg",
        price : 786
    },
    {
        name : "Nk shoes bt05",
        image : "https://images.pexels.com/photos/847371/pexels-photo-847371.jpeg?cs=srgb&dl=pexels-frans-van-heerden-847371.jpg&fm=jpg",
        price : 755
    }
]

let productListingTag = document.querySelector('#products .row')
products.forEach(product =>{
    productListingTag.innerHTML += `<div class="col-md-4">
    <div class="card">
      <img class="card-img-top" src="${product.image}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${product.name}</h5>
        <p class="card-text">Rs. ${product.price}</p>
        <a href="#" class="btn btn-primary">Add to Cart</a>
      </div>
    </div>
</div>`
})