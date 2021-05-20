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

        const $this = $(this);
        const className = 'header-catalog-btn--active';
        const bigMenuInner = $('.header-big-menu-inner');
        const bigMenu = $('.header-big-menu');

        $this.toggleClass(className);

        if (!$this.hasClass(className)) {
            bigMenu.fadeOut(300, function() {
              bigMenuInner.hide();
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

});