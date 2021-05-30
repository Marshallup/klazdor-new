document.addEventListener('DOMContentLoaded', function(event) {


    const mainSlider = tns({
        container: '.main-slider-body',
        items: 1,
        slideBy: 'page',
        autoplay: true,
        navPosition: 'bottom',
        loop: false,
        rewind: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000
        // navContainer: '.main-slider-navigation'
    });
    const catalogSliders = document.querySelectorAll('.catalog-slider');

    for(let i = 0; i < catalogSliders.length; i++) {
      tns({
        container: catalogSliders[i],
        // items: 2,
        slideBy: 1,
        autoplay: false,
        nav: false,
        loop: false,
        rewind: true,
        gutter: 10,
        swipeAngle: false,
        // edgePadding: 30,
        // "autoWidth": true,
        items: 2.3,
        responsive: {
          200: {
            "autoWidth": true,
          },
          460: {
            items: 2.3,
            "autoWidth": false
          },
          500: {
            swipeAngle: true,
            edgePadding: 0,
            // "autoWidth": false
          },
          630: {
            items: 3,
          },
          1006: {
            items: 4,
          },
          1208: {
            items: 5,
          }
        }
      })
    };

    tns({
      container: '.partners-slider',
      items: 2.5,
      slideBy: 1,
      autoplay: false,
      nav: false,
      loop: false,
      rewind: true,
      gutter: 10,
      responsive: {
        1182: {
          items: 7
        },
        1020: {
          items: 6
        },
        600: {
          items: 5
        },
        466: {
          items: 4
        },
        400: {
          items: 3,
          gutter: 0
        }
      }
    })
    tns({
      container: '.catalog-slider-img',
      items: 1.5,
      slideBy: 1,
      autoplay: false,
      nav: false,
      loop: false,
      rewind: true,
      gutter: 10,
      responsive: {
        1386: {
          gutter: 50
        },
        1186: {
          gutter: 30
        },
        930: {
          items: 3
        },
        730: {
          items: 2.3
        },
        628: {
          items: 2
        }
      }
    });

    let animPending = false;

    $('.header-catalog-btn').on('click', function() {

      if (!animPending) {
        animPending = true;

        const $this = $('.header-catalog-btn');
        const className = 'header-catalog-btn--active';
        const bigMenuInner = $('.header-big-menu-inner');
        const bigMenu = $('.header-big-menu-item-wrap');

        $this.toggleClass(className);

        if (!$this.hasClass(className)) {
            bigMenu.fadeOut(300, function() {
              bigMenuInner.hide();
              hideAllListMenu();
              animPending = false;
            });
        } else {
            bigMenuInner.show(0, function() {
              bigMenu.fadeIn(300);
              animPending = false;
            });
        }

      }
    });


    // МОБИЛЬНОЕ МЕНЮ


    const mobileListParent = $('.header-big-menu-list__item--parent');

    const headerListActiveClass = 'header-big-menu-list__item--active';

    mobileListParent.click(function(event) {

      const targetElem = $(event.target);

      if (targetElem.hasClass('header-big-menu-list__link')) return;
      event.stopPropagation();


      
      const $this = $(this);

      const childList = $this.children('.header-big-menu-list');

      if (!$this.closest('.' + headerListActiveClass).length) {
        hideAllListMenu(childList);
      }

      $this.toggleClass(headerListActiveClass);


      if ($this.hasClass(headerListActiveClass)) {
        childList.slideDown(300);
      } else {
        hideAllListMenu(childList);
      }

    });


    let footerList = $('.footer-cell').children('.footer-list');

    footerList.on('click', function(e) {
      const $this = $(this);

      if ($this.hasClass('footer-list--show')) {
        $this.removeClass('footer-list--show');
        const childList = $this.find('.footer-list').hide(300)
      } else {
        $this.addClass('footer-list--show');
        const childList = $this.find('.footer-list').show(300)
      }
    });


    let promotionsSlider;
    let newsSlider;
    let articlesSlider;
    let flag = true;
    let flagNews = true;
    let flagArticles = true;

    $(window).resize(function(event) {
      checkWidthForSliders();
    });

    checkWidthForSliders();

    function checkWidthForSliders() {
      const width = $(window).width();

      if (width < 650 && flag) {

        flag = false;
        promotionsSlider = tns({
          container: '.articles-template',
          items: 1.5,
          slideBy: 1,
          autoplay: false,
          nav: false,
          loop: false,
          rewind: true,
          gutter: 10,
        });

      } else if (width >= 650 && !flag) {

        flag = true;
        promotionsSlider.destroy();

      };

      if (width < 767 && flagNews) {

        flagNews = false;
        newsSlider = tns({
          container: '.news-template',
          items: 1.5,
          slideBy: 1,
          autoplay: false,
          nav: false,
          loop: false,
          rewind: true,
          gutter: 10,
          responsive: {
            410: {
              items: 2
            }
          }
        });

      } else if (width >= 767 && !flagNews) {

        flagNews = true;
        newsSlider.destroy();

      };


      if (width < 789 && flagArticles) {

        flagArticles = false;
        articlesSlider = tns({
          container: '#articles-block',
          items: 1.5,
          slideBy: 1,
          autoplay: false,
          nav: false,
          loop: false,
          rewind: true,
          gutter: 10,
          responsive: {
            500: {
              items: 2
            }
          }
        });

      } else if (width >= 789 && !flagArticles) {

        flagArticles = true;
        articlesSlider.destroy();

      };



    };
    

    function hideAllListMenu(childList) {
      const parentList = $('.header-big-menu-list')
      const allItemChild =  parentList.find('.header-big-menu-list__item--parent');
        const allListChild = parentList.find('.header-big-menu-list');
        if (allItemChild.length > 0) {
          allItemChild.removeClass(headerListActiveClass);
          allListChild.slideUp(300);
        }
        if (childList)  {childList.slideUp(300);}
    };






    //Обработка клика на стрелку вправо
    $(document).on('click', ".carousel-footer-button-right",function(){
      var carusel = $(this).parents('.carousel-footer');
      updtae_reviews();
      right_carusel(carusel);

      return false;
  });
  //Обработка клика на стрелку влево
  $(document).on('click',".carousel-footer-button-left",function(){
      var carusel = $(this).parents('.carousel-footer');
      updtae_reviews();
      left_carusel(carusel);

      return false;
  });
  function left_carusel(carusel){
      var block_width = $(carusel).find('.carousel-footer-block').outerWidth();
      $(carusel).find(".carousel-footer-items .carousel-footer-block").eq(-1).clone().prependTo($(carusel).find(".carousel-footer-items"));
      $(carusel).find(".carousel-footer-items").css({"left":"-"+block_width+"px"});
      $(carusel).find(".carousel-footer-items .carousel-footer-block").eq(-1).remove();
      $(carusel).find(".carousel-footer-items").animate({left: "0px"}, 200);
  }
  function right_carusel(carusel){
      var block_width = $(carusel).find('.carousel-footer-block').outerWidth();
      $(carusel).find(".carousel-footer-items").animate({left: "-"+ block_width +"px"}, 200, function(){
          $(carusel).find(".carousel-footer-items .carousel-footer-block").eq(0).clone().appendTo($(carusel).find(".carousel-footer-items"));
          $(carusel).find(".carousel-footer-items .carousel-footer-block").eq(0).remove();
          $(carusel).find(".carousel-footer-items").css({"left":"0px"});
      });
  }
  function updtae_reviews() {

      var ids = [];
      var last_one;
      $('[data-id]').each( function(e){
          var $el = $(this);
          if($el.hasClass('carousel-footer-block')) {
              ids.push($el.attr('data-id'));
          }

      });

      last_one = Math.min.apply(null, ids);

      // jQuery.ajax({
      //     url: BX.message('TEMPLATE_PATH') + '/new_review.php',
      //     type: 'post',
      //     data: "id=" + ids,
      //     success: function(res) {

      //         var response = JSON.parse(res);

      //         $('.carousel-footer-items').append(response);

      //     },
      //     error: function(e) {

      //         console.log(e);
      //     }
      // });
  }

  /* сокращаем Достоинства и Недостатки до 35 символов + троеточие */
  jQuery(".short .n-product-review-item__text").each(function() {
      var review = jQuery(this).html();
      if(review.length > 35)
      {
          review = review.substring(0, 35) + "...";
          jQuery(this).html(review);
      }
  });

  /* чтобы отзывы были примерно одной высоты (около 150 символов):
  *  смотрим общее число знаков отзыва
  *  вычисляем какое кол-во от этого занимает комментарий
  *  от 150 отнимаем кол-во знаков отзыва без учета комментария
  *  уменьшаем длину комментария до получившегося в предыдущем действии значения
  */
  jQuery(".short .n-product-review-item__text").each(function() {
    var review = jQuery(this).html();
    if(review.length > 35)
    {
        review = review.substring(0, 35) + "...";
        jQuery(this).html(review);
    }
});




});