export default {
  init() {
    // JavaScript to be fired on all pages
  },
  finalize() {
    if (window.innerWidth <= 640) {
      // JavaScript to be fired on all pages, after page specific JS is fired
      $('header nav .has-submenu > .nav-link').on('click', (event) => {
        event.preventDefault();
        const hasSubmenuDiv = $(event.target).parent();
        hasSubmenuDiv.children('.submenu').first().slideToggle({
          queue: false,
        });
      });

      $('.collapse-button').on('click', (event) => {
        console.log(event);

        const collapseTarget = $(event.currentTarget).attr('data-collapse');
        $(collapseTarget).slideToggle({
          queue: false,
        });
      });
    }
  },
};
