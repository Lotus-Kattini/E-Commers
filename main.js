// let cartlistss=document.getElementById('cartList');
// products page
let products=[
    {
        id:'1',
        name:"Modern Bed",
        price:150,
        image:'images/Fpro1.jpg',
        quantity:1,
        desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiaillum porro praesentium eveniet, eaque minima',
        Avaliable:'in Stock',
        Brand:'IKEA',
    },
    {
        id:'2',
        name:"High-Back Bench",
        price:399,
        image:'images/Fpro2.jpg',
        quantity:1,
        desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiaillum porro praesentium eveniet, eaque minima',
        Avaliable:'in Stock',
        Brand:'Liddy',
    },
    {
        id:'3',
        name:"Modern Bookshelf",
        price:345,
        image:'images/Fpro3.png',
        quantity:1,
        desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiaillum porro praesentium eveniet, eaque minima',
        Avaliable:'out of Stock',
        Brand:'Carresa',
    },
    {
        id:'4',
        name:"Leather Chair",
        price:499,
        image:'images/product4.webp',
        quantity:1,
        desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiaillum porro praesentium eveniet, eaque minima',
        Avaliable:'in Stock',
        Brand:'Liddy',

    },
    {
        id:'5',
        name:"Entertenement Center",
        price:615,
        image:'images/product6.jpg',
        quantity:1,
        desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiaillum porro praesentium eveniet, eaque minima',
        Avaliable:'in Stock',
        Brand:'Liddy',

    },
    {
        id:'6',
        name:"White Leather Chair",
        price:599,
        image:'images/product9.jpg',
        quantity:1,
        desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiaillum porro praesentium eveniet, eaque minima',
        Avaliable:'out of Stock',
    },
    {
        id:'7',
        name:"Wooden Desk",
        price:499,
        image:'images/product10.webp',
        quantity:1,
        desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiaillum porro praesentium eveniet, eaque minima',
        Avaliable:'out of Stock',
        Brand:'Carresa',

    },
    {
        id:'8',
        name:"Wooden Chairs and Desk",
        price:1499,
        image:'images/product12.webp',
        quantity:1,
        desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiaillum porro praesentium eveniet, eaque minima',
        Avaliable:'in Stock',
        Brand:'Carresa',

    },
    {
        id:'9',
        name:"Black Sofa",
        price:450,
        image:'images/product13.jpg',
        quantity:1,
        desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiaillum porro praesentium eveniet, eaque minima',
        Avaliable:'in Stock',
        Brand:'IKEA',
    },
    {
        id:'10',
        name:"Leather Sofa",
        price:950,
        image:'images/product14.jpg',
        quantity:1,
        desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiaillum porro praesentium eveniet, eaque minima',
        Avaliable:'in Stock',
        Brand:'IKEA',
    },
    {
        id:'11',
        name:"ALmani Sectional",
        price:1199,
        image:'images/product15.jpg',
        quantity:1,
        desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiaillum porro praesentium eveniet, eaque minima',
        Avaliable:'out of Stock',
        Brand:'IKEA',
    },
    {
        id:'12',
        name:"Sofa Set",
        price:750,
        image:'images/product16.jpg',
        quantity:1,
        desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiaillum porro praesentium eveniet, eaque minima',
        Avaliable:'out of Stock',
        Brand:'IKEA',
    },
    {
        id:'13',
        name:"Wooden White Table",
        price:1500,
        image:'images/product18.jpg',
        quantity:1,
        desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiaillum porro praesentium eveniet, eaque minima',
        Avaliable:'out of Stock',
        Brand:'Liddy',

    },
    {
        id:'14',
        name:"Wooden Double Bed",
        price:999,
        image:'images/product19.jpg',
        quantity:1,
        desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiaillum porro praesentium eveniet, eaque minima',
        Avaliable:'in Stock',
        Brand:'Liddy',

    },
    {
        id:'15',
        name:"DB Table",
        price:559,
        image:'images/product20.jpeg',
        quantity:1,
        desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiaillum porro praesentium eveniet, eaque minima',
        Avaliable:'in Stock',
        Brand:'Carresa',

    },
    {
        id:'16',
        name:"bed",
        price:150,
        image:'images/Fpro1.jpg',
        quantity:1,
        desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiaillum porro praesentium eveniet, eaque minima',
        Avaliable:'out of Stock',
        Brand:'Carresa',

    },
]
let productsPrices=[
    {
        id:'1',
        price:150,
    },
    {
        id:'2',
        price:399,

    },
    {
        id:'3',
        price:345,
    },
    {
        id:'4',
        price:499,
    },
    {
        id:'5',
        price:615,
    },
    {
        id:'6',
        price:599,
    },
    {
        id:'7',
        price:499,
    },
    {
        id:'8',
        price:1499,
    },
    {
        id:'9',
        price:450,
    },
    {
        id:'10',
        price:950,
    },
    {
        id:'11',
        price:1199,
    },
    {
        id:'12',
        price:750,
    },
    {
        id:'13',
        price:1500,
    },
    {
        id:'14',
        price:999,
    },
    {
        id:'15',
        price:559,

    },
    {
        id:'16',
        price:150,
    },
]

let cartlists=[];

let allproducts=document.querySelector('.allproducts')
let prospan=document.querySelector('.prospan');
let eachproALL=document.querySelector('.eachproALL')


