document.getElementById("menu_button").addEventListener("click",function() {
    let menu_icone= document.getElementById("menuIcon")
     menu_icone.classList.contains("bi-list")
     ?(menu_icone.classList.remove("bi-list"), menu_icone.classList.add("bi-x"))
     :(menu_icone.classList.add("bi-list"),menu_icone.classList.remove("bi-x"))
})
document.addEventListener("click",function(event) {
    let nav= document.getElementById("navbarNav")
    let menu_icone= document.getElementById("menuIcon")

    if (!nav.contains(event.target) && !menu_icone.contains(event.terget)) {
        if (nav.classList.contains("show")) {
            nav.classList.remove("show")
            menu_icone.classList.remove("bi-x")
            menu_icone.classList.add("bi-list")
        }
    }
})

let radarChart = null;

function mudarGrafico() {
  const carr = document.getElementById('carouselExampleIndicators');
  const canvasDiv = document.getElementById('skillsRadars');
  const canvas = document.getElementById('skillsRadar');

  if (carr.classList.contains('oculto')) {
    carr.classList.remove('oculto');
    canvasDiv.classList.add('oculto');
  } else {
    carr.classList.add('oculto');
    canvasDiv.classList.remove('oculto');

    if (!radarChart) {
      const ctx = canvas.getContext('2d');

      const data = {
        labels: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'PHP', 'MySQL', 'React', 'Node.js', 'Ajax', 'Json'],
        datasets: [{
          data: [85, 82, 65, 80, 75, 76, 35, 40, 70, 82],
          fill: false,
          borderColor: 'rgb(151, 9, 9)',
          pointBackgroundColor: 'rgb(142, 27, 21)',
          pointBorderColor:'rgb(127, 10, 10)',
          pointRadius: 5,
          tension: 0.4
        }]
      };
      const config = {
        type: 'radar',
        data: data,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          animations: {
            tension: {
              duration: 1000,
              easing: 'linear',
              from: 1,
              to: 0,
              loop: true
            }
          },
          scales: {
            r:{
            pointLabels: {
                color: '#000000',
                font: {
                size: 14       
                }
            },
            ticks: {
                color: '#000000', 
                font: {
                size: 13        
                },
                backdropColor: 'transparent'
            },
            grid: {
                color: 'rgba(0, 0, 0, 0.32)', 
                lineWidth: 1
                }
            }
            
          }
        }
      };

      radarChart = new Chart(ctx, config);
    } else {
      radarChart.resize();
    }
  }
}
