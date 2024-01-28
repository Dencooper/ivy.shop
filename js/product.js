const increase = document.querySelectorAll(".increase");
const decrease = document.querySelectorAll(".decrease");
var quanlityInput = document.querySelector("#quantity-input");
var shopItem = document.getElementsByClassName("product-content-right");
var imageSrc = document.querySelector(".bigImage").src;
var title = document.querySelector(".title").textContent;
var price = document.querySelector(".price").textContent;
var dicount = document.querySelector(".discount").textContent;
var color
var size
var quanlity

decrease.forEach(function(decreasing, index){
    decreasing.addEventListener("click", function(){
        if (quanlityInput.value == 0) {
            quanlityInput.value = 0
        }
        else{
            quanlityInput.value--;
        }
        changeQuatity()
    })
});
increase.forEach(function(increasing, index){
    increasing.addEventListener("click", function(){
        quanlityInput.value++;
        changeQuatity()
    })
});


const buttonColors = document.querySelectorAll(".product-content-right-color li");
color = document.querySelector(".product-content-right-color li.active").textContent;
document.querySelector(".color").textContent = color;
buttonColors.forEach(function(buttonColor, index){
    buttonColor.addEventListener("click", function(){
        document.querySelector(".product-content-right-color li.active").classList.remove("active");
        buttonColor.classList.add("active");
        color = buttonColor.children[0].textContent;
        document.querySelector(".color").textContent = color;
    })
})

function changeQuatity(){
    quanlity = quanlityInput.value;
}

const buttonSizes = document.querySelectorAll(".product-content-right-size .button-size");
buttonSizes.forEach(function(buttonSize, index){
    buttonSize.addEventListener("click", function(){
        var count = document.querySelectorAll(".product-content-right-size .button-size.active").length;
        if(count == 1){
            document.querySelector(".product-content-right-size .button-size.active").classList.remove("active");
            buttonSize.classList.add("active");
        } else {
            buttonSize.classList.add("active");
        }
    })
})


const tittleItems = document.querySelectorAll(".product-content-right-bottom-main-title-item");
const mainContents = document.querySelectorAll(".product-content-right-bottom-main-content");
tittleItems.forEach(function(tittleItem, index){
    tittleItems[index].addEventListener("click", function(){
        document.querySelector(".product-content-right-bottom-main-title-item.active").classList.remove("active");
        tittleItems[index].classList.add("active");
        document.querySelector(".product-content-right-bottom-main-content.active").classList.remove("active");
        mainContents[index].classList.add("active");
    })
})

function showContent() {
    const showContent = document.querySelector(".product-content-right-bottom-main-content.active");
    if (showContent.style.height == "7em") {
        showContent.style.height = "auto";
    } else {
        showContent.style.height = "7em";
    }
    document.querySelector(".down").style.display = "none";
    document.querySelector(".up").style.display = "block";
}
function hiddenContent() {
    const showContent = document.querySelector(".product-content-right-bottom-main-content.active");
    if (showContent.style.height == "7em") {
        showContent.style.height = "auto";
    } else {
        showContent.style.height = "7em";
    }
    document.querySelector(".down").style.display = "block";
    document.querySelector(".up").style.display = "none";
}


