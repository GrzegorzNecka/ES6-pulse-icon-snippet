"use strict";


//------------------ ES6

if (document.getElementsByClassName("pulse-icon__container").length) {

  let pulseIcon = document.querySelector(".pulse-icon__container");

  let visible = () => {
    setTimeout(function () {
      pulseIcon.classList.add("visible");
      pulse()
    }, 3000);
  }

  visible()

  let pulse = () => {
    pulseIcon.classList.add("pulse");
    pulseIcon.addEventListener("animationend", function () {
      this.classList.remove("pulse");
    })

    let pulseTimeout = setTimeout(pulse, 3000);

    pulseIcon.addEventListener("click", (e)=> {
      e.stopPropagation()
      pulseIcon.classList.add("hidden");
      clearTimeout(pulseTimeout);
    });
  }

  document.addEventListener("click", (e) => {
    if (document.getElementsByClassName("hidden").length) {
      pulseIcon.classList.remove("hidden");
      pulse();
    }
  });
}


//------------------ JQuery

// $(document).ready(function () {

//   if ($('.pulse-icon__container').length) {

//     var pulseIcon = $('.pulse-icon__container');

//     function visible() {
//       setTimeout(function () {
//         pulseIcon.addClass('visible');
//         pulse();
//       }, 3000);
//     }

//     visible()

//     function pulse() {
//       pulseIcon.addClass('pulse');
//       pulseIcon.on('animationend', function () {
//         $(this).removeClass('pulse')
//       })
//       var pulseTimeout = setTimeout(pulse, 3000);

//       pulseIcon.on("click", function (e) {
//         e.stopPropagation()
//         pulseIcon.addClass("hidden");
//         clearTimeout(pulseTimeout);
//       });
//     }

//     $(document).on("click", function () {
//       if($('.hidden').length){
//       pulseIcon.removeClass("hidden");
//       pulse()
//       }
//     });

//   }
// });

