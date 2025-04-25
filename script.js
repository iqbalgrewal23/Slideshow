document.addEventListener('DOMContentLoaded', function() {
    var slides = document.querySelectorAll('.slide');
    var totalSlides = slides.length;
    var current = 0;
  
    var nextBtn = document.getElementById('next');
    var prevBtn = document.getElementById('previous');
  
    function showSlide(index) {
      // Hide all slides
      slides.forEach(function(slide) {
        slide.style.display = 'none';
      });
      // Show the selected slide
      slides[index].style.display = 'block';
    }
  
    nextBtn.addEventListener('click', function() {
      if (current < totalSlides - 1) {
        current++;
        showSlide(current);
      }
    });
  
    prevBtn.addEventListener('click', function() {
      if (current > 0) {
        current--;
        showSlide(current);
      }
    });
  
    // Initialize first slide
    showSlide(current);
  });
  