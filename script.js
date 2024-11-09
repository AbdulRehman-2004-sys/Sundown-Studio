const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

var fixed_img = document.querySelector("#fixed-image")
document.querySelector(".pro-features").addEventListener("mouseenter",()=>
{
    fixed_img.style.display = "block";
})
document.querySelector(".pro-features").addEventListener("mouseleave",()=>
{
    fixed_img.style.display = "none";
})

var elems = document.querySelectorAll(".feature")
elems.forEach((e)=>
{
    e.addEventListener("mouseenter",()=>
    {
        // alert("lol");
        var attr = e.getAttribute("data-image");
        console.log(attr);
        fixed_img.style.backgroundImage = `url(${attr})`
    })
})


var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    // spaceBetween: 70,
  });

  var gola = document.querySelector(".gola")
  document.querySelector(".swiper").addEventListener("mousemove",(dets)=>
  {
    gola.style.left = dets.x-60 + "px";
    gola.style.top = dets.y-400 + "px";
    gola.style.display = "block";
  })
  document.querySelector(".swiper").addEventListener("mouseleave",(dets)=>
  {
    gola.style.display = "none";
  })



  var h1s = document.querySelectorAll(".btn-group h1")
  var bc_img = document.querySelector(".right-cont-swip")
  var paragraph = document.querySelector(".paragraph")

h1s.forEach((e)=>
{
    e.addEventListener("click",()=>
    {
        var att = e.getAttribute("data-imge");
        var p = e.getAttribute("data-para");
        bc_img.style.backgroundImage = `url(${att})`
        paragraph.innerHTML = p;
    })
})


var loader = document.querySelector("#loader")
setTimeout(()=>
{
    loader.style.top = "-100%";
},4000)

