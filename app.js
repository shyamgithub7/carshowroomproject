


// menu hide and show in response 550px

 $(document).ready(function(){
 
  $("#menu-btn").click(function(){
    $(".x").show()
    $("#menu-btn").hide()
   
    $(".navbar").show()
    $('.logo').hide()

    $(".x").click(function(){
      $("#menu-btn").show()
    $(".x").hide()
    $(".navbar").hide()
    $('.logo').show()
   
  
     })
 
  })
})





//  menu-btn res ends





// login -btn starts


document.querySelector("#login-btn").onclick= () =>{
    document.querySelector(".login-form-container").classList.add("active");
}
document.querySelector("#close-login-form").onclick=() =>{
    document.querySelector(".login-form-container").classList.remove("active");
}


$("#login-btn").click(function(){
 
  $(".login-form-container").show()

  })
$("#close-login-form").click(function(){
  $(".login-form-container").hide()
})     


// login btn ends




// swiper section


// vehicle swiper starts

var swiper = new Swiper(".vehicles-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true,
    grabcursor:true,
    autoplay:{
        delay:5000,
        // disableOnInteraction:false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
       
    },
      768: {
        slidesPerView: 2,
    
    },
     991: {
        slidesPerView: 3,
       
    },
    },
  });


// vehicle swiper ends



// featured swiper starts

  var swiper = new Swiper(".featured-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true,
    grabcursor:true,
    autoplay:{
        delay:5000,
       
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
       
    },
      768: {
        slidesPerView: 2,
    
    },
     1040: {
        slidesPerView: 3,
       
    },
    },
  });

  // featured swiper ends 




  // reviews swiper starts

    var swiper = new Swiper(".reviews-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true,
    grabcursor:true,
    autoplay:{
        delay:5000,
       
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
       
    },
      768: {
        slidesPerView: 2,
    
    },
     1040: {
        slidesPerView: 3,
       
    },
    },
  });


  // reviews swiper ends





 



// carosel starts

// var imgs = ["csh3.png","csh4.png","csh5.png"]
// a=0
// document.getElementById('im').src = imgs[a]


// setInterval(next,5000)

// function next(){
//     a+=1
//     if(a>imgs.length-1){
//         a=0
//     }
//     document.getElementById('im').src = imgs[a]
// }

// function pre(){
//     a-=1
//     if(a<0){
//         a= imgs.length-1
//     }
//     document.getElementById('im').src = imgs[a]
// }







