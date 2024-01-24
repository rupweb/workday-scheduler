function updateListItemColors() {
    var currentTime = new Date();
    var currentHour = currentTime.getHours(); // Gets current hour as number (0-23)
    var liElements = document.querySelectorAll('#sortable li');
  
    liElements.forEach(function(li) {
      var liHour = parseInt(li.getAttribute('data-hour'), 10);
  
      li.classList.remove('past', 'present', 'future'); // Remove classes first
  
      if (liHour < currentHour) {
        li.classList.add('past');
      } else if (liHour === currentHour) {
        li.classList.add('present');
      } else {
        li.classList.add('future');
      }
    });
  }
  
  // Run the function when the page loads
  updateListItemColors();
  
  // Optionally, set an interval to update every 15 minutes
  setInterval(updateListItemColors, 15 * 60 * 1000);
  
  