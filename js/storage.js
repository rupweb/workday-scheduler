function saveFreeTextToLocalStorage() {
  let freeTextData = [];
  $('.free-text').each(function(index) {
    freeTextData.push($(this).val());
  });
  localStorage.setItem('freeTextData', JSON.stringify(freeTextData));
}

// Bind the save function to the input change event
$('.free-text').on('change', function() {
  saveFreeTextToLocalStorage();
});

function loadFreeTextFromLocalStorage() {
  let freeTextData = JSON.parse(localStorage.getItem('freeTextData'));
  if (freeTextData) {
    $('.free-text').each(function(index) {
      $(this).val(freeTextData[index]);
    });
  }
}