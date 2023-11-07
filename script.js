let left=document.querySelector('.left')
let right=document.querySelector('.right')
let slider=document.querySelector('.slider-list')
let img=document.querySelectorAll('img')
let nav=0
let sli=1
left.addEventListener("click", () => {
  if (sli>1) {
  
    --sli
    nav += 730;
    slider.style = `transition: .8s`;
    slider.style = `transform: translateX(${nav}px)`;
    console.log(sli);
  } else if (sli===1 ) {
      sli = 5;
      nav += 2920 * -1;
      
    console.log(sli);
    slider.style = `transition: .8s`;
    slider.style = `transform: translateX(${nav}px)`;
  } 
});
right.addEventListener('click',()=>{
    
if(sli<img.length){
  nav += 730 * -1;
  ++sli
  slider.style = `transition: .8s`;
  slider.style = `transform: translateX(${nav}px)`;
  console.log(sli)
  console.log(nav);
}else if(sli===img.length){
    sli = 1;
    console.log(sli)
    nav= 0
    slider.style = `transition: .8s`;
    slider.style = `transform: translateX(${nav}px)`;
    
}
    
})