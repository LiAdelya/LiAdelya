let scroll = document.querySelector('.scroll')
scroll.addEventListener('click', function(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior:'smooth'
    })
})

let btn1 = document.querySelector('.btn1');
btn1.addEventListener('click', function(){
    window.scrollTo({
        top: 2000,
        left: 0,
        behavior: 'smooth'
    })
})

let menuToggle = document.querySelector('.menuToggle');
let navigation = document.querySelector('.navigation');
menuToggle.addEventListener('click', function(){
    navigation.classList.toggle('click')
})

// 2d5fd300cc037acdaf58e2388ba53fc4 
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key} 
fetch('https://api.openweathermap.org/data/2.5/weather?lat=42.52114&lon=72.25033&appid=2d5fd300cc037acdaf58e2388ba53fc4') 
    .then(function (resp){return resp.json()}) 
    .then(function (data){ 
        console.log(data); 
        // document.querySelector('.package-name').textContent = data.name; 
        document.querySelector('.price').innerHTML = Math.round(data.main.temp -273) + '&deg;'; 
        // document.querySelector('.disclaimer').textContent = data.weather[0]['description']; 
        // document.querySelector('.features li').innerHTML = <img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">; 
    }) 
    .catch(function(){ 
        //ловим ошибки 
    })

//код для плавного перехода вниз по ссылкам
// document.querySelectorAll('a[href^="#"').forEach(link => {  
//   
//         link.addEventListener('click', function(e) {  
//             e.preventDefault();  
//       
//             let href = this.getAttribute('href').substring(1);  
//       
//             const scrollTarget = document.getElementById(href);  
//       
//             const topOffset = document.querySelector('.btn').offsetHeight;  
//             // const topOffset = 0; // если не нужен отступ сверху   
//             const elementPosition = scrollTarget.getBoundingClientRect().top;  
//             const offsetPosition = elementPosition - topOffset;  
//       
//             window.scrollBy({  
//                 top: offsetPosition,    
//                 behavior: 'smooth'  
//             });  
//         });  
//     });



//второй вариант ссылок
let hideBlock = document.querySelector('.i');
hideBlock.addEventListener('click', myFunc);
function myFunc(){
    let block = document.querySelector('.noBlock');
    block.classList.toggle('active');
}


function checkScrollPosition() {
                
    if($(window).width() < 767) {
        $(".tm-nav").removeClass("scroll");
        return;
    }

    if($(window).scrollTop() > 50) {
      $(".tm-nav").addClass("scroll");
  } else {        
      $(".tm-nav").removeClass("scroll");
  }
}

$(document).ready(function () {   
    
    $('.tm-nav').singlePageNav({
        offset: 57,
        filter: ':not(.external)',
        updateHash: true        
    });

    checkScrollPosition();

    // навигационное меню
    $('.navbar-toggle').click(function(){
        $('.main-menu').toggleClass('show');
    });

    $('.main-menu a').click(function(){
        $('.main-menu').removeClass('show');
    });
});
    
$(window).on("scroll", function() {
    checkScrollPosition();    
});

$('#tmNavbar a').click(function(){
    $('#tmNavbar').collapse('hide');
});