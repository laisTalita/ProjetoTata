
  const menuIcon = document.getElementById('mnu');
  const ulMenu = document.getElementById('menuLinks');
  
  menuIcon.addEventListener('click', function(event) {
      event.stopPropagation();
      ulMenu.classList.toggle('show');
  });

  document.addEventListener('click', function(event) {
      if (!ulMenu.contains(event.target) && event.target !== menuIcon && !menuIcon.contains(event.target)) {
          ulMenu.classList.remove('show');
      }
  });
