
  const menuIcon = document.getElementById('mnu');
  const menu1 = document.getElementById('prin');
  const menu2 = document.getElementById('disp');
  const ulMenu = document.getElementById('menuLinks');

  menuIcon.addEventListener('click', function(event) {
      event.stopPropagation();
      ulMenu.classList.toggle('show');

      if (ulMenu.classList.contains('show')) {
        menu1.style.display='none'
        menu2.style.display='block';
      }
      else{
        menu1.style.display='block'
        menu2.style.display='none';
      }
  });
  document.addEventListener('click', function(event) {
      if (!ulMenu.contains(event.target) && event.target !== menuIcon && !menuIcon.contains(event.target)) {  
          ulMenu.classList.remove('show');
          menu1.style.display = 'block';  
          menu2.style.display = 'none';
      }
  });

/*
  function show(element) {
   const card = element.closest(".fatos")
   var up =card.querySelector(".up")

   if (up.style.display ==="block") {
      up.style.display ="none"
      card.style.background = "" //restaurar
    }
   else{
     document.querySelectorAll(".up").forEach(element => {
        element.style.display ="none"
        element.closest(".fatos").style.background=""
     });
     up.style.display ="block"
     card.style.background="black"}
}
*/

   
  
  
