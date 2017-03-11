(function() {
    "use strict";

    // setting page to wait until loaded to execute code
    $(document).ready(() => {
      // fetchLeague namespace
      const fetchLeague = function() {
          const dogs = {
              abbie: {
                  name: 'Abbie',
                  toys: ['Tennis Ball', 'Stuffed Octopus', 'Your Face'],
                  bio: 'Litter Box stay lick barky wag tail stick roll over running parrot furry. Bird pet supplies aquatic critters carrier Snowball bird seed nap polydactyl park biscuit scratcher string wet nose. House Train Mittens carrier wagging teeth heel ferret pet harness critters cockatiel vitamins harness kitty chirp leash. Slobber chirp stick vaccination biscuit vitamins leash crate. Play Dead tabby whiskers park nap lick Buddy left paw brush dog bedding vaccine parrot aquatic. Biscuit mouse warm food water dog leash smooshy parrot head. Stripes walk pet gate slobbery field furry. Carrier crate stick birds run fast mouse Mittens twine teeth walk pet. Pet drool yawn kisses wagging dragging canary heel. Licks yawn park Buddy biscuit stay bird seed.Tail Buddy meow Fido lick Tigger. Catch slobbery sit purr sit house train string bird biscuit cockatiel behavior play dead kitty bark bird seed string bird food left paw. Cockatiel feeder dinnertime running cat mouse carrier. Good Boy Rover roll over slobber lazy cat pet supplies birds Scooby snacks commands crate hamster string dog teeth Tigger litter wag tail walk kisses. Bird barky ID tag puppy feathers yawn hamster cage wagging toys kitten good boy harness.',
                  image: 'images/abbie.jpg',
                  hobbies: ['Fetch', 'Swimming', 'Sleeping through slasher movies'],
                  details: {
                      age: '4 Years',
                      breed: 'Whippet Mix',
                      weight: 23
                  }
              },
              lagertha: {
                  name: 'Lagertha',
                  toys: ['Backpack', 'Sticks'],
                  bio: 'Bird barky ID tag puppy feathers yawn hamster cage wagging toys kitten good boy harness. Spike mouse furry harness sit crate kitty chow water small animals biscuit litter box. Nap smooshy harness wagging drool throw wagging wag tail play dead roll over Scooby snacks walk play dead ball cage stay heel scratcher ferret. Birds barky water dog toys groom cockatiel birds litter pet food cage toys. Fleas Tigger licks window lazy dog treats dog tuxedo kitten feeder dragging nest paws.Cage small animals feathers litter critters gimme five meow pet supplies behavior purr. Purr parrot purr run pet gate vaccination leash carrier. Kibble run fast canary chow pet food bird warm tuxedo puppy Scooby snacks feathers nap heel bird seed parakeet. Fur turtle bark nap carrier nest chow lazy dog throw litter kitty stripes birds good boy toys stripes cat foot. Cage nest fleas lazy dog kisses maine coon cat dog house. Purr litter nap cage lazy dog wag tail Scooby snacks vitamins kibble ferret whiskers pet food gimme five crate fleas furry chow collar slobbery. Litter Box brush tongue treats birds roll over finch water dog kisses throw fish Rover biscuit swimming groom barky pet purr.Lazy Dog scratcher brush paws Rover crate catch wagging brush bird seed toys twine maine coon cat park Scooby snacks. Yawn polydactyl nest collar birds roll over vaccine chew paws bark play dead tongue head puppy pet supplies.',
                  image: 'images/lagertha.jpg',
                  hobbies: ['Raiding', 'Setting Sail', 'Generally, being awesome'],
                  details: {
                      breed: 'Norwegian Elkhound',
                      weight: 75
                  }
              },
              sterling: {
                  name: 'Sterling',
                  toys: ['Stuffed Turtle', 'Flask'],
                  bio: 'Chirp food pet aquatic heel cage drool sit litter box lick Scooby snacks paws speak lol catz sit pet meow bedding dragging head. Warm dinnertime gimme five litter box Mittens chew bird puppy play dog bark fish harness dog kibble stripes.Warm chew foot catch vaccination aquarium puppy shake pet supplies bird fluffy stick yawn. Paws heel lazy dog brush chew bedding behavior pet food bird food. Wag Tail yawn ID tag collar dog house walk Tigger right paw head food water dog. Kibble leash maine coon cat Scooby snacks finch brush fish field walk Scooby snacks meow pet food. Fur toys ball walk finch tabby ball running warm feathers nest left paw furry chirp fish Fido ID tag harness. Lazy Dog birds meow pet supplies chow play run fast cage food whiskers vaccine. Fetch aquarium cockatiel slobber small animals carrier head licks crate yawn parakeet scratch collar yawn.',
                  image: 'images/sterling.jpg',
                  hobbies: ['Voicemails', 'Social Drinking', 'Acting like a puppy still']
              },
              sigourney: {
                  name: 'Sigourney',
                  toys: ['Pulse Rifle', 'Flamethrower'],
                  bio: 'Chirp food pet aquatic heel cage drool sit litter box lick Scooby snacks paws speak lol catz sit pet meow bedding dragging head. Warm dinnertime gimme five litter box Mittens chew bird puppy play dog bark fish harness dog kibble stripes.Warm chew foot catch vaccination aquarium puppy shake pet supplies bird fluffy stick yawn. Paws heel lazy dog brush chew bedding behavior pet food bird food. Wag Tail yawn ID tag collar dog house walk Tigger right paw head food water dog. Kibble leash maine coon cat Scooby snacks finch brush fish field walk Scooby snacks meow pet food. Fur toys ball walk finch tabby ball running warm feathers nest left paw furry chirp fish Fido ID tag harness. Lazy Dog birds meow pet supplies chow play run fast cage food whiskers vaccine. Fetch aquarium cockatiel slobber small animals carrier head licks crate yawn parakeet scratch collar yawn.',
                  image: 'images/sigourney.jpg',
                  hobbies: ['Space Exploration', 'Being a Bad Ass'],
                  details: {
                      age: '6 Years',
                      breed: 'Border Collie'
                  }
              }
          };

          function bindEvents() {
            // on() Attach an event handler function for one or more events to the selected elements.
            $('nav li').on('click', function() {
              // not using fat arrow so we can refer back to the element triggering the event
              const name = $(this).attr('data-name');

              // add active class to clicked li and remove the active class from its siblings
              $(this).addClass('active').siblings().removeClass('active');
              generateTemplate(name);
              updateHash(name);
            });

            // dog-conatiner doesn't exist on page load, so we set the event on a parent element that does exist on page load
            // setting *event delegation*, stating to only execute when we click on a dog-conatiner inside of a content-container element
            $('.content-container').on('click', '.dog-container', function() {
              const name = $(this).attr('data-name');

              // selecting any li that has same data-name attr value as our clicked div name const.
              // adding the active class to that li, and removing the active class from its sibling elements
              $(`li[data-name=${name}]`).addClass('active').siblings().removeClass('active');
              generateTemplate(name);
              updateHash(name);
            });
            $('.logo').on('click', function() {
              generateTemplate('home');
              updateHash('home');
            });
          }

          function generateTemplate(page) {
            // determining which template to load based on page arguement value
            const whichTemplate = page !== 'home' ? 'dog' : page; // home

            // Handlebars Template Load Syntax
            // 1. Grab HTML from template as a string
            const source = $(`#${whichTemplate}-template`).html();
            // console.log(source);

            // 2. Convert that HTML string into a Handlebars function
            const template = Handlebars.compile(source);
            // console.log(template);

            // Setting context to be equal to a key value for the passed in page value on the dogs object or an empty object if the page argument = 'home'
            // e.g: dog[abbie], dog[sterling], etc
            // 3. Use context when passing custom details to each template
            const context = page !== 'home' ? dogs[page] : {};
            console.log(context);

            // 4. Pass context into the template function created above
            const html = template(context);
            // console.log(html);

            // Setting our html template to load in the content-container element
            // $('.content-container').html(html);

            // fading out previous html and fading in new html.
            $('.content-container').fadeOut('fast', function() {
              $(this).html(html).fadeIn();
            });
          }

          function updateHash(hash) {
            window.location.hash = hash;
          }

          function init() {
            bindEvents();
            generateTemplate('home');

            // setting template to be dog name on refresh
            if (window.location.hash.length > 0) {
              const hashName = window.location.hash.replace('#', '');
              generateTemplate(hashName);
              $(`li[data-name=${hashName}]`).addClass('active');
            } else {
              generateTemplate('home');
            }
          }

          return {
            init: init
          };
      };

      const nfl = fetchLeague();
      nfl.init();
    });
})();
