
// Tickets range script
const container=document.querySelectorAll(".range-slider");

for(let i=0; i<container.length;i++){
    const slider=container[i].querySelector(".slider");
    const thumb=container[i].querySelector(".slider-thumb");
    const tooltip=container[i].querySelector(".tooltip");
    const progress=container[i].querySelector(".progress");

function customSlider(){
    const maxVal=slider.getAttribute("max")
    const val=(slider.value/maxVal)*100+"%";
    tooltip.innerHTML=slider.value;
    progress.style.width=val;
    thumb.style.left=val;
}

customSlider();
slider.addEventListener("input",()=>{
    customSlider();
});

}

//MENU BAR JQUERY

$(document).ready(function(){
    $('.menu-btn').click(function(){
        $('.profile').toggleClass("active")
        $('.menu-btn i').toggleClass("active")
    });
})

// RANGE CIRCLE Script

// const numb=document.querySelector(".numb");
// let counter=0
// setInterval(()=>{
//     if(counter == 7){
//         clearInterval();
//     }else{
//         counter+=1;
//         numb.textContent="0"+counter
//     }
// },800)
