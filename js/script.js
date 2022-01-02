//  persion number
$(document).ready(function () {
  ConvertNumberToPersion();
});

function ConvertNumberToPersion() {
  persian = {
    0: "۰",
    1: "۱",
    2: "۲",
    3: "۳",
    4: "۴",
    5: "۵",
    6: "۶",
    7: "۷",
    8: "۸",
    9: "۹",
  };
  function traverse(el) {
    if (el.nodeType == 3) {
      var list = el.data.match(/[0-9]/g);
      if (list != null && list.length != 0) {
        for (var i = 0; i < list.length; i++)
          el.data = el.data.replace(list[i], persian[list[i]]);
      }
    }
    for (var i = 0; i < el.childNodes.length; i++) {
      traverse(el.childNodes[i]);
    }
  }
  traverse(document.body);
}

//window open & close on click
let report = document.querySelector("#report");

report.addEventListener("click", (e) => {
  let box = e.target.parentElement.children[1];
  if (box === undefined) {
    return false;
  }
  let classLists = box.classList;
  if (classLists.contains("report-body") === true) {
    if (classLists.contains("d-none") === true) {
      classLists.remove("d-none");
    } else {
      classLists.add("d-none");
    }
  }
});


// Time Lapse
let current = document.querySelectorAll('.time-lap');

let date = '23:59:59';
// Set the date we're counting down to
var countDownDate = new Date(`2024 ${date}`).getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
  // Time calculations for days, hours, minutes and seconds
  // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  current.forEach(element => {
    element.innerHTML = hours + ":"
    + minutes + ":" + seconds;
  });

  
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    current.innerHTML = "EXPIRED";
  }

 
}, 1000);







// owl Carousel
let sliderFirst = $(".slider-top");
if (sliderFirst.length && $.fn.owlCarousel) {
  sliderFirst.owlCarousel({
    rtl: true,
    loop: true,
    nav: true,
    items: 1,
    autoplay : true,
    navText: [
      '<span class="fas fa-angle-right"></span>',
      '<span class="fas fa-angle-left"></span>',
    ],
    center : true,
  });
}


let sliderSecond = $(".slider-second");
if (sliderSecond.length && $.fn.owlCarousel) {
  sliderSecond.owlCarousel({
    rtl: true,
    loop: true,
    nav: true,
    items: 3,
    dots : false,
    autoplay : true,
    center : true,
    navText: [
      '<span class="fas fa-angle-right"></span>',
      '<span class="fas fa-angle-left"></span>',
    ],
    responsive:{
      0:{
          items:1,
          nav:true
      },
      576:{
        items:1,
        nav:true
    },
      768:{
          items:3,
          nav:true,
      },
      992:{
        items:3,
        nav:true
    }
    }
  });
}

let sliderThird = $(".slider-third");
if (sliderThird.length && $.fn.owlCarousel) {
  sliderThird.owlCarousel({
    rtl: true,
    loop: true,
    nav: true,
    dots : false,
    items: 5,
    autoplay : true,
    center : true,
    navText: [
      '<span class="fas fa-chevron-right"></span>',
      '<span class="fas fa-chevron-left"></span>',
    ],
    responsive:{
      0:{
          items:1,
          nav:true
      },
      576:{
        items:3,
        nav:true
    },
      768:{
          items:5,
          nav:true,
      },
      992:{
        items:5,
        nav:true
    }
    }
  });
}