function initApp(){
    products.forEach((value,key)=>{
        let newDiv=document.createElement('div');
        newDiv.classList.add('featuredAllProduct');
        newDiv.innerHTML=`        
        <div class="imgPro">
                    <a href="#"><img src="${value.image}" alt="" /></a>
                </div>
                
                <div class="ProtextAll">
                  <button class='nothing' onclick='showproduct(${key})' >${value.name}</button>
                  <button class='nothing' onclick='showproduct(${key})'>${value.price}$</button>
                </div>
                <div class='btndiv'>
                <button class="addToCartbtn" onclick='addToCart(${key})' >Add to Cart</button>
                <a href="#" class='details' onclick='showproduct(${key})'>View Details</a>

                </div>
        `
        if(allproducts){

            allproducts.appendChild(newDiv);
            prospan.innerHTML=value.id;
        }
        eachproALL.innerHTML=''
    })
}
initApp();



let quantitynum=document.querySelector('.quantity');
// let conunter=0;
function addToCart(key){
    if(cartlists[key]==null){
        cartlists[key]=products[key];
        // cartlists[key].quantity=1;
        console.log(quantitynum.textContent++)
        let conter= quantitynum.textContent++;
        console.log(conter)
        quantitynum.innerHTML=conter;
    }
    Reloadcart();
    // changeMinQuantity(conunter);
}

// ==============cart================
let cartlist=document.querySelector('.allcartcontent');
let cartcontainerH2=document.querySelector('.cartcontainerH2');
let buynowbtn=document.querySelector('.BuyNow')
let totalPrice=document.querySelector('.totalprice');
function Reloadcart(){
    cartlist.innerHTML='';
    let count=0;
    let total=0;
    cartlists.forEach((value,key)=>{
        count=count + value.quantity;
        total= total+value.price;
        if(value !=null){
             let newDivv=document.createElement('div');
             newDivv.classList.add('eachcartitem')
             newDivv.innerHTML=`
                        <div class="imgProtest">
                            <img src="${value.image}" alt="" />
                        </div>
                    <div class="ProtextAlltest">
                        <p>${value.name}</p>
                        <p>${value.price}$</p>
                    </div>
                    <div class="cartbuttons">
                    <button  onclick='changeQuantity(${key},${value.quantity +1})'>+</button>
                    <p>${value.quantity}</p>
                        <button onclick='changeMinQuantity(${key},${value.quantity -1})'>-</button>
                    </div>
             `
            cartlist.appendChild(newDivv);
            totalPrice.innerText=total;
            cartcontainerH2.style.display="none";
            buynowbtn.style.display="block";
            // cartlist=localStorage.getItem(cartlists[key])
            // cartlist.value=localStorage.setItem(cartlists[key],newDivv);
            window.localStorage.setItem('product',JSON.stringify(newDivv.innerHTML))
            console.log(window.localStorage.getItem('product'))
            JSON.parse(localStorage.getItem('product'))
            }
    })
    
}


function changeQuantity(key,quantity){
    cartlists[key].quantity=quantity;
    cartlists[key].price+= productsPrices[key].price;

    Reloadcart();
}

function changeMinQuantity(key,quantity){
    if(quantity==0){
        delete cartlists[key];
        totalPrice.innerText=null;
        cartcontainerH2.style.display="block";
        buynowbtn.style.display="none";
        quantitynum.innerHTML=quantitynum.textContent--;
        console.log(quantitynum.textContent--)
        
    }
    else{
        cartlists[key].quantity=quantity;
        cartlists[key].price-=productsPrices[key].price;
        
    }
    Reloadcart();
}

// each product page

// let detailesbtn=document.querySelector('.details');
let eachproduct=[];

function showproduct(key){
    eachproduct[key]=products[key];
    initEachPro();
}

let profound=document.querySelector('.profound')

function initEachPro(){
    eachproALL.innerHTML='';
    eachproduct.forEach((value,key)=>{
        if(value!=null){
            let newDivvv=document.createElement('div');
            newDivvv.classList.add('eachproductcontainer');
            newDivvv.innerHTML=`
            <div class="eachproIMG">
            <img src=${value.image} alt='' />
            </div>
            <div class="eachprodescription">
            <h1>${value.name}</h1>
              <h2>${value.price}$</h2>
              <p>${value.desc}</p>
              <div class="eahcprodetails">
                <h2>Avaliable:${value.Avaliable}</h2>
                <h2>Brand:${value.Brand}</h2>
              </div>
              <div class="proline"></div>
              <button  onclick='addToCart(${key})'>Add to cart</button>
              <button onclick='initApp()' onclick='deletself()'>Back To Products</button>
              `

              allproducts.innerHTML='';
              prospan.innerHTML='';
              profound.innerHTML='';

              eachproALL.appendChild(newDivvv);
              console.log(eachproALL)
        }

    })

}


// =========================================================

// let opencartbtn=document.querySelector('.opencartbtn');
// let closebtncart=document.querySelector('.closebtncart');
// let body=document.querySelector('body')

// opencartbtn.addEventListener('click',()=>{
//     body.classList.add('active')
// })

// closebtncart.addEventListener('click',()=>{
//     body.classList.remove('active')
// })