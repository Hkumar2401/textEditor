// onloading the page, the default alignment will be set to left-align
window.onload = () => {

    document.querySelector("#displaybox").style.textAlign = "left";
    document.querySelector("#left-align-btn").classList.toggle("active");
    
};


// To update the text in the formatted textbar with every keypress
document.querySelector("#inputbox").addEventListener("input", function () {

    let enteredText = document.querySelector("#inputbox").value;

    let displayText = document.querySelector("#displaybox");
    displayText.textContent = enteredText;


});

// To add bold class on click
document.querySelector("#bold-btn").addEventListener("click", function () {

    document.querySelector("#displaybox").classList.toggle("bold");
    document.querySelector("#bold-btn").classList.toggle("active");

});

// To add italic class on click
document.querySelector("#italic-btn").addEventListener("click", function () {

    document.querySelector("#displaybox").classList.toggle("italic");
    document.querySelector("#italic-btn").classList.toggle("active");

});

// To add underline class on click
document.querySelector("#underline-btn").addEventListener("click", function () {

    document.querySelector("#displaybox").classList.toggle("underline");
    document.querySelector("#underline-btn").classList.toggle("active");

});



// To make text left-align
document.querySelector("#left-align-btn").addEventListener("click", function () {

    document.querySelector("#displaybox").style.textAlign = "left";
    document.querySelector("#left-align-btn").classList.toggle("active");

    document.querySelector("#center-align-btn").classList.remove("active");
    document.querySelector("#right-align-btn").classList.remove("active");

});

// To make text center-align
document.querySelector("#center-align-btn").addEventListener("click", function () {

    document.querySelector("#displaybox").style.textAlign = "center";
    document.querySelector("#center-align-btn").classList.toggle("active");

    document.querySelector("#left-align-btn").classList.remove("active");
    document.querySelector("#right-align-btn").classList.remove("active");

});

// To make text right-align
document.querySelector("#right-align-btn").addEventListener("click", function () {

    document.querySelector("#displaybox").style.textAlign = "right";
    document.querySelector("#right-align-btn").classList.toggle("active");
    
    document.querySelector("#left-align-btn").classList.remove("active");
    document.querySelector("#center-align-btn").classList.remove("active");
    
});


// To update fontsize
let i=0;
while(i>=0){
    document.querySelectorAll(".size")[i].addEventListener("click", function(){
        let value = this.textContent;
        document.querySelector("#displaybox").style.fontSize = value + "px";
        document.querySelector("#drop-down").textContent = "Font-Size : " + value + "px";
    });
    i++;
}
