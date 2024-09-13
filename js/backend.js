
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