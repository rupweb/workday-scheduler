document.addEventListener("DOMContentLoaded", function() {
    fetch('html/header.html')
        .then(response => response.text())
        .then(data => document.getElementById('header').innerHTML = data);

    fetch('html/footer.html')
        .then(response => response.text())
        .then(data => { document.getElementById('footer').innerHTML = data
            // Add event listener after footer is loaded
            addBackButtonListener();
        });
});

function addBackButtonListener() {
    var backButton = document.getElementById('backButton');
    if (backButton) {
        backButton.addEventListener('click', function() {
            window.history.back();
        });
    }
}