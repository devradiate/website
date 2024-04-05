(function ($) {
  "use strict";

  // Preloader (if the #preloader div exists)
  $(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function () {
        $(this).remove();
      });
    }
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

  // Initiate the wowjs animation library
  new WOW().init();

  // Header scroll class
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }

  // Smooth scroll for the navigation and links with .scrollto classes
  $('.main-nav a, .mobile-nav a, .scrollto').on('click', function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($('#header').length) {
          top_space = $('#header').outerHeight();

          if (! $('#header').hasClass('header-scrolled')) {
            top_space = top_space - 40;
          }
        }

        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.main-nav, .mobile-nav').length) {
          $('.main-nav .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.main-nav, .mobile-nav');
  var main_nav_height = $('#header').outerHeight();

  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();
  
    nav_sections.each(function() {
      var top = $(this).offset().top - main_nav_height,
          bottom = top + $(this).outerHeight();
  
      if (cur_pos >= top && cur_pos <= bottom) {
        main_nav.find('li').removeClass('active');
        main_nav.find('a[href="#'+$(this).attr('id')+'"]').parent('li').addClass('active');
      }
    });
  });

  // jQuery counterUp (used in Whu Us section)
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // Porfolio isotope and filter
  $(window).on('load', function () {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item'
    });
    $('#portfolio-flters li').on( 'click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');
  
      portfolioIsotope.isotope({ filter: $(this).data('filter') });
    });
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

  // Clients carousel (uses the Owl Carousel library)
  $(".clients-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: { 0: { items: 2 }, 768: { items: 4 }, 900: { items: 6 }
    }
  });

})(jQuery);

function submitForm(e, form){
    e.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message_body").value;
  
    const myHeaders = new Headers();
    myHeaders.append("accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7");
    myHeaders.append("accept-language", "en-US,en;q=0.9");
    myHeaders.append("cache-control", "max-age=0");
    myHeaders.append("content-type", "application/x-www-form-urlencoded");
    myHeaders.append("cookie", "_ga=GA1.2-2.145449955.1712301763; _gid=GA1.2-2.2107512471.1712301763; _ga_3WTQFP9ECQ=GS1.1-2.1712301762.1.0.1712301804.0.0.0; SEARCH_SAMESITE=CgQI6poB; 1P_JAR=2024-04-05-07; AEC=AQTF6HxuHTyKx43MRgXIpndJRQQs6tgSjN5IvFg3LnqBN7kiaNFTmWJ7sOg; OSID=g.a000iQhelGf8JcdbdTNvNKcuRasd1F3dluj2BmdfTdKNI9meQva9GP8cmOfZk2xIPEZM99a-pQACgYKAewSAQASFQHGX2MiGB3-tlTxdfISWaMBfsESvhoVAUF8yKogVqO9EWG8s_J0mIo97prl0076; __Secure-OSID=g.a000iQhelGf8JcdbdTNvNKcuRasd1F3dluj2BmdfTdKNI9meQva9npMdKIuPY1wN9IH_AQ38kwACgYKAacSAQASFQHGX2Miya_-DTteE4NK-eyuF7yAqBoVAUF8yKpNDCzqduhXUG2KvEXNuujw0076; COMPASS=appsfrontendserver=CgAQ_um-sAYaegAJa4lXiYn7qIQ9SisGavB2VwvJygn6bKa3kV8jGbFGTH-DIRCdz1dMieqYIfcBMoQGfk18REE5zdLWPkrr-uYrlFmeaO2Yq6hpbQ7JrfTutOw5LfOZrlKPtlY4gNLz45bBSeXeCzDHMnYVsDrO1VuMZZY2AZZ6Mf3eMAE; OTZ=7499968_34_34__34_; NID=513=LSpeQxeUPrre9MgLZ-t1t1x4KLsc1G2ffEjQ0DPx7wRGYtMrnsLq1zkXf2jzLKyzVfJkBtkyB5gBjb9lYeGi17S4Y8iaqgQDmOXME93U4uMm27mDzKBTNFc_9XnAWqqwGUn0pDzGtHu5mL5yhhIWY50GVcb_mWXGAwtD2EsvcuLwtszzM8IneAFoA2rztihEFy5kzKxIbuyxC5BgwXvdBHvLxYHAqLUO1MklCS6NxwOcF2u4Zi2sdRhwJHFZ-uT0U5wmZ3frnikHEBaizcM; COMPASS=spreadsheet_forms=CjIACWuJV7yEhT4YlKm4vOE9SEnzmLu7zuXhFtivTCZZSoo2n9AC2Q0mItSXavxEnmRYSBCx876wBhpDAAlriVdIHT-Zu4lWIkGlf90egjmpkPfsymSmFv6VSfSqdQXvIgt31r518eXXrAXUx_nCPMgs_5Wribk_aXBLXl0qcA==; S=spreadsheet_forms=izPhAul_4p8uBFtfV3blo7kplLJvV6h8c7BE5IxUuFc");
    myHeaders.append("origin", "https://docs.google.com");
    myHeaders.append("referer", "https://docs.google.com/forms/d/1fIyF3iUktYL98eQ9bjJHs1mUeWNAEhmoKBEjhXr1wdU/viewform?edit_requested=true&fbzx=-8375767660836106087");
    myHeaders.append("sec-ch-ua", "\"Google Chrome\";v=\"123\", \"Not:A-Brand\";v=\"8\", \"Chromium\";v=\"123\"");
    myHeaders.append("sec-ch-ua-arch", "\"arm\"");
    myHeaders.append("sec-ch-ua-bitness", "\"64\"");
    myHeaders.append("sec-ch-ua-full-version", "\"123.0.6312.87\"");
    myHeaders.append("sec-ch-ua-full-version-list", "\"Google Chrome\";v=\"123.0.6312.87\", \"Not:A-Brand\";v=\"8.0.0.0\", \"Chromium\";v=\"123.0.6312.87\"");
    myHeaders.append("sec-ch-ua-mobile", "?0");
    myHeaders.append("sec-ch-ua-model", "\"\"");
    myHeaders.append("sec-ch-ua-platform", "\"macOS\"");
    myHeaders.append("sec-ch-ua-platform-version", "\"12.3.1\"");
    myHeaders.append("sec-ch-ua-wow64", "?0");
    myHeaders.append("sec-fetch-dest", "document");
    myHeaders.append("sec-fetch-mode", "navigate");
    myHeaders.append("sec-fetch-site", "same-origin");
    myHeaders.append("sec-fetch-user", "?1");
    myHeaders.append("upgrade-insecure-requests", "1");
    myHeaders.append("user-agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36");
    
    const urlencoded = new URLSearchParams();
    urlencoded.append("entry.811495123", name);
    urlencoded.append("entry.2004114292", email);
    urlencoded.append("entry.32414074", message);
    urlencoded.append("entry.1806228331", message);
    urlencoded.append("submissionTimestamp", Date.now());
    
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow"
    };
    
    fetch("https://docs.google.com/forms/d/e/1FAIpQLSdEGDokiRSKwJ23w46YrH40aJdtisJc_TjuTlHYSVapU6IQPw/formResponse", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
}
