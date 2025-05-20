$(document).ready(() => {
    $('#searchBtn').click(() => {
        alert('Button clicked!');
    });
    $.ajax({
        url: 'https://api.giphy.com',
    })
});