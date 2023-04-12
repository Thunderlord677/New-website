document.addEventListener("DOMContentLoaded", function(e) {
    var homeButton = document.createElement("btn");
    homeButton.setAttribute('tabindex', 0);
    homeButton.setAttribute('aria-label', 'Go to main directory');
    homeButton.setAttribute('role', 'button');
    homeButton.addEventListener('click', function(e) {
      document.body.classList.add('blockscreen');
      homeButton.addEventListener('transitionend', function(e) {
        window.requestAnimationFrame(function() {
          // Try forcing repaint
          homeButton.getBoundingClientRect();
          let utm = location.href
          if (location.hostname == "awashcard0.ga" || location.hostname == "awashcard0.pages.dev") {
            var myDivs = document.getElementsByClassName("blockscreen");
                for (var i = 0; i < myDivs.length; i++) {
                myDivs[i].style.backgroundColor = "green";
                }
            window.location = `/?utm=${utm}`;
          } else {
            var myDivs = document.getElementsByClassName("blockscreen");
                for (var i = 0; i < myDivs.length; i++) {
                myDivs[i].style.backgroundColor = "blue";
                }
            window.location = `http://awashcard0.pages.dev/?utm=${utm}`;
          }
        });
      });
    });
    homeButton.addEventListener('keydown', function(e) {
      if (e.keyCode === 13) homeButton.click();
    });
    document.body.appendChild(homeButton);
  }, {once: true});

  //set favicon
  // just removes it
// var link = document.createElement('link');
// link.id = 'dynamic-favicon';
// link.rel = 'shortcut icon';
// link.href = "http://awashcard0.pages.dev/favicon.ico";
// document.head.appendChild(link);

// might fix