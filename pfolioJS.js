document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
      var appleHello = document.getElementById('appleHello');
      appleHello.style.opacity = 0;
      setTimeout(function () {
        appleHello.style.display = 'none';
        var homePage = document.getElementById('homePage');
        homePage.style.opacity = 1;
      }, 1000);
    }, 2000); 
  });