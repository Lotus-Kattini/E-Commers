// let cartlistss=document.getElementById('cartList');
// console.log(cartlistss)



// let products=[
//     {
//         id:'1',
//         name:"Modern Bed",
//         price:150,
//         image:'images/Fpro1.jpg',
//     },
//     {
//         id:'2',
//         name:"High-Back Bench",
//         price:399,
//         image:'images/Fpro2.jpg',
//     },
//     {
//         id:'3',
//         name:"Modern Bookshelf",
//         price:345,
//         image:'images/Fpro3.png',
//     },
//     {
//         id:'4',
//         name:"Leather Chair",
//         price:499,
//         image:'images/product4.webp',
//     },
//     {
//         id:'5',
//         name:"Entertenement Center",
//         price:615,
//         image:'images/product6.jpg',
//     },
//     {
//         id:'6',
//         name:"White Leather Chair",
//         price:599,
//         image:'images/product9.jpg',
//     },
//     {
//         id:'7',
//         name:"Wooden Desk",
//         price:499,
//         image:'images/product10.webp',
//     },
//     {
//         id:'8',
//         name:"Wooden Chairs and Desk",
//         price:1499,
//         image:'images/product12.webp',
//     },
//     {
//         id:'9',
//         name:"Black Sofa",
//         price:450,
//         image:'images/product13.jpg',
//     },
//     {
//         id:'10',
//         name:"Leather Sofa",
//         price:950,
//         image:'images/product14.jpg',
//     },
//     {
//         id:'11',
//         name:"ALmani Sectional",
//         price:1199,
//         image:'images/product15.jpg',
//     },
//     {
//         id:'12',
//         name:"Sofa Set",
//         price:750,
//         image:'images/product16.jpg',
//     },
//     {
//         id:'13',
//         name:"Wooden White Table",
//         price:1500,
//         image:'images/product18.jpg',
//     },
//     {
//         id:'14',
//         name:"Wooden Double Bed",
//         price:999,
//         image:'images/product19.jpg',
//     },
//     {
//         id:'15',
//         name:"DB Table",
//         price:559,
//         image:'images/product20.jpeg',
//     },
//     {
//         id:'16',
//         name:"bed",
//         price:150,
//         image:'images/Fpro1.jpg',
//     },
// ]

// let cartlists=[];

// let allproducts=document.querySelector('.allproducts')
// let prospan=document.querySelector('.prospan');


// function initApp(){
//     products.forEach((value,key)=>{
//         let newDiv=document.createElement('div');
//         newDiv.classList.add('featuredAllProduct');
//         newDiv.innerHTML=`
//         <div class="imgPro">
//                     <a href="#"><img src="${value.image}" alt="" /></a>
//                 </div>
//                 <div class="ProtextAll">
//                   <a href="#">${value.name}</a>
//                   <a href="#">${value.price}$</a>
//                 </div>
//                 <button class="addToCartbtn" onclick='addToCart(${key})' >Add to Cart</button>
//         `
//         if(allproducts){

//             allproducts.appendChild(newDiv);
//             prospan.innerHTML=value.id;
//         }
//     })
// }
// initApp();

// let quantity=document.querySelector('.quantity')
// let conunter=0;
// function addToCart(key){
//     if(cartlists[key]==null){
//         cartlists[key]=products[key];
//         cartlists[key].quantity=1;
//     }
//     Reloadcart();
// }

// // ==============================
// let cartlist=document.getElementById('cartList');
// function Reloadcart(){
//     // cartlist.innerHTML='0';
//     let count=0;
//     let totalPrice=0;
//     cartlists.forEach((value,key)=>{
//         count=count + value.quantity;
//         totalPrice= totalPrice+value.price;
//         if(value !=null){
//             let newDivv=document.createElement('li');
//             newDivv.innerHTML=`
//             <div >
//             <img src="${value.image}" alt="" />
//             </div>
//             <div>
//             <h1>hhhhudjeijmwsoijf</h1>
//           <div>${value.name}</div>
//           <div>${value.price}$</div>
//           <button onclick='changeQuantity(${key},${count+1}')>+</button>
//           </div>
//         `
//         console.log('pppppppppp')
//         console.log(cartlist)


//         cartlist.appendChild(newDivv);
//         }
//     })
// }
