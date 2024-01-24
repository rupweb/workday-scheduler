function updateListItemStyles() {
  const currentHour = new Date().getHours();
  const timeLabels = document.querySelectorAll('.time-label-column li');

  timeLabels.forEach((label, index) => {
    const labelHour = getHourFromLabel(label.textContent.trim());
    const correspondingInputs = document.querySelectorAll(`#sortable li:nth-child(${index + 1}) .free-text`);

    correspondingInputs.forEach(input => {
      input.classList.remove('past', 'present', 'future');
      if (labelHour < currentHour) {
        input.classList.add('past');
      } else if (labelHour === currentHour) {
        input.classList.add('present');
      } else {
        input.classList.add('future');
      }
    });
  });
}

function getHourFromLabel(label) {
  
  // Converts label like "6am" or "1pm" to 24-hour format hour
  switch(label) {
    case "6am": return 6;
    case "7am": return 7;
    case "8am": return 8;
    case "9am": return 9;
    case "10am": return 10;
    case "11am": return 11;
    case "noon": return 12;
    case "1pm": return 13;
    case "2pm": return 14;
    case "3pm": return 15;
    case "4pm": return 16;
    case "5pm": return 17;
    case "6pm": return 18;
    case "7pm": return 19;
    case "8pm": return 20;
    case "9pm": return 21;
  }
}

// Run the function when the page loads
updateListItemStyles();

// Optionally, set an interval to update colors dynamically (e.g., every 15 minutes)
setInterval(updateListItemStyles, 15 * 60 * 1000);

  
  