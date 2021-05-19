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
        items: 5,
        slideBy: 'page',
        autoplay: false,
        nav: false,
        loop: false,
        rewind: true,
        gutter: 10,
      })
    };

    tns({
      container: '.partners-slider',
      items: 7,
      slideBy: 'page',
      autoplay: false,
      nav: false,
      loop: false,
      rewind: true,
      gutter: 0,
    })
    tns({
      container: '.catalog-slider-img',
      items: 3,
      slideBy: 'page',
      autoplay: false,
      nav: false,
      loop: false,
      rewind: true,
      gutter: 50,
    });

    $('.header-catalog-btn').on('click', function() {
      const $this = $(this);
      const className = 'header-catalog-btn--active';
      const bigMenuInner = $('.header-big-menu-inner');
      const bigMenu = $('.header-big-menu');

      $this.toggleClass(className);

      if (!$this.hasClass(className)) {
        bigMenu.fadeOut(300, function() {
          bigMenuInner.hide();
        });
      } else {
        bigMenuInner.show();
        bigMenu.fadeIn(300);
      }
    })

});