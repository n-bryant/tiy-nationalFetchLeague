(function() {
  "use strict";

  // $ or jQuery substantiates a call to the jQuery library
  // doucment.querySelector('.test-section').classList.add('active');
  // $('.test-section').addClass('active');
  // $('input[type=text], p, .test-section').addClass('active');
  //
  // // doucment.querySelector('.test-section').classList.remove('active');
  // $('.test-section').removeClass('active');
  // // doucment.querySelector('.test-section').classList.toggle('active');
  // $('.test-section').toggleClass('active');

  // Specify a function to execute when the DOM is fully loaded
  $(document).ready(() => {
    // first() - Reduce the set of matched elements to the first in the set
    // eq(num) - Reduce the set of matched elements to the one at the specified index
    // $('nav li').eq(2).toggleClass('active');

    // ^ is a wildcard.  below selector is looking for any href that begins with an http
    $('a[href^="http"]').css({
      color: 'red',
      textDecoration: 'non'
    });

    // // selects list items that do not have the active class and displays or hides them
    // $('li').not('.active').toggle();
    // grabs all of the siblings of the li with an active class
    // $('li.active').siblings().toggle();

    // // parent() goes one step up the DOM tree. parents() goes up the DOM tree to the specified parent element.
    // $('.all-dogs-container').parents('main').css('background', 'red');
    // $('.all-dogs-container').children('.dog-container').css('background', 'blue');

    // // attr() gets the value of the specified attribute. first parameter: attribute name. second parameter: new value.
    // console.log($('.dog-container.abbie').attr('data-name', 'another'));

  });
})();
