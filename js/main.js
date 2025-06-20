$(document).ready(() => {
    $('#searchBtn').click(() => {
        let userInput = $('#searchInput').val();
        alert('Button clicked!');
    });
    $.ajax({
        url: 'https://api.giphy.com',
    })
});

