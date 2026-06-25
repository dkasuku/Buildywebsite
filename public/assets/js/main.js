(function($) {
    "use strict";
  
    const $documentOn = $(document);
    const $windowOn = $(window);
  
    $documentOn.ready( function() {
  
      /* ================================
       Mobile Menu Js Start
    ================================ */
    
      $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "1199",
        meanExpand: ['<i class="far fa-plus"></i>'],
    });

       $('#mobile-menus').meanmenu({
        meanMenuContainer: '.mobile-menus',
        meanScreenWidth: "19920",
        meanExpand: ['<i class="far fa-plus"></i>'],
    });

     $documentOn.on("click", ".mean-expand", function () {
        let icon = $(this).find("i");

        if (icon.hasClass("fa-plus")) {
            icon.removeClass("fa-plus").addClass("fa-minus"); 
        } else {
            icon.removeClass("fa-minus").addClass("fa-plus"); 
        }
    });

    /* ================================
        Sidebar Toggle & Sticky Item Logic
        ================================ */

        // Open offcanvas
        $(".sidebar__toggle").on("click", function () {
        $(".offcanvas__info").addClass("info-open");
        $(".offcanvas__overlay").addClass("overlay-open");

        // Hide sticky item
        $(".sidebar-sticky-item").fadeOut().removeClass("active");
        });

        // Close offcanvas
        $(".offcanvas__close, .offcanvas__overlay").on("click", function () {
        $(".offcanvas__info").removeClass("info-open");
        $(".offcanvas__overlay").removeClass("overlay-open");

        // Show sticky item
        $(".sidebar-sticky-item").fadeIn().addClass("active");
        });

        /* ================================
        Body Overlay Js Start
        ================================ */

        $(".body-overlay").on("click", function () {
        $(".offcanvas__area").removeClass("offcanvas-opened");
        $(".df-search-area").removeClass("opened");
        $(".body-overlay").removeClass("opened");

        // Show sticky item when overlay clicked
        $(".sidebar-sticky-item").fadeIn().addClass("active");
        });

        /* ================================
        Offcanvas Link Click (Optional)
        ================================ */

        $(".offcanvas a").on("click", function () {
        $(".sidebar-sticky-item").fadeIn().addClass("active");
    });

    
      /* ================================
       Sticky Header Js Start
    ================================ */

       $windowOn.on("scroll", function () {
        if ($(this).scrollTop() > 250) {
          $("#header-sticky").addClass("sticky");
        } else {
          $("#header-sticky").removeClass("sticky");
        }
      });      
      
            /* ================================
       Video & Image Popup Js Start
    ================================ */

      $(".img-popup").magnificPopup({
        type: "image",
        gallery: {
          enabled: true,
        },
      });

      $(".video-popup").magnificPopup({
        type: "iframe",
        callbacks: {},
      });
  
      /* ================================
       Counterup Js Start
    ================================ */

      $(".count").counterUp({
        delay: 15,
        time: 4000,
      });
  
      /* ================================
       Wow Animation Js Start
    ================================ */

      new WOW().init();
  
      /* ================================
       Nice Select Js Start
    ================================ */

    if ($('.single-select').length) {
        $('.single-select').niceSelect();
    }

      /* ================================
       Parallaxie Js Start
    ================================ */

      if ($('.parallaxie').length && $(window).width() > 991) {
          if ($(window).width() > 768) {
              $('.parallaxie').parallaxie({
                  speed: 0.55,
                  offset: 0,
              });
          }
      }


     /* ================================
       Banner Active Js Start
    ================================ */

    if($('.banner-active').length > 0) {
        const bannerActive = new Swiper(".banner-active", {
            speed:1500,
            loop: true,
            slidesPerView: 1,
            effect:'fade',
            autoplay: {
                delay: 3000,         
                disableOnInteraction: false,
                pauseOnMouseEnter: false,  
            },
            navigation: {
                nextEl: ".array-prev",
                prevEl: ".array-next",
            },
        });
    }


    /* ================================
      Brand Slider Js Start
    ================================ */

      if($('.brand-slider').length > 0) {
        const brandSlider = new Swiper(".brand-slider", {
            spaceBetween: 30,
            speed: 1500,
            loop: true,
            autoplay: {
                delay: 1500,
                disableOnInteraction: false,
            },
          
            breakpoints: {
                1399: {
                    slidesPerView: 6,
                },
                1199: {
                    slidesPerView: 5,
                },
                991: {
                    slidesPerView: 4,
                },
                767: {
                    slidesPerView: 3,
                },
                575: {
                    slidesPerView: 2,
                },
                0: {
                    slidesPerView: 2,
                },
            },
        });
      }

       if($('.brand-slider-7').length > 0) {
        const brandSlider7 = new Swiper(".brand-slider-7", {
            spaceBetween: 0,
            speed: 1300,
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
          
            breakpoints: {
                1399: {
                    slidesPerView: 5,
                },
                1199: {
                    slidesPerView: 5,
                },
                991: {
                    slidesPerView: 4,
                },
                767: {
                    slidesPerView: 3,
                },
                575: {
                    slidesPerView: 2,
                },
                0: {
                    slidesPerView: 2,
                },
            },
        });
      }

       /* ================================
       Project Slider Js Start
    ================================ */

      if($('.project-slider').length > 0) {
        const ProjectlSlider = new Swiper(".project-slider", {
            spaceBetween: 0,
            speed: 1300,
            centeredSlides:true,
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
             pagination: {
                el: ".dot2",
                clickable: true,
            },
            breakpoints: {
                1199: {
                    slidesPerView: 3,
                },
                991: {
                    slidesPerView: 2,
                },
                767: {
                    slidesPerView: 2,
                },
                575: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });
      }

       if($('.project-slider-2').length > 0) {
        const ProjectSlider2 = new Swiper(".project-slider-2", {
            spaceBetween: 30,
            speed: 1300,
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
             navigation: {
                nextEl: ".array-next",
                prevEl: ".array-prev",
            },
            breakpoints: {
                1199: {
                    slidesPerView: 4,
                },
                991: {
                    slidesPerView: 3,
                },
                767: {
                    slidesPerView: 2,
                },
                575: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });
      }

       if($('.project-slider-5').length > 0) {
        const ProjectSlider5 = new Swiper(".project-slider-5", {
            spaceBetween: 30,
            speed: 1300,
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".project-dot",
            },
            breakpoints: {
                1199: {
                    slidesPerView: 4,
                },
                991: {
                    slidesPerView: 3,
                },
                767: {
                    slidesPerView: 2,
                },
                575: {
                    slidesPerView: 1.5,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });
      }

      if($('.project-slider-7').length > 0) {
        const ProjectSlider7 = new Swiper(".project-slider-7", {
            spaceBetween: 30,
            speed: 1300,
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
             navigation: {
                nextEl: ".array-next",
                prevEl: ".array-prev",
            },
            breakpoints: {
                1199: {
                    slidesPerView: 3,
                },
                991: {
                    slidesPerView: 3,
                },
                767: {
                    slidesPerView: 2,
                },
                575: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });
      }

       /* ================================
       Service Slider Js Start
    ================================ */

      if($('.service-slider').length > 0) {
        const ServicelSlider = new Swiper(".service-slider", {
            spaceBetween: 30,
            speed: 1300,
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
             navigation: {
                nextEl: ".array-next",
                prevEl: ".array-prev",
            },
            breakpoints: {
                1199: {
                    slidesPerView: 4,
                },
                991: {
                    slidesPerView: 3,
                },
                767: {
                    slidesPerView: 2,
                },
                575: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });
      }

      if($('.service-slider-2').length > 0) {
        const ServicelSlider2 = new Swiper(".service-slider-2", {
            spaceBetween: 30,
            speed: 1300,
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
             pagination: {
                el: ".dot2",
                clickable: true,
            },
            breakpoints: {
                 1699: {
                    slidesPerView: 5,
                },
                 1399: {
                    slidesPerView: 4.5,
                },
                1199: {
                    slidesPerView: 3.8,
                },
                991: {
                    slidesPerView: 3,
                },
                767: {
                    slidesPerView: 2.4,
                },
                575: {
                    slidesPerView: 1.5,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });
      }

       if($('.service-slider-7').length > 0) {
        const serviceSlider7 = new Swiper(".service-slider-7", {
            spaceBetween: 30,
            speed: 1500,
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            
            breakpoints: {
                1699: {
                    slidesPerView: 5,
                },
                 1499: {
                    slidesPerView: 4,
                },
                1199: {
                    slidesPerView: 3.2,
                },
                991: {
                    slidesPerView: 3,
                },
                767: {
                    slidesPerView: 2,
                },
                575: {
                    slidesPerView: 1.4,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });
      }


       /* ================================
       Testimonial Slider Js Start
    ================================ */

      if($('.testimonial-slider-2').length > 0) {
        const TestimonialSlider2 = new Swiper(".testimonial-slider-2", {
            spaceBetween: 30,
            speed: 1300,
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            
            breakpoints: {
                1199: {
                    slidesPerView: 2,
                },
                991: {
                    slidesPerView: 1.5,
                },
                767: {
                    slidesPerView: 1.4,
                },
                575: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });
      }

      if($('.testimonial-slider-3').length > 0) {
        const TestimonialSlider2 = new Swiper(".testimonial-slider-3", {
            spaceBetween: 30,
            speed: 1300,
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            
            breakpoints: {
                1199: {
                    slidesPerView: 3,
                },
                991: {
                    slidesPerView: 2,
                },
                767: {
                    slidesPerView: 2,
                },
                575: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });
      }

      if($('.testimonial-slider').length > 0) {
        const TestimonialSlider = new Swiper(".testimonial-slider", {
            spaceBetween: 20,
            speed: 1300,
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
             navigation: {
                nextEl: ".array-next",
                prevEl: ".array-prev",
            },
            breakpoints: {
                1199: {
                    slidesPerView: 1,
                },
                991: {
                    slidesPerView: 1,
                },
                767: {
                    slidesPerView: 1,
                },
                575: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });
      }

      if($('.testimonial-slider-4').length > 0) {
        const testimonialSlider4 = new Swiper(".testimonial-slider-4", {
            spaceBetween: 30,
            speed: 1500,
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            
            breakpoints: {
                1199: {
                    slidesPerView: 2,
                },
                991: {
                    slidesPerView: 2,
                },
                767: {
                    slidesPerView: 2,
                },
                575: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });
      }

       if($('.testimonial-slider-7').length > 0) {
        const testimonialSlider7 = new Swiper(".testimonial-slider-7", {
            spaceBetween: 30,
            speed: 1500,
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
             navigation: {
                nextEl: ".array-prev",
                prevEl: ".array-next",
            },
        });
      }

       /* ================================
       Team Slider Js Start
    ================================ */

      if($('.team-slider-3').length > 0) {
        const TeamSlider3 = new Swiper(".team-slider-3", {
            spaceBetween: 30,
            speed: 1300,
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            
            breakpoints: {
                1399: {
                    slidesPerView: 5,
                },
                1199: {
                    slidesPerView: 4,
                },
                991: {
                    slidesPerView: 3,
                },
                767: {
                    slidesPerView: 2.4,
                },
                575: {
                    slidesPerView: 1.5,
                },
                0: {
                    slidesPerView: 1.3,
                },
            },
        });
      }


      /* ================================
       about-tab-slider Slider Js Start
    ================================ */
      if($('.about-tab-slider').length > 0) {
        const abouttabslider = new Swiper(".about-tab-slider", {
            spaceBetween: 30,
            speed: 1300,
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".array-prev",
                prevEl: ".array-next",
            },
            breakpoints: {
                1399: {
                    slidesPerView: 1,
                },
                1199: {
                    slidesPerView: 1,
                },
                991: {
                    slidesPerView: 1,
                },
                767: {
                    slidesPerView: 1,
                },
                575: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });
      }
      /* ================================
       Instagram Slider Js Start
    ================================ */

      if($('.instagram-slider').length > 0) {
        const InstagramSlider = new Swiper(".instagram-slider", {
            slidesPerView: 'auto',
			spaceBetween: 24,
			speed: 5000,
			loop: true,
			autoplay: true,
            freeMode: true,  
            freeModeMomentum: false,
            freeModeMomentumBounce: false,
            grabCursor: true,
            delay: 0,
        });
        
    }

    if($('.instagram-slider-2').length > 0) {
        const InstagramSlider2 = new Swiper(".instagram-slider-2", {
           slidesPerView: 'auto',
			spaceBetween: 24,
			speed: 5000,
			loop: true,
			autoplay: true,
            freeMode: true,  
            freeModeMomentum: false,
            freeModeMomentumBounce: false,
            grabCursor: true,
            delay: 0,
            autoplay: {
            disableOnInteraction: true,
            reverseDirection: true,
            },
        });
    }


     /* ================================
       Service Hover Active Js Start
    ================================ */

    const serviceItems = document.querySelectorAll('.service-hover-item');

        serviceItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            serviceItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        });
    });

      /* ================================
        Quantity Increment/Decrement Js Start
    ================================ */
        const quantityButtons = document.querySelectorAll(".quantityIncrement, .quantityDecrement");
        if (quantityButtons.length) {
            quantityButtons.forEach((button) => {
                button.addEventListener("click", function () {
                    const input = button.parentElement.querySelector("input");
                    let value = parseInt(input.value, 10) || 0;

                    if (button.classList.contains("quantityIncrement")) {
                        input.value = value + 1;
                    } else if (button.classList.contains("quantityDecrement") && value > 1) {
                        input.value = value - 1;
                    }
                });
            });
        }
    
    
     /* ================================
       Payment Method Update Js Start
    ================================ */

    function updatePaymentMethod() {
        let paymentMethod = $("input[name='pay-method']:checked").val();
        $(".payment").html(paymentMethod);
    }

    // Initial load
    updatePaymentMethod();

    // On click of radio option
    $(".checkout-radio-single input[name='pay-method']").on("change", function () {
        updatePaymentMethod();
    });

     /* ================================
       Additional Quantity Controls Js Start
    ================================ */

    const inputs = document.querySelectorAll('#qty, #qty2, #qty3');
    const btnminus = document.querySelectorAll('.qtyminus');
    const btnplus = document.querySelectorAll('.qtyplus');

    if (inputs.length > 0 && btnminus.length > 0 && btnplus.length > 0) {

        inputs.forEach(function(input, index) {
            const min = Number(input.getAttribute('min'));
            const max = Number(input.getAttribute('max'));
            const step = Number(input.getAttribute('step'));

            function qtyminus(e) {
                const current = Number(input.value);
                const newval = (current - step);
                if (newval < min) {
                    newval = min;
                } else if (newval > max) {
                    newval = max;
                }
                input.value = Number(newval);
                e.preventDefault();
            }

            function qtyplus(e) {
                const current = Number(input.value);
                const newval = (current + step);
                if (newval > max) newval = max;
                input.value = Number(newval);
                e.preventDefault();
            }

            btnminus[index].addEventListener('click', qtyminus);
            btnplus[index].addEventListener('click', qtyplus);
        });
    }

          /* ================================
         Search Popup Toggle Js Start
      ================================ */
  
      if ($(".search-toggler").length) {
          $(".search-toggler").on("click", function(e) {
              e.preventDefault();
              $(".search-popup").toggleClass("active");
              $("body").toggleClass("locked");
          });
      }

      /* ================================
       Mouse Cursor Animation Js Start
    ================================ */

    if ($(".mouseCursor").length > 0) {
        function itCursor() {
            var myCursor = jQuery(".mouseCursor");
            if (myCursor.length) {
                if ($("body")) {
                    const e = document.querySelector(".cursor-inner"),
                        t = document.querySelector(".cursor-outer");
                    let n,
                        i = 0,
                        o = !1;
                    (window.onmousemove = function(s) {
                        o ||
                            (t.style.transform =
                                "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                            (e.style.transform =
                                "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                            (n = s.clientY),
                            (i = s.clientX);
                    }),
                    $("body").on(
                            "mouseenter",
                            "button, a, .cursor-pointer",
                            function() {
                                e.classList.add("cursor-hover"),
                                    t.classList.add("cursor-hover");
                            }
                        ),
                        $("body").on(
                            "mouseleave",
                            "button, a, .cursor-pointer",
                            function() {
                                ($(this).is("a", "button") &&
                                    $(this).closest(".cursor-pointer").length) ||
                                (e.classList.remove("cursor-hover"),
                                    t.classList.remove("cursor-hover"));
                            }
                        ),
                        (e.style.visibility = "visible"),
                        (t.style.visibility = "visible");
                }
            }
        }
        itCursor();
      }

        /* ================================
       Back To Top Button Js Start
    ================================ */
	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 20) {
			$('#back-top').addClass('show');
		} else {
			$('#back-top').removeClass('show');
		}
	});

	// Smooth scroll to top on click
	$(document).on('click', '#back-top', function (e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: 0 }, 800);
	});
		

    // Smooth scroll to top on click
    $(document).on('click', '#back-top', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 800);
    });

    $documentOn.on('click', 'a[href^="#"]', function (e) {
        const href = $(this).attr('href');

        // ignore empty or only "#"
        if (!href || href === '#' || href.length < 2) return;

        const $target = $(href);

        // only smooth scroll if target exists on same page
        if ($target.length) {
            e.preventDefault();

            $('html, body').animate({
                scrollTop: $target.offset().top
            }, 800);
        }
    });

   /* ================================
       Smooth Scroller And Title Animation Js Start
    ================================ */
    if ($('#smooth-wrapper').length && $('#smooth-content').length) {
        gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

        gsap.config({
            nullTargetWarn: false,
        });

        let smoother = ScrollSmoother.create({
            wrapper: "#smooth-wrapper",
            content: "#smooth-content",
            smooth: 2,
            effects: true,
            smoothTouch: 0.1,
            normalizeScroll: false,
            ignoreMobileResize: true,
        });
    }
   

     /* ================================
      Ttile Animation Js Start
    ================================ */

    if ($(".tx-title sec_title  tz-itm-title tz-itm-anim").length) {
        let staggerAmount = 0.03,
            translateXValue = 20,
            delayValue = 0.1,
            easeType = "power2.out",
            animatedTextElements = document.querySelectorAll(".tx-title sec_title  tz-itm-title tz-itm-anim");

        animatedTextElements.forEach(element => {
            let animationSplitText = new SplitText(element, { type: "chars, words" });

            ScrollTrigger.create({
                trigger: element,
                start: "top 85%",
                onEnter: () => {
                    gsap.from(animationSplitText.chars, {
                        duration: 1,
                        delay: delayValue,
                        x: translateXValue,
                        autoAlpha: 0,
                        stagger: staggerAmount,
                        ease: easeType,
                    });
                },
            });
        });
    }

    if($('.tz-sub-tilte').length) {
      var agtsub = $(".tz-sub-tilte");

      if(agtsub.length == 0) return; gsap.registerPlugin(SplitText); agtsub.each(function(index, el) {

        el.split = new SplitText(el, {
          type: "lines,words,chars",
          linesClass: "split-line"
        });

        if( $(el).hasClass('tz-sub-anim') ){
          gsap.set(el.split.chars, {
            opacity: 0,
            x: "7",
          });
        }

        el.anim = gsap.to(el.split.chars, {
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            end: "top 60%",
            markers: false,
            scrub: 1,
          },

          x: "0",
          y: "0",
          opacity: 1,
          duration: .7,
          stagger: 0.2,
        });

      });
    }

     if ($('.char-animation').length > 0) {
        let char_come = gsap.utils.toArray(".char-animation");
        char_come.forEach(splitTextLine => {
            const tl = gsap.timeline({
                scrollTrigger: {
                trigger: splitTextLine,
                start: 'top 90%',
                end: 'bottom 60%',
                scrub: false,
                markers: false,
                toggleActions: 'play none none none'

             }
        });

            const itemSplitted = new SplitText(splitTextLine, { type: "chars, words" });
            gsap.set(splitTextLine, { perspective: 300 });
            itemSplitted.split({ type: "chars, words" })
            tl.from(itemSplitted.chars,
            {
                duration: 1,
                delay: 0.5,
                x: 100,
                autoAlpha: 0,
                stagger: 0.05
            });
        });
    }

    if($('.tz-itm-title').length) {
		var txtheading = $(".tz-itm-title");

    if(txtheading.length == 0) return; gsap.registerPlugin(SplitText); txtheading.each(function(index, el) {

        el.split = new SplitText(el, {
          type: "lines,words,chars",
          linesClass: "split-line"
        });

        if( $(el).hasClass('tz-itm-anim') ){
          gsap.set(el.split.chars, {
            opacity: .3,
            x: "-7",
          });
        }
        el.anim = gsap.to(el.split.chars, {
          scrollTrigger: {
            trigger: el,
            start: "top 92%",
            end: "top 60%",
            markers: false,
            scrub: 1,
          },

          x: "0",
          y: "0",
          opacity: 1,
          duration: .7,
          stagger: 0.2,
        });

      });
    }

   /* ================================
       Actually Js Start
    ================================ */

    if (window.matchMedia("(min-width: 1200px)").matches) {
        if (document.querySelectorAll(".actually-area").length > 0) {
            var tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".actually-area",
                pin: true,
                scrub: 1,
                start: "top top",
                end: "bottom+=1500 top",
            }
            });

            const t_line = new SplitText(".t_line", { type: "lines" });
            t_line.lines.forEach((target) => {
            tl.to(target, {
                backgroundPositionX: 0,
                ease: "none",
                scrollTrigger: {
                trigger: target,
                scrub: 1,
                start: 'top 25%',
                end: "center 25%",
                }
            });
            });

            tl.to(".actually-area .section-title", {
            scale: 40,
            opacity: 0,
            ease: "power4.inOut",
            delay: 0.35,
            duration: 0.75,
            });

            tl.to(".actually-area", {
            backgroundColor: "#fff",
            duration: 0.45,
            }, "-=0.50");
        }
    }



    /* ================================
       Advance Ani Js Start
    ================================ */
 
    if (window.innerWidth > 1199) {
        const items = document.querySelectorAll(".advance-wrap .advance-item");
    
        if (items.length >= 4) {
        // Delay GSAP setup slightly to prevent abrupt load animation
        window.addEventListener("load", () => {
            setTimeout(() => {
            const advanced = gsap.timeline({
                scrollTrigger: {
                trigger: ".advance-wrap",
                start: "top 60%",
                toggleActions: "play none none reverse",
                markers: false,
                },
                defaults: {
                ease: "power1.out",
                duration: 1,
                },
            });
    
            advanced.from(items[0], { xPercent: 100, rotate: -8 }).from(items[1], { xPercent: 30, rotate: 4.13 }, "<").from(items[2], { xPercent: -30, rotate: -6.42 }, "<").from(items[3], { xPercent: -60, rotate: -12.15 }, "<");
    
            // Refresh after load for smoother initial trigger
            ScrollTrigger.refresh();
            }, 300);
        });
        }
    }

    
    }); // End Document Ready Function
    

     /* ================================
      Pricing Toggle Js Start
    ================================ */

    document.addEventListener("DOMContentLoaded", function () {
            const toggle = document.getElementById("pricing-toggle");
            const monthlyLabel = document.querySelector(".monthly-label");
            const yearlyLabel = document.querySelector(".yearly-label");
            const prices = document.querySelectorAll(".price");

            if (!toggle || !monthlyLabel || !yearlyLabel || !prices.length) return;

            // Update price text based on toggle state
            const updatePrices = (isYearly) => {
            prices.forEach((price) => {
                const monthly = price.getAttribute("data-monthly");
                const yearly = price.getAttribute("data-yearly");

                if (monthly && yearly) {
                price.innerHTML = isYearly
                    ? `$${yearly}<sub>/ year</sub>`
                    : `$${monthly}<sub>/ month</sub>`;
                }
            });

            monthlyLabel.classList.toggle("active", !isYearly);
            yearlyLabel.classList.toggle("active", isYearly);
            };

            // Initialize with monthly by default
            updatePrices(false);

            // Toggle switch change
            toggle.addEventListener("change", function () {
            updatePrices(this.checked);
            });

            // Monthly label click
            monthlyLabel.addEventListener("click", function () {
            toggle.checked = false;
            updatePrices(false);
            });

            // Yearly label click
            yearlyLabel.addEventListener("click", function () {
            toggle.checked = true;
            updatePrices(true);
            });
    });

    /* ================================
        Price Range Slider Js Start
        ================================ */
    document.addEventListener("DOMContentLoaded", function () {
        const minSlider = document.getElementById("min-slider");
        const maxSlider = document.getElementById("max-slider");
        const amount = document.getElementById("amount");
    
        // Exit early if essential elements are missing
        if (!minSlider || !maxSlider || !amount) return;
    
        function updateAmount() {
            let minValue = parseInt(minSlider.value, 10);
            let maxValue = parseInt(maxSlider.value, 10);
    
            // Swap values if min is greater than max
            if (minValue > maxValue) {
                [minValue, maxValue] = [maxValue, minValue];
                minSlider.value = minValue;
                maxSlider.value = maxValue;
            }
    
            // Update amount input
            amount.value = `$${minValue} - $${maxValue}`;
    
            // Calculate percentages for gradient
            const minPercent = ((minValue - minSlider.min) / (minSlider.max - minSlider.min)) * 100;
            const maxPercent = ((maxValue - maxSlider.min) / (maxSlider.max - maxSlider.min)) * 100;
    
            const trackStyle = `linear-gradient(to right, #063232 ${minPercent}%, #F56A32 ${minPercent}%, #F56A32 ${maxPercent}%, #FEF5F1 ${maxPercent}%)`;
    
            minSlider.style.background = trackStyle;
            maxSlider.style.background = trackStyle;
        }
    
        // Initialize on page load
        updateAmount();
    
        // Add event listeners
        minSlider.addEventListener("input", updateAmount);
        maxSlider.addEventListener("input", updateAmount);
    });

     /* ================================
       Preloader Js Start
    ================================ */
    $('.preloader').delay(800).fadeOut('slow');


    /* ================================
       choose tab Js Start
    ================================ */
    const items = document.querySelectorAll(".choose-us-tab-item");
        const line = document.getElementById("chooseActive");
        const preview = document.getElementById("choosePreview");
        const imageWrap = document.querySelector(".choose-image-9");

        function moveLine(el){
            const n = el.querySelector(".choose-number");
            line.style.top = (n.offsetTop + n.offsetHeight/2 - line.offsetHeight/2) + "px";
        }

        function changeImage(el){
            const src = el.dataset.img;
            if (!src || !preview) return;

            imageWrap?.classList.add("is-switching");
            preview.src = src;

            preview.onload = () => imageWrap?.classList.remove("is-switching");
        }

        items.forEach(el => el.onclick = () => {
            items.forEach(x => x.classList.remove("is-active"));
            el.classList.add("is-active");
            moveLine(el);
            changeImage(el);
        });

        const active = document.querySelector(".choose-us-tab-item.is-active") || items[0];
        if (active){
            moveLine(active);
            changeImage(active);
        }



  
  })(jQuery); // End jQuery

