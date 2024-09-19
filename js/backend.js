
  document.addEventListener("DOMContentLoaded", function () {
    var originalTitle = document.title; // Store the original title

    function changeTitle(newTitle) {
      document.title = newTitle; // Change the title
      setTimeout(function () {
        document.title = originalTitle; // Revert back to the original title after 3 seconds
      }, 3000);
    }

    document.addEventListener("keydown", function (event) {
      // Detect print screen key (PrtScn) press
      if (event.key === "PrintScreen") {
        changeTitle("Restricted Page");
        alert("Screenshots are not allowed on this page.");

        event.preventDefault(); // Prevent default action
      }
    });

    // document.addEventListener("contextmenu", function (event) {
    //   // Detect right-click context menu
    //   event.preventDefault();
    //   changeTitle("Restricted Page"); // Prevent context menu from opening
    //   alert("Right-click context menu is disabled on this page.");
    // });
  });

//   document.addEventListener('DOMContentLoaded', function() {
//     const toggler = document.querySelector('.navbar-toggler');
//     const collapse = document.querySelector('#navbarNav');

//     toggler.addEventListener('click', function() {
//         if (collapse.classList.contains('show')) {
//             toggler.classList.add('collapsed');
//         } else {
//             toggler.classList.remove('collapsed');
//         }
//     });
// });


const navLinks = document.querySelectorAll('.navbar-toggler');
const navbar = document.querySelector('.navbar');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('open'); // Adjust class based on your setup
    });
});