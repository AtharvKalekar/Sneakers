const wrapper = document.querySelector(".slider-wrapper")
const menuItem = document.querySelectorAll(".menu-item")

const product=[
    {
        id:1,
        title:"Air Force",
        Price:29999,
        colors:[
            {
                code:"black",
                img:"./images/air.png"
            },
            {
            code:"darkblue",
            img:"./images/air2.png"
            },
        ],
    },
    {
        id:2,
        title:"Air Jordan",
        Price:39999,
        colors:[
            {
                code:"lightgray",
                img:"./images/jordan.png"
            },
            {
            code:"darkblue",
            img:"./images/jordan2.png"
            },
        ],
    },
    {
        id:3,
        title:"Blazer",
        Price:19999,
        colors:[
            {
                code:"lightgray",
                img:"./images/blazer.png"
            },
            {
            code:"green",
            img:"./images/blazer2.png"
            },
        ],
    },
    {
        id:4,
        title:"Crater",
        Price:25999,
        colors:[
            {
                code:"black",
                img:"./images/crater.png"
            },
            {
            code:"lightgray",
            img:"./images/crater2.png"
            },
        ],
    },
    {
        id:5,
        title:"Hippie",
        Price:9999,
        colors:[
            {
                code:"gray",
                img:"./images/hippie.png"
            },
            {
            code:"black",
            img:"./images/hippie2.png"
            },
        ],
    },
];


let choosenProduct = product[0]

const currentProductImg = document.querySelector(".product-image")
const currentProductTile = document.querySelector(".product-title")
const currentProductPrice = document.querySelector(".product-price")
const currentProductColor = document.querySelectorAll(".color")
const currentProductSizes = document.querySelectorAll(".size")

menuItem.forEach((item,index)=>{
    item.addEventListener('click', ()=>{
        //change current slide 
        wrapper.style.transform =`translateX(${-100*index}vw)`;

        //change the choosen product
        choosenProduct = product[index]

        // //CHANGE TEXT OF CURRENT PRODUCT
        currentProductTile.textContent= choosenProduct.title
        currentProductPrice.textContent="RS: " +choosenProduct.Price
        currentProductImg.src=choosenProduct.colors[0].img

        //assign new colors
        currentProductColor.forEach((color,index)=>{
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
    });
});


//changing shoes color
currentProductColor.forEach((color,index)=>{
    color.addEventListener("click",()=>{
        currentProductImg.src=choosenProduct.colors[index].img
    });
});


currentProductSizes.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currentProductSizes.forEach((size)=>{
            size.style.backgroundColor="white";
            size.style.color="black";
        });
        size.style.backgroundColor="black";
        size.style.color="white";
    });
});

const productButton =document.querySelector(".product-button");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");


productButton.addEventListener("click",()=>{
    payment.style.display="flex"
})
close.addEventListener("click",()=>{
    payment.style.display="none"
})
