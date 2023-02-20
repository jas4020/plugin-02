$(function () {
   'use strict'
   $('.banner-slider').slick({
      dots:true,
      dotsClass: 'banner_dots',
      prevArrow: '<i class="banner_slider_arrow fas fa-arrow-left"><i/>',
      nextArrow: '<i class="banner_slider_arrow fas fa-arrow-right"><i/>',
      
   });
})
AOS.init();